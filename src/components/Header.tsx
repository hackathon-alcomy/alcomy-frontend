import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="h-24 flex items-center justify-between">
      <img src={logo} alt="Alcomy Logo" className="h-8 object-cover" />
      <button className="text-[14px]">로그인하기</button>
    </header>
  );
}
