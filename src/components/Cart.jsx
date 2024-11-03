import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartComponent from "./CartComponent";

export default function Cart() {
  const { cart } = useSelector((state) => state.cartSlice);
  const [totalCartValue, setTotalCartValue] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    setTotalCartValue(total);
  }, [cart]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold mt-4 underline">Shopping Cart</h1>
      <div className="flex flex-col gap-y-4 justify-center items-center py-5">
        {cart.length > 0 ? (
          cart.map((product) => (
            <CartComponent key={product.id} product={product} editMode={true} />
          ))
        ) : (
          <p>Cart is empty</p>
        )}
        <div className="border-b-2 border-black w-full"></div>
      </div>

      <div className="mt-2 font-bold">
        Total cart value: {totalCartValue} INR
      </div>
    </div>
  );
}
