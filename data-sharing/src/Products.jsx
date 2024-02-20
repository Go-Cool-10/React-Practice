import { useEffect, useState } from "react";

function FetchProducts() {
  let [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let products = getAllProducts;
    setProducts(products);
  }, []);

  return(
    <>
    
    </>
  )
}
export default FetchProducts;
