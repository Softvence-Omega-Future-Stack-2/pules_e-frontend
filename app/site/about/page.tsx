import AboutHero from "@/app/components/about/AboutHero";
import AboutTestimonials from "@/app/components/about/AboutTestimonials";
import CoreValues from "@/app/components/about/CoreValue";
import JoinRebellion from "@/app/components/about/JoinRebellion";
import OurStory from "@/app/components/about/OutStory";

export default function AboutPage() {
  return (
    <div>
      <AboutHero/>
      <OurStory/>
      <CoreValues/>
      <AboutTestimonials/>
      <JoinRebellion/>
    </div>
  );
}
