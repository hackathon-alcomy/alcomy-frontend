import { useDailyCocktails } from "@/hooks/useDailyCocktails";
import TodayCocktail from "@/components/TodayCocktail";

export default function TodayCocktails() {
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
    <>
      {cocktails.map((c) => (
        <TodayCocktail key={c.id} item={c} />
      ))}
    </>
  );
}
