import React, { useRef } from "react";

interface Props {
  defaultValue?: string;
  placeholder?: string;
  onClear?: () => void;
}

export default function SearchBarPlain({
  defaultValue = "",
  placeholder = "Value",
  onClear,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const clear = () => {
    if (inputRef.current) inputRef.current.value = "";
    onClear?.();
  };

  return (
    <div className="relative">
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        type="text"
        aria-label="검색"
        placeholder={placeholder}
        className="w-full rounded-[28px] border border-black/15 bg-white px-4 pr-10 py-[12px] text-[14px] outline-none placeholder:text-[#a3a3a3]"
      />
      <button
        type="button"
        aria-label="입력 지우기"
        onClick={clear}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#7a7a7a] hover:text-[#111]"
      >
        {/* X icon */}
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
