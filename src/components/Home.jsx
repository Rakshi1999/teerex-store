import React from "react";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const [data, error, loading] = useFetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
  );

  if (!data || loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  console.log("DATA--->", data);
  return <div>Home</div>;
}
