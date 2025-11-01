import Search from "@/components/Search";
import TodayCocktail from "@/components/TodayCocktail";
import TodayMaterial from "@/components/TodayMaterial";

import { useDailyCocktails } from "@/hooks/useDailyCocktails";

export default function Home() {
  const { data, loading, error } = useDailyCocktails();

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="h-[92px] w-[92px] rounded bg-gray-200 animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-2/3 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 text-sm">불러오는 중 오류가 발생했어요.</div>
    );
  }

  const cocktails = data?.cocktails ?? [];

  return (
    <div>
      <Search />

      {/* 오늘의 칵테일 */}
      <h2 className="w-full mt-6 mb-[14px] font-bold text-2xl">
        오늘의 칵테일
      </h2>
      {cocktails.length === 0 ? (
        <p className="text-sm text-muted-foreground">오늘의 칵테일이 없어요.</p>
      ) : (
        cocktails.map((c) => <TodayCocktail key={c.id} item={c} />)
      )}

      <hr></hr>
      {/* Fact */}
      <h2 className="w-full text-right mt-6 mb-[14px] font-bold text-2xl">
        칵테일 깨알 상식
      </h2>
      <TodayMaterial />
    </div>
  );
}
