import CartList from "./Cart-list";
import Checkout from "./Checkout";
import { useOutletContext } from "react-router-dom";
import EmptyCart from "./Empty-cart";

export default function Cart() {
  const [, , cart] = useOutletContext();
  console.log(cart);
  return (
    <>
      {cart.length !== 0 ? (
        <div className="mt-20 grid grid-cols-[3fr_2fr] px-32 pb-20">
          <CartList></CartList>
          <div className="flex flex-col items-center justify-start">
            <Checkout></Checkout>
          </div>
        </div>
      ) : (
        <EmptyCart></EmptyCart>
      )}
    </>
    // <div className="mt-20 grid grid-cols-2">
    //   <CartList></CartList>
    //   <div className="flex flex-col items-center justify-start">
    //     <Checkout></Checkout>
    //   </div>
    // </div>
  );
}
