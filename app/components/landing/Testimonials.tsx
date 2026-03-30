import React from 'react';


interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Numera gets it—my symptoms aren't 'normal,' and for once an app didn't make me feel broken. It's like having a coach who actually understands my body's rhythm.",
    author: "Sarah M.",
    role: "Early Beta Tester"
  },
  {
    quote: "I've tried every period tracker and fertility app out there. This is different. Numera sees me clearly—and she never asks me to be smaller or apologize for where I am in my cycle.",
    author: "Priya K.",
    role: "Fighting PCOS"
  },
  {
    quote: "The Arena changed everything. I'm not alone in this fight anymore. These women lift me up on the hard days and celebrate the wins that no scale could ever measure.",
    author: "Maya L.",
    role: "Perimenopause Journey"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className=" py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="ttext-[#001F3F] text-4xl md:text-5xl  font-bold mb-8 leading-tight md:leading-12  mb-6">
            What Women Are Already Saying
          </h2>
          <p className="text-[#6B7280] text-lg md:text-xl font-normal px-3 md:px-10 leading-5">
            These are the private affirmations we live for. This is the revolution.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="bg-white p-3 md:p-8 rounded-2xl  border border-[#E2E8F0] flex flex-col h-full transition-transform hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="text-orange-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g opacity="0.5">
    <path d="M26.6608 4.99902C25.7769 4.99902 24.9292 5.35014 24.3042 5.97514C23.6792 6.60014 23.3281 7.44782 23.3281 8.33171V18.3298C23.3281 19.2136 23.6792 20.0613 24.3042 20.6863C24.9292 21.3113 25.7769 21.6624 26.6608 21.6624C27.1027 21.6624 27.5266 21.838 27.8391 22.1505C28.1516 22.463 28.3271 22.8868 28.3271 23.3288V24.9951C28.3271 25.879 27.976 26.7267 27.351 27.3517C26.726 27.9767 25.8783 28.3278 24.9945 28.3278C24.5525 28.3278 24.1287 28.5034 23.8162 28.8159C23.5037 29.1284 23.3281 29.5522 23.3281 29.9941V33.3268C23.3281 33.7688 23.5037 34.1926 23.8162 34.5051C24.1287 34.8176 24.5525 34.9932 24.9945 34.9932C27.6461 34.9932 30.1892 33.9398 32.0642 32.0648C33.9391 30.1898 34.9925 27.6468 34.9925 24.9951V8.33171C34.9925 7.44782 34.6414 6.60014 34.0164 5.97514C33.3914 5.35014 32.5437 4.99902 31.6598 4.99902H26.6608Z" stroke="#E17100" strokeWidth="3.33268" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.33268 4.99902C7.4488 4.99902 6.60112 5.35014 5.97612 5.97514C5.35112 6.60014 5 7.44782 5 8.33171V18.3298C5 19.2136 5.35112 20.0613 5.97612 20.6863C6.60112 21.3113 7.4488 21.6624 8.33268 21.6624C8.77462 21.6624 9.19846 21.838 9.51096 22.1505C9.82346 22.463 9.99902 22.8868 9.99902 23.3288V24.9951C9.99902 25.879 9.6479 26.7267 9.0229 27.3517C8.3979 27.9767 7.55022 28.3278 6.66634 28.3278C6.2244 28.3278 5.80056 28.5034 5.48806 28.8159C5.17556 29.1284 5 29.5522 5 29.9941V33.3268C5 33.7688 5.17556 34.1926 5.48806 34.5051C5.80056 34.8176 6.2244 34.9932 6.66634 34.9932C9.31799 34.9932 11.861 33.9398 13.736 32.0648C15.611 30.1898 16.6644 27.6468 16.6644 24.9951V8.33171C16.6644 7.44782 16.3133 6.60014 15.6883 5.97514C15.0633 5.35014 14.2156 4.99902 13.3317 4.99902H8.33268Z" stroke="#E17100" strokeWidth="3.33268" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
              </div>

              {/* Quote Text */}
              <p className="text-[#314158] text-lg font-normal leading-relaxed md:leading-7 mb-5 flex-grow">
                "{t.quote}"
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-[#E2E8F0]">
                <h4 className="text-[#0F172B] font-normal text-base leading-6">{t.author}</h4>
                <p className="text-[#62748E] text-sm font-normal leading-5 mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;