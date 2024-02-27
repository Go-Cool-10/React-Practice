import React from "react";

const WrapperComponent = ({ children, title }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

export default WrapperComponent;
