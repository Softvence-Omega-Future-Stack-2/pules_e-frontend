import CommunityHero from "../components/community/CommunityHero";
import RecentWins from "../components/community/RecentWins";
import WhyJoinArena from "../components/community/WhyJoinArena";




export default function Features() {
  return (
  <div className="bg-[#F8F1E9]">
    <CommunityHero/>
    <WhyJoinArena/>
    <RecentWins/>

    </div>
  );
}

