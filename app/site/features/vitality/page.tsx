import GetEarlyAccessReusable from "@/app/components/shared/GetEarlyAccessReusable";
import BBTTrackingSection from "@/app/site/vitability&Medicine/BBTTrakingSection";
import TrackVitality from "@/app/site/vitability&Medicine/TracVitalitySection";
import VitabilityHero from "@/app/site/vitability&Medicine/VitabillityHero";
import VitalityRebellion from "@/app/site/vitability&Medicine/VitalityRebllion";



export default function VitalityFeatures() {
  return (
  <div className="bg-[#F8F1E9]">
    <VitabilityHero/>
    <VitalityRebellion/>
    <BBTTrackingSection/>
    <TrackVitality/>
    <GetEarlyAccessReusable
title="Ready to Start?"
description="Join the waitlist and be among the first to experience a new way of tracking your health."
buttonText="Get Early Access"
/>

    </div>
  );
}

