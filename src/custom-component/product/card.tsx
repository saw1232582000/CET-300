import clsx from "clsx";

import Image from "next/image";
import React from "react";
import StarIcon from "../icon/star";
import ButtonLoader from "../Loader/ButtonLoader";

interface IProduct {
  name: string;
  price: string;
}

interface IProductCardProps {
  height?: string;
  width?: string;
  imgSrc?: string;
  fullWidht?: boolean;
  onClick?: any;
  isLoading?: boolean;
  product?: IProduct;
}

const ProductCard = (props: IProductCardProps) => {
  return (
    <div className={`w-full rounded-[5px] border-2 shadow-md sm:w-[200px]`}>
      <div>
        <Image
          alt=""
          src={"/sample_img.jpg"}
          height={256}
          width={256}
          className={clsx(
            `w-[${props.width}px] h-[${props.height}px] border-b-[2px] `,
            {
              "w-full": props.fullWidht,
            },
          )}
        />
      </div>
      <div className="flex w-full flex-col gap-y-1 px-[5px] pb-[5px] ">
        <div className="flex flex-col items-center px-[5px]">
          <span className="font-serif text-[20px] font-bold">Product Name</span>
          <span className="font-bold text-[#a6a6a6]">Brand Name</span>
          <div className="flex gap-x-3">
            <div className="flex items-center gap-x-2">
              <StarIcon />
              <span className="text-[15px]">4.7</span>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="h-[20px] w-[2px] bg-[#a6a6a6]"></div>
              <span className="rounded-[4px] bg-[#dddddd] px-[4px] text-[12px] font-semibold">
                212 sold
              </span>
            </div>
          </div>
          <div className="flex gap-x-2">
            <span className="font-mono text-[#a6a6a6] line-through">
              {"$912"}
            </span>
            <span className="font-mono font-bold">{"$32"}</span>
          </div>
        </div>
        <button className="flex h-[30px] w-full items-center  justify-center rounded-[3px] bg-[#121212] text-white">
          {props.isLoading && <ButtonLoader />}
          {!props.isLoading && "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
