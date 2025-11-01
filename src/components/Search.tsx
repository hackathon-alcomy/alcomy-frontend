import SegmentToggle from "../components/SegmentToggle";
import SearchBar from "../components/SearchBar";
import { Button } from "./ui/button";
import { useSearchStore } from "@/store/searchStore";
import { useIngredientsList } from "@/hooks/useIngredientsList";

export default function Search() {
  const { mode, selected, toggleSelect } = useSearchStore();
  const { data, loading, error } = useIngredientsList();

  return (
    <div className="mt-2 border border-primary border-2 rounded-xl p-1">
      <SegmentToggle />
      <SearchBar placeholder="검색어를 입력하세요" />

      {/* ✅ 선택된 재료 버튼 */}
      <div className="mt-2 flex flex-wrap gap-2">
        {selected.map((item) => (
          <Button key={item} disabled className="bg-gray-200 text-gray-800">
            {item}
          </Button>
        ))}
      </div>

      {/* ✅ 드롭다운 */}
      {mode === "ingredients" ? (
        <div className="z-10 flex flex-wrap gap-2 bg-white mt-2 p-2 rounded-lg max-h-[100px] overflow-y-auto">
          {loading && <div>재료 목록을 불러오는 중...</div>}
          {Boolean(error) && <div>오류가 발생했습니다.</div>}
          {data?.ingredients.map((ingredient) => (
            <Button
              key={ingredient}
              variant={selected.includes(ingredient) ? "default" : "outline"}
              onClick={() => toggleSelect(ingredient)}
            >
              {ingredient}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
