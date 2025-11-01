import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSearchStore } from "@/store/searchStore";

interface Props {
  placeholder?: string;
}

export default function SearchBar({ placeholder = "Value" }: Props) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { mode, selected, setResults, setAlmostAvailableResults, setLoading } =
    useSearchStore();

  const handleSearch = async () => {
    if (mode === "name") {
      if (!query.trim()) {
        alert("검색어를 입력해주세요.");
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/cocktails?query=${query}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setResults(data.cocktails);
        setAlmostAvailableResults([]);
      } catch (error) {
        console.error("Failed to fetch cocktails:", error);
        setResults([]); // 에러 발생 시 결과 초기화
      } finally {
        setLoading(false);
      }
    } else if (mode === "ingredients") {
      if (selected.length === 0) {
        alert("재료를 선택해주세요.");
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/cocktails`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ materials: selected }),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setResults(data.availableCocktails);
        setAlmostAvailableResults(data.almostAvailableCocktails);
      } catch (error) {
        console.error("Failed to fetch cocktails by ingredients:", error);
        setResults([]);
        setAlmostAvailableResults([]);
      } finally {
        setLoading(false);
      }
    }

    navigate("/result");
  };

  return (
    <div className="flex items-between border border-input px-3 py-1 rounded-b-lg shadow-sm">
      <Input
        aria-label="검색"
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        variant="ghost"
        className="shadow-none border-none focus-visible:ring-none"
      />
      <Button
        type="button"
        aria-label="검색"
        onClick={handleSearch}
        variant="ghost"
      >
        <Search />
      </Button>
    </div>
  );
}
