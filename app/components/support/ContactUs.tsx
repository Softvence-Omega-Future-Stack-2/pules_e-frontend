"use client";

import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactUsPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f2ede4]flex items-start justify-center px-4 py-14 sm:py-20">
      <div className="w-full max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-primaryColor leading-8 mb-10">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl font-normal text-[#6B7280] leading-relaxed">
            Can't find what you're looking for? Send us a message and we'll get
            back to you within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-md p-8 text-center text-[#1a2e26]">
            <p className="text-lg font-semibold mb-2">Message sent!</p>
            <p className="text-sm text-[#7a7168]">
              We'll get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-base font-bold text-primaryColor leading-6 mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white border border-[#E5E7EB] rounded-md px-3 py-2.5 text-sm text-[#1a2e26] placeholder-transparent focus:outline-none focus:ring-1 focus:ring-[#b89a5a] focus:border-[#b89a5a] transition"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-base font-bold text-primaryColor leading-6 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white border border-[#E5E7EB] rounded-md px-3 py-2.5 text-sm text-[#1a2e26] placeholder-transparent focus:outline-none focus:ring-1 focus:ring-[#b89a5a] focus:border-[#b89a5a] transition"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
               className="block text-base font-bold text-primaryColor leading-6 mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                className="w-full bg-white border border-[#E5E7EB] rounded-md  px-3 py-2.5 text-sm text-[#1a2e26] placeholder-transparent focus:outline-none focus:ring-1 focus:ring-[#b89a5a] focus:border-[#b89a5a] transition"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
               className="block text-base font-bold text-primaryColor leading-6 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white border border-[#E5E7EB] rounded-md  px-3 py-2.5 text-sm text-[#1a2e26] resize-none focus:outline-none focus:ring-1 focus:ring-[#b89a5a] focus:border-[#b89a5a] transition"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              style={{background:'linear-gradient(180deg, #C9A96E 0%, #57431F 100%)'}}
              className="w-full flex items-center justify-center gap-2  hover:from-[#cead62] hover:to-[#a98640] text-white cursor-pointer text-sm font-medium py-3 rounded-sm transition-all duration-200 tracking-wide"
            >
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send Message
            </button>
          </div>
        )}
      </div>
    </main>
  );
}