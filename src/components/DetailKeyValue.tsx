import React from "react";

interface Props {
  label: string;
  value: string;
}
export default function DetailKeyValue({ label, value }: Props) {
  return (
    <div className="text-md">
      <span className="font-semibold">{label}</span>
      <span className="ml-1">{value}</span>
    </div>
  );
}
