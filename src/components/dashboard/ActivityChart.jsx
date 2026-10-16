import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Line,
  ComposedChart,
} from 'recharts';

const COLORS = ['#4c78ff', '#8b5cf6', '#f59e0b', '#ef4444'];

function ActivityChart({ data }) {
  const chartData = [
    { name: 'Senin', laporan: data.filter(l => new Date(l.tanggal).getDay() === 1).length },
    { name: 'Selasa', laporan: data.filter(l => new Date(l.tanggal).getDay() === 2).length },
    { name: 'Rabu', laporan: data.filter(l => new Date(l.tanggal).getDay() === 3).length },
    { name: 'Kamis', laporan: data.filter(l => new Date(l.tanggal).getDay() === 4).length },
    { name: 'Jumat', laporan: data.filter(l => new Date(l.tanggal).getDay() === 5).length },
  ];

  return (
    <ResponsiveContainer width="100%" height={280}>
      <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        <defs>
          <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4c78ff" stopOpacity={0.8}/>
            <stop offset="1" stopColor="#8b5cf6" stopOpacity={0.3}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" opacity={0.05} vertical={false} />
        <XAxis dataKey="name" stroke="#7a7b99" fontSize={12} />
        <YAxis stroke="#7a7b99" fontSize={12} />
        <Tooltip
          contentStyle={{
            background: '#111228',
            border: '1px solid rgba(76, 120, 255, 0.2)',
            borderRadius: '12px',
            color: '#e8e9f3',
            boxShadow: '0 20px 60px -15px rgba(76, 120, 255, 0.2)',
          }}
          cursor={{ fill: 'rgba(76, 120, 255, 0.05)' }}
        />
        <Bar dataKey="laporan" radius={[8, 8, 0, 0]}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill="url(#colorBar)" />
          ))}
        </Bar>
        <Line 
          type="monotone" 
          dataKey="laporan" 
          stroke="#8b5cf6" 
          strokeWidth={2}
          dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

export default ActivityChart;