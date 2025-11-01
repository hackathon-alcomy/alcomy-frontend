import React from "react";
import SearchBarPlain from "../components/SearchBarPlain";
import StarButton from "../components/StarButton";
import DetailKeyValue from "../components/DetailKeyValue";

export default function CocktailDetailPage() {
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

        {/* 썸네일 + 즐겨찾기 */}
        <div className="mt-6 flex items-start justify-center">
          <div className="relative">
            <div className="h-[160px] w-[160px] rounded bg-[#d9d9d9]" />
          </div>
          {/* 별 아이콘은 썸네일 오른쪽에 배치 */}
          <div className="ml-6 mt-2">
            <StarButton />
          </div>
        </div>

        {/* 타이틀 / 도수 */}
        <div className="mt-4 flex items-start justify-center">
          <div className="w-full max-w-[300px]">
            <div className="flex items-start justify-between">
              <div className="text-center w-full font-extrabold text-[18px]">칵테일 명</div>
              <div className="ml-3 mt-[2px] text-[12px]">도수%</div>
            </div>

            {/* 메타 정보 */}
            <div className="mt-2 space-y-[2px]">
              <DetailKeyValue label="재료:" value="ooo, ooo, ooo" />
              <DetailKeyValue label="잔 종류:" value="ooo" />
              <DetailKeyValue label="도구:" value="" />
            </div>

            {/* 설명 */}
            <p className="mt-3 text-center text-[12px] leading-[1.65]">
              칵테일 설명 칵테일 설명칵테일의 설명 칵테일
              설명 칵테일 설명칵테일의 설명 칵테일 설명 칵테일
              설명칵테일의 설명 칵테일 설명 칵테일
            </p>
          </div>
        </div>

        {/* 레시피 섹션 */}
        <div className="mt-6 flex gap-4">
          <div className="h-[120px] w-[120px] flex-none rounded bg-[#d9d9d9]" />
          <ol className="list-decimal pl-5 text-[14px] leading-7">
            <li>레시피가 들어옵니다. 레시피가</li>
            <li>레시피가 들어옵니다.</li>
            <li>레시피가 들어옵니다.</li>
            <li>레시피가 들어옵니다.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
