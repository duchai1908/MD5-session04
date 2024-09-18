import React from "react";
import { useState } from "react";

export default function Login() {
  const [accounts, setAccounts] = useState(
    () => JSON.parse(localStorage.getItem("todo")) || []
  );
  const [account, setAccount] = useState({});
  const handleLogin = (e) => {
    e.preventDefault();
    const newAccount = {
        userName: account.userName,
        password: account.password,
      };
    const checkAccount = accounts.find(item => item.userName ===newAccount.userName && item.password ===newAccount.password);
    if(checkAccount){
        alert("dung");
    }else{
        alert("Sai")
    }
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };
  return (
    <div className="login">
      <h2>Account Login</h2>
      <form action="" onSubmit={handleLogin}>
        <div className="login-option">
          <div className="login-option-re">
            <label htmlFor="">UserName</label>
            <input type="text" onChange={handleChangeInput} name="userName"/>
          </div>
          <div className="login-option-re">
            <label htmlFor="">Password</label>
            <input type="password" onChange={handleChangeInput} name="password"/>
          </div>
        </div>
        <div className="login-option">
          <div className="login-option-re-2">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <div className="login-option-re">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
        <div className="login-option">
          <button className="btn">Login</button>
        </div>
      </form>
    </div>
  );
}
