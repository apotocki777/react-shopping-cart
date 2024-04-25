import TopHeader from "./Top";
import BottomHeader from "./Bottom";
export default function Header({ cart }) {
  return (
    <header className="flec-col min-w-full flex-1">
      <TopHeader cart={cart}></TopHeader>
      <BottomHeader></BottomHeader>
    </header>
  );
}
