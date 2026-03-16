
type StatItem = {
  label: string;
  value: number;
};

const stats: StatItem[] = [
  { label: 'Total Companions', value: 3 },
  { label: 'Categories', value: 3 },
  { label: 'Published', value: 3 },
  { label: 'Draft', value: 0 },
];
const ContentCard = () => {
  return (
    <div className=" mb-5 ">
      {/* Responsive Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-[#fdfcfb] p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col justify-between min-h-[140px] transition-transform hover:scale-[1.02]"
          >
            <span className="text-gray-500 text-sm font-semibold leading-4">
              {stat.label}
            </span>
            <span className="text-xl font-bold leading-7 text-[#0f1c35]">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCard;