import Hero from "./hero/Hero";
import FeaturedProducts from "./featured_products/Featured-products";
import LeatestProducts from "./leatest_products/Leatest-products";
import UniqueFeatures from "./unique-features/Unique-features";
import TrendingItems from "./trending_items/Trending-items";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <LeatestProducts></LeatestProducts>
      <UniqueFeatures></UniqueFeatures>
      <TrendingItems></TrendingItems>
    </>
  );
}
