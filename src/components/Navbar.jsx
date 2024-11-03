import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 py-4 px-8">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold text-xl">TeeRex Store</div>
        <ul className="flex justify-center items-center gap-x-10 text-white">
          <li>
            <Link to="/" className="hover:text-gray-300 hover:underline">
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex items-center gap-x-2 hover:text-gray-300 hover:underline"
            >
              <FaCartShopping />
              <span className="hidden md:inline">Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
