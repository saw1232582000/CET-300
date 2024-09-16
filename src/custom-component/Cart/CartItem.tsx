import React from "react";
import Image from "next/image";
import clsx from "clsx";
const CartItem = () => {
  return (
    <div className="flex w-full border-b-[1px] py-[2px] items-center">
      <div className="w-full">
        <Image
          alt=""
          src={"/sample_img.jpg"}
          height={256}
          width={256}
          className="h-[100px] w-[100px]"
        />
      </div>
      <div className="flex flex-col w-full gap-y-[2px]">
        <span className="text-[17px] font-bold">Product Name</span>
        <span className="text-[15px] font-mono">$325345</span>
        <span className="text-[12px] font-semibold text-[#c4c7ca]">$32 per unit</span>
      </div>
      <div className="flex w-full items-center justify-center gap-x-1">
        <button className="border-[1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>
        <span>12</span>
        <button className="border-[1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
