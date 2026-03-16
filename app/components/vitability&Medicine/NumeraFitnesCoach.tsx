export default function NumeraFitnessCoach() {
  return (
    <section className="bg-[#0d1f3c] px-6 sm:px-10 py-16 sm:py-24 mb-10">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl  font-bold  leading-6 md:leading-18 mb-6">
          Numera: Your Cycle-Aware Fitness Coach
        </h2>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl font-normal mx-auto leading-relaxed mb-10">
          Numera adapts her fitness guidance based on your cycle phase, energy levels, and
          goals—no generic "30-day shred" here.
        </p>

        {/* Chat card */}
        <div style={{background:'rgba(255, 255, 255, 0.10)'}} className=" rounded-2xl px-5 sm:px-8 py-7 text-left mb-10 border border-[#1e3a5f]">
          {/* Label */}
          <p className="text-xl md:text-2xl font-bold leading-9 text-secondaryColor mb-5">
            Example: Luteal Phase Fitness Guidance
          </p>

          {/* User bubble */}
          <div className="bg-[#FFFFFF0D] rounded-lg px-6 py-5 mb-4 border border-[#1e3a5f]">
            <p className="text-sm font-normal leading-5 text-[#FFFFFFB2] mb-2">You:</p>
            <p className="text-base font-normal  text-white leading-relaxed">
              "I'm feeling guilty about skipping my run today. Is that bad?"
            </p>
          </div>

          {/* Numera bubble */}
          <div className="bg-[#C9A96E33] rounded-2xl px-6 py-5 border-l-4 border-[#c4a55a]/30">
            <p className="text-sm font-normal leading-5  text-secondaryColor mb-1">Numera:</p>
            <p className="text-base  text-white font-normla leading-relaxed">
              "Hey Fighter! You're on Day 22 of your luteal phase—progesterone is naturally
              slowing you down. This isn't laziness; it's biology. Instead of that run, what
              about a 20-minute walk or gentle yoga? Honor your body's rhythm. Rest is a
              strength win too. 💛"
            </p>
          </div>
        </div>

        {/* CTA button */}
        <button 
        style={{background:'linear-gradient(180deg, #C9A96E 0%, #C0A168 7.14%, #B89962 14.29%, #AF925C 21.43%, #A78A56 28.57%, #9E8350 35.71%, #967B4B 42.86%, #8E7445 50%, #866D3F 57.14%, #7E663A 64.29%, #765E34 71.43%, #6E572F 78.57%, #66512A 85.71%, #5F4A24 92.86%, #57431F 100%)'}}
        className="hover:opacity-80 hover:from-[#cead62] hover:to-[#a98640] text-white text-sm font-medium px-10 py-3.5 rounded-md cursor-pointer transition-all duration-200">
          Meet Numera →
        </button>
      </div>
    </section>
  );
}