export default function TodayCocktail() {
  return (
    <article className="mb-[18px] flex gap-[14px] cursor-pointer">
      {/* 썸네일 이미지 */}
      <div className="h-[92px] w-[92px] flex-none rounded bg-[#d9d9d9] transition-shadow hover:shadow-md" />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="font-bold text-red-50">칵테일 명</div>
          <div className="text-[12px]">도수%</div>
        </div>
        <div className="mt-[2px] text-[11px] text-[#6b7280]">소주보다 쉬운</div>
        <p className="mt-2 text-[12px] leading-[1.65]">
          칵테일 설명 칵테일 설명칵테일의 설명 칵테일 설명 칵테일 설명칵테일의
          설명 칵테일 설명 칵테일 설명칵테일의 설명 칵테일 설명 칵테일
          설명칵테일의 설명 칵테일
        </p>
      </div>
    </article>
  );
}
