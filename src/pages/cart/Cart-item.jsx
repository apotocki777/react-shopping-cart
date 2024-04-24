import { useOutletContext } from "react-router-dom";

export default function CartItem({ product }) {
  const [, , , addToCart, removeFromCart] = useOutletContext();
  const totalPrice = new Intl.NumberFormat({
    style: "currency",
    currency: "USD",
  }).format(product.totalPrice);

  const productPrice = new Intl.NumberFormat({
    style: "currency",
    currency: "USD",
  }).format(product.price);

  console.log(totalPrice);

  return (
    <div className="flex items-center gap-8">
      <div className="flex w-[30%] min-w-[30%] items-center">
        <img
          src={product.imageSet[0]}
          alt={product.name}
          className="rounded-lg"
        />
      </div>
      <div>
        <p className="text-[22px] font-bold">{product.brand}</p>
        <p>$ {productPrice}</p>
      </div>
      <div className="ml-auto flex items-center gap-6 rounded-lg border-2 border-solid border-grey-2">
        <button
          onClick={() => removeFromCart(product)}
          className="group rounded-lg px-2 py-2 hover:bg-danger-light active:bg-danger"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 group-hover:stroke-[#ffff]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <span className="font-lato text-[14px] text-black">
          {product.quantity}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="group rounded-lg px-2 py-2 hover:bg-success-light active:bg-success"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 group-hover:stroke-[#ffff]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <p className="ml-6 mr-10 flex min-w-32 justify-center">$ {totalPrice}</p>
    </div>
  );
}
