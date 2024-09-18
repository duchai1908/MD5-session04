import React, { useMemo, useRef, useState } from "react";

export default function UseMemoDemo() {
  const [carts, setCarts] = useState([]);
  const [price, setPrice] = useState(0);

  const inputRef = useRef(null);

  const handleAddToCart = () => {
    setCarts([...carts, +price]);

    setPrice(0);

    // Focus vào input
    inputRef.current.focus();
  };

  const handleTotalPrice = useMemo(() => {
    console.log("Tính toán lại");

    const total = carts.reduce((prev, curent) => curent + prev, 0);

    return total;
  }, [carts]);

  return (
    <div>
      <h3>Total: {handleTotalPrice}</h3>
      <input
        ref={inputRef}
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        type="number"
      />
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}
