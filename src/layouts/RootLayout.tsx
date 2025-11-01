import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div className="min-h-screen mx-auto flex flex-col max-w-[412px] px-2">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
