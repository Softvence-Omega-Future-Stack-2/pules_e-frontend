

import FightHero from "../components/fightTool/FightHero";
import FightPlanPage from "../components/fightTool/FightPlanPage";
import GetEarlyAccessReusable from "../components/shared/GetEarlyAccessReusable";


export default function FightTool() {
  return (
  <div className="bg-[#F8F1E9]">
   <FightHero/>
   <FightPlanPage/>
    <GetEarlyAccessReusable
title="Ready to Start?"
description="Join the waitlist and be among the first to experience a new way of tracking your health."
buttonText="Get Early Access"
/>

    </div>
  );
}
