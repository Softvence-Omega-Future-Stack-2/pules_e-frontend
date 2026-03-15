
import GetEarlyAccessReusable from "../components/shared/GetEarlyAccessReusable";
import ContactUsPage from "../components/support/ContactUs";
import PrivacyPolicyPage from "../components/support/PrivecyPolicy";
import SupportFAQ from "../components/support/SupporFAQ";
import SupportBanner from "../components/support/SupportBanner";
import TermsOfServicePage from "../components/support/TermsOfService";




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