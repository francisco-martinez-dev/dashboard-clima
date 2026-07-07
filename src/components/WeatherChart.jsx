import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from 'recharts'

function formatChartData(daily) {
  return daily.time.map((date, i) => ({
    date: date.slice(5), // "MM-DD"
    max: daily.temperature_2m_max[i],
    min: daily.temperature_2m_min[i],
  }))
}

function WeatherChart({ daily }) {
  const data = formatChartData(daily)

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-slate-200 dark:stroke-slate-700" />
        <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} />
        <YAxis stroke="#94a3b8" fontSize={12} unit="°" />
        <Tooltip
          contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: 8 }}
          labelStyle={{ color: '#fff' }}
        />
        <Legend />
        <Line type="monotone" dataKey="max" stroke="#f97316" strokeWidth={2} name="Máxima" />
        <Line type="monotone" dataKey="min" stroke="#3b82f6" strokeWidth={2} name="Mínima" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default WeatherChart