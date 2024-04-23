import { useParams, useOutletContext } from "react-router-dom";
import ProductHero from "./Product-hero";
import ProductInfoCard from "./product-info-card";

export default function ProductDetails() {
  const [productData] = useOutletContext();
  const { productId } = useParams();

  const product = productData.find((item) => item.id === productId);
  return (
    <div className="">
      <ProductHero product={product}></ProductHero>
      <ProductInfoCard product={product}></ProductInfoCard>
    </div>
  );
}
