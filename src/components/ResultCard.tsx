import { useNavigate } from "react-router-dom";

interface Props {
  title: string; // "칵테일 명"
  subtitle?: string; // "+ 추가 재료 n개" 등
  id?: number;
  thumbnail?: string;
}

export default function ResultCard({ title, subtitle, id, thumbnail }: Props) {
  const navigate = useNavigate();
  return (
    <div
      className={`w-[96px] ${
        id !== undefined
          ? "cursor-pointer transition-transform hover:scale-[1.02]"
          : "cursor-not-allowed"
      }`}
      onClick={() => {
        if (id !== undefined) navigate(`/cocktail?id=${id}`);
      }}
    >
      <div className="h-[96px] w-[96px] rounded hover:shadow-md">
        <img
          src={thumbnail}
          alt={title}
          className="h-[96px] w-[96px] rounded object-contain"
        />
      </div>

      <div className="mt-2 text-ls font-medium">{title}</div>
      {subtitle ? (
        <div className="text-md leading-[1.2] text-[#4b5563]">{subtitle}</div>
      ) : null}
    </div>
  );
}
