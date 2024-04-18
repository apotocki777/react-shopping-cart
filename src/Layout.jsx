import Header from "./pages/header/Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout() {
  const [productData, setProductData] = useState(null);
  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchProductData() {
      const resp = await fetch(
        "https://vercel-api-one-gamma.vercel.app/products"
      );
      const data = await resp.json();
      setProductData(data);
    }

    async function fetchFilterData() {
      const resp = await fetch(
        "https://vercel-api-one-gamma.vercel.app/filters"
      );
      const data = await resp.json();
      setFilterData(data);
    }

    if (!ignore) {
      fetchProductData();
      fetchFilterData();
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col font-josefin">
      <Header></Header>
      <main className="pb-20">
        {productData && filterData ? (
          <Outlet context={[productData, filterData]}></Outlet>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
}
