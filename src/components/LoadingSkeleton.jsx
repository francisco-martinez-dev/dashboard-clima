function LoadingSkeleton() {
  return (
    <div className="overflow-x-auto bg-white dark:bg-slate-800 rounded-lg shadow animate-pulse">
      <table className="w-full text-left">
        <thead className="bg-slate-100 dark:bg-slate-700">
          <tr>
            {['Ciudad', 'Clima', 'Temp. actual', 'Humedad', 'Viento', 'Máx / Mín hoy'].map((header) => (
              <th key={header} className="px-4 py-3">
                <div className="h-3 w-16 bg-slate-300 dark:bg-slate-600 rounded" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td className="px-4 py-4">
                <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded" />
              </td>
              <td className="px-4 py-4">
                <div className="h-6 w-6 bg-slate-200 dark:bg-slate-700 rounded-full" />
              </td>
              <td className="px-4 py-4">
                <div className="h-4 w-12 bg-slate-200 dark:bg-slate-700 rounded" />
              </td>
              <td className="px-4 py-4">
                <div className="h-4 w-10 bg-slate-200 dark:bg-slate-700 rounded" />
              </td>
              <td className="px-4 py-4">
                <div className="h-4 w-14 bg-slate-200 dark:bg-slate-700 rounded" />
              </td>
              <td className="px-4 py-4">
                <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LoadingSkeleton