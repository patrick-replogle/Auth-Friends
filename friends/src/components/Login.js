import React, { useState, useContext } from "react";

import { userContext } from "../contexts/userContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const { setUserName } = useContext(userContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        setUserName(credentials.username);
        props.history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="username"
          value={credentials.username}
          placeholder="username"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={credentials.password}
          placeholder="password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
