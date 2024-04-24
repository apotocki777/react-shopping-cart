import CartItem from "./Cart-item";
import { useOutletContext } from "react-router-dom";
export default function CartList() {
  const [, , cart] = useOutletContext();

  console.log(cart);
  return (
    <div className="grid grid-cols-1 gap-4">
      {cart.map((item) => (
        <CartItem product={item} key={item.id}></CartItem>
      ))}
    </div>
  );
}
