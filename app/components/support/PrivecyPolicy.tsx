export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Data We Collect",
      content:
        "We collect only the data necessary to provide you with personalized health insights: basal body temperature readings, cycle dates, Non-Scale Victory logs, mood and energy levels, and your conversations with Numera AI. We also collect basic account information (email, name) and usage analytics to improve the app.",
    },
    {
      title: "How We Use Your Data",
      content:
        "Your health data is used solely to provide you with personalized insights through Numera AI and to show you patterns in your cycle. We anonymize and aggregate data to improve our AI models and create better features for all Fight Sisters — but your individual data is never shared or sold.",
    },
    {
      title: "Data Security",
      content:
        "All health data is encrypted in transit and at rest. We're HIPAA-compliant and undergo regular security audits. Your data is stored on secure servers with strict access controls. Only authorized personnel can access health data, and only for support purposes with your explicit permission.",
    },
    {
      title: "Your Rights",
      content:
        "You own your data. You can export all your data at any time, request deletion of your account and all associated data, or opt out of data collection for research purposes while still using the app.",
    },
    {
      title: "Location Data",
      content:
        "We collect location data only with your explicit permission and only to provide geo-based provider recommendations. You can disable location tracking anytime in your settings.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F1E9] ">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-14 sm:py-20">
        {/* Page title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-primaryColor leading-8 mb-10 ">
          Privacy Policy
        </h1>

        {/* Sections */}
        <div className="space-y-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl sm:text-2xl font-bold text-primaryColor leading-9 mb-4">
                {section.title}
              </h2>
              <p className="text-sm sm:text-base text-primaryColor font-normal leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}