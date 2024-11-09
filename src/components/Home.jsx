import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Filter from "./Filter";
import CardComponent from "./CardComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/product-slice";
import { IoSearch } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";

export default function Home() {
  const [productsList, setProductsList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  const [data, error, loading] = useFetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  );

  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cartSlice);
  const { products } = useSelector((state) => state.productSlice);

  const handleFilters = (val) => {
    const { gender, clothsType, price, color, sort } = val;

    const filteredProducts = products.filter((product) => {
      const productPrice = parseInt(product.price);
      const priceInRange = price.some((range) => {
        const [min, max] = range.split("-");
        if (max === "") {
          return productPrice >= parseInt(min);
        } else {
          return productPrice >= parseInt(min) && productPrice <= parseInt(max);
        }
      });

      return (
        (gender.includes(product.gender.toLowerCase()) ||
          gender.length === 0) &&
        (clothsType.includes(product.type.toLowerCase()) ||
          clothsType.length === 0) &&
        (priceInRange || price.length === 0) &&
        (color.includes(product.color.toLowerCase()) || color.length === 0)
      );
    });

    if (sort && sort === "asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort && sort === "desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setProductsList(filteredProducts);
  };

  useEffect(() => {
    if (data && products.length === 0) {
      dispatch(setProducts(data));
      setProductsList(data);
    }
  }, [data]);

  useEffect(() => {
    if (searchValue) {
      setProductsList(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setProductsList(products);
    }
  }, [products, searchValue]);

  if (!data || loading)
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );

  if (error) return <div>Something Went Wrong please try again later!</div>;

  return (
    <div className="flex flex-col gap-y-4">
      {openFilter && <Filter onCallback={handleFilters} />}

      <div className="flex items-center justify-center p-5 gap-x-1">
        <input
          className="p-2 border-b-2 border-gray-400 md:w-[400px] w-full"
          placeholder="Search for products"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <IoSearch size={30} />
        <label
          onClick={() => setOpenFilter(!openFilter)}
          className="flex items-center justify-center p-2 bg-gray-200 rounded-lg gap-x-1 hover:bg-gray-300 hover:cursor-pointer"
        >
          <FaFilter /> Filter
        </label>
      </div>
      <div className="flex flex-wrap justify-center gap-5 py-5">
        {productsList.map((product) => (
          <CardComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
