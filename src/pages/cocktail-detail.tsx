import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Search from "@/components/Search";
import StarButton from "../components/StarButton";
import DetailKeyValue from "../components/DetailKeyValue";
import IngredientButton from "../components/IngredientButton";

interface CocktailDetails {
  name: string;
  thumbnail: string;
  ingredients: string[];
  cup: string;
  tool: string[];
  description: string;
  gif: string;
  todo: string;
  content: number; // 도수
  isFavorite: boolean;
}

export default function CocktailDetailPage() {
  const [searchParams] = useSearchParams();
  const cocktailId = searchParams.get("id");
  const [details, setDetails] = useState<CocktailDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!cocktailId) return;

    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/cocktail/${cocktailId}`
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
  }, [cocktailId]);

  const handleFavoriteToggle = async () => {
    const memberId = localStorage.getItem("userId");
    if (!memberId) {
      alert("로그인이 필요한 기능입니다.");
      return;
    }

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/member/${memberId}/cocktails/${cocktailId}`,
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
  if (!details) return <div>칵테일 정보를 찾을 수 없습니다.</div>;

  return (
    <div>
      <Search />

      {/* 썸네일 + 즐겨찾기 */}
      <div className="w-full relative mt-6 flex items-start justify-center">
        <img
          src={details.thumbnail}
          alt={details.name}
          className="h-[160px] w-[160px] rounded object-contain bg-[#ffffff]"
        />
        <div className="absolute top-0 right-8 translate-x-full ml-2">
          <StarButton on={isFavorite} onClick={handleFavoriteToggle} />
        </div>
      </div>

      {/* 타이틀 / 도수 */}
      <div className="mt-4 flex items-start justify-center">
        <div className="w-full max-w-[300px]">
          <div className="w-full relative flex items-start justify-between">
            <div className="text-center w-full font-extrabold text-2xl">
              {details.name}
            </div>
            <div className="absolute bottom-0 right-0 smt-[2px] text-md">
              {details.content}%
            </div>
          </div>

          {/* 메타 정보 */}
          <div className="flex flex-col mt-2 gap-2">
            <div className="flex flex-row gap-2 w-[300px] flex-wrap">
              {details.ingredients.map((ingredient) => (
                <IngredientButton key={ingredient} value={ingredient} />
              ))}
            </div>
            <DetailKeyValue label="잔 종류:" value={details.cup} />
            <DetailKeyValue label="도구:" value={details.tool.join(", ")} />
          </div>

          {/* 설명 */}
          <p className="mt-3 text-center text-md leading-[1.65]">
            {details.description}
          </p>
        </div>
      </div>

      {/* 레시피 섹션 */}
      <div className="w-full px-8 mt-6 flex gap-4">
        <img
          src={details.gif}
          alt={`${details.name} 제조 과정`}
          className="h-[120px] w-[120px] flex-none rounded object-contain bg-[#d9d9d9]"
        />
        <div className="pl-5 text-md leading-7">
          {details.todo.split("\n").map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
