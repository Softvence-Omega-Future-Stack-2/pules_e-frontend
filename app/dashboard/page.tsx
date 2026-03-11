import StatsOverview from "../components/dashboard/overview/StatsOverview";
import UserGrowthChart from "../components/dashboard/overview/UserGrouth";

export default function DashboardHome() {
  return (
    <div>
     <StatsOverview/>
     <UserGrowthChart/>
    </div>
  );
}