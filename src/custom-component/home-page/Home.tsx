import React from "react";

import ProductCard from "../product/card";
import SliderHome from "./slider-component";
const HomePageComponent = () => {
  return (
    <div className="flex w-full flex-col ">
      <SliderHome />
      <div className="mt-[20px] px-[20px]">
        <span>Categories</span>
        <div>
          <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[100px] bg-[#ecedec]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-[20px] flex w-full flex-col px-[20px]">
        <span className="text-[22px] font-semibold">Products</span>
        <div className="flex w-full gap-x-4">
          <div className=" w-[200px]">
            <ProductCard />
          </div>
          <div className=" w-[200px]">
            <ProductCard />
          </div>
          <div className=" w-[200px]">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageComponent;
