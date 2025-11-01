import React from "react";
import type { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode; // 카드들
  withTopDivider?: boolean;
}

export default function SectionGrid({
  title,
  children,
  withTopDivider,
}: Props) {
  return (
    <section className="mt-6">
      {withTopDivider ? <div className="mb-5 h-[1px] w-full bg-black" /> : null}
      <h2 className="mb-3 text-xl font-semibold">{title}</h2>
      <div className="flex flex-wrap gap-4 w-full px-4">{children}</div>
    </section>
  );
}
