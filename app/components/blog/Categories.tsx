"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const categories = ["All Posts", "Cycle Awareness", "Cycle Phases", "Body Neutrality", "Life Stages", "NSVs", "Community"];

const posts = [
  {
    slug: "understanding-bbt-cycle-awareness",
    title: "Understanding BBT for Cycle Awareness",
    category: "Cycle Awareness",
    desc: "Learn how basal body temperature tracking can help you understand your hormonal patterns and anticipate cycle shifts.",
    date: "March 1, 2026",
    author: "Dr. Sarah Chen",
    img: "/img/blogHeroImg.svg"
  },
  {
    slug: "luteal-phase-survival-guide",
    title: "Luteal Phase Survival Guide",
    category: "Cycle Phases",
    desc: "Everything you need to know about navigating the luteal phase with compassion and cycle-smart strategies.",
    date: "February 24, 2026",
    author: "Jessica Martinez",
    img: "/img/categorie2.svg"
  },
  {
    slug: "scale-lies-hormonal-shifts",
    title: "Why the Scale Lies During Hormonal Shifts",
    category: "Body Neutrality",
    desc: "The science behind weight fluctuations during your cycle and why the number on the scale means nothing.",
    date: "February 15, 2026",
    author: "Dr. Sarah Chen",
    img: "/img/categorie3.svg"
  },
  {
    slug: "perimenopause-what-to-expect",
    title: "Perimenopause: What to Expect and How to Fight",
    category: "Life Stages",
    desc: "Navigating the transition with knowledge, support, and a community of Fight Sisters who get it.",
    date: "February 8, 2026",
    author: "Dr. Maya Patel",
    img: "/img/categorie4.svg"
  },
  {
    slug: "nsvs-matter-more-than-scale",
    title: "NSVs That Actually Matter More Than the Scale",
    category: "NSVs",
    desc: "Celebrating the non-scale victories that show real progress: energy, sleep, mood, and strength.",
    date: "January 30, 2026",
    author: "Jessica Martinez",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80"
  },
  {
    slug: "community-transforms-health-journey",
    title: "How Community Transforms Your Health Journey",
    category: "Community",
    desc: "Why fighting alongside others makes all the difference — and how to find your people.",
    date: "January 22, 2026",
    author: "Dr. Maya Patel",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80"
  }
];

const CategoriesFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [email, setEmail] = useState("");

  const filteredPosts = activeCategory === "All Posts"
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
   <div className='bg-white mt-14'>
     <div className=" px-6 max-w-7xl mx-auto py-12  flex flex-col md:flex-row gap-10">

      {/* Sidebar */}
      <aside className="w-full md:w-[306px] flex-shrink-0 flex flex-col gap-8">
        <div>
          <h3 className=" text-xl md:text-2xl font-bold text-primaryColor leading-8 mb-4">Categories</h3>
          <div className="flex flex-col gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm sm:text-bse leading-6 font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#b8924a] text-white shadow-sm'
                    : 'bg-[#ede6dc] text-[#3a2e22] hover:bg-[#ddd5c8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-[#ede6dc] rounded-2xl p-5 flex flex-col gap-3">
          <h4 className="text-lg md:text-xl  font-bold text-primaryColor leading-7 mb-4">Get New Posts</h4>
          <p className="text-sm text-[#6B7280] leading-relaxed">
            Join our newsletter for weekly insights on women's health, cycle awareness, and fighting the numbers.
          </p>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full px-3 py-2.5 rounded-lg text-sm bg-white border-none outline-none text-gray-700 placeholder-gray-300"
          />
          <button
            style={{ background: 'linear-gradient(180deg, #C9A96E 0%, #57431F 100%' }}
            className="w-full py-2.5 rounded-lg text-white text-sm font-bold  hover:opacity-80 hover:scale-105 tracking-wide cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </aside>

      {/* Blog Grid */}
      <main className="flex-1">
        {filteredPosts.length === 0 ? (
          <div className="flex items-center justify-center h-64 text-gray-400 text-sm">
            No posts in this category yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredPosts.map((post, i) => (
              <Link
                key={i}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1 cursor-pointer flex flex-col"
              >
                {/* Real Image */}
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                  onError={e => {
                    (e.target as HTMLImageElement).style.background = '#e5ddd4';
                  }}
                />

                <div className="p-5 flex flex-col gap-3 flex-1">
                  {/* Badge */}
                  <span className="inline-block text-xs font-bold  bg-[#F8F1E9] text-secondaryColor px-3 py-1 rounded-full w-fit">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className=" text-xl md:text-2xl  font-bold leading-snug md:leading-9 text-[#1a1a1a]">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base font-normal text-[#6B7280] leading-relaxed flex-1">
                    {post.desc}
                  </p>

                  {/* Meta */}
                  <div className="flex gap-4 text-sm font-normal text-[#6B7280] leading-relaxed pt-1 ">
                    <span className="flex items-center  gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      {post.author}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
   </div>
  );
};

export default CategoriesFilter;







// "use client"

// import Link from 'next/link';
// import React, { useState } from 'react';

// const categories = ["All Posts", "Cycle Awareness", "Cycle Phases", "Body Neutrality", "Life Stages", "NSVs", "Community"];

// const posts = [
//   {
//     title: "Understanding BBT for Cycle Awareness",
//     category: "Cycle Awareness",
//     desc: "Learn how basal body temperature tracking can help you understand your hormonal patterns and anticipate cycle shifts.",
//     date: "March 1, 2026",
//     author: "Dr. Sarah Chen",
//     img: "/img/blogHeroImg.svg"
//   },
//   {
//     title: "Luteal Phase Survival Guide",
//     category: "Cycle Phases",
//     desc: "Everything you need to know about navigating the luteal phase with compassion and cycle-smart strategies.",
//     date: "February 24, 2026",
//     author: "Jessica Martinez",
//     img: "/img/categorie2.svg"
//   },
//   {
//     title: "Why the Scale Lies During Hormonal Shifts",
//     category: "Body Neutrality",
//     desc: "The science behind weight fluctuations during your cycle and why the number on the scale means nothing.",
//     date: "February 15, 2026",
//     author: "Dr. Sarah Chen",
//     img: "/img/categorie3.svg"
//   },
//   {
//     title: "Perimenopause: What to Expect and How to Fight",
//     category: "Life Stages",
//     desc: "Navigating the transition with knowledge, support, and a community of Fight Sisters who get it.",
//     date: "February 8, 2026",
//     author: "Dr. Maya Patel",
//     img: "/img/categorie4.svg"
//   },
//   {
//     title: "NSVs That Actually Matter More Than the Scale",
//     category: "NSVs",
//     desc: "Celebrating the non-scale victories that show real progress: energy, sleep, mood, and strength.",
//     date: "January 30, 2026",
//     author: "Jessica Martinez",
//     img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80"
//   },
//   {
//     title: "How Community Transforms Your Health Journey",
//     category: "Community",
//     desc: "Why fighting alongside others makes all the difference — and how to find your people.",
//     date: "January 22, 2026",
//     author: "Dr. Maya Patel",
//     img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80"
//   }
// ];

// const CategoriesFilter = () => {
//   const [activeCategory, setActiveCategory] = useState("All Posts");
//   const [email, setEmail] = useState("");

//   const filteredPosts = activeCategory === "All Posts"
//     ? posts
//     : posts.filter(p => p.category === activeCategory);

//   return (
//     <div className=" px-6 max-w-7xl mx-auto bg-white my-12 flex flex-col md:flex-row gap-10">

//       {/* Sidebar */}
//       <aside className="w-full md:w-[306px] flex-shrink-0 flex flex-col gap-8">
//         <div>
//           <h3 className=" text-xl md:text-2xl font-bold text-primaryColor leading-8 mb-4">Categories</h3>
//           <div className="flex flex-col gap-2">
//             {categories.map(cat => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`text-left px-4 py-2.5 rounded-xl text-sm sm:text-bse leading-6 font-medium transition-all duration-200 cursor-pointer ${
//                   activeCategory === cat
//                     ? 'bg-[#b8924a] text-white shadow-sm'
//                     : 'bg-[#ede6dc] text-[#3a2e22] hover:bg-[#ddd5c8]'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Newsletter */}
//         <div className="bg-[#ede6dc] rounded-2xl p-5 flex flex-col gap-3">
//           <h4 className="text-lg md:text-xl  font-bold text-primaryColor leading-7 mb-4">Get New Posts</h4>
//           <p className="text-sm text-[#6B7280] leading-relaxed">
//             Join our newsletter for weekly insights on women's health, cycle awareness, and fighting the numbers.
//           </p>
//           <input
//             type="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             placeholder="Your email"
//             className="w-full px-3 py-2.5 rounded-lg text-sm bg-white border-none outline-none text-gray-700 placeholder-gray-300"
//           />
//           <button
//             style={{ background: 'linear-gradient(180deg, #C9A96E 0%, #57431F 100%' }}
//             className="w-full py-2.5 rounded-lg text-white text-sm font-bold  hover:opacity-80 hover:scale-105 tracking-wide cursor-pointer"
//           >
//             Subscribe
//           </button>
//         </div>
//       </aside>

//       {/* Blog Grid */}
//       <main className="flex-1">
//         {filteredPosts.length === 0 ? (
//           <div className="flex items-center justify-center h-64 text-gray-400 text-sm">
//             No posts in this category yet.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {filteredPosts.map((post, i) => (
//               <Link
//                 key={i}
//                  href={`/blog/${post.slug}`}
//                 className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1 cursor-pointer flex flex-col"
//               >
//                 {/* Real Image */}
//                 <img
//                   src={post.img}
//                   alt={post.title}
//                   className="w-full h-48 object-cover"
//                   onError={e => {
//                     (e.target as HTMLImageElement).style.background = '#e5ddd4';
//                   }}
//                 />

//                 <div className="p-5 flex flex-col gap-3 flex-1">
//                   {/* Badge */}
//                   <span className="inline-block text-xs font-bold  bg-[#F8F1E9] text-secondaryColor px-3 py-1 rounded-full w-fit">
//                     {post.category}
//                   </span>

//                   {/* Title */}
//                   <h3 className=" text-xl md:text-2xl  font-bold leading-snug md:leading-9 text-[#1a1a1a]">
//                     {post.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-base font-normal text-[#6B7280] leading-relaxed flex-1">
//                     {post.desc}
//                   </p>

//                   {/* Meta */}
//                   <div className="flex gap-4 text-sm font-normal text-[#6B7280] leading-relaxed pt-1 ">
//                     <span className="flex items-center  gap-1">
//                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                       </svg>
//                       {post.date}
//                     </span>
//                     <span className="flex items-center gap-1">
//                       <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                       </svg>
//                       {post.author}
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default CategoriesFilter;