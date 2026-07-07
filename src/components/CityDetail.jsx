import { FiX } from 'react-icons/fi'
import WeatherChart from './WeatherChart'

function CityDetail({ city, onClose }) {
  if (!city) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 dark:hover:text-white"
        >
          <FiX size={22} />
        </button>

        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
          {city.name}
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-4">
          Pronóstico de temperatura — 7 días
        </p>

        <WeatherChart daily={city.daily} />

        <div className="grid grid-cols-3 gap-4 mt-4 text-center">
          <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
            <p className="text-xs text-slate-500 dark:text-slate-400">Temp. actual</p>
            <p className="text-lg font-semibold text-slate-800 dark:text-white">
              {city.current.temperature_2m}°C
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
            <p className="text-xs text-slate-500 dark:text-slate-400">Humedad</p>
            <p className="text-lg font-semibold text-slate-800 dark:text-white">
              {city.current.relative_humidity_2m}%
            </p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-3">
            <p className="text-xs text-slate-500 dark:text-slate-400">Viento</p>
            <p className="text-lg font-semibold text-slate-800 dark:text-white">
              {city.current.wind_speed_10m} km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityDetail