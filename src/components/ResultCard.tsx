import React from "react";

interface Props {
  title: string;          // "칵테일 명"
  subtitle?: string;      // "+ 추가 재료 n개" 등
}

export default function ResultCard({ title, subtitle }: Props) {
  return (
    <div className="w-[96px]">
      <div className="h-[96px] w-[96px] rounded bg-[#d9d9d9]" />
      <div className="mt-2 text-[12px] font-medium">{title}</div>
      {subtitle ? (
        <div className="text-[12px] leading-[1.2] text-[#4b5563]">{subtitle}</div>
      ) : null}
    </div>
  );
}
