import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout() {
  const [productData, setProductData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    cart.some((item) => item.id === product.id)
      ? setCart(
          cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  totalPrice: item.totalPrice + item.price,
                }
              : item
          )
        )
      : setCart([
          ...cart,
          {
            name: product.name,
            id: product.id,
            brand: product.brand,
            price: product.price,
            totalPrice: product.price,
            quantity: 1,
            imageSet: product.imageSet,
          },
        ]);
  };

  const removeFromCart = (product) => {
    let productInCart = cart.find((el) => el.id === product.id);
    if (productInCart.quantity === 1) {
      let newCart = [...cart].filter((item) => item.id !== product.id);
      setCart(newCart);
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: item.totalPrice - item.price,
              }
            : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    let ignore = false;

    async function fetchProductData() {
      const resp = await fetch(
        "https://vercel-api-one-gamma.vercel.app/products"
        // "http://localhost:3000/products"
      );
      const data = await resp.json();
      setProductData(data);
      setIsDataLoaded(true);
    }

    async function fetchFilterData() {
      const resp = await fetch(
        "https://vercel-api-one-gamma.vercel.app/filters"
        // "http://localhost:3000/filters"
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
    <div className="mx-auto flex min-h-screen flex-col items-center font-josefin">
      <Header cart={cart}></Header>
      <main className="max-w-full">
        {productData && filterData ? (
          <Outlet
            context={[
              productData,
              filterData,
              cart,
              addToCart,
              removeFromCart,
              clearCart,
              isDataLoaded,
            ]}
          ></Outlet>
        ) : (
          <div className="flex h-[80vh] items-center justify-center text-4xl text-black">
            Loading...
          </div>
        )}
      </main>
      <Footer></Footer>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
}
