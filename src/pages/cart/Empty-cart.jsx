import EmptyCartPhoto from "../../resources/images/empty_cart.png";
import Button from "../../utils/Button";
import { Link } from "react-router-dom";
export default function EmptyCart() {
  return (
    <div className="mt-20 flex flex-col items-center justify-center pb-20">
      <div>
        <img
          src={EmptyCartPhoto}
          alt="A drawing of a anthropomorfic empty cart"
        />
      </div>
      <h3 className="my-10 text-[36px] font-bold">Your Cart Is Empty</h3>
      <Link to="/products">
        <Button>Start Shopping</Button>
      </Link>
    </div>
  );
}
