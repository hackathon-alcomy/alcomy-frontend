import React, { useState } from "react";
import SegmentToggle, { type Mode } from "../components/SegmentToggle";
import SearchBar from "../components/SearchBar";

export default function Search() {
  const [mode, setMode] = useState<Mode>("name");
  return (
    <div className="mt-2 border border-primary border-2 rounded-xl p-1">
      <SegmentToggle mode={mode} onChange={setMode} />
      <SearchBar placeholder="검색어를 입력하세요" />
    </div>
  );
}
