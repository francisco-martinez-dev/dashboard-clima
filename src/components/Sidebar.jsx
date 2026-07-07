import { FiHome, FiCloud, FiBarChart2, FiSettings, FiX } from 'react-icons/fi'

function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { icon: <FiHome />, label: 'Inicio' },
    { icon: <FiCloud />, label: 'Clima' },
    { icon: <FiBarChart2 />, label: 'Estadísticas' },
    { icon: <FiSettings />, label: 'Ajustes' },
  ]

  return (
    <>
      {/* Overlay para móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-slate-900 text-white z-30
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h1 className="text-xl font-bold">Dashboard Clima</h1>
          <button onClick={onClose} className="md:hidden text-white">
            <FiX size={22} />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                
                  < a href="#"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar