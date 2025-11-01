import Search from "@/components/Search";
import TodayCocktails from "@/components/TodayCocktails";
import TodayMaterials from "@/components/TodayMaterials";

export default function Home() {
  return (
    <div>
      <Search />

      {/* 오늘의 칵테일 */}
      <h2 className="w-full mt-6 mb-[14px] font-bold text-2xl">
        오늘의 칵테일
      </h2>
      <TodayCocktails />

      <hr></hr>

      {/* Fact */}
      <h2 className="w-full text-right mt-6 mb-[14px] font-bold text-2xl">
        칵테일 깨알 상식
      </h2>
      <TodayMaterials />
    </div>
  );
}
