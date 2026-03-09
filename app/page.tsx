import Image from "next/image";
import Navbar from "./components/shared/Navbar";
import HeroSection from "./components/landing/Hero";
import EmpoweringFeatures from "./components/landing/EmPoweringFeatures";
import BeyondTheScale from "./components/landing/Beyond";
import WhyFight from "./components/landing/WhyFlight";
import DailyStrength from "./components/landing/DailyStrength";
import Footer from "./components/shared/Footer";
import Testimonials from "./components/landing/Testimonials";
import FlightStarts from "./components/landing/FlightStarts";

export default function Home() {
  return (
  <div className="bg-[#F8F1E9]">
        <Navbar/>
        <HeroSection/>
        <div className="px-4 md:px-13 lg:px-18">
            <EmpoweringFeatures/>
        <BeyondTheScale/>
        <WhyFight/>
        </div>
        <DailyStrength/>
        <Testimonials/>
        <FlightStarts/>
        <Footer/>
    </div>
  );
}
