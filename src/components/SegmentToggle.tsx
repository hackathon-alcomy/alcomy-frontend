import { Button } from "./ui/button";

export type Mode = "name" | "ingredients";

interface Props {
  mode: Mode;
  onChange: (m: Mode) => void;
}

export default function SegmentToggle({ mode, onChange }: Props) {
  return (
    <div className="grid grid-cols-2 rounded-t-lg rounded-[14px] bg-background/90">
      <Button
        role="radio"
        aria-checked={mode === "name"}
        onClick={() => onChange("name")}
        className="rounded-none rounded-t-lg shadow-none px-2 py-2 text-center text-[12px] font-semibold transition-all "
        variant={mode === "name" ? "default" : "secondary"}
      >
        이름으로 검색하기
      </Button>
      <Button
        role="radio"
        aria-checked={mode === "ingredients"}
        onClick={() => onChange("ingredients")}
        className="rounded-none rounded-t-lg shadow-none px-2 py-2 text-center text-[12px] font-semibold transition-all "
        variant={mode === "ingredients" ? "default" : "secondary"}
      >
        나의 재료로 레시피 검색하기
      </Button>
    </div>
  );
}
