import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!id.trim()) {
      alert("아이디를 입력해주세요!");
      return;
    }

    localStorage.setItem("userId", id);

    navigate("/my");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6">
      <h1 className="text-2xl font-semibold mb-6">로그인</h1>

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

      <Button className="w-full" onClick={handleLogin}>
        로그인
      </Button>
    </div>
  );
}
