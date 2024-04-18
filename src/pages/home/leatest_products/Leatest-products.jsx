import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import LeatestProductCard from "./Leates-product-card";

export default function LeatestProducts() {
  const [category, setCategory] = useState("new");

  const [data] = useOutletContext();
  let chosenData = [...data];

  if (category === "new") {
    chosenData = chosenData
      .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
      .splice(0, 6);
  } else if (category === "best") {
    chosenData = chosenData
      .sort((a, b) => (a.discountPercentage > b.discountPercentage ? -1 : 1))
      .splice(0, 6);
  } else if (category === "featured") {
    chosenData = chosenData.splice(0, 6);
  } else {
    chosenData = chosenData.sort((a) => (a.specialOffer ? -1 : 1)).splice(0, 6);
  }

  console.log(chosenData);

  return (
    <div className="flex flex-col items-center justify-center px-20">
      <h2 className="mt-10 text-5xl font-bold text-black">Leatest Products</h2>
      <ul className="mb-14 mt-4 flex gap-10">
        <li
          onClick={() => setCategory("new")}
          className="font-lato text-sm font-normal hover:cursor-pointer hover:text-primary-light"
        >
          New Arrival
        </li>
        <li
          onClick={() => setCategory("best")}
          className="font-lato text-sm font-normal hover:cursor-pointer hover:text-primary-light"
        >
          Best Deals
        </li>
        <li
          onClick={() => setCategory("featured")}
          className="font-lato text-sm font-normal hover:cursor-pointer hover:text-primary-light"
        >
          Featured
        </li>
        <li
          onClick={() => setCategory("special")}
          className="font-lato text-sm font-normal hover:cursor-pointer hover:text-primary-light"
        >
          Special Offer
        </li>
      </ul>
      <div className="grid grid-cols-3 gap-6">
        {chosenData.map((item) => (
          <LeatestProductCard item={item} key={item.id}></LeatestProductCard>
        ))}
      </div>
    </div>
  );
}
