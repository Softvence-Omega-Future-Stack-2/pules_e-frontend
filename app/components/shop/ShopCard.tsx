"use client";

import { useState } from "react";
import Link from "next/link";

import { categories, Category, Product, products } from "../shared/data/product";


const categoryColors: Record<string, string> = {
  Tools: "bg-amber-100 text-amber-700",
  Journals: "bg-emerald-100 text-emerald-700",
  Wellness: "bg-rose-100 text-rose-700",
  Apparel: "bg-sky-100 text-sky-700",
};

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/site/shop/${product.id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
        {/* Image */}
        <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
           
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <span
            // className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${
            //   categoryColors[product.category]
            // }`}
            className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3 bg-[#F8F1E9] text-secondaryColor"
          >
            {product.category}
          </span>

          <h3 className="font-bold text-primaryColor text-xl md:text-2xl  leading-snug  md:leading-9 mb-1 group-hover:text-[#8B7355] transition-colors">
            {product.name}
          </h3>

          <p className="text-[#6B7280] text-sm sm:text-base leading-6 leading-relaxed line-clamp-2 mb-3">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="font-bold text-primaryColor text-2xl md:text-[28px] leading-6 md:leading-10">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M6.6652 18.3294C7.12535 18.3294 7.49837 17.9564 7.49837 17.4963C7.49837 17.0361 7.12535 16.6631 6.6652 16.6631C6.20505 16.6631 5.83203 17.0361 5.83203 17.4963C5.83203 17.9564 6.20505 18.3294 6.6652 18.3294Z" stroke="#C9A96E" strokeWidth="1.66634" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.8293 18.3294C16.2894 18.3294 16.6624 17.9564 16.6624 17.4963C16.6624 17.0361 16.2894 16.6631 15.8293 16.6631C15.3691 16.6631 14.9961 17.0361 14.9961 17.4963C14.9961 17.9564 15.3691 18.3294 15.8293 18.3294Z" stroke="#C9A96E" strokeWidth="1.66634" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.70703 1.70801H3.37337L5.58961 12.056C5.6709 12.435 5.88177 12.7737 6.18591 13.014C6.49006 13.2543 6.86844 13.381 7.25595 13.3724H15.4044C15.7836 13.3718 16.1513 13.2418 16.4467 13.004C16.7421 12.7662 16.9475 12.4347 17.029 12.0643L18.4038 5.87386H4.26486" stroke="#C9A96E" strokeWidth="1.66634" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
       <span className="text-sm text-secondaryColor font-bold leading-5 flex items-center gap-1 group-hover:gap-2 transition-all">
              View Details
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6h8M6 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            </div>
         
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ShopCard() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
  

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Our Shop
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Tools, journals &amp; wellness essentials for your journey
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-base font-bold leading-6 transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[linear-gradient(180deg,#C9A96E_0%,#C0A168_7.69%,#B69861_15.38%,#AD905B_23.08%,#A48854_30.77%,#9B804E_38.46%,#927848_46.15%,#8A7042_53.85%,#81683C_61.54%,#786136_69.23%,#705930_76.92%,#67522A_84.62%,#5F4A25_92.31%,#57431F_100%)] text-white shadow-md shadow-[#8B7355]/30"
                  : "bg-[#F8F1E9] text-primaryColor hover:text-gray-900 border border-[#F8F1E9] hover:border-secondaryColor"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">No products in this category yet.</p>
          </div>
        )}
      </main>
    </div>
  );
}