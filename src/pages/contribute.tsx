import React, { useState } from "react";
import InlineRadio from "../components/InlineRadio";

export default function ContributePage() {
  const [type, setType] = useState<"ingredient" | "recipe">("ingredient");

  return (
    <div className="min-h-screen bg-white text-[#111]">
      <div className="mx-auto max-w-[360px] px-5 py-5">
        {/* Top Bar */}
        <header className="mb-6 flex items-center justify-between">
          <div className="text-[28px] font-extrabold tracking-[0.4px]">ALCOMY</div>
          <div className="text-[14px]">마이페이지</div>
        </header>

        {/* Title */}
        <h1 className="mb-6 text-[18px] font-semibold">기여하기</h1>

        {/* Radios (재료 / 칵테일 레시피) */}
        <div className="mb-8 grid grid-cols-2 gap-6">
          <InlineRadio
            name="ctype"
            value="ingredient"
            label="재료"
            checked={type === "ingredient"}
            onChange={() => setType("ingredient")}
          />
          <InlineRadio
            name="ctype"
            value="recipe"
            label="칵테일 레시피"
            checked={type === "recipe"}
            onChange={() => setType("recipe")}
          />
        </div>

        {/* Labels only (시안 그대로, 입력칸 없음) */}
        <div className="space-y-8">
          <div className="text-[14px]">제목</div>
          <div className="text-[14px]">설명</div>
        </div>

        {/* Submit Button */}
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="rounded-[10px] bg-[#111] px-4 py-2 text-[14px] font-medium text-white"
          >
            제출하기
          </button>
        </div>
      </div>
    </div>
  );
}
