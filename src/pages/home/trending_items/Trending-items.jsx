import TrendingSlide from "./Trending-items-slide";
import { useOutletContext } from "react-router-dom";

export default function TrendingItems() {
  const [data] = useOutletContext();
  let dataCopy = [...data];
  dataCopy = dataCopy.splice(0, 4);
  return (
    <div className="mt-20 flex flex-col items-center justify-center px-20">
      <h2 className="text-[44px] font-bold text-black">Trending Products</h2>
      <div className="mt-5 flex gap-10">
        {dataCopy.map((item) => {
          return <TrendingSlide item={item} key={item.id}></TrendingSlide>;
        })}
      </div>
    </div>
  );
}
