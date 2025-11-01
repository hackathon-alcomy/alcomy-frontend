import React from "react";
import SearchBarPlain from "../components/SearchBarPlain";
import SectionGrid from "../components/SectionGrid";
import ResultCard from "../components/ResultCard";

export default function IngredientsResultsPage() {
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

        {/* 지금 바로 만들 수 있어요! */}
        <SectionGrid title="지금 바로 만들 수 있어요!">
          <ResultCard title="칵테일 명" />
          <ResultCard title="칵테일 명" />
          <ResultCard title="칵테일 명" />
        </SectionGrid>

        {/* 구분선 */}
        <div className="my-5 h-[1px] w-full bg-black" />

        {/* 아 이것만 더 있으면...! */}
        <SectionGrid title="아 이것만 더 있으면...!" withTopDivider={false}>
          <ResultCard title="칵테일 명" subtitle="+ 추가 재료 n개" />
          <ResultCard title="칵테일 명" subtitle="+ 추가 재료 n개" />
          <ResultCard title="칵테일 명" subtitle="+ 추가 재료 n개" />
        </SectionGrid>
      </div>
    </div>
  );
}
