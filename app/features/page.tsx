import FeaturesHero from "../components/features/FeatursHero";
import HowItWorks from "../components/features/HowItWorks";
import PowerfullFeatures from "../components/features/PowerfulFeatures";
import WhatMakesUsDifferent from "../components/features/WhatDefrent";
import GetEarlyAccessReusable from "../components/shared/GetEarlyAccessReusable";


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

