import GetEarlyAccessReusable from "@/app/components/shared/GetEarlyAccessReusable";
import CycleSyncedMovement from "@/app/site/vitability&Medicine/CycleSyncedMovment";
import FitnessNSVs from "@/app/site/vitability&Medicine/Fitness";
import MovemetnMedicine from "@/app/site/vitability&Medicine/MovementMedicine";
import MovementHero from "@/app/site/vitability&Medicine/MovemnetHero";
import NumeraFitnessCoach from "@/app/site/vitability&Medicine/NumeraFitnesCoach";




export default function MovementFeatures() {
  return (
  <div className="bg-[#F8F1E9]">
   <MovementHero/>
   <MovemetnMedicine/>
   <CycleSyncedMovement/>
   <FitnessNSVs/>
   <NumeraFitnessCoach/>
    <GetEarlyAccessReusable
title="Ready to Start?"
description="Join the waitlist and be among the first to experience a new way of tracking your health."
buttonText="Get Early Access"
/>

    </div>
  );
}

