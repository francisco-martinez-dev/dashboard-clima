const weatherIcons = {
  0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
  45: '🌫️', 48: '🌫️',
  51: '🌦️', 53: '🌦️', 55: '🌧️',
  61: '🌧️', 63: '🌧️', 65: '🌧️',
  80: '🌦️', 81: '🌧️', 82: '⛈️',
  95: '⛈️',
}

function getWeatherIcon(code) {
  return weatherIcons[code] || '🌡️'
}

function WeatherTable({ cities, onSelectCity }) {
  return (
    <div className="overflow-x-auto bg-white dark:bg-slate-800 rounded-lg shadow">
      <table className="w-full text-left">
        <thead className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm">
          <tr>
            <th className="px-4 py-3">Ciudad</th>
            <th className="px-4 py-3">Clima</th>
            <th className="px-4 py-3">Temp. actual</th>
            <th className="px-4 py-3">Humedad</th>
            <th className="px-4 py-3">Viento</th>
            <th className="px-4 py-3">Máx / Mín hoy</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
          {cities.map((city) => (
            <tr
              key={city.name}
              onClick={() => onSelectCity(city)}
              className="cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
            >
              <td className="px-4 py-3 font-medium text-slate-800 dark:text-white">
                {city.name}
              </td>
              <td className="px-4 py-3 text-2xl">
                {getWeatherIcon(city.current.weather_code)}
              </td>
              <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                {city.current.temperature_2m}°C
              </td>
              <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                {city.current.relative_humidity_2m}%
              </td>
              <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                {city.current.wind_speed_10m} km/h
              </td>
              <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                {city.daily.temperature_2m_max[0]}° / {city.daily.temperature_2m_min[0]}°
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WeatherTable