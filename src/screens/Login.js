import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [creds, setcreds] = useState({
    email: "",
    password: "",
  });

  let navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault(); //synthetic event
    const response = await fetch("http://65.2.176.144:3000/api/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: creds.email,
        password: creds.password,
      }),
    });
    const json = await response.json();
    console.log("🚀 ~ handleSubmit ~ json:", json);

    if (!json.success) {
      alert("Enter valid credentials");
    }

    if(json.success){
      localStorage.setItem("userEmail", creds.email)
      localStorage.setItem("authToken", json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate("/")
    }
  };

  const onChange = (event) => {
    setcreds({ ...creds, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={creds.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={creds.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/signup" className="m-3 btn btn-danger">
            I'm a new user
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
