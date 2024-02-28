import React from "react";
import { useContext } from "react";
import { ProviderContext } from "./providerContext";

const DataConsumer = ({ children }) => {
  let data = useContext(ProviderContext);
  return (
    <>
      <b>Welcome {data.name}</b>
      {children}
    </>
  );
};

export default DataConsumer;
