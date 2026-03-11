"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

// --- Types & Data ---
interface TimelineData {
  month: string;
  growth: string;
  value: number;
}

const data: TimelineData[] = [
  { month: 'Jan', growth: '+8%', value: 75 }, { month: '', growth: '', value: 50 }, { month: '', growth: '', value: 65 }, { month: '', growth: '', value: 80 }, { month: '', growth: '', value: 55 },
  { month: 'Feb', growth: '+12%', value: 60 }, { month: '', growth: '', value: 40 }, { month: '', growth: '', value: 30 }, { month: '', growth: '', value: 55 }, { month: '', growth: '', value: 70 },
  { month: 'Mar', growth: '+10%', value: 95 }, { month: '', growth: '', value: 75 }, { month: '', growth: '', value: 85 }, { month: '', growth: '', value: 90 }, { month: '', growth: '', value: 80 },
  { month: 'Apr', growth: '+14%', value: 65 }, { month: '', growth: '', value: 70 }, { month: '', growth: '', value: 85 }, { month: '', growth: '', value: 75 }, { month: '', growth: '', value: 78 },
  { month: 'May', growth: '+13%', value: 60 }, { month: '', growth: '', value: 50 }, { month: '', growth: '', value: 45 }, { month: '', growth: '', value: 92 }, { month: '', growth: '', value: 60 },
  { month: 'Jun', growth: '+15%', value: 82 }, { month: '', growth: '', value: 55 }, { month: '', growth: '', value: 50 }, { month: '', growth: '', value: 45 }, { month: '', growth: '', value: 75 },
  { month: 'Jul', growth: '+11%', value: 60 }, { month: '', growth: '', value: 55 }, { month: '', growth: '', value: 50 }, { month: '', growth: '', value: 48 }, { month: '', growth: '', value: 40 },
];

const UserActivityTimeline = () => {
  return (
    <div className="w-full mt-6 ">
      <div className=" bg-[#FFFFFFB2]  rounded-2xl p-4 md:p-8  border border-[#FFFFFF80]">
        
        {/* Header Area */}
        <div className="mb-10">
          <h2 className="text-lg md:text-xl font-bold text-primaryColor leading-7 font-lora">User Activity Timeline</h2>
          <p className="text-[#6B7280] font-lora  text-sm font-normal leading-4 mt-1">Daily active users over the last 90 days</p>
        </div>

        {/* Chart Area */}
        <div className="h-[400px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 40 }}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F5EFE6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#E6D7C3" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              
              <CartesianGrid vertical={false} stroke="#F0EAE2" strokeDasharray="0" />
              
             <XAxis 
  dataKey="month" 
  axisLine={false} 
  tickLine={false}
  tick={({ x, y, payload, index }) => {
    const item = data[index];
    if (!item.month) return null;

    // y ke number-e convert kore nichi jate math error na dey
    const yPos = Number(y); 

    return (
      <g transform={`translate(${x},${yPos + 20})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill="#718096" fontSize={12} fontWeight="500">
          {item.month}
        </text>
        <text x={0} y={20} dy={16} textAnchor="middle" fill="#10B981" fontSize={12} fontWeight="700">
          {item.growth}
        </text>
      </g>
    );
  }}
/>
              
              <YAxis hide domain={[0, 100]} />

              <Bar 
                dataKey="value" 
                fill="url(#barGradient)" 
                radius={[10, 10, 0, 0]}
                barSize={18}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    className="hover:opacity-80 transition-opacity cursor-pointer"
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UserActivityTimeline;