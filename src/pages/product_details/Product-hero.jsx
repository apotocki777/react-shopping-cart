import { useState } from "react";
import Button from "../../utils/Button";
import { useOutletContext } from "react-router-dom";

export default function ProductHero({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.imageSet[0]);
  const [, , , addToCart] = useOutletContext();

  const handleImageClick = (e) => {
    setSelectedImage(e.target.src);
  };

  console.log(product);
  return (
    <div className="grid grid-cols-[1fr_3fr_3fr] gap-8 px-32 py-24">
      <div className="flex flex-col justify-between gap-4">
        <img
          src={product.imageSet[0]}
          alt={product.name}
          onClick={(e) => handleImageClick(e)}
          className="cursor-pointer rounded-lg transition-all hover:shadow-lg"
        />
        <img
          src={product.imageSet[1]}
          alt={product.name}
          onClick={(e) => handleImageClick(e)}
          className="cursor-pointer rounded-lg transition-all hover:shadow-lg"
        />
        <img
          src={product.imageSet[2]}
          alt={product.name}
          onClick={(e) => handleImageClick(e)}
          className="cursor-pointer rounded-lg transition-all hover:shadow-lg"
        />
      </div>
      <div className="h-full w-full rounded-lg shadow-2xl">
        <img
          src={selectedImage}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center py-10">
        <div className="px-24">
          <h2 className="text-[36px] font-bold text-black">{product.name}</h2>
          <div className="mb-6 flex gap-2">
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <svg
                  key={index}
                  className={
                    "h-4 w-4 " +
                    (index < product.rating.value
                      ? "fill-secondary"
                      : "fill-grey-2")
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              );
            })}
          </div>
          <div className="flex items-center gap-4 px-1">
            <p className="text-[16px] text-black">${product.price}</p>
            <p className="text-[14px] text-primary">
              <s>${product.wasPrice}</s>
            </p>
          </div>
          <p className="mb-12 mt-6 font-lato text-[#A9ACC6]">
            {product.description}
          </p>
          <div className="flex items-center gap-6">
            <Button product={product} onClick={addToCart}>
              Add To Cart
            </Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
