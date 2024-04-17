import Hero from "./hero/Hero";
import FeaturedProducts from "./featured_products/Featured-products";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
    </>
  );
}
