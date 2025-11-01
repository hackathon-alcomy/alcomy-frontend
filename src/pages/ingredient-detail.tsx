import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Search from "@/components/Search";
import StarButton from "../components/StarButton";
import ResultCard from "../components/ResultCard";

interface Cocktail {
  id: number;
  name: string;
  thumbnail: string;
}

interface IngredientDetails {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  availableCocktails: Cocktail[];
  isFavorite: boolean;
}

export default function IngredientDetailPage() {
  const [searchParams] = useSearchParams();
  const ingredientName = searchParams.get("name");
  const [details, setDetails] = useState<IngredientDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!ingredientName) return;

    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/ingredient?name=${ingredientName}`
        );
        if (!response.ok) throw new Error("데이터를 불러오는 데 실패했습니다.");
        const data = await response.json();
        setDetails(data);
        setIsFavorite(data.isFavorite);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [ingredientName]);

  const handleFavoriteToggle = async () => {
    const memberId = localStorage.getItem("userId");
    if (!memberId) {
      alert("로그인이 필요한 기능입니다.");
      return;
    }
    if (!details) return;

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/member/${memberId}/ingredients/${ingredientName}`,
        {
          method: "POST",
        }
      );

      if (response.status === 201) {
        // 201 Created: 즐겨찾기 추가 성공
        setIsFavorite(true);
      } else if (response.status === 204) {
        // 204 No Content: 즐겨찾기 삭제 성공
        setIsFavorite(false);
      } else {
        throw new Error("요청에 실패했습니다.");
      }
    } catch (err) {
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!details) return <div>재료 정보를 찾을 수 없습니다.</div>;

  return (
    <div>
      <Search />

      {/* 썸네일 + 즐겨찾기 */}
      <div className="w-full relative mt-6 flex items-start justify-center">
        <img
          src={details.thumbnail}
          alt={details.name}
          className="h-[160px] w-[160px] rounded object-cover bg-[#d9d9d9]"
        />
        <div className="absolute top-0 right-8 translate-x-full ml-2">
          <StarButton on={isFavorite} onClick={handleFavoriteToggle} />
        </div>
      </div>

      {/* 재료명 + 설명 */}
      <div className="mt-4 text-center">
        <div className="text-2xl font-extrabold">{details.name}</div>
        <p className="mx-auto mt-3 max-w-[300px] text-md leading-[1.65]">
          {details.description}
        </p>
      </div>

      {/* 만들 수 있어요! */}
      <section className="mt-9 w-full px-8">
        <h2 className="mb-3 text-xl font-semibold">만들 수 있어요!</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {details.availableCocktails.map((cocktail) => (
            <ResultCard
              key={cocktail.id}
              title={cocktail.name}
              id={cocktail.id}
              thumbnail={cocktail.thumbnail}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
