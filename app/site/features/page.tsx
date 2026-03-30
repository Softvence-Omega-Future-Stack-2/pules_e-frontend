import FeaturesHero from "@/app/components/features/FeatursHero";
import HowItWorks from "@/app/components/features/HowItWorks";
import PowerfullFeatures from "@/app/components/features/PowerfulFeatures";
import WhatMakesUsDifferent from "@/app/components/features/WhatDefrent";
import GetEarlyAccessReusable from "@/app/components/shared/GetEarlyAccessReusable";



export default function Features() {
  return (
  <div className="bg-[#F8F1E9]">
    <FeaturesHero/>
    <HowItWorks/>
    <PowerfullFeatures/>
    <WhatMakesUsDifferent/>
    <GetEarlyAccessReusable
title="Ready to Start?"
description="Join the waitlist and be among the first to experience a new way of tracking your health."
buttonText="Get Early Access"
/>

    </div>
  );
}

