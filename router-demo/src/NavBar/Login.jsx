import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  let initialValue = { username: "", password: "" };
  const [loginUser, setLoginUser] = useState(initialValue);
  let navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(loginUser);
    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginUser);
    setLoginUser(initialValue);
    navigate('/home')
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            value={loginUser.username}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={loginUser.password}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
