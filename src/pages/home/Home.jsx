import Hero from "./hero/Hero";
import FeaturedProducts from "./featured_products/Featured-products";
import LeatestProducts from "./leatest_products/Leatest-products";
import UniqueFeatures from "./unique-features/Unique-features";
import TrendingItems from "./trending_items/Trending-items";
import DiscountItems from "./discount_item/Discount-items";
import TopCategories from "./top_categories/Top-categories";
import Banner from "./banner/Banner";
import LeatestBlog from "./leatest-blog/Leatest-blog";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <LeatestProducts></LeatestProducts>
      <UniqueFeatures></UniqueFeatures>
      <TrendingItems></TrendingItems>
      <DiscountItems></DiscountItems>
      <TopCategories></TopCategories>
      <Banner></Banner>
      <LeatestBlog></LeatestBlog>
    </>
  );
}
