export default function TermsOfServicePage() {
  const paragraphs = [
    "By using Fight the Number, you agree to use the app for personal, non-commercial purposes. Numera AI provides educational health insights, not medical advice. Always consult with healthcare professionals for medical decisions.",
    "You must be 18 years or older to use Fight the Number. You're responsible for maintaining the security of your account credentials.",
    "We reserve the right to modify these terms at any time. We'll notify you of significant changes via email.",
  ];

  return (
    <main className=" bg-white ">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-14 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-primaryColor leading-8 mb-10">
          Terms of Service
        </h1>
        <div className="space-y-5">
          {paragraphs.map((text, i) => (
            <p key={i} className="text-sm sm:text-base text-primaryColor font-normal leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}