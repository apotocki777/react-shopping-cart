import TopHeader from "./Top";
import BottomHeader from "./Bottom";
export default function Header() {
  return (
    <header className="flec-col min-w-full flex-1">
      <TopHeader></TopHeader>
      <BottomHeader></BottomHeader>
    </header>
  );
}
