import React from "react";

export type Mode = "name" | "ingredients";

interface Props {
  mode: Mode;
  onChange: (m: Mode) => void;
}

export default function SegmentToggle({ mode, onChange }: Props) {
  return (
    <div className="mb-2 grid grid-cols-2 rounded-[14px] border border-black/5 bg-[#f2efec]/90 p-1">
      <button
        type="button"
        role="radio"
        aria-checked={mode === "name"}
        onClick={() => onChange("name")}
        className={
          "rounded-[10px] px-2 py-2 text-center text-[12px] font-semibold transition-all " +
          (mode === "name"
            ? "bg-[#8e7364] text-white shadow-[0_1px_0_rgba(0,0,0,.05),0_6px_14px_rgba(142,115,100,.25)]"
            : "text-[#6b5b52]")
        }
      >
        이름으로 검색하기
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={mode === "ingredients"}
        onClick={() => onChange("ingredients")}
        className={
          "rounded-[10px] px-2 py-2 text-center text-[12px] font-semibold transition-all " +
          (mode === "ingredients"
            ? "bg-[#8e7364] text-white shadow-[0_1px_0_rgba(0,0,0,.05),0_6px_14px_rgba(142,115,100,.25)]"
            : "text-[#6b5b52]")
        }
      >
        나의 재료로 레시피 검색하기
      </button>
    </div>
  );
}
