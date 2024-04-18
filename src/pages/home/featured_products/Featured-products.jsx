import Slider from "react-slick";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import FeaturedSlide from "./Featured-slide";

export default function FeaturedProducts() {
  const [currSlide, setCurrSlide] = useState(0);
  const [data] = useOutletContext();
  const featuredItems = data.slice(0, 12);
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    className: "pt-10 pb-10 pl-4",
    afterChange: (next) => {
      setCurrSlide(() => {
        if (next < 4) {
          return 0;
        } else if (next < 8) {
          return 1;
        } else {
          return 2;
        }
      });
    },
    dotsClass: "w-full flex justify-center gap-6 pb-2",
    customPaging: (i) => {
      return (
        <button
          className={"h-full w-full " + (i === currSlide ? "bg-grey-3" : "")}
        ></button>
      );
    },
    appendDots: (dots) => (
      <ul>
        {dots.map((dot, index) => {
          return (
            <li
              key={index}
              className={
                "mt-10 flex h-2 w-6 rounded-md transition-all " +
                (index === currSlide
                  ? "w-10 rounded-lg bg-[#FB2E86]"
                  : "bg-[#FEBAD7]")
              }
            >
              {dot.props.children}
            </li>
          );
        })}
      </ul>
    ),
  };

  return (
    <div className="flex h-fit flex-col justify-center px-20">
      <h2 className="mb-10 mt-24 self-center text-5xl font-bold">
        Featured Products
      </h2>
      <div className=" border-primary">
        <Slider {...carouselSettings}>
          {featuredItems.map((item) => {
            return <FeaturedSlide item={item} key={item.id}></FeaturedSlide>;
          })}
        </Slider>
      </div>
    </div>
  );
}
