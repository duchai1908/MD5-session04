import React, { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");

  //   useEffect(() => {
  //     document.title = title;
  //   });

  //   useEffect(() => {
  //     console.log("Re-render");
  //   }, []);

  // Cách 2: Hay dùng để gọi API đọc dữ liệu
  useEffect(() => {
    console.log("Re-render");
  }, [count, title]);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>
        {console.log("Mounted")}
        <h3>Demo useEffect</h3>
        <input onChange={(e) => setTitle(e.target.value)} type="text" />

        <button onClick={handleCount}>Count</button>
      </div>
    </>
  );
}
