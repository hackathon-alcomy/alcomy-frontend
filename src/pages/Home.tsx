import Search from "@/components/Search";
import TodayCocktail from "@/components/TodayCocktail";
import TodayMaterial from "@/components/TodayMaterial";
export default function Home() {
  return (
    <div>
      <Search />

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
