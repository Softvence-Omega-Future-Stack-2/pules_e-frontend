"use client";

import Link from "next/link";
import { useCart } from "@/app/components/shared/cartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();

  const shipping = items.length > 0 ? 10.0 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-10 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

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

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Shopping Cart
        </h1>

        {items.length === 0 ? (
          /* Empty State */
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm py-24 px-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-8">
              <svg className="w-8 h-8 text-slate-300" viewBox="0 0 24 24" fill="none">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-400 text-sm mb-10">Add some items from our shop to get started.</p>
            <Link href="/site/shop">
              <button className="px-12 py-4 bg-[linear-gradient(180deg,#C9A96E_0%,#57431F_100%)] text-white font-semibold rounded-lg shadow-lg hover:brightness-105 transition-all cursor-pointer">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          /* Cart with items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm p-4 flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-semibold text-[#C9A96E] uppercase tracking-wide">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-gray-900 text-base mt-0.5">{item.name}</h3>
                    <p className="text-gray-700 font-semibold mt-1">${item.price.toFixed(2)}</p>

                    {/* Quantity + Remove */}
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-md border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                        >
                          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </button>
                        <span className="w-6 text-center font-semibold text-gray-900 text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-md border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition cursor-pointer"
                        >
                          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                            <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-1 text-red-400 hover:text-red-600 text-sm font-medium transition cursor-pointer"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                          <path d="M2 4h12M5 4V3h6v1M6 7v5M10 7v5M3 4l1 9h8l1-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-gray-900">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 my-5" />

              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-gray-900 text-base">Total</span>
                <span className="font-bold text-gray-900 text-2xl">${total.toFixed(2)}</span>
              </div>

              <button className="w-full py-3.5 bg-[linear-gradient(180deg,#C9A96E_0%,#57431F_100%)] text-white font-semibold rounded-xl hover:brightness-105 transition-all cursor-pointer mb-3">
                Proceed to Checkout
              </button>

              <Link href="/site/shop">
                <button className="w-full py-3.5 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all cursor-pointer">
                  Continue Shopping
                </button>
              </Link>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}






// import React from 'react';
// import { ShoppingBag, ArrowLeft } from 'lucide-react';

// const CartPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white py-12 px-6">
//       <div className="max-w-4xl mx-auto">
        
//         {/* Navigation Link */}
//         <button className="flex items-center gap-2 text-[#001a2c] hover:opacity-70 transition-opacity mb-8 text-sm font-medium">
//           <ArrowLeft className="w-4 h-4" />
//           Back to Shop
//         </button>

//         <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#001a2c] mb-8">
//           Shopping Cart
//         </h1>

//         {/* Empty State Card */}
//         <div className="bg-white border border-slate-100 rounded-2xl shadow-sm py-24 px-8 flex flex-col items-center text-center">
          
//           {/* Icon Circle */}
//           <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-8">
//             <ShoppingBag className="w-8 h-8 text-slate-300 stroke-[1.5]" />
//           </div>

//           <div className="space-y-3 mb-10">
//             <h2 className="text-xl md:text-2xl font-serif font-bold text-[#001a2c]">
//               Your cart is empty
//             </h2>
//             <p className="text-slate-400 text-sm md:text-base font-light">
//               Add some items from our shop to get started.
//             </p>
//           </div>

//           {/* Action Button */}
//           <button className="w-full sm:w-auto px-12 py-4 bg-gradient-to-b from-[#9b7b43] to-[#7a5f33] text-white font-serif font-semibold rounded-lg shadow-lg hover:brightness-105 transition-all active:scale-95">
//             Continue Shopping
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default CartPage;