import React from "react";
import ProductCard from "../product/card";
import Link from "next/link";

interface IProductListProps {
  isLoading: Boolean;
  products: any[];
}

const ProductList = (props: IProductListProps) => {
  return (
    <div className="flex w-full gap-x-2">
      {props.products.map((product, index) => {
        return (
          <div key={index}>
            <Link href={"/pages/Products/Detail"}>
              <ProductCard />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
