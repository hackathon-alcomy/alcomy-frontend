import React from "react";

interface Props {
  placeholder?: string;
  onSearchClick?: () => void;
}

export default function SearchBar({ placeholder = "Value", onSearchClick }: Props) {
  return (
    <div className="relative">
      <input
        aria-label="검색"
        type="text"
        placeholder={placeholder}
        className="w-full rounded-[28px] border-2 border-[#8e7364] bg-white px-4 pr-12 py-[14px] text-[14px] outline-none placeholder:text-[#a5a2a0]"
      />
      <button
        type="button"
        aria-label="검색"
        onClick={onSearchClick}
        className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full bg-[#8e7364]"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-[15px] w-[15px] text-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 21l-4.3-4.3M18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
