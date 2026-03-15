"use client";

import { useState } from "react";

interface Option {
  id: string;
  title: string;
  subtitle: string;
}

const options: Option[] = [
  { id: "scale-weight", title: "Scale Weight", subtitle: "The number that won't budge" },
  { id: "aging-energy", title: "Aging Energy", subtitle: "Energy dips as I get older" },
  { id: "fitness-plateaus", title: "Fitness Plateaus", subtitle: "Can't lift like I used to" },
  { id: "cycle-days", title: "Cycle Days", subtitle: "Tracking feels like a test I'm failing" },
  { id: "bbt-numbers", title: "BBT Numbers", subtitle: "Charts stress me out" },
  { id: "calorie-counts", title: "Calorie Counts", subtitle: "Food feels like math" },
];

const planMap: Record<string, { title: string; description: string; cta: string }> = {
  "scale-weight": {
    title: "Track Non-Scale Victories (NSVs)",
    description: "Log energy, mood, strength, and confidence—not just weight. Celebrate wins your scale can't measure.",
    cta: "Start NSV Tracking",
  },
  "aging-energy": {
    title: "Boost Your Energy Naturally",
    description: "Understand how hormonal shifts affect your energy and get personalized tips to feel vibrant at every age.",
    cta: "Start Energy Tracking",
  },
  "fitness-plateaus": {
    title: "Break Through Fitness Plateaus",
    description: "Discover cycle-synced workouts and strength patterns that help you lift smarter, not harder.",
    cta: "Start Fitness Tracking",
  },
  "cycle-days": {
    title: "Simplify Your Cycle Tracking",
    description: "No more confusing charts. Get plain-language insights about your cycle and what it means for your health.",
    cta: "Start Cycle Tracking",
  },
  "bbt-numbers": {
    title: "Understand Your BBT Data",
    description: "We translate your basal body temperature readings into easy, stress-free insights you can actually use.",
    cta: "Start BBT Tracking",
  },
  "calorie-counts": {
    title: "Ditch the Food Math",
    description: "Focus on nourishment, not numbers. Our AI guides you toward intuitive eating that works with your body.",
    cta: "Start Nourishment Tracking",
  },
};

// ─── Section 1: Selector ────────────────────────────────────────────────────

function SelectorSection({
  selected,
  onSelect,
  onNext,
}: {
  selected: string | null;
  onSelect: (id: string) => void;
  onNext: () => void;
}) {
  return (
    <section className="bg-white flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {options.map((opt) => {
            const isSelected = selected === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => onSelect(opt.id)}
                className={`flex items-start gap-3 text-left px-5 py-4 rounded-xl border transition-all cursor-pointer duration-200
                  ${isSelected
                    ? "border-[#c4a55a] bg-[#faf6ee] shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
              >
                {/* Radio circle */}
                <span
                  className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors
                    ${isSelected ? "border-[#b89a5a]" : "border-gray-300"}`}
                >
                  {isSelected && (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#b89a5a]" />
                  )}
                </span>
                <div>
                  <p className={`text-lg md:text-xl font-bold leading-8 ${isSelected ? "text-[#1a2e26]" : "text-primaryColor"}`}>
                    {opt.title}
                  </p>
                  <p className="text-base font-medium leading-6 text-[#6B7280] mt-0.5">{opt.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex justify-center">
          <button
            onClick={onNext}
            disabled={!selected}
            className={`flex items-center gap-2 px-10 py-3.5 rounded-md text-sm font-medium text-white transition-all duration-200
              ${selected
                ? "bg-[linear-gradient(180deg,#C9A96E_0%,#C0A168_7.14%,#B89962_14.29%,#AF925C_21.43%,#A78A56_28.57%,#9E8350_35.71%,#967B4B_42.86%,#8E7445_50%,#866D3F_57.14%,#7E663A_64.29%,#765E34_71.43%,#6E572F_78.57%,#66512A_85.71%,#5F4A24_92.86%,#57431F_100%)] hover:from-[#cead62] hover:to-[#a98640] cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
              }`}
          >
            Get My Personalized Plan
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Section 2: Personalized Plan ───────────────────────────────────────────

function PlanSection({ selectedId }: { selectedId: string }) {
  const plan = planMap[selectedId];

  return (
    <section className="bg-[#f2ede4] px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primaryColor leading-6 md:leading-12  mb-4 ">
            Your Personalized Fight Plan
          </h2>
          <p className="text-lg sm:text-xl font-norlam leading-6 text-[#6B7280]">
            Based on your selections, here's how Fight the Number can help you win your battles:
          </p>
        </div>

        {/* Plan card */}
        <div className="bg-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 shadow-sm mb-6">
          <div className="flex-1">
            <h3 className="text-2xl sm:text-[28px] font-bold text-primaryColor leading-10 mb-2">{plan.title}</h3>
            <p className="text-base sm:text-lg font-norlam leading-6 text-[#6B7280]">{plan.description}</p>
          </div>
          <div className="flex-shrink-0">
            <button className="bg-[linear-gradient(180deg,#C9A96E_0%,#C0A168_7.14%,#B89962_14.29%,#AF925C_21.43%,#A78A56_28.57%,#9E8350_35.71%,#967B4B_42.86%,#8E7445_50%,#866D3F_57.14%,#7E663A_64.29%,#765E34_71.43%,#6E572F_78.57%,#66512A_85.71%,#5F4A24_92.86%,#57431F_100%)] hover:from-[#cead62] hover:to-[#a98640] text-white text-sm font-medium px-5 py-2.5 rounded-md transition-all duration-200 whitespace-nowrap">
              {plan.cta}
            </button>
          </div>
        </div>

        {/* CTA banner */}
        <div style={{background: 'linear-gradient(135deg, #001F3F 0%, #02213F 25%, #042240 50%, #072440 75%, #0A2540 100%)'}} className="rounded-xl px-6 sm:px-10 py-10 text-center text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 font-serif">Ready to Start Your Fight?</h3>
          <p className="text-base sm:text-lg font-normal text-[#FFFFFFCC] leading-relaxed mb-7 max-w-md mx-auto">
            Join the Fight the Number app to get personalized guidance from Numera AI, track your NSVs, and connect with a community of Fight Sisters.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-[linear-gradient(180deg,#C9A96E_0%,#C0A168_7.14%,#B89962_14.29%,#AF925C_21.43%,#A78A56_28.57%,#9E8350_35.71%,#967B4B_42.86%,#8E7445_50%,#866D3F_57.14%,#7E663A_64.29%,#765E34_71.43%,#6E572F_78.57%,#66512A_85.71%,#5F4A24_92.86%,#57431F_100%)] hover:from-[#cead62] hover:to-[#a98640] hover:opacity-80 text-white text-sm font-medium px-8 py-3 rounded-md cursor-pointer transition-all duration-200">
              Get Early Access
            </button>
            <button className="bg-white text-[#1a2e26] text-sm font-medium px-8 py-3 rounded-md hover:bg-gray-100 transition-all duration-200">
              Explore Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function FightPlanPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showPlan, setShowPlan] = useState(false);

  const handleNext = () => {
    if (selected) setShowPlan(true);
  };

  return (
    <div>
      <SelectorSection
        selected={selected}
        onSelect={(id) => {
          setSelected(id);
          setShowPlan(false);
        }}
        onNext={handleNext}
      />
      {showPlan && selected && <PlanSection selectedId={selected} />}
    </div>
  );
}