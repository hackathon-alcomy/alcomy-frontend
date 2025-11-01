import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  placeholder?: string;
  onSearchClick?: () => void;
}

export default function SearchBar({
  placeholder = "Value",
  onSearchClick,
}: Props) {
  const navigate = useNavigate();
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
        onClick={() => {
          onSearchClick;
          navigate("/result");
        }}
        variant="ghost"
      >
        <Search />
      </Button>
    </div>
  );
}
