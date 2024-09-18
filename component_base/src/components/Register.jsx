import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Register() {
  const [accounts, setAccounts] = useState(()=> JSON.parse(localStorage.getItem('todo')) || []);
  const [account, setAccount] = useState({});
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
    console.log(accounts);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(account);
    const newAccount = {
        id: Math.floor(Math.random() * 100),
        userName: account.userName,
        password: account.password,
        confirmPassword: account.confirmPassword,
        email: account.email
      };
      setAccounts([...accounts, newAccount]);
      setAccount({});
  };
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(accounts));
  }, [accounts]);
  return (
    <div className="register">
      <form action="" onSubmit={handleSubmit}>
        <h3>Register Account</h3>
        <div className="login-option-re">
          <label htmlFor="">UserName</label>
          <input
            type="text"
            name="userName"
            onChange={handleChangeInput}
            value={account.username}
          />
        </div>
        <div className="login-option-re">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChangeInput}
            value={account.password}
          />
        </div>
        <div className="login-option-re">
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChangeInput}
            value={account.confirmPassword}
          />
        </div>
        <div className="login-option-re">
          <label htmlFor="">Email Address</label>
          <input
            type="text"
            name="email"
            onChange={handleChangeInput}
            value={account.email}
          />
        </div>
        <div className="login-option">
          <button className="btn" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
