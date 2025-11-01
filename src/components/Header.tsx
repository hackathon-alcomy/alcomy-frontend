import logo from "../assets/logo.png";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="h-24 flex items-center justify-between">
      <img src={logo} alt="Alcomy Logo" className="h-8 object-cover" />
      <Button variant="ghost" className="text-[14px] cursor-pointer">
        로그인하기
      </Button>
    </header>
  );
}
