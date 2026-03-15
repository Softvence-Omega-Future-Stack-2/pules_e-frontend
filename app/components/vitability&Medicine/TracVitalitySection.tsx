export default function TrackVitalitySection() {
  const bullets = [
    "Visual charts show vitality patterns across your cycle",
    "Numera provides insights: \"Your energy dips on Day 22—honor it next cycle\"",
    "Export data for health providers or personal records",
  ];

  return (
    <section className="bg-white px-6 sm:px-10 py-16 sm:py-20 font-serif">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-[#0a192f] text-4xl md:text-5xl  font-bold  leading-6 md:leading-18 mb-6">
          Track Vitality Wins in the App
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">

          {/* Left: Text */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl md:text-[28px] font-bold leading-7 text-[#1a2e26] mb-3">
              Daily Vitality Sliders
            </h3>
            <p className="text-base md:text-lg font-normal text-[#6B7280] leading-relaxed mb-6">
              Log your energy (1–10), mobility, recovery speed, and mental
              clarity. See trends over time and correlate with cycle phases,
              sleep, or stress.
            </p>

            <ul className="space-y-3">
              {bullets.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-base  font-normal text-[#6B7280]  leading-relaxed">
                  <span className="mt-0.5 text-[#b89a5a] font-bold flex-shrink-0">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Chart placeholder card */}
          <div className="flex-shrink-0 w-full md:w-72 lg:w-80 bg-[#F8F1E9] rounded-2xl flex flex-col items-center justify-center py-14 px-6 gap-3">
            {/* Pulse icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
  <path d="M59.1879 32.2844H52.5158C51.3401 32.2819 50.1958 32.6645 49.2581 33.3739C48.3204 34.0832 47.6409 35.0802 47.3234 36.2123L41.0011 58.7036C40.9604 58.8433 40.8754 58.9661 40.759 59.0534C40.6426 59.1407 40.501 59.1879 40.3554 59.1879C40.2099 59.1879 40.0683 59.1407 39.9519 59.0534C39.8355 58.9661 39.7505 58.8433 39.7097 58.7036L24.859 5.86512C24.8183 5.72542 24.7333 5.60269 24.6169 5.51538C24.5004 5.42806 24.3588 5.38086 24.2133 5.38086C24.0678 5.38086 23.9262 5.42806 23.8098 5.51538C23.6933 5.60269 23.6084 5.72542 23.5676 5.86512L17.2453 28.3565C16.9291 29.4841 16.2536 30.4778 15.3213 31.1867C14.3891 31.8956 13.251 32.281 12.0798 32.2844H5.38086" stroke="#C9A96E" stroke-width="5.3807" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
             
            <p className="text-sm font-semibold text-[#1a2e26] text-center">
              Vitality Tracking Chart
            </p>
            <p className="text-xs text-gray-400 text-center">(Available in mobile app)</p>
          </div>

        </div>
      </div>
    </section>
  );
}