import AboutHero from "../components/about/AboutHero";
import AboutTestimonials from "../components/about/AboutTestimonials";
import CoreValues from "../components/about/CoreValue";
import JoinRebellion from "../components/about/JoinRebellion";
import OurStory from "../components/about/OutStory";

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
