import React from "react";
import { useContext } from "react";
import { ProviderContext } from "./providerContext";

const ButtonDemo = () => {
  let data = useContext(ProviderContext);
  return (
    <>
      <button>{data.name}</button>
    </>
  );
};

export default ButtonDemo;
