import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* <Navbar /> */}
      <main className="mx-auto max-w-5xl p-6">
        <Outlet />
      </main>
    </div>
  );
}
