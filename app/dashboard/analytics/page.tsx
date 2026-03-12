import AnalyticsCard from "@/app/components/dashboard/analytics/AnalyticsCard";
import FeatureUsage from "@/app/components/dashboard/analytics/FeatureUsage";
import UserActivityTimeline from "@/app/components/dashboard/analytics/UserActivityTimeline";
import UserDemographics from "@/app/components/dashboard/analytics/UserDemographic";

export default function AnalyticsPage() {
  return (
    <div className="mt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-primaryColor leading-6 font-lora mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-[#6B7280] text-sm font-normal leading-5 nt-1  font-lora">
              Comprehensive platform insights and metrics
            </p>
          </div>

          <div className="flex gap-3">
            <button className="px-6 py-2 bg-[#FAF3EA] border border-[#001F3F1A] rounded-xl text-[#1A2B3C] font-medium hover:bg-[#EBE3D5] cursor-pointer transition-colors font-lora">
              Last 7 Days
            </button>
            <button className="px-6 py-2 bg-[#FAF3EA] border border-[#001F3F1A] rounded-xl text-[#1A2B3C] font-medium hover:bg-[#EBE3D5] cursor-pointer transition-colors  font-lora">
              Last 30 Days
            </button>
          </div>
        </div>
        <AnalyticsCard/>
        <UserActivityTimeline/>
        <div className="flex flex-col md:flex-row w-full gap-6 mt-6 items-stretch">
          <UserDemographics/>
          <FeatureUsage/>
        </div>
        </div>

  )

}