import React from "react";
import FavoriteTile from "../components/FavoriteTile";
import { Button } from "@/components/ui/button";

export default function MyPage() {
  return (
    <div>
      {/* Title + ID */}
      <h1 className="text-[18px] font-semibold">마이페이지</h1>
      <div className="mt-2 text-[14px]">
        <span className="mr-2">ID:</span>
        {/* 실제 사용자 ID가 있다면 여기 바인딩 */}
      </div>

      {/* 즐겨찾기 */}
      <h2 className="mt-6 mb-3 text-[16px] font-semibold">즐겨찾기</h2>

      {/* 칵테일 3개 */}
      <div className="mb-6 flex gap-4">
        <FavoriteTile title="칵테일 명" />
        <FavoriteTile title="칵테일 명" />
        <FavoriteTile title="칵테일 명" />
      </div>

      {/* 재료 3개 */}
      <div className="flex gap-4">
        <FavoriteTile title="재료 명" />
        <FavoriteTile title="재료 명" />
        <FavoriteTile title="재료 명" />
      </div>

      {/* 안내문구 */}
      <p className="mt-10 text-md">레시피나 재료를 추가하고 싶으신가요?</p>

      {/* 기여하기 버튼 */}
      <div className="mt-6 flex justify-center">
        <Button type="button" className="w-full">
          기여하기
        </Button>
      </div>
    </div>
  );
}
