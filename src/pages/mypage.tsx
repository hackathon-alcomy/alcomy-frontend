import React, { useState } from "react";
import ResultCard from "@/components/ResultCard";
import SectionGrid from "../components/SectionGrid";

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function MyPage() {
  const navigate = useNavigate();

  const [type, setType] = useState<"cocktail" | "ingredient">("cocktail");
  return (
    <div>
      {/* Title + ID */}
      <h1 className="text-lg font-semibold mb-4">마이페이지</h1>

      <div className="w-full flex gap-4 mb-6">
        <Button
          variant="default"
          className="w-full h-12"
          onClick={() => {
            setType("cocktail");
          }}
        >
          나의 재료
        </Button>
        <Button
          variant="default"
          className="w-full h-12"
          onClick={() => {
            setType("ingredient");
          }}
        >
          즐겨찾기
        </Button>
      </div>

      {/* 칵테일 3개 */}
      <SectionGrid title="">
        <ResultCard title="칵테일 명" id={1} />
        <ResultCard title="칵테일 명" id={1} />
        <ResultCard title="칵테일 명" id={1} />
      </SectionGrid>

      {/* 안내문구 */}
      <p className="mt-10 font-bold text-md">
        레시피나 재료를 추가하고 싶으신가요?
      </p>

      {/* 기여하기 버튼 */}
      <div className="mt-6 flex justify-center">
        <Button
          type="button"
          className="w-full"
          onClick={() => {
            navigate("/my/contribute");
          }}
        >
          기여하기
        </Button>
      </div>

      <Button
        variant="link"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-12 text-sm mt-1"
        onClick={() => {
          localStorage.removeItem("userId");
          navigate("/");
        }}
      >
        로그아웃
      </Button>
    </div>
  );
}
