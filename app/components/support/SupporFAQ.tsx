"use client";

import { useState, useMemo } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How does BBT tracking work?",
    answer:
      "Basal Body Temperature (BBT) tracking involves measuring your resting temperature each morning before getting out of bed. After ovulation, progesterone causes a slight rise in BBT (0.2–0.5°F). By logging this daily, you can identify your fertile window and ovulation patterns over time. Sync your BBT thermometer with the app for automatic readings.",
  },
  {
    id: 2,
    question: "What are Non-Scale Victories (NSVs)?",
    answer:
      "Non-Scale Victories are health and wellness wins that don't show up on a scale — things like sleeping better, having more energy, fitting into clothes differently, improved mood, reduced bloating, or hitting a fitness milestone. We celebrate NSVs because they're often more meaningful indicators of real progress than weight alone.",
  },
  {
    id: 3,
    question: "Is my health data private and secure?",
    answer:
      "Absolutely. Your health data is encrypted at rest and in transit using AES-256 and TLS 1.3. We never sell your data to third parties. You have full control — you can export or delete your data at any time from your account settings. We are HIPAA-compliant and undergo regular third-party security audits.",
  },
  {
    id: 4,
    question: "Can I use Fight the Number if I have PCOS or irregular cycles?",
    answer:
      "Yes! Fight the Number is designed with cycle variability in mind. Our algorithm adapts to irregular cycles, and we offer specialized insights for PCOS, endometriosis, and other hormonal conditions. Many of our users have irregular cycles, and the app is built to support — not frustrate — their unique patterns.",
  },
  {
    id: 5,
    question: "How is Numera different from other AI chatbots?",
    answer:
      "Numera is purpose-built for women's health and metabolic wellness. Unlike general-purpose AI assistants, Numera is trained on clinically reviewed health data and understands the nuances of hormonal health, cycle tracking, and body composition. It gives personalized, evidence-based guidance — not generic advice.",
  },
  {
    id: 6,
    question: "Can I track multiple health goals at once?",
    answer:
      "Yes. You can set and track multiple goals simultaneously — weight management, cycle health, sleep, fitness, stress, and more. Your dashboard gives you a unified view, and our AI prioritizes insights based on what matters most to you at any given time.",
  },
  {
    id: 7,
    question: "Do you offer refunds?",
    answer:
      "We offer a 14-day money-back guarantee for all new subscriptions. If you're not satisfied within your first 14 days, contact our support team for a full refund — no questions asked. After 14 days, subscriptions are non-refundable but you can cancel anytime to stop future charges.",
  },
  {
    id: 8,
    question: "How do I sync my BBT thermometer?",
    answer:
      "Go to Settings → Devices → Add Device. Make sure Bluetooth is enabled on your phone. Put your thermometer in pairing mode (usually by holding the button for 3 seconds) and select it from the list. Once connected, your morning temperature readings will sync automatically each time you take a reading.",
  },
];

export default function SupportFAQ() {
  const [openId, setOpenId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return faqData;
    return faqData.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
    );
  }, [search]);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <main className="min-h-screen bg-[#faf9f7] font-sans">
      {/* Top search bar */}
      <div className="flex justify-center pt-10 px-4">
        <div className="relative w-full max-w-4xl">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions…"
            className="w-full border border-[#E5E7EB] rounded-xl py-2.5 pl-10 pr-4 text-sm text-gray-700 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#2d4a3e]/30 focus:border-[#2d4a3e] transition"
          />
        </div>
      </div>

      {/* Heading */}
      <section className="text-center mt-10 mb-8 ">
        <h1 className="text-3xl sm:text-4xl font-bold text-primaryColor leading-8 ">
          Frequently Asked Questions
        </h1>
      </section>

      {/* FAQ list */}
      <div className="max-w-4xl mx-auto  pb-16 space-y-2">
        {filtered.length === 0 && (
          <p className="text-center text-sm text-gray-400 py-10">
            No results found for &quot;{search}&quot;
          </p>
        )}

        {filtered.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="border border-[#E5E7EB] rounded-xl bg-white overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d4a3e]/40 cursor-pointer rounded-lg"
              >
                <span className="text-lg sm:text-xl font-bold leading-8 text-primaryColor pr-4">
                  {item.question}
                </span>
                <span
                  className={`flex-shrink-0 text-secondaryColor font-light text-xl leading-none transition-transform duration-200 ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>

              {/* Animated answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <p className="px-5 pb-5 text-sm text-[#6B7280] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}