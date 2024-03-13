import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub, mul, div } from "./ArithmeticSlice";

const Arithmetic = () => {
  let [number_1, setNumber_1] = useState(0);
  let [number_2, setNumber_2] = useState(0);

  const data = useSelector((state) => state.arithmetic);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e) {
      case "add":
        dispatch(add({ number_1, number_2 }));
        break;
      case "sub":
        dispatch(sub({ number_1, number_2 }));
        break;
      case "mul":
        dispatch(mul({ number_1, number_2 }));
        break;
      case "div":
        dispatch(div({ number_1, number_2 }));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <input
        type="number"
        value={number_1}
        onChange={(e) => setNumber_1(e.target.value)}
      />
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value="default">select</option>
        <option value="add">+</option>
        <option value="sub">-</option>
        <option value="mul">*</option>
        <option value="div">/</option>
      </select>
      <input
        type="number"
        value={number_2}
        onChange={(e) => setNumber_2(e.target.value)}
      />
      = {data.result}
    </>
  );
};

export default Arithmetic;
