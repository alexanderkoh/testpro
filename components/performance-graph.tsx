"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const generateDummyData = () => {
  const data = []
  const startDate = new Date('2024-01-01')
  let value = 10000

  for (let i = 0; i < 30; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    
    value = value * (1 + (Math.random() * 0.02 - 0.01))
    
    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: Math.round(value),
    })
  }

  return data
}

export default function PerformanceGraph() {
  const data = generateDummyData()
  
  return (
    <div className="w-full h-[300px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis 
            dataKey="date" 
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: '#888' }}
            dy={10}
          />
          <YAxis 
            tickFormatter={(value) => `$${(value / 1000).toFixed(1)}k`}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12, fill: '#888' }}
            dx={-10}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: 'none',
              borderRadius: '8px',
              padding: '12px'
            }}
            labelStyle={{ color: '#fff' }}
            itemStyle={{ color: '#fff' }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FFB800"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: '#FFB800' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

