import Button from "../../../utils/Button";
import HeadphonesPhoto from "../../../resources/images/headphone-2.png";
import { useState } from "react";
export default function DiscountItems() {
  const [choosenTab, setChoosenTab] = useState("headphones");

  const handleTabChange = (tab) => {
    setChoosenTab(tab);
  };
  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <h2 className="text-[44px] font-bold text-black">Discount Item</h2>
      <ul className="flex gap-6">
        <li
          onClick={() => handleTabChange("headphones")}
          className="cursor-pointer font-lato text-[18px] text-primary hover:text-primary-dark"
        >
          Headphones
        </li>
        <li
          onClick={() => handleTabChange("laptop")}
          className="cursor-pointer font-lato text-[18px] text-primary hover:text-primary-dark"
        >
          Laptop
        </li>
        <li
          onClick={() => handleTabChange("other")}
          className="cursor-pointer font-lato text-[18px] text-primary hover:text-primary-dark"
        >
          Other
        </li>
      </ul>

      <div className="flex items-center justify-between gap-20">
        <div className="">
          <h3 className="mb-5 text-[36px] font-bold text-black">
            {choosenTab === "headphones"
              ? "20% Discount Of All Products"
              : choosenTab === "laptop"
              ? "30% Discount Of All Products"
              : "40% Discount Of All Products"}
          </h3>
          <p className="mb-5 text-[22px] font-bold text-primary">
            {choosenTab === "headphones"
              ? "Headphones Compact"
              : choosenTab === "laptop"
              ? "Small Laptops"
              : "Other Nice Things"}
          </p>
          <p className="mb-5 text-[18px] font-normal text-grey-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Eu
            eget feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="mb-5 grid grid-cols-2 gap-y-4">
            <li className="flex items-center gap-2">
              <div>
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.25L6.25 13.5L19 0.75"
                    stroke="#101750"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-grey-3">Material expose like metal</p>
            </li>
            <li className="flex items-center gap-2">
              <div>
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.25L6.25 13.5L19 0.75"
                    stroke="#101750"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-grey-3">Clear lines and geometric figures</p>
            </li>
            <li className="flex items-center gap-2">
              <div>
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.25L6.25 13.5L19 0.75"
                    stroke="#101750"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-grey-3">Simple neutral colours</p>
            </li>
            <li className="flex items-center gap-2">
              <div>
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 8.25L6.25 13.5L19 0.75"
                    stroke="#101750"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-grey-3">Material expose like metals</p>
            </li>
          </ul>
          <Button>Shop Now</Button>
        </div>
        <div className="">
          <img src={HeadphonesPhoto} alt="a photo of headphones" />
        </div>
      </div>
    </div>
  );
}
