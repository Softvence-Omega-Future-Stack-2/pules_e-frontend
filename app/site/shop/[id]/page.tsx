"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import { products } from "@/app/components/shared/data/product";
import { useCart } from "@/app/components/shared/cartContext";


const categoryColors: Record<string, string> = {
  Tools: "bg-amber-100 text-amber-700",
  Journals: "bg-emerald-100 text-emerald-700",
  Wellness: "bg-rose-100 text-rose-700",
  Apparel: "bg-sky-100 text-sky-700",
};

interface Props {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: Props) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) notFound();

  const handleAddToCart = () => {
    addToCart(product!);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* Back link */}
        <Link
          href="/site/shop"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8 group"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Shop
        </Link>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
            <img src={product!.image} alt={product!.name} className="w-full h-full object-cover" />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <span className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${categoryColors[product!.category]}`}>
              {product!.category}
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {product!.name}
            </h1>

            <p className="text-gray-500 text-base leading-relaxed mb-6">
              {product!.description}
            </p>

            <p className="text-4xl font-bold text-gray-900 mb-8">
              ${product!.price.toFixed(2)}
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 text-base cursor-pointer ${
                added
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-[#8B7355] hover:bg-[#7A6448] hover:shadow-lg hover:shadow-[#8B7355]/30 hover:-translate-y-0.5 active:translate-y-0"
              }`}
            >
              {added ? (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Added to Cart!
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Add to Cart
                </>
              )}
            </button>

            <div className="border-t border-gray-200 my-8" />

            {/* Features */}
            <div>
              <h2 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">Features</h2>
              <ul className="space-y-3">
                {product!.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#8B7355]" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {/* <div className="mt-20">
          <h2 className="text-xl font-bold text-gray-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {products.filter((p) => p.id !== product!.id).slice(0, 3).map((related) => (
              <Link key={related.id} href={`/site/shop/${related.id}`} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <div className="h-32 bg-gray-100 overflow-hidden">
                  <img src={related.image} alt={related.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-[#8B7355] transition-colors">{related.name}</p>
                  <p className="text-sm text-gray-500 font-medium mt-0.5">${related.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
      </main>
    </div>
  );
}









// "use client";

// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { use } from "react";
// import { products } from "@/app/components/shared/data/product";

// const categoryColors: Record<string, string> = {
//   Tools: "bg-amber-100 text-amber-700",
//   Journals: "bg-emerald-100 text-emerald-700",
//   Wellness: "bg-rose-100 text-rose-700",
//   Apparel: "bg-sky-100 text-sky-700",
// };

// interface Props {
//   params: Promise<{ id: string }>;
// }

// export default function ProductDetailPage({ params }: Props) {
//   const { id } = use(params); 
//   const product = products.find((p) => p.id === id);

//   if (!product) notFound();

//   return (
//     <div className="min-h-screen bg-[#FAF8F5]">
//       <main className=" px-4 sm:px-6 md:px-[200px] py-10">
//         {/* Back link */}
//         <Link
//           href="/site/shop"
//           className="inline-flex items-center gap-2 text-base text-[#6B7280] hover:text-gray-900 font-normal leading-6 transition-colors mb-8 group"
//         >
//           <svg
//             className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
//             viewBox="0 0 16 16"
//             fill="none"
//           >
//             <path
//               d="M10 3L5 8l5 5"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//           Back to Shop
//         </Link>

//         {/* Product layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
//           {/* Image */}
//           <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
//             <img
//               src={product!.image}
//               alt={product!.name}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Info */}
//           <div className="flex flex-col justify-center">
//             {/* Category Badge */}
//             <span
//               className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 bg-[#F8F1E9] text-secondaryColor ${
                
//                 [product!.category]
//               }`}
//               // className="inline-block text-xs font-semibold px-4 py-2 rounded-full mb-3 bg-[#F8F1E9] text-secondaryColor"
//             >
//               {product!.category}
//             </span>

//             {/* Name */}
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primaryColor leading-tight md:leading-14 mb-4">
//               {product!.name}
//             </h1>

//             {/* Description */}
//             <p className="text-[#6B7280] max-w-xl  text-lg md:text-xl font-normal leading-relaxed mb-6">
//               {product!.description}
//             </p>

//             {/* Price */}
//             <p className="text-3xl md:text-5xl font-bold text-primaryColor leading-7 md:leading-15 mb-8">
//               ${product!.price.toFixed(2)}
//             </p>

//             {/* Add to Cart Button */}
//             <button className="w-full flex items-center justify-center gap-3 bg-[linear-gradient(180deg,#C9A96E_0%,#C0A168_7.69%,#B69861_15.38%,#AD905B_23.08%,#A48854_30.77%,#9B804E_38.46%,#927848_46.15%,#8A7042_53.85%,#81683C_61.54%,#786136_69.23%,#705930_76.92%,#67522A_84.62%,#5F4A25_92.31%,#57431F_100%)] hover:bg-[#7A6448] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#8B7355]/30 hover:-translate-y-0.5 active:translate-y-0 text-base cursor-pointer">
//              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
//   <path d="M7.99609 21.9932C8.54838 21.9932 8.99609 21.5454 8.99609 20.9932C8.99609 20.4409 8.54838 19.9932 7.99609 19.9932C7.44381 19.9932 6.99609 20.4409 6.99609 20.9932C6.99609 21.5454 7.44381 21.9932 7.99609 21.9932Z" stroke="#F8F1E9" strokeWidth="1.9993" strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M18.9922 21.9932C19.5445 21.9932 19.9922 21.5454 19.9922 20.9932C19.9922 20.4409 19.5445 19.9932 18.9922 19.9932C18.4399 19.9932 17.9922 20.4409 17.9922 20.9932C17.9922 21.5454 18.4399 21.9932 18.9922 21.9932Z" stroke="#F8F1E9" strokeWidth="1.9993" strokeLinecap="round" strokeLinejoin="round"/>
//   <path d="M2.05078 2.04883H4.05008L6.70916 14.4645C6.8067 14.9192 7.05971 15.3257 7.42462 15.614C7.78953 15.9022 8.24353 16.0543 8.70846 16.044H18.4851C18.9401 16.0432 19.3812 15.8873 19.7356 15.6019C20.0901 15.3166 20.3365 14.9189 20.4344 14.4745L22.0838 7.04709H5.11971" stroke="#F8F1E9" strokeWidth="1.9993" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
//               Add to Cart
//             </button>

//             {/* Divider */}
//             <div className=" border-t border-[#E5E7EB] mt-12  my-8" />

//             {/* Features */}
//             <div>
//               <h2 className="text-xl md:text-2xl font-bold text-primaryColro leading-9 mb-4 ">
//                 Features
//               </h2>
//               <ul className="space-y-3">
//                 {product!.features.map((feature, i) => (
//                   <li
//                     key={i}
//                     className="flex items-start gap-3 text-base font-normal text-primaryColor leading-6"
//                   >
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
//   <path d="M16.6628 4.99902L7.49788 14.1639L3.33203 9.99805" stroke="#C9A96E" strokeWidth="1.66634" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Related Products */}
//         {/* <div className="mt-20">
//           <h2 className="text-xl font-bold text-gray-900 mb-6">
//             You might also like
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//             {products
//               .filter((p) => p.id !== product!.id)
//               .slice(0, 3)
//               .map((related) => (
//                 <Link
//                   key={related.id}
//                   href={`/site/shop/${related.id}`}
//                   className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
//                 >
//                   <div className="h-32 bg-gray-100 overflow-hidden">
//                     <img
//                       src={related.image}
//                       alt={related.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-3">
//                     <p className="text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-[#8B7355] transition-colors">
//                       {related.name}
//                     </p>
//                     <p className="text-sm text-gray-500 font-medium mt-0.5">
//                       ${related.price.toFixed(2)}
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//           </div>
//         </div> */}
//       </main>
//     </div>
//   );
// }



// // import Link from "next/link";
// // import Image from "next/image";
// // import { notFound } from "next/navigation";
// // import { products } from "@/app/components/shared/data/product";

// // const categoryColors: Record<string, string> = {
// //   Tools: "bg-amber-100 text-amber-700",
// //   Journals: "bg-emerald-100 text-emerald-700",
// //   Wellness: "bg-rose-100 text-rose-700",
// //   Apparel: "bg-sky-100 text-sky-700",
// // };

// // export default function ProductDetailPage({
// //   params,
// // }: {
// //   params: { id: string };
// // }) {
// //   const { id } = params;

// //   // 🔥 FIX: match id correctly
// //   const product = products.find((p) => String(p.id) === id);

// //   // 🔥 FIX: 404 handling
// //   if (!product) return notFound();

// //   return (
// //     <div className="min-h-screen bg-[#FAF8F5]">
// //       <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
// //         {/* Back link */}
// //         <Link
// //           href="/site/shop"
// //           className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-8 group"
// //         >
// //           <svg
// //             className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
// //             viewBox="0 0 16 16"
// //             fill="none"
// //           >
// //             <path
// //               d="M10 3L5 8l5 5"
// //               stroke="currentColor"
// //               strokeWidth="1.5"
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //             />
// //           </svg>
// //           Back to Shop
// //         </Link>

// //         {/* Product layout */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
// //           {/* Image */}
// //           <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
// //             <Image
// //               src={product.image}
// //               alt={product.name}
// //               fill
// //               className="object-cover"
// //               priority
// //             />
// //           </div>

// //           {/* Info */}
// //           <div className="flex flex-col justify-center">
// //             {/* Category */}
// //             <span
// //               className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
// //                 categoryColors[product.category]
// //               }`}
// //             >
// //               {product.category}
// //             </span>

// //             {/* Name */}
// //             <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
// //               {product.name}
// //             </h1>

// //             {/* Description */}
// //             <p className="text-gray-500 mb-6">{product.description}</p>

// //             {/* Price */}
// //             <p className="text-4xl font-bold text-gray-900 mb-8">
// //               ${product.price.toFixed(2)}
// //             </p>

// //             {/* Button */}
// //             <button className="w-full flex items-center justify-center gap-3 bg-[#8B7355] hover:bg-[#7A6448] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
// //               Add to Cart
// //             </button>

// //             {/* Features */}
// //             <div className="border-t border-gray-200 my-8" />

// //             <div>
// //               <h2 className="text-xs font-bold mb-4 uppercase">
// //                 Features
// //               </h2>

// //               <ul className="space-y-2">
// //                 {product.features.map((feature, i) => (
// //                   <li key={i} className="text-sm text-gray-600">
// //                     ✔ {feature}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Related Products */}
// //         <div className="mt-20">
// //           <h2 className="text-xl font-bold mb-6">
// //             You might also like
// //           </h2>

// //           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
// //             {products
// //               .filter((p) => p.id !== product.id)
// //               .slice(0, 3)
// //               .map((related) => (
// //                 <Link
// //                   key={related.id}
// //                   href={`/site/shop/${related.id}`}
// //                   className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
// //                 >
// //                   <div className="relative h-32 bg-gray-100">
// //                     <Image
// //                       src={related.image}
// //                       alt={related.name}
// //                       fill
// //                       className="object-cover group-hover:scale-105 transition"
// //                     />
// //                   </div>

// //                   <div className="p-3">
// //                     <p className="text-sm font-semibold">
// //                       {related.name}
// //                     </p>
// //                     <p className="text-sm text-gray-500">
// //                       ${related.price.toFixed(2)}
// //                     </p>
// //                   </div>
// //                 </Link>
// //               ))}
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }