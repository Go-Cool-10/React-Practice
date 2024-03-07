import React, { useMemo, useState } from "react";

const SqaureDemo = () => {
  let [num, setNum] = useState(2);
  const square = (num) => {
    console.log("calc");
    return num * 2;
  };
  const result = useMemo(() => {
    return square(num);
  }, [num]);
  return (
    <>
      {result} <br />
      <button onClick={() => setNum((prevValue) => prevValue + 1)}>
        Update
      </button>
      <button onClick={() => setNum(num)}>Same</button>
    </>
  );
};

export default SqaureDemo;
