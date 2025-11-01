import React, { useEffect, useState } from "react";
import ResultCard from "@/components/ResultCard";
import SectionGrid from "../components/SectionGrid";

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface FavoriteItem {
  id: number;
  name: string;
  thumbnail: string;
}

interface UserData {
  nickname: string;
  favoriteCocktails: FavoriteItem[];
  favoriteMaterials: FavoriteItem[];
}

export default function MyPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [type, setType] = useState<"cocktail" | "ingredient">("cocktail");

  useEffect(() => {
    const memberId = localStorage.getItem("userId");
    if (!memberId) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    const fetchUserData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/member/${memberId}`
        );
        if (!response.ok) {
          throw new Error("사용자 정보를 불러오는 데 실패했습니다.");
        }
        const data = await response.json();
        setUserData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <div>
      {/* Title + ID */}
      <h1 className="text-lg font-semibold mb-4">
        {userData?.nickname}님, 환영합니다!
      </h1>

      <div className="w-full flex gap-4 mb-6">
        <Button
          variant={type === "ingredient" ? "default" : "secondary"}
          className="w-full h-12"
          onClick={() => setType("ingredient")}
        >
          나의 재료
        </Button>
        <Button
          variant={type === "cocktail" ? "default" : "secondary"}
          className="w-full h-12"
          onClick={() => setType("cocktail")}
        >
          즐겨찾기
        </Button>
      </div>

      {/* 칵테일 3개 */}
      {type === "cocktail" && (
        <SectionGrid title="즐겨찾는 칵테일">
          {userData?.favoriteCocktails.map((item) => (
            <ResultCard key={item.id} title={item.name} id={item.id} />
          ))}
        </SectionGrid>
      )}

      {type === "ingredient" && (
        <SectionGrid title="나의 재료">
          {userData?.favoriteMaterials.map((item) => (
            <ResultCard key={item.id} title={item.name} id={item.id} />
          ))}
        </SectionGrid>
      )}

      {/* 안내문구 */}
      <p className="mt-10 font-bold text-md">
        레시피나 재료를 추가하고 싶으신가요?
      </p>

      {/* 기여하기 버튼 */}
      <div className="mt-6 flex justify-center">
        <Button
          type="button"
          className="w-full"
          onClick={() => {
            navigate("/my/contribute");
          }}
        >
          기여하기
        </Button>
      </div>

      <Button
        variant="link"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-12 text-sm mt-1"
        onClick={() => {
          localStorage.removeItem("userId");
          navigate("/");
        }}
      >
        로그아웃
      </Button>
    </div>
  );
}
