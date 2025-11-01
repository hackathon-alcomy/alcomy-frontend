import type { Material } from "@/hooks/useDailyMaterials";

export default function TodayMaterial({ item }: { item: Material | null }) {
  return (
    <article className="flex gap-[14px]">
      <div className="h-[92px] w-[92px] flex-none rounded bg-[#d9d9d9]">
        <img
          src={item?.thumbnail}
          alt={item?.name}
          className="h-[92px] w-[92px] flex-none rounded object-contain bg-[#d9d9d9]"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="font-bold">{item?.name}</div>
        <p className="mt-2 leading-[1.65]">{item?.description}</p>
      </div>
    </article>
  );
}
