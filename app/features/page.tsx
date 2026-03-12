import FeaturesHero from "../components/features/FeatursHero";
import HowItWorks from "../components/features/HowItWorks";
import PowerfullFeatures from "../components/features/PowerfulFeatures";
import WhatMakesUsDifferent from "../components/features/WhatDefrent";


export default function Features() {
  return (
  <div className="bg-[#F8F1E9]">
    <FeaturesHero/>
    <HowItWorks/>
    <PowerfullFeatures/>
    <WhatMakesUsDifferent/>
    </div>
  );
}

