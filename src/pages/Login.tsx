import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-2xl font-semibold mb-4">로그인</h1>
      <Input type="text" placeholder="아이디" className="mb-2" />
      <Input type="password" placeholder="비밀번호" className="mb-4" />
      <Button className="w-full">로그인</Button>
    </div>
  );
}
