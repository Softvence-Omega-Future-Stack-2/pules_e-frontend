import CommunityHero from "../components/community/CommunityHero";
import RecentWins from "../components/community/RecentWins";
import WhyJoinArena from "../components/community/WhyJoinArena";
import GetEarlyAccessReusable from "../components/shared/GetEarlyAccessReusable";




export default function Features() {
  return (
  <div className="bg-[#F8F1E9]">
    <CommunityHero/>
    <WhyJoinArena/>
    <RecentWins/>
          <GetEarlyAccessReusable
title="Join Full Arena in the App"
description="Real-time conversations, private circles, and a community that truly gets it. Your Fight Sisters are waiting."
buttonText="Get Early Access"
/>
    </div>
  );
}

