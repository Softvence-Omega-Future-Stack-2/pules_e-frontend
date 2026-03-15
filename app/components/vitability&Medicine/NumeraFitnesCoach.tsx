export default function NumeraFitnessCoach() {
  return (
    <section className="bg-[#0d1f3c] px-6 sm:px-10 py-16 sm:py-24 font-serif">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
          Numera: Your Cycle-Aware Fitness Coach
        </h2>
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-10 max-w-lg mx-auto">
          Numera adapts her fitness guidance based on your cycle phase, energy levels, and
          goals—no generic "30-day shred" here.
        </p>

        {/* Chat card */}
        <div className="bg-[#162847] rounded-2xl px-5 sm:px-8 py-7 text-left mb-10 border border-[#1e3a5f]">
          {/* Label */}
          <p className="text-sm font-semibold text-[#c4a55a] mb-5">
            Example: Luteal Phase Fitness Guidance
          </p>

          {/* User bubble */}
          <div className="bg-[#0d1f3c] rounded-lg px-4 py-3 mb-4 border border-[#1e3a5f]">
            <p className="text-xs text-gray-400 mb-1">You:</p>
            <p className="text-sm text-gray-200 leading-relaxed">
              "I'm feeling guilty about skipping my run today. Is that bad?"
            </p>
          </div>

          {/* Numera bubble */}
          <div className="bg-[#0d1f3c] rounded-lg px-4 py-3 border border-[#c4a55a]/30">
            <p className="text-xs text-[#c4a55a] mb-1">Numera:</p>
            <p className="text-sm text-gray-200 leading-relaxed">
              "Hey Fighter! You're on Day 22 of your luteal phase—progesterone is naturally
              slowing you down. This isn't laziness; it's biology. Instead of that run, what
              about a 20-minute walk or gentle yoga? Honor your body's rhythm. Rest is a
              strength win too. 💛"
            </p>
          </div>
        </div>

        {/* CTA button */}
        <button className="bg-gradient-to-b from-[#c4a55a] to-[#9e7e3a] hover:from-[#cead62] hover:to-[#a98640] text-white text-sm font-medium px-10 py-3.5 rounded-md transition-all duration-200">
          Meet Numera →
        </button>
      </div>
    </section>
  );
}