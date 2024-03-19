import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "./Cart/cartSlice";
import { Link } from "react-router-dom";

const ProductID = () => {
  const dispatch = useDispatch();

  let [product, setProduct] = useState();
  const { productid } = useParams();
  const getProduct = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productid}`
      );
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct(productid);
  });

  return (
    <>
      <b>Products</b>
      {product && (
        <>
          <b>{product.title}</b> <br />
          <img
            src={product.image}
            alt={product.category}
            height="200px"
            width="200px"
          />
          <br />
          <b>{product.price}</b> <br />
          <b>{product.description}</b> <br />
          <b>{product.category}</b> <br />
          <b>
            {product.rating.rate}({product.rating.count})
          </b>
          <Link to="/products"><button>Go Back</button></Link>
          <button onClick={() => dispatch(addCart(product))}>Add to Cart</button>
        </>
      )}
    </>
  );
};

export default ProductID;
