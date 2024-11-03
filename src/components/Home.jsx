import React from "react";
import useFetch from "../hooks/useFetch";
import Filter from "./Filter";
import CardComponent from "./CardComponent";

export default function Home() {
  const [data, error, loading] = useFetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  );

  if (!data || loading) return <div>Loading...</div>;
  if (error) return <div>Something Went Wrong please try again later!</div>;
  return (
    <div className="flex flex-wrap">
      <Filter />
      {data.map((product) => (
        <CardComponent key={product.id} product={product} />
      ))}
    </div>
  );
}
