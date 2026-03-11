
import { Activity } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

// --- Types & Dummy Data ---
interface ChartData {
  day: string;
  value: number;
}

const data: ChartData[] = [
  { day: 'Mon', value: 45 },
  { day: 'Tue', value: 52 },
  { day: 'Wed', value: 38 },
  { day: 'Thu', value: 65 },
  { day: 'Fri', value: 48 },
  { day: 'Sat', value: 72 },
  { day: 'Sun', value: 55 },
];

const ActivityChart = () => {
  return (
    <div className="w-full  bg-[#F8F1E9CC] rounded-2xl p-4 md:p-8 border border-[#C9A96E4D]">
      {/* Outer Container - Bento Style */}
      <div className="">
        
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-12">
          <Activity className="text-[#B89463] w-6 h-6 stroke-[2.5]" />
          <h2 className="text-lg font-bold leading-7 text-primaryColor font-lora">
            Activity Overview (Last 7 Days)
          </h2>
        </div>

        {/* Chart Section */}
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 10 }}>
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#8C8C8C', fontSize: 14, fontFamily: 'serif' }}
                dy={20}
              />
              <Bar 
                dataKey="value" 
                radius={[12, 12, 4, 4]} // Top rounded corners match your image
                barSize={window?.innerWidth < 768 ? 40 : 80} // Adjust bar width for mobile
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill="#E6D7C3" // Exact beige tone from the screenshot
                    className="hover:fill-[#DCCAB0] transition-colors duration-300"
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

export default ActivityChart;