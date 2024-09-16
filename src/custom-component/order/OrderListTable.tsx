"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const OrderDetail = () => {
  const router = useRouter();
  return (
    <div className="flex w-full flex-col items-start justify-start sm:w-[80vh]">
      <div className="flex h-[3rem] w-full flex-row items-center border-b border-white">
        <h1 className="font-semibold">Order Detail</h1>
      </div>
      <div className="flex w-full flex-grow flex-col  items-center justify-center py-3 ">
        <div className="w-full flex  flex-col sm:flex-row justify-start  lg:gap-x-12 xl:gap-x-16 ">
          <div className="rounded-[5px] border border-white lg:col-span-8">
            <div className="flex w-full flex-col  items-center">
              <div className="flex w-full flex-row border-b border-black  ">
                <div className="flex  flex-col  items-start justify-center">
                  <div className="mb-[10px]">
                    Order Id <span className="font-bold ">#094005irkf</span>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 mt-[10px]">
                <span>Order Items</span>
                <div className="flex w-full flex-col rounded-[5px] border-[1px] border-black bg-white px-6 py-2 sm:w-[50vh]">
                  <div className=" flex  flex-row ">
                    <div className="flex h-full w-2/3   flex-row ">
                      <div className=" ">
                        <Image
                          src={"/sample_img.jpg"}
                          alt=""
                          width={70}
                          height={70}
                          className="relative h-full w-full sm:h-[100px] sm:w-[100px]   "
                        />
                      </div>
                      <div className="flex h-full  flex-grow flex-col pl-3  ">
                        <p className="flex-shrin flex text-wrap font-bold">
                          {"name"}
                        </p>
                        <p className="mt-3 text-sm">Quantity: {"23"}</p>
                      </div>
                    </div>
                    <div className="flex w-1/3 justify-end ">
                      <p className="font-bold">{"324"}</p>
                    </div>
                  </div>
                  <div className="flex w-full flex-row items-center justify-center gap-x-2">
                    <span className="mt-3 text-center text-[16px]">
                      Status:
                    </span>
                    <span className="mt-3 text-center text-sm text-green-500">
                      {"processing"}
                    </span>
                  </div>
                </div>
                <div className="flex w-full flex-col rounded-[5px] border-[1px] border-black bg-white px-6 py-2 sm:w-[50vh]">
                  <div className=" flex  flex-row ">
                    <div className="flex h-full w-2/3   flex-row ">
                      <div className=" ">
                        <Image
                          src={"/sample_img.jpg"}
                          alt=""
                          width={70}
                          height={70}
                          className="relative h-full w-full sm:h-[100px] sm:w-[100px]   "
                        />
                      </div>
                      <div className="flex h-full  flex-grow flex-col pl-3  ">
                        <p className="flex-shrin flex text-wrap font-bold">
                          {"name"}
                        </p>
                        <p className="mt-3 text-sm">Quantity: {"23"}</p>
                      </div>
                    </div>
                    <div className="flex w-1/3 justify-end ">
                      <p className="font-bold">{"324"}</p>
                    </div>
                  </div>
                  <div className="flex w-full flex-row items-center justify-center gap-x-2">
                    <span className="mt-3 text-center text-[16px]">
                      Status:
                    </span>
                    <span className="mt-3 text-center text-sm text-green-500">
                      {"processing"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[10px] w-full rounded-[5px] border-[1px] h-[140px] border-black bg-white p-[12px]">
            <h1 className="mb-[8px] underline">Billing Info</h1>
            <div className="grid grid-cols-2 grid-rows-2  gap-y-1">
              <div className="text-left">Address:&nbsp; </div>
              <div className="text-left">{"address"}</div>
              <div className="text-left">Phone:&nbsp;</div>
              <div className="text-left">{"phone"}</div>
            </div>
          </div>
        </div>
        <button
          className="mt-[20px] flex items-center justify-center text-black underline"
          onClick={() => router.back()}
        >
          back
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
