import React from "react";
import Head from "next/head";

import ProductsPageComponent from "~/custom-component/product-page/Products";

const Products=()=> {
  return (
    <div>
      <Head>
        <title>
          Ecommerce Website
        </title>
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
        />
      </Head>
      <div className="w-full ">
        <ProductsPageComponent/>
      </div>
    </div>
  );
}

export default Products;
