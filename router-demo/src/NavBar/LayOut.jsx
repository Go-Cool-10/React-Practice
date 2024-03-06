import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const LayOut = ({user}) => {
  return (
    <>
      <Header user={user}/>
      <Outlet /> 
      <Footer/>
    </>
  );
};

export default LayOut;
