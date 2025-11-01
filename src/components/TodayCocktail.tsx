import { useNavigate } from "react-router-dom";
import type { Cocktail } from "@/hooks/useDailyCocktails";

export default function TodayCocktail({ item }: { item: Cocktail }) {
  const navigate = useNavigate();

  return (
    <article
      className="mb-[18px] flex gap-[14px] cursor-pointer"
      onClick={() => navigate("/cocktail?id=1")}
    >
      {/* 썸네일 이미지 */}
      <div className="h-[92px] w-[92px] flex-none rounded bg-[#d9d9d9] transition-shadow hover:shadow-md" />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="font-bold">{item.name}</div>
          <div className="text-[12px]">{item.content}%</div>
        </div>
        <div className="w-full text-right mt-[2px] text-[11px] text-muted-foreground">
          소주보다 쉬운
        </div>
        <p className="mt-2 leading-[1.65]">{item.description}</p>
      </div>
    </article>
  );
}
