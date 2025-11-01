import React, { useState } from "react";

interface Props {
  defaultOn?: boolean;
  onToggle?: (on: boolean) => void;
}

export default function StarButton({ defaultOn = false, onToggle }: Props) {
  const [on, setOn] = useState(defaultOn);
  const toggle = () => {
    setOn((v) => {
      onToggle?.(!v);
      return !v;
    });
  };

  return (
    <button
      type="button"
      aria-label={on ? "즐겨찾기 해제" : "즐겨찾기"}
      onClick={toggle}
      className="text-[#222] hover:opacity-75"
    >
      {/* 비어있는 별 / 채워진 별 */}
      {on ? (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#111]">
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
          <path
            d="m12 17.27 6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}
