import { useState, useEffect, useCallback } from 'react'
import { getWeatherByCoords, DEFAULT_CITIES } from '../services/weatherApi'

export function useWeatherData() {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadWeatherData() {
      try {
        setLoading(true)
        setError(null)

        const results = await Promise.all(
          DEFAULT_CITIES.map(async (city) => {
            const data = await getWeatherByCoords(city.latitude, city.longitude)
            return { ...city, current: data.current, daily: data.daily }
          })
        )

        setCities(results)
      } catch (err) {
        setError('No se pudo cargar la información del clima. Intenta de nuevo.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadWeatherData()
  }, [])

  const addCity = useCallback(async (cityInfo) => {
    // Evitar duplicados
    const alreadyExists = cities.some((c) => c.name === cityInfo.name)
    if (alreadyExists) return

    try {
      const data = await getWeatherByCoords(cityInfo.latitude, cityInfo.longitude)
      setCities((prev) => [
        ...prev,
        {
          name: cityInfo.name,
          latitude: cityInfo.latitude,
          longitude: cityInfo.longitude,
          current: data.current,
          daily: data.daily,
        },
      ])
    } catch (err) {
      console.error('Error al agregar ciudad:', err)
    }
  }, [cities])

  return { cities, loading, error, addCity }
}