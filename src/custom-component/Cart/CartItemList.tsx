import React from "react";
import CartItem from "./CartItem";

const CartItemList = () => {
  return (
    <div className="relative flex w-full flex-col">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};

export default CartItemList;
