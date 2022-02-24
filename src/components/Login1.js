import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import icon from "./images/icons.png";
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // authtoken will be saved and it will redirected to home

      localStorage.setItem("token", json.authtoken);

      history.push("/");
      props.showAlert("Logged In Successfully", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="position-absolute top-50 start-5 translate-middle">
      <div className="wrapper">
        <div className="logo">
          {" "}
          <img src={icon} alt="" />{" "}
        </div>
        <form className="p-3 mt-3" onSubmit={handleSubmit}>
          <div className="form-field d-flex align-items-center">
            {" "}
            <span className="far fa-user"></span>
            <input
              type="email"
              className="LoginInput"
              value={credentials.email}
              onChange={onChange}
              id="email"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Enter your Email"
            />{" "}
          </div>
          <div className="form-field d-flex align-items-center">
            {" "}
            <span className="fas fa-key"></span>
            <input
              type="password"
              className="LoginInput"
              value={credentials.password}
              onChange={onChange}
              name="password"
              id="password"
              placeholder="Enter your Password"
            />{" "}
          </div>
          <button className="btn mt-3">Login</button>
          <div className="or">or</div>
          <button
            type="button"
            className="btn mt-3"
            onClick={() => history.push("/register")}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
