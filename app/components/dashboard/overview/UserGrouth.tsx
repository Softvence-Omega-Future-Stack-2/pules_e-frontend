"use client";


import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const data = [
  { name: 'Jan', value: 400, growth: '+8%' },
  { name: 'Feb', value: 300, growth: '+12%' },
  { name: 'Mar', value: 500, growth: '+10%' },
  { name: 'Apr', value: 450, growth: '+14%' },
  { name: 'May', value: 380, growth: '+13%' },
  { name: 'Jun', value: 550, growth: '+15%' },
  { name: 'Jul', value: 420, growth: '+11%' },
];

const UserGrowthChart = () => {
  return (
    <div className="w-full bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50">
      {/* Header Section */}
      <div className="mb-8">
        <h3 className="text-[#001F3F] text-lg md:text-xl  font-bold leading-7 tracking-tight">
          User Growth
        </h3>
        <p className="text-[#6B7280] text-sm font-normal leading-5 mt-1">
          Monthly active users trend
        </p>
      </div>

      {/* Chart Container */}
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f3eade" stopOpacity={1}/>
                <stop offset="95%" stopColor="#f3eade" stopOpacity={0.2}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              vertical={false} 
              stroke="#f0f0f0" 
              strokeDasharray="0" 
            />
            
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6b7280', fontSize: 12, fontWeight: 500 }}
              dy={15}
            />
            
            <YAxis hide />
            
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
            />

            <Bar 
              dataKey="value" 
              fill="url(#barGradient)" 
              radius={[10, 10, 0, 0]} 
              barSize={45} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Custom Legend/Growth Indicators */}
      <div className="grid grid-cols-7 mt-6 pt-6 border-t border-gray-50">
        {data.map((item, index) => (
          <div key={index} className="text-center">
            <p className="text-[#10b981] text-xs font-bold tracking-tight">
              {item.growth}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserGrowthChart;