import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [creds, setcreds] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const [btnText, setBtnText] = useState("Already a user");

  const handleSubmit = async (e) => {
    e.preventDefault(); //synthetic event
    const response = await fetch("http://65.2.176.144:3000/api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: creds.name,
        email: creds.email,
        password: creds.password,
        location: creds.geolocation,
      }),
    });
    const json = await response.json();
    console.log("🚀 ~ handleSubmit ~ json:", json);

    if (!json.success) {
      alert("Enter valid credentials");
    }
    
  };

  const onChange = (event) => {
    setcreds({ ...creds, [event.target.name]: event.target.value });
  };

  const onChangeBtnText = () => {
    setBtnText("Click to Login");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName1"
              name="name"
              value={creds.name}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
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
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="geolocation"
              value={creds.geolocation}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="m-3 btn btn-success" onClick={onChangeBtnText}>
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            {btnText}
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
