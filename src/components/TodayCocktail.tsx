import { useNavigate } from "react-router-dom";
import type { Cocktail } from "@/hooks/useDailyCocktails";

export default function TodayCocktail({ item }: { item: Cocktail }) {
  const navigate = useNavigate();
  const getContentDescription = (content: number) => {
    if (content < 5) {
      return "알린이";
    }
    if (content < 10) {
      return "가볍게 마실 수 있어요";
    }
    if (content < 15) {
      return "맥주보다 세요";
    }
    return "소주보다 세요";
  };

  return (
    <article
      className="mb-[18px] flex gap-[14px] cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={() => navigate(`/cocktail?id=${item.id}`)}
    >
      {/* 썸네일 이미지 */}
      <div className="h-[92px] w-[92px] flex-none rounded bg-[#d9d9d9] transition-shadow hover:shadow-md">
        <img
          src={item?.thumbnail}
          alt={item?.name}
          className="h-[92px] w-[92px] flex-none rounded object-contain bg-[#d9d9d9]"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="font-bold">{item.name}</div>
          <div className="text-[12px]">{item.content}%</div>
        </div>
        <div className="w-full text-right mt-[2px] text-[11px] text-muted-foreground">
          {getContentDescription(item.content)}
        </div>
        <p className="mt-2 leading-[1.65]">{item.description}</p>
      </div>
    </article>
  );
}
