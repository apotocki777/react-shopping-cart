import Header from "./pages/header/Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const resp = await fetch("http://localhost:3000/products");
      const data = await resp.json();
      setData(data);
    }

    if (!ignore) {
      fetchData();
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col font-josefin">
      <Header></Header>
      <main className="pb-20">
        {data ? <Outlet context={data}></Outlet> : <div>Loading...</div>}
      </main>
    </div>
  );
}
