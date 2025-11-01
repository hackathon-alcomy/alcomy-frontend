import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

interface Props {
  placeholder?: string;
  onSearchClick?: () => void;
}

export default function SearchBar({
  placeholder = "Value",
  onSearchClick,
}: Props) {
  return (
    <div className="flex items-between border border-input px-3 py-1 rounded-b-lg shadow-sm">
      <Input
        aria-label="검색"
        type="text"
        placeholder={placeholder}
        variant="ghost"
        className="shadow-none border-none focus-visible:ring-none"
      />
      <Button
        type="button"
        aria-label="검색"
        onClick={onSearchClick}
        variant="ghost"
      >
        <Search />
      </Button>
    </div>
  );
}
