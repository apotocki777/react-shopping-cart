import Header from "./pages/header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col font-josefin">
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}
