import { useOutletContext } from "react-router-dom";
import TopCategoriesSlide from "./Top-categories-slide";
import Slider from "react-slick";

export default function TopCategories() {
  const [data, filterData] = useOutletContext();

  const productCopy = [...data];
  const categories = [...filterData.category.values].splice(0, 12);
  const selectedItems = categories.map((category) => {
    let item = productCopy.find((item) => item.category === category);
    return item;
  });

  console.log(selectedItems);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    className: "",
  };

  return (
    <div className="text-center">
      <h2 className="text-[44px] font-bold text-black">Top Categories</h2>
      <div className="px-44 py-5">
        <Slider {...sliderSettings}>
          {selectedItems.map((el, index) => {
            console.log(el.name, index);
            return (
              <TopCategoriesSlide
                key={el.key}
                element={el}
              ></TopCategoriesSlide>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
