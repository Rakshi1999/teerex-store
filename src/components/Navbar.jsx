import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [selectedRoute, setSelectedRoute] = useState("/");

  const location = useLocation();
  const { cart } = useSelector((state) => state.cartSlice);

  useEffect(() => {
    setSelectedRoute(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="bg-blue-700 py-4 px-8">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold text-xl">TeeRex Store</div>
        <ul className="flex justify-center items-center gap-x-10 text-white">
          <li>
            <Link
              to="/"
              className={
                (twMerge("hover:text-gray-300 hover:underline"),
                selectedRoute === "/" ? "underline" : "")
              }
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={twMerge(
                "relative flex items-center gap-x-2 hover:text-gray-300 hover:underline",
                selectedRoute === "/cart" ? "underline" : ""
              )}
            >
              {cart.length > 0 && (
                <div className="absolute -top-2 -left-3 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex justify-center items-center">
                  {cart.length > 0 ? cart.length : ""}
                </div>
              )}
              <FaCartShopping />
              <span className="hidden md:inline">Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
