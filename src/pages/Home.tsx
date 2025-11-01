import React, { useState } from "react";
import SegmentToggle, { type Mode } from "../components/SegmentToggle";
import SearchBar from "../components/SearchBar";
import TodayCocktail from "@/components/TodayCocktail";
import TodayMaterial from "@/components/TodayMaterial";
export default function Home() {
  const [mode, setMode] = useState<Mode>("name");

  return (
    <div>
      {/* Segment + Search */}
      <div className="mt-2 border border-primary border-2 rounded-xl p-1">
        <SegmentToggle mode={mode} onChange={setMode} />
        <SearchBar placeholder="검색어를 입력하세요" />
      </div>

      {/* 오늘의 칵테일 */}
      <h2 className="w-full mt-6 mb-[14px] font-bold text-xl">오늘의 칵테일</h2>
      <TodayCocktail />

      <hr></hr>
      {/* Fact */}
      <h2 className="w-full text-right mt-6 mb-[14px] font-bold text-xl">
        칵테일 깨알 상식
      </h2>
      <TodayMaterial />
    </div>
  );
}
