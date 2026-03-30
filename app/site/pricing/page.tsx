import FAQSection from "@/app/components/pricing/FAQ";
import PricingHero from "@/app/components/pricing/PricingHero";
import PricingPlans from "@/app/components/pricing/PricingPlan";
import GetEarlyAccessReusable from "@/app/components/shared/GetEarlyAccessReusable";




export default function PricingPage() {
  return (
    <div className="">
    <PricingHero/>
   <PricingPlans/>
   <FAQSection/>
       <GetEarlyAccessReusable
title="Ready to Start Your Fight?"
description="Join thousands of women who've ditched the scale and found real wellness. Your journey starts today."
buttonText="Get Started"
/>
    </div>
  );
}
