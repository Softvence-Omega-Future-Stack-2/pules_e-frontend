import Image from "next/image";
import HeroSection from "../../components/home/Hero";
import ReducesSection from "../../components/home/ReduceSection";
import PatternsSection from "../../components/home/PatternSection";
import HealthHero from "../../components/home/HealthSection";
import AICoachSection from "../../components/home/AIHealthCoach";
import HowItWorksSection from "../../components/home/HowItWorksSection";
import EmpoweringFeatures from "../../components/home/HealthDataFeature";
import YourHealthData from "../../components/home/YourHealthData";
import ScienceSection from "../../components/home/ScienceSection";
import JoinMovement from "../../components/home/JointMoveMent";
import StopLetting from "../../components/home/StopLetting";





export default function HomePage() {
  return (



  <div className="bg-[#F8F1E9]">
    
        
        <HeroSection/>
        <ReducesSection/>
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