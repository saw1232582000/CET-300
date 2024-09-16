import React from "react";
import Image from "next/image";
const ProductDetail = () => {
  return (
    <div className="mt-[20px] flex w-full flex-col gap-x-[30px] gap-y-[20px] px-[20px] sm:flex-row">
      <div className="w-full sm:h-[350px] sm:w-[350px]">
        <Image
          alt=""
          src={"/sample_img.jpg"}
          height={256}
          width={256}
          className="h-full w-full sm:h-[350px] sm:w-[350px]"
        />
      </div>
      <div className="flex w-full flex-col sm:w-[400px]">
        <span className="font-serif text-[20px] font-bold">Product Name</span>
        <div className="flex gap-x-2 ">
          <span className="font-mono text-[#a6a6a6] line-through">
            {"$912"}
          </span>
          <span className="font-mono font-bold">{"$32"}</span>
        </div>
        <span className="mt-[25px] text-[20px] underline">Description</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A tenetur
          illo autem provident officia, eum iure culpa explicabo aliquid.
          Quaerat voluptatibus eos inventore doloribus neque ut voluptatum
          adipisci fugit eligendi?
        </span>
        <div className="flex w-full gap-x-3">
          <button className="mt-[25px] w-full items-center rounded-[5px] bg-[#0c0d0d] p-[5px] text-white sm:w-[200px]">
            Add to cart
          </button>
          <button className="mt-[25px] flex w-full items-center justify-center rounded-[5px] border-[1px] border-black bg-white p-[5px] text-white sm:w-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="black"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
