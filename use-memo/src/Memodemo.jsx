import React, { useMemo, useState } from "react";
import { useEffect } from "react";

function expensiveCalculation(num) {
  setInterval(async () => {}, 10000);
  return num * 2;
}

const Memodemo = () => {
  let [number, setNumber] = useState(0);
  let [dark, setDark] = useState(false);
  let calculated = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      display: "block",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Toggle Theme");
  }, [themeStyles]);

  return (
    <>
      <div style={themeStyles}>
        Enter number:
        <input
          type="text"
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <button onClick={() => setDark(!dark)}>Toggle</button>
        <span>{calculated}</span>
      </div>
    </>
  );
};

export default Memodemo;
