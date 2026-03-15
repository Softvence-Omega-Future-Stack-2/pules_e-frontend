const cards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 6.5a4 4 0 015 0M17.5 6.5a4 4 0 00-5 0M3 10h18M5 10v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        <circle cx="12" cy="14" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: "Strength Gains",
    description:
      "Lifted heavier, held plank longer, carried groceries with ease—celebrate functional strength.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 13.5 4 8.5a5 5 0 0110 0 5 5 0 0110 0c0 5-8 12.5-8 12.5z" />
      </svg>
    ),
    title: "Movement Joy",
    description:
      "Danced, walked with a friend, tried yoga—if it felt good, it counts.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M5 3h14l-2 9H7L5 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l1.5 3 1.5-2 1.5 2L15 9" />
      </svg>
    ),
    title: "Recovery Rituals",
    description:
      "Took a rest day, foam rolled, honored luteal fatigue—rest is productive.",
  },
];

export default function FitnessNSVs() {
  return (
    <section className="bg-white px-6 sm:px-10 py-16 sm:py-20 font-serif">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[#0a192f] text-4xl md:text-5xl  font-bold  leading-6 md:leading-18 mb-6 ">
            Fitness NSVs: Beyond the Scale
          </h2>
          <p className="ttext-lg sm:text-xl text-[#6B7280] max-w-xl font-normal mx-auto leading-relaxed">
            We don't track calories burned or weight lost. We track strength gains, mobility wins,
            and movement joy—the victories that actually matter.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#F8F1E9] p-4 rounded-xl flex flex-col items-center text-center gap-4"
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full bg-[#b89a5a] flex items-center justify-center flex-shrink-0">
                {card.icon}
              </div>

              <h3 className="text-base font-bold text-[#1a2e26] mb-1.5">{card.title}</h3>
              <p className="text-sm font-normal leading-5 text-[#6B7280] ">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}