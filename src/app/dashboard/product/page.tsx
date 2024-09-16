import Link from "next/link";
import AdminSellerProductList from "~/custom-component/product-page/AdminSellerProductList";

import {
  productColumnDef,
  sampleSaleReportData,
} from "~/custom-component/product-page/ProductColumnDef";

const AdminProduct = () => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-5 px-[30px] py-[30px]">
      <div className="flex w-full justify-end ">
        <Link href={`/dashboard/product/create`}>
          <button className="border-[1px] p-[10px] ">Create New Product</button>
        </Link>
      </div>
      <div className="flex w-full">
        <AdminSellerProductList
          data={sampleSaleReportData}
          columnDef={productColumnDef}
        />
      </div>
    </div>
  );
};

export default AdminProduct;
