import ExampleConversations from "../components/numera/Exampleconversation";
import MeetNumera from "../components/numera/MeetNumera";
import NumeraSection from "../components/numera/NumerSection";
import GetEarlyAccessReusable from "../components/shared/GetEarlyAccessReusable";


export default function AboutPage() {
  return (
    <div>
     <NumeraSection/>
     <MeetNumera/>
     <ExampleConversations/>
            <GetEarlyAccessReusable
title="Chat with Numera in the App"
description="Get personalized, compassionate guidance 24/7. Numera is waiting to support your unique journey."
buttonText="Get Early Access"
/>
    </div>
  );
}
