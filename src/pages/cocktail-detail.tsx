import Search from "@/components/Search";
import StarButton from "../components/StarButton";
import DetailKeyValue from "../components/DetailKeyValue";
import IngredientButton from "../components/IngredientButton";

export default function CocktailDetailPage() {
  return (
    <div>
      <Search />

      {/* 썸네일 + 즐겨찾기 */}
      <div className="w-full relative mt-6 flex items-start justify-center">
        <div className="h-[160px] w-[160px] rounded bg-[#d9d9d9]" />
        <div className="absolute top-0 right-8 translate-x-full ml-2">
          <StarButton />
        </div>
      </div>

      {/* 타이틀 / 도수 */}
      <div className="mt-4 flex items-start justify-center">
        <div className="w-full max-w-[300px]">
          <div className="w-full relative flex items-start justify-between">
            <div className="text-center w-full font-extrabold text-2xl">
              칵테일 명
            </div>
            <div className="absolute bottom-0 right-0 smt-[2px] text-md">
              도수%
            </div>
          </div>

          {/* 메타 정보 */}
          <div className="flex flex-col mt-2 gap-2">
            <div className="flex flex-row gap-2 w-[300px] flex-wrap">
              <IngredientButton value="오렌지" />
              <IngredientButton value="오렌지" />
              <IngredientButton value="오렌지" />
              <IngredientButton value="오렌지" />
              <IngredientButton value="오렌지" />
              <IngredientButton value="오렌지" />
              <IngredientButton value="오렌지" />
            </div>
            <DetailKeyValue label="잔 종류:" value="ooo" />
            <DetailKeyValue label="도구:" value="" />
          </div>

          {/* 설명 */}
          <p className="mt-3 text-center text-md leading-[1.65]">
            칵테일 설명 칵테일 설명칵테일의 설명 칵테일 설명 칵테일 설명칵테일의
            설명 칵테일 설명 칵테일 설명칵테일의 설명 칵테일 설명 칵테일
          </p>
        </div>
      </div>

      {/* 레시피 섹션 */}
      <div className="w-full px-8 mt-6 flex gap-4">
        <div className="h-[120px] w-[120px] flex-none rounded bg-[#d9d9d9]" />
        <ol className="list-decimal pl-5 text-md leading-7">
          <li>레시피가 들어옵니다. 레시피가</li>
          <li>레시피가 들어옵니다.</li>
          <li>레시피가 들어옵니다.</li>
          <li>레시피가 들어옵니다.</li>
        </ol>
      </div>
    </div>
  );
}
