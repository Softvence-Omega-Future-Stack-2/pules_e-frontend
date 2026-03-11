import React from 'react';
import { Users, Activity, MessageSquare, Flag } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon }) => (
  <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-white/50 flex flex-col items-start min-h-[220px]">
    {/* Icon Badge - Golden Rounded Square */}
    <div className="bg-[#c5a059] text-white p-4 rounded-2xl shadow-lg shadow-[#c5a059]/20 mb-8">
      {icon}
    </div>
    
    {/* Value and Label */}
    <div className="space-y-1">
      <h3 className="text-[#0a192f] text-4xl font-serif font-bold tracking-tight">
        {value}
      </h3>
      <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
        {label}
      </p>
    </div>
  </div>
);

const StatsOverview: React.FC = () => {
  const stats = [
    { label: "Total Users", value: "2,847", icon: <Users size={24} /> },
    { label: "Active Users", value: "1,923", icon: <Activity size={24} /> },
    { label: "Support Groups", value: "156", icon: <MessageSquare size={24} /> },
    { label: "Flagged Content", value: "12", icon: <Flag size={24} /> },
  ];

  return (
    <section className="w-full  py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsOverview;