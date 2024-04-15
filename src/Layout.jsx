import Header from "./pages/header/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="mx-auto flex max-w-screen-xl">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}
