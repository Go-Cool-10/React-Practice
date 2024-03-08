import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  let [product, setProduct] = useState([]);
  let [displayProducts, setDisplayProducts] = useState([]);

  const Fetch = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
      setDisplayProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (e) => {
    const value = e.target.value;
    if (value === "default") {
      setDisplayProducts(product);
    } else {
      const filteredProducts = product.filter((p) => p.category.includes(value));
      setDisplayProducts(filteredProducts);
    }
  };

  useEffect(() => {
    Fetch();
  }, []);

  return (
    <>
    Select Category:
      <select id="sort" onChange={(e) => handleFilter(e)}>
        <option value="default">All products</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      {displayProducts.length > 0 &&
        displayProducts.map((p) => (
          <ProductCard style={{ display:"flex", flexDirection:"row" }}
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
