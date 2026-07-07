import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import WeatherTable from './components/WeatherTable'
import CityDetail from './components/CityDetail'
import SearchBar from './components/SearchBar'
import LoadingSkeleton from './components/LoadingSkeleton'
import { useWeatherData } from './hooks/useWeatherData'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [selectedCity, setSelectedCity] = useState(null)
  const [filterText, setFilterText] = useState('')
  const { cities, loading, error, addCity } = useWeatherData()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(filterText.toLowerCase())
  )

  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-900">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar
          onMenuClick={() => setSidebarOpen(true)}
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
        />

        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
            Clima en el mundo
          </h1>

          <SearchBar onFilterChange={setFilterText} onAddCity={addCity} />

          {loading && <LoadingSkeleton />}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && (
            <WeatherTable cities={filteredCities} onSelectCity={setSelectedCity} />
          )}
        </main>
      </div>

      <CityDetail city={selectedCity} onClose={() => setSelectedCity(null)} />
    </div>
  )
}

export default App