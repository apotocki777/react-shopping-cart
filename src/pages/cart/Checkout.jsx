import { useOutletContext } from "react-router-dom";
import Button from "../../utils/Button";

export default function Checkout() {
  const [, , card, , , clearCart] = useOutletContext();
  let subTotal = card.reduce((curr, acc) => {
    console.log(curr.totalPrice, acc.totalPrice);
    return curr + acc.totalPrice;
  }, 0);

  let total = subTotal + 150;

  subTotal = new Intl.NumberFormat({
    style: "currency",
    currency: "USD",
  }).format(subTotal);

  return (
    <div className="sticky top-0 flex flex-col justify-center pt-10">
      <div className="flex w-fit flex-col items-center justify-center rounded-lg bg-grey-1 px-10 py-6">
        <div className="flex w-full justify-between gap-20 border-b-2 border-b-grey-2 py-2">
          <p>Subtotal:</p>
          <p>$ {subTotal}</p>
        </div>
        <div className="flex w-full justify-between gap-20 border-b-2 border-b-grey-2 py-2">
          <p>Total:</p>
          <p>
            ${" "}
            {Intl.NumberFormat({ style: "currency", currency: "usd" }).format(
              total
            )}
          </p>
        </div>
        <div className="mb-10 flex w-full justify-between gap-20 py-2 text-[14px] text-grey-3">
          <p>Shipping:</p>
          <p>$ 100.00</p>
        </div>
        <Button>Proceed to checkout</Button>
      </div>
      <button
        className="mt-10 font-lato text-primary hover:underline"
        onClick={clearCart}
      >
        Clear Cart
      </button>
    </div>
  );
}
