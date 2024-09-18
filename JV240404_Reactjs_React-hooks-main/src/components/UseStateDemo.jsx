import React, { useState } from "react";

export default function UseStateDemo() {
  const [count, setCount] = useState(0);

  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
  });

  console.log("UserInfo: ", userInfo);

  const handleCount = () => {
    setCount((prev) => prev + 1); // prev = 0
    setCount((prev) => prev + 2); // prev = 1
    setCount((prev) => prev + 3); // prev = 3
  };

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;

    const { name, value } = e.target;

    // Cập nhật State userInfo
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // Ngăn chặn sự kiện mặc định của Form
    e.preventDefault();

    console.log("Submited: ", userInfo);
  };

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={handleCount}>Count</button>

      <form onSubmit={handleSubmit}>
        <input
          name="userName"
          onChange={handleChange}
          // value={userName}
          type="text"
          placeholder="Enter name"
        />
        <input
          name="email"
          onChange={handleChange}
          // value={email}
          type="text"
          placeholder="Enter email"
        />
        <input
          name="password"
          onChange={handleChange}
          // value={password}
          type="password"
          placeholder="Enter password"
        />
        <button type="submit">Submit</button>
        <button type="button">Hủy</button>
      </form>
    </>
  );
}
