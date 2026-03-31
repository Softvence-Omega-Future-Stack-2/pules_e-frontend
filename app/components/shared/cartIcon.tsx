"use client";

import { useCart } from "./cartContext";



export default function CartIcon() {
  const { totalCount } = useCart();

  return (
    <div className="relative cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M29.2656 2.7334H26.599L23.0523 19.2934C22.9222 19.8999 22.5847 20.442 22.098 20.8265C21.6113 21.2111 21.0058 21.4139 20.3856 21.4001H7.34562C6.73872 21.3991 6.15031 21.1911 5.67759 20.8105C5.20486 20.4299 4.87611 19.8994 4.74562 19.3067L2.54562 9.40007H25.1723M19.9987 28C19.9987 28.7364 20.5957 29.3333 21.332 29.3333C22.0684 29.3333 22.6654 28.7364 22.6654 28C22.6654 27.2636 22.0684 26.6667 21.332 26.6667C20.5957 26.6667 19.9987 27.2636 19.9987 28ZM5.33203 28C5.33203 28.7364 5.92898 29.3333 6.66536 29.3333C7.40174 29.3333 7.9987 28.7364 7.9987 28C7.9987 27.2636 7.40174 26.6667 6.66536 26.6667C5.92898 26.6667 5.33203 27.2636 5.33203 28Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Badge */}
      {totalCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center leading-none">
          {totalCount > 99 ? "99+" : totalCount}
        </span>
      )}
    </div>
  );
}