import axios from 'axios'

const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast'

// Busca coordenadas a partir del nombre de una ciudad
export async function searchCity(cityName) {
  const response = await axios.get(GEO_URL, {
    params: {
      name: cityName,
      count: 5,
      language: 'es',
      format: 'json',
    },
  })
  return response.data.results || []
}

// Trae el clima actual + pronóstico de 7 días para una ciudad
export async function getWeatherByCoords(latitude, longitude) {
  const response = await axios.get(WEATHER_URL, {
    params: {
      latitude,
      longitude,
      current: 'temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m',
      daily: 'temperature_2m_max,temperature_2m_min,weather_code',
      timezone: 'auto',
    },
  })
  return response.data
}

// Lista fija de ciudades predeterminadas para mostrar en la tabla
export const DEFAULT_CITIES = [
  { name: 'San Salvador', latitude: 13.6929, longitude: -89.2182 },
  { name: 'Ciudad de México', latitude: 19.4326, longitude: -99.1332 },
  { name: 'Madrid', latitude: 40.4168, longitude: -3.7038 },
  { name: 'Buenos Aires', latitude: -34.6037, longitude: -58.3816 },
  { name: 'Bogotá', latitude: 4.7110, longitude: -74.0721 },
]