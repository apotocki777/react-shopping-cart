import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout() {
  const [productData, setProductData] = useState(null);
  const [filterData, setFilterData] = useState(null);
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
        // "https://vercel-api-one-gamma.vercel.app/products"
        "http://localhost:3000/products"
      );
      const data = await resp.json();
      setProductData(data);
    }

    async function fetchFilterData() {
      const resp = await fetch(
        // "https://vercel-api-one-gamma.vercel.app/filters"
        "http://localhost:3000/filters"
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
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col font-josefin">
      <Header cart={cart}></Header>
      <main className="pb-20">
        {productData && filterData ? (
          <Outlet
            context={[
              productData,
              filterData,
              cart,
              addToCart,
              removeFromCart,
              clearCart,
            ]}
          ></Outlet>
        ) : (
          <div>Loading...</div>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}
