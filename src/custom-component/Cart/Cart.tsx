import React from "react";
import CartItemList from "./CartItemList";

const Cart = () => {
  return (
    <div className="flex w-full flex-col ">
      <h1 className="mb-[40px] font-sans text-[25px]">Manage Your Cart</h1>
      <div className="flex w-full gap-x-2 border-2 px-[10px] py-[20px] flex-col sm:flex-row">
        <div className="flex w-full sm:w-1/2">
          <CartItemList />
        </div>
        <div className=" flex w-full sm:w-1/2 items-start justify-center">
          <section className="bg-theme_bg_color w-full mt-16 rounded-lg border border-gray-200 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-black">Order summary</h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-black">Subtotal</p>
                <p className="text-sm font-medium text-black">{12}</p>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="text-black">Transaction Fee</span>
                </div>
                <div className="text-sm font-medium text-black">{12}</div>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <div className="text-base font-medium text-black">
                  Order Total
                </div>
                <div className="text-base font-medium text-black">{123}</div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="h-8 w-full">
                  <input
                    type="text"
                    className="h-full w-full border-[1px] border-black rounded-[4px] pl-4 text-sm"
                    placeholder="Billing address"
                  />
                </div>
                <div className="h-8 w-full">
                  <input
                    type="number"
                    className="h-full w-full border-[1px] border-black rounded-[4px] pl-4 text-sm"
                    placeholder="Billing phone number"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  className="h-10 w-full rounded-[4px] bg-[#22331d] text-white hover:bg-gray-300"
                  //disabled={CartItems === 0}
                >
                  Order
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cart;
