import React, { Suspense } from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import PaginationComponent from "../pagination";

const ProductsPageComponent = () => {
  return (
    <div className="flex w-full flex-col px-[20px]">
      <h1 className="text-[45px]">product</h1>
      <div className="flex w-full ">
        <ProductFilter />
      </div>
      <div className="mt-2 flex w-full border-2"></div>
      <div className="mt-[20px]">
        <ProductList isLoading={false} products={["1", "2"]} />
      </div>
      <div className="mt-[50px] flex w-full justify-center">
        <Suspense>
          <PaginationComponent
            keyWord=""
            path=""
            searchQuery={[]}
            totalPages={10}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default ProductsPageComponent;
