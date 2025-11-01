import logo from "../assets/logo.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="h-24 flex items-center justify-between">
      <img
        src={logo}
        alt="Alcomy Logo"
        className="h-8 object-cover cursor-pointer"
        onClick={() => navigate("/")}
      />
      <Button
        variant="ghost"
        className="text-[14px] cursor-pointer"
        onClick={() => navigate("/login")}
      >
        로그인하기
      </Button>
    </header>
  );
}
