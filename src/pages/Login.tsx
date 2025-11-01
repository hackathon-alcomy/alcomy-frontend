import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState("");
  const [mode, setMode] = useState<"signup" | "login">("login");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!id.trim()) {
      alert("아이디를 입력해주세요!");
      return;
    }
    if (!password.trim()) {
      alert("비밀번호를 입력해주세요!");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/${
          mode === "signup" ? "member" : "auth"
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nickname: id,
            password: password,
          }),
        }
      );

      if (mode === "login") {
        if (response.status === 200) {
          localStorage.setItem("userId", id);
          navigate("/");
        } else if (response.status === 400) {
          alert("아이디 또는 비밀번호가 올바르지 않습니다.");
        }
      } else if (mode === "signup") {
        if (response.status === 201) {
          localStorage.setItem("userId", id);
          navigate("/");
        } else if (response.status === 400) {
          alert("이미 존재하는 아이디입니다.");
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  const handleSignup = () => {
    setMode("signup");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
      <h1 className="text-2xl font-semibold mb-6">
        {mode === "signup" ? "회원가입" : "로그인"}
      </h1>

      <Input
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="mb-2"
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-4"
      />

      <div>
        <Button className="w-full" onClick={handleLogin}>
          {mode === "signup" ? "회원가입" : "로그인"}
        </Button>
        {mode === "login" && (
          <Button variant="link" className="w-full" onClick={handleSignup}>
            회원가입
          </Button>
        )}
      </div>
    </div>
  );
}
