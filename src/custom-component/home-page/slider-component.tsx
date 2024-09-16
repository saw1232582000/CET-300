"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderHome = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mt-[20px] w-full px-[20px] ">
      <Slider {...settings}>
        <div className="h-[300px] w-[200px] rounded-[5px] bg-yellow-200">
          <h3>1</h3>
        </div>
        <div className="h-[300px] w-[200px] rounded-[5px] bg-yellow-200">
          <h3>2</h3>
        </div>
        <div className="h-[300px] w-[200px] rounded-[5px] bg-yellow-200">
          <h3>3</h3>
        </div>
        <div className="h-[300px] w-[200px] rounded-[5px] bg-yellow-200">
          <h3>4</h3>
        </div>
        <div className="h-[300px] w-[200px] rounded-[5px] bg-yellow-200">
          <h3>5</h3>
        </div>
        <div className="h-[300px] w-[200px] rounded-[5px] bg-yellow-200">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderHome;
