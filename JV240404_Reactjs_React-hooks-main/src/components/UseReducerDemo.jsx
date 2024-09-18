import React, { useReducer, useState } from "react";

export default function UseReducerDemo() {
  const initialValue = 10;

  const reducer = (state, action) => {
    console.log(state);

    switch (action.type) {
      case "increase":
        // Tăng lên 1
        return (state += 10);

      case "decrease":
        // Giảm lên 1
        return (state -= 10);

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleIncrease = () => {
    dispatch({
      type: "increase",
    });
  };

  const handleDecrease = () => {
    dispatch({
      type: "decrease",
    });
  };

  return (
    <div>
      <h3>Count: {state}</h3>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}
