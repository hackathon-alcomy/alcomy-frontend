import React from "react";

interface Props {
  title: string;        // "칵테일 명" / "재료 명"
}

export default function FavoriteTile({ title }: Props) {
  return (
    <div className="w-[96px]">
      <div className="h-[96px] w-[96px] rounded bg-[#d9d9d9]" />
      <div className="mt-2 text-[12px] font-medium">{title}</div>
    </div>
  );
}
