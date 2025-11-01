import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("userId")
  );

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("userId"));
  }, [location]);

  return (
    <header className="h-12 flex items-center justify-between sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <img
        src={logo}
        alt="Alcomy Logo"
        className="h-8 object-cover cursor-pointer"
        onClick={() => navigate("/")}
      />
      {isLoggedIn ? (
        <Button
          variant="ghost"
          className="text-[14px] cursor-pointer"
          onClick={() => navigate("/my")}
        >
          마이페이지
        </Button>
      ) : (
        <Button
          variant="ghost"
          className="text-[14px] cursor-pointer"
          onClick={() => navigate("/login")}
        >
          로그인하기
        </Button>
      )}
    </header>
  );
}
