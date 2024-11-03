import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Filter from "./Filter";
import CardComponent from "./CardComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/product-slice";

export default function Home() {
  const [productsList, setProductsList] = useState([]);

  const [data, error, loading] = useFetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  );

  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cartSlice);
  const { products } = useSelector((state) => state.productSlice);

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch(setProducts(data));
      setProductsList(data);
    }
  }, [data]);

  useEffect(() => {
    setProductsList(products);
  }, [cart, products]);

  if (!data || loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  if (error) return <div>Something Went Wrong please try again later!</div>;

  return (
    <div className="flex flex-col gap-y-4">
      <Filter />
      <div className="py-5 flex flex-wrap gap-5 justify-center">
        {productsList.map((product) => (
          <CardComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
