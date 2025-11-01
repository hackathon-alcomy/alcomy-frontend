import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function IngredientButton({ value }: { value: string }) {
  const navigate = useNavigate();

  return (
    <Button
      variant="secondary"
      className="p-2"
      onClick={() => navigate(`/ingredient?name=${value}`)}
    >
      {value}
    </Button>
  );
}
