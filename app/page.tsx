import Image from "next/image";

import HeroSection from "./components/landing/Hero";
import EmpoweringFeatures from "./components/landing/EmPoweringFeatures";
// import BeyondTheScale from "./components/landing/Beyond";

// import DailyStrength from "./components/landing/DailyStrength";

// import Testimonials from "./components/landing/Testimonials";
// import FlightStarts from "./components/landing/FlightStarts";
import ReduceSection from "./components/landing/ReduceSection";
import PatternsSection from "./components/landing/PatternSection";
import HealthHero from "./components/landing/HealthSection";
import AICoachSection from "./components/landing/AIHealthCoach";
import HowItWorksSection from "./components/landing/HowItWorksSection";
import YourHealthData from "./components/landing/YourHealthData";
import ScienceSection from "./components/landing/ScienceSection";
import JoinMovement from "./components/landing/JointMoveMent";
import StopLetting from "./components/landing/StopLetting";

export default function Home() {
  return (
  <div className="bg-[#F8F1E9]">
    
        
        <HeroSection/>
        <ReduceSection/>
        <PatternsSection/>
        <HealthHero/>
        <AICoachSection/>
        <HowItWorksSection/>
        <EmpoweringFeatures/>
        <YourHealthData/>
        <ScienceSection/>
        <JoinMovement/>
        <StopLetting/>
        <div className="px-4 md:px-13 lg:px-18">
          
            
        {/* <BeyondTheScale/> */}
   
        </div>
        {/* <DailyStrength/>
        <Testimonials/>
        <FlightStarts/> */}
      
        
    
    </div>
  );
}
