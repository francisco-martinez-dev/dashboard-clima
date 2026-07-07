import { FiMenu, FiSun, FiMoon } from 'react-icons/fi'

function Navbar({ onMenuClick, darkMode, onToggleDarkMode }) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
      <button
        onClick={onMenuClick}
        className="md:hidden text-slate-700 dark:text-white"
      >
        <FiMenu size={22} />
      </button>

      <h2 className="text-lg font-semibold text-slate-800 dark:text-white hidden md:block">
        Panel de Clima
      </h2>

      <button
        onClick={onToggleDarkMode}
        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
      >
        {darkMode ? (
          <FiSun className="text-yellow-400" size={20} />
        ) : (
          <FiMoon className="text-slate-700" size={20} />
        )}
      </button>
    </header>
  )
}

export default Navbar