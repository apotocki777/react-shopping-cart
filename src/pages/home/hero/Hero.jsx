import Slider from "react-slick";
import HeroSlide from "./Hero-slide";
import { useState } from "react";

export default function Hero() {
  const [currSlide, setCurrSlide] = useState(0);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (next) => {
      setCurrSlide(next);
    },
    dotsClass: "w-full flex justify-center gap-8 pb-4",
    customPaging: (i) => {
      return (
        <button
          className={"h-full w-full " + (i === currSlide ? "bg-primary" : "")}
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
                "flex h-4 w-4 rotate-45 items-center justify-center border-2 border-solid border-primary"
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
    <div className="bg-hero">
      <Slider {...carouselSettings} initialSlide={currSlide}>
        <HeroSlide></HeroSlide>
        <HeroSlide></HeroSlide>
        <HeroSlide></HeroSlide>
      </Slider>
    </div>
  );
}
