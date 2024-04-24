import { useOutletContext } from "react-router-dom";
import FeaturedSlide from "../home/featured_products/Featured-slide";

export default function RelatedProducts({ product }) {
  const allProducts = [...useOutletContext()[0]];

  allProducts.sort((item) => (item.brand === product.brand ? -1 : 1));

  const relatedProducts = allProducts.splice(0, 4);
  console.log(relatedProducts);

  return (
    <div className="px-10">
      <h3 className="ml-8 mt-10 text-left text-[36px] font-bold">
        Related Products
      </h3>
      <div className="grid grid-cols-4 gap-8">
        {relatedProducts.map((item) => {
          return <FeaturedSlide item={item}></FeaturedSlide>;
        })}
      </div>
    </div>
  );
}
