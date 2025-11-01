import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import backgroundImage from "../assets/background.png";

export default function RootLayout() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-background w-full min-h-screen mx-auto flex flex-col max-w-[440px] px-4 shadow-lg">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
