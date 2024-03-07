import React, { useMemo, useState } from "react";

function factorial(n) {
  if (n == 1) return 1;
  let fact = 1;
  for (let i = 2; i <= n; i++) fact = fact * i;
  console.log("Calculating factorial....");
  return fact;
}
const FactorialDemo = () => {
  let [number, setNumber] = useState(1);
  let factorialValue = useMemo(() => {
    return factorial(number);
  }, [number]);
  return (
    <>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <br />
      Factorial Value = {factorialValue}
    </>
  );
};

export default FactorialDemo;
