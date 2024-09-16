import React from "react";
import NavMenu from "./NavMenu";
import Account from "../heading-components/account";
import Notification from "../heading-components/notification";
import Cart from "../heading-components/cart";

const MainPageLayout = () => {
  return (
    <div className="mt-[20px] flex w-full flex-col border-b-2 pb-[5px]">
      <div className="flex w-full items-center">
        <div className="flex pl-[10px]">
          <h1 className="text-[30px] font-bold text-yellow-500">Eco</h1>
          <h1 className="text-[30px] font-bold text-black">mmerce</h1>
        </div>
        <div className="flex w-full items-center justify-end gap-x-4 pr-[20px]">
          <div>
            <Account />
          </div>
          <div>
            <Notification />
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <NavMenu />
      </div>
    </div>
  );
};

export default MainPageLayout;
