import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [selectedRoute, setSelectedRoute] = useState("/");
  const location = useLocation();
  const { cart } = useSelector((state) => state.cartSlice);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedRoute(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="px-8 py-4 bg-blue-700">
      <div className="container flex justify-between mx-auto">
        <div
          className="text-xl font-bold text-white hover:cursor-pointer hover:opacity-90"
          onClick={() => navigate("/")}
        >
          TeeRex Store
        </div>
        <ul className="flex items-center justify-center text-white gap-x-10">
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
                <div className="absolute flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -left-3">
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
