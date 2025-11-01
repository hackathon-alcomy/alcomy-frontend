import React from "react";
import SearchBarPlain from "../components/SearchBarPlain";
import StarButton from "../components/StarButton";
import ResultCard from "../components/ResultCard";

export default function IngredientDetailPage() {
  return (
    <div className="min-h-screen bg-white text-[#111]">
      <div className="mx-auto max-w-[360px] px-5 py-5">
        {/* Header */}
        <header className="mb-5 flex items-center justify-between">
          <div className="text-[28px] font-extrabold tracking-[0.4px]">ALCOMY</div>
          <button className="text-[14px]">로그인하기</button>
        </header>

        {/* Search */}
        <SearchBarPlain placeholder="Value" />

        {/* 썸네일 + 즐겨찾기(오른쪽) */}
        <div className="mt-6 flex items-start justify-center">
          <div className="h-[160px] w-[160px] rounded bg-[#d9d9d9]" />
          <div className="ml-6 mt-2">
            <StarButton />
          </div>
        </div>

        {/* 재료명 + 설명 */}
        <div className="mt-4 text-center">
          <div className="text-[18px] font-extrabold">재료 명</div>
          <p className="mx-auto mt-3 max-w-[300px] text-[12px] leading-[1.65]">
            재료 설명입니다. 재료 설명입니다. 재료 설명입니다. 재료 설명입니다.
            재료 설명입니다. 재료 설명입니다.재료 설명입니다.
          </p>
        </div>

        {/* 만들 수 있어요! */}
        <section className="mt-9">
          <h2 className="mb-3 text-[16px] font-semibold">만들 수 있어요!</h2>
          <div className="flex gap-4">
            <ResultCard title="칵테일 명" />
            <ResultCard title="칵테일 명" />
            <ResultCard title="칵테일 명" />
          </div>
        </section>
      </div>
    </div>
  );
}
