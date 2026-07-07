import { useState } from 'react'
import { FiSearch, FiPlus } from 'react-icons/fi'
import { useCitySearch } from '../hooks/useCitySearch'

function SearchBar({ onFilterChange, onAddCity }) {
  const [query, setQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const { suggestions, loading } = useCitySearch(query)

  function handleChange(e) {
    const value = e.target.value
    setQuery(value)
    onFilterChange(value)
    setShowSuggestions(true)
  }

  function handleSelectSuggestion(result) {
    onAddCity({
      name: result.name + (result.admin1 ? `, ${result.admin1}` : ''),
      latitude: result.latitude,
      longitude: result.longitude,
    })
    setQuery('')
    onFilterChange('')
    setShowSuggestions(false)
  }

  return (
    <div className="relative w-full max-w-md mb-6">
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Buscar o agregar ciudad..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {showSuggestions && query.length >= 2 && (
        <div className="absolute mt-1 w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          {loading && (
            <p className="px-4 py-3 text-sm text-slate-400">Buscando...</p>
          )}
          {!loading && suggestions.length === 0 && (
            <p className="px-4 py-3 text-sm text-slate-400">Sin resultados</p>
          )}
          {!loading &&
            suggestions.map((result) => (
              <button
                key={`${result.latitude}-${result.longitude}`}
                onClick={() => handleSelectSuggestion(result)}
                className="w-full text-left px-4 py-2 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 text-sm text-slate-700 dark:text-slate-200"
              >
                <span>
                  {result.name}
                  {result.admin1 ? `, ${result.admin1}` : ''} — {result.country}
                </span>
                <FiPlus className="text-blue-500" />
              </button>
            ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar