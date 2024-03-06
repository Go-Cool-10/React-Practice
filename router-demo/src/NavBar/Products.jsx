import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  let [product, setProduct] = useState([]);
  const Fetch = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    Fetch();
  }, []);

  return (
    <>
      {product.length > 0 &&
        product.map((p) => (
          <ProductCard
            image={p.image}
            price={p.price}
            title={p.title}
            id={p.id}
          />
        ))}
    </>
  );
};

export default Products;
