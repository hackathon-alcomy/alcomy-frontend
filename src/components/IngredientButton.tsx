import { Button } from "./ui/button";

export default function IngredientButton({ value }: { value: string }) {
  return (
    <Button variant="secondary" className="p-2">
      {value}
    </Button>
  );
}
