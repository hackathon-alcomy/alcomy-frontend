import { Button } from "./ui/button";
import { useSearchStore } from "@/store/searchStore";

export default function SegmentToggle() {
  const { mode, setMode, setSelected } = useSearchStore();
  return (
    <div className="grid grid-cols-2 rounded-t-lg rounded-[14px] bg-background/90">
      <Button
        role="radio"
        aria-checked={mode === "name"}
        onClick={() => {
          setMode("name");
          setSelected([]);
        }}
        className="rounded-none rounded-t-lg shadow-none px-2 py-2 text-center text-[12px] transition-all "
        variant={mode === "name" ? "default" : "secondary"}
      >
        이름으로 검색하기
      </Button>
      <Button
        role="radio"
        aria-checked={mode === "ingredients"}
        onClick={() => setMode("ingredients")}
        className="rounded-none rounded-t-lg shadow-none px-2 py-2 text-center text-[12px] transition-all "
        variant={mode === "ingredients" ? "default" : "secondary"}
      >
        나의 재료로 레시피 검색하기
      </Button>
    </div>
  );
}
