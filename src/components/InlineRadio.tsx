import React from "react";

type Props = {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (value: string) => void;
};

export default function InlineRadio({ name, value, label, checked, onChange }: Props) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
        className="peer sr-only"
      />
      {/* custom radio */}
      <span
        className={`
          grid h-5 w-5 place-items-center rounded-full border
          border-[#6b5bd3] text-[#6b5bd3]
          peer-checked:bg-white
        `}
      >
        <span
          className={`
            h-[10px] w-[10px] rounded-full
            ${checked ? "bg-[#6b5bd3]" : "bg-transparent"}
          `}
        />
      </span>
      <span className="select-none text-[14px]">{label}</span>
    </label>
  );
}
