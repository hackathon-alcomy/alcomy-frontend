import Search from "@/components/Search";

import StarButton from "../components/StarButton";
import ResultCard from "../components/ResultCard";

export default function IngredientDetailPage() {
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

      {/* 재료명 + 설명 */}
      <div className="mt-4 text-center">
        <div className="text-2xl font-extrabold">재료 명</div>
        <p className="mx-auto mt-3 max-w-[300px] text-md leading-[1.65]">
          재료 설명입니다. 재료 설명입니다. 재료 설명입니다. 재료 설명입니다.
          재료 설명입니다. 재료 설명입니다.재료 설명입니다.
        </p>
      </div>

      {/* 만들 수 있어요! */}
      <section className="mt-9 w-full px-8">
        <h2 className="mb-3 text-xl font-semibold">만들 수 있어요!</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          <ResultCard title="칵테일 명" />
          <ResultCard title="칵테일 명" />
          <ResultCard title="칵테일 명" />
          <ResultCard title="칵테일 명" />
        </div>
      </section>
    </div>
  );
}
