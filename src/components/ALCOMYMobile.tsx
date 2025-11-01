import React, { useState } from "react";
import SegmentToggle, { type Mode } from "./SegmentToggle";
import SearchBar from "./SearchBar";

export default function ALCOMYMobile() {
  const [mode, setMode] = useState<Mode>("name");

  return (
    <div className="min-h-screen bg-white text-[#920b0b]">
      <div className="mx-auto max-w-[360px] px-5 py-5">
        {/* Header */}
        <header className="mb-[22px] flex items-center justify-between">
          <div className="text-[28px] font-extrabold tracking-[0.4px]">
            ALCOMY
          </div>
          <button className="text-[14px]">로그인하기</button>
        </header>

        {/* Segment + Search */}
        <div className="mt-2">
          <SegmentToggle mode={mode} onChange={setMode} />
          <SearchBar placeholder="Value" />
        </div>

        {/* 오늘의 칵테일 */}
        <h2 className="mt-6 mb-[14px] text-[18px]">오늘의 칵테일</h2>

        {/* List 1 */}
        <article className="mb-[18px] flex gap-[14px]">
          <div className="h-[92px] w-[92px] flex-none rounded bg-[#d9d9d9]" />
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div className="font-bold text-red-50">칵테일 명</div>
              <div className="text-[12px]">도수%</div>
            </div>
            <div className="mt-[2px] text-[11px] text-[#6b7280]">
              소주보다 쉬운
            </div>
            <p className="mt-2 text-[12px] leading-[1.65]">
              칵테일 설명 칵테일 설명칵테일의 설명 칵테일 설명 칵테일
              설명칵테일의 설명 칵테일 설명 칵테일 설명칵테일의 설명 칵테일 설명
              칵테일 설명칵테일의 설명 칵테일
            </p>
          </div>
        </article>

        {/* List 2 */}
        <article className="mb-[26px] flex gap-[14px]">
          <div className="h-[92px] w-[92px] flex-none rounded bg-[#d9d9d9]" />
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div className="font-bold">칵테일 명</div>
              <div className="text-[12px]">도수%</div>
            </div>
            <div className="mt-[2px] text-[11px] text-[#6b7280]">
              소주보다 쉬운
            </div>
            <p className="mt-2 text-[12px] leading-[1.65]">
              칵테일 설명 칵테일 설명 칵테일의 설명 칵테일 설명 칵테일
              설명칵테일의 설명 칵테일 설명 칵테일 설명칵테일의 설명 칵테일 설명
              칵테일 설명칵테일의 설명 칵테일
            </p>
          </div>
        </article>

        {/* Fact */}
        <h2 className="mb-[6px] text-center text-[18px]">칵테일 깨알 상식</h2>

        <article className="flex gap-[14px]">
          <div className="h-[92px] w-[92px] flex-none rounded bg-[#d9d9d9]" />
          <div className="min-w-0 flex-1">
            <div className="font-bold">럼</div>
            <p className="mt-2 text-[12px] leading-[1.65] text-[#16892d]">
              설명이 들어옵니다. 설명이 들어옵니다. 설명이 들어옵니다. 설명이
              들어옵니다. 설명이 들어옵니다. 설명이 들어옵니다. 설명이
              들어옵니다. 설명이 들어옵니다. 피
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
