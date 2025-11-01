import React, { useState } from "react";
import SegmentToggle, { type Mode } from "../components/SegmentToggle";
import SearchBar from "../components/SearchBar";
import { Button } from "./ui/button";

export default function Search() {
  const [mode, setMode] = useState<Mode>("name");
  const [selected, setSelected] = useState<string[]>([]);

  // ✅ 선택 토글 함수
  const toggleSelect = (item: string) => {
    setSelected(
      (prev) =>
        prev.includes(item)
          ? prev.filter((v) => v !== item) // 이미 있으면 제거
          : [...prev, item] // 없으면 추가
    );
  };

  return (
    <div className="mt-2 border border-primary border-2 rounded-xl p-1">
      <SegmentToggle mode={mode} onChange={setMode} />
      <SearchBar placeholder="검색어를 입력하세요" />

      {/* ✅ 선택된 재료 버튼 */}
      <div className="mt-2 flex flex-wrap gap-2">
        {selected.map((item) => (
          <Button key={item} disabled className="bg-gray-200 text-gray-800">
            {item}
          </Button>
        ))}
      </div>

      {/* ✅ 드롭다운 */}
      {mode === "ingredients" ? (
        <div className="z-10 flex flex-wrap gap-2 bg-white mt-2 p-2 rounded-lg max-h-[100px] overflow-y-auto">
          <Button
            variant={selected.includes("오렌지") ? "default" : "outline"} // 선택 상태 시각화
            onClick={() => toggleSelect("오렌지")}
          >
            오렌지
          </Button>
          <Button
            variant={selected.includes("레몬") ? "default" : "outline"}
            onClick={() => toggleSelect("레몬")}
          >
            레몬
          </Button>
          <Button
            variant={selected.includes("라임") ? "default" : "outline"}
            onClick={() => toggleSelect("라임")}
          >
            라임
          </Button>
        </div>
      ) : null}
    </div>
  );
}
