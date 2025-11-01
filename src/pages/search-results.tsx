import Search from "@/components/Search";
import SectionGrid from "../components/SectionGrid";
import ResultCard from "../components/ResultCard";

export default function SearchResultsPage() {
  return (
    <div>
      <Search />

      {/* 지금 바로 만들 수 있어요! */}
      <SectionGrid title="지금 바로 만들 수 있어요!">
        <ResultCard title="칵테일 명" id={1} />
        <ResultCard title="칵테일 명" id={1} />
        <ResultCard title="칵테일 명" id={1} />
        <ResultCard title="칵테일 명" id={1} />
        <ResultCard title="칵테일 명" id={1} />
        <ResultCard title="칵테일 명" id={1} />
      </SectionGrid>

      {/* 구분선 */}
      <div className="my-5 h-[1px] w-full bg-black" />

      {/* 아 이것만 더 있으면...! */}
      <SectionGrid title="아 이것만 더 있으면...!" withTopDivider={false}>
        <ResultCard title="칵테일 명" id={1} subtitle="+ n개" />
        <ResultCard title="칵테일 명" id={1} subtitle="+ n개" />
        <ResultCard title="칵테일 명" id={1} subtitle="+ n개" />
      </SectionGrid>
    </div>
  );
}
