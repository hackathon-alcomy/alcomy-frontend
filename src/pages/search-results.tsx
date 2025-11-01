import Search from "@/components/Search";
import SectionGrid from "../components/SectionGrid";
import ResultCard from "../components/ResultCard";
import { useSearchStore } from "@/store/searchStore";

export default function SearchResultsPage() {
  const { mode, results, almostAvailableResults, loading } = useSearchStore();

  if (loading) {
    return (
      <div>
        <Search />
        <div className="mt-10 text-center">검색 중...</div>
      </div>
    );
  }

  if (results.length === 0 && almostAvailableResults.length === 0) {
    return (
      <div>
        <Search />
        <div className="mt-10 text-center">검색 결과가 없습니다.</div>
      </div>
    );
  }

  return (
    <div>
      <Search />

      {results.length > 0 && (
        <SectionGrid
          title={mode === "name" ? "검색 결과" : "지금 바로 만들 수 있어요!"}
        >
          {results.map((cocktail) => (
            <ResultCard
              key={cocktail.id}
              title={cocktail.name}
              id={cocktail.id}
            />
          ))}
        </SectionGrid>
      )}

      {results.length > 0 && almostAvailableResults.length > 0 && (
        <div className="my-5 h-[1px] w-full bg-black" />
      )}

      {almostAvailableResults.length > 0 && (
        <SectionGrid title="아 이것만 더 있으면...!" withTopDivider={false}>
          {almostAvailableResults.map((cocktail) => (
            <ResultCard
              key={cocktail.id}
              title={cocktail.name}
              id={cocktail.id}
              subtitle={`+ ${cocktail.missingIngredients}개`}
            />
          ))}
        </SectionGrid>
      )}
    </div>
  );
}
