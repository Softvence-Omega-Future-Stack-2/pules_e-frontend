import ContactUsPage from "@/app/components/support/ContactUs";
import PrivacyPolicyPage from "@/app/components/support/PrivecyPolicy";
import SupportFAQ from "@/app/components/support/SupporFAQ";
import SupportBanner from "@/app/components/support/SupportBanner";
import TermsOfServicePage from "@/app/components/support/TermsOfService";





export default function Features() {
  return (
  <div className="bg-[#F8F1E9]">
    <SupportBanner/>
    <SupportFAQ/>
    <PrivacyPolicyPage/>
    <TermsOfServicePage/>
    <ContactUsPage/>
    </div>
  );
}