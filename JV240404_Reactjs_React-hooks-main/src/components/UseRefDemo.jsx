import React, { useEffect, useRef, useState } from "react";

export default function UseRefDemo() {
  const [time, setTime] = useState(10);
  const inputRef = useRef();
  let intervalId = useRef(10);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleStart = () => {
    // Giảm đi 1 sau 1s
    intervalId.current = setInterval(() => {
      // Cập nhật lại state
      setTime((prev) => prev - 1);
    }, 1000);
  };

  const handleStop = () => {
    // Dừng lại
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <input name="input" id="input" ref={inputRef} type="text" />

      <h3>Time: {time}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
