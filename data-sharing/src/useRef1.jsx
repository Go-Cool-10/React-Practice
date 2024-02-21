import { useEffect, useRef } from "react";

import React from "react";

const UseRefDemo1 = () => {
  const btnRef = useRef();

  useEffect(() => {
    console.log(btnRef.current)
  }, [])

  const handleMouseOver = () => {
    btnRef.current.style.borderColor = "red";
  };

  const handleMouseOut = () => {
    btnRef.current.style.borderColor = "blue";
  };

  return (
    <button ref={btnRef} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      Click
    </button>
  );
};

export default UseRefDemo1;

