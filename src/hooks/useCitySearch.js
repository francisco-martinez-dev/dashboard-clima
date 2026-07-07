import { useState, useEffect } from 'react'
import { searchCity } from '../services/weatherApi'

export function useCitySearch(query) {
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query || query.trim().length < 2) {
      setSuggestions([])
      return
    }

    setLoading(true)
    const timer = setTimeout(async () => {
      try {
        const results = await searchCity(query)
        setSuggestions(results)
      } catch (err) {
        console.error(err)
        setSuggestions([])
      } finally {
        setLoading(false)
      }
    }, 400) // debounce: espera 400ms tras dejar de escribir

    return () => clearTimeout(timer)
  }, [query])

  return { suggestions, loading }
}