import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/register", { ...user });
      alert("Successful Regestration");
      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="footer-f">
      <div className="login-page">
        <form onSubmit={registerSubmit}>
          <h2>Register</h2>
          <input
            type="text"
            name="name"
            pattern="[a-zA-Z][a-zA-Z ]{2,}"
            required
            placeholder="Name"
            value={user.name}
            onChange={onChangeInput}
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={user.email}
            onChange={onChangeInput}
          />

          <input
            type="password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}"
            required
            autoComplete="on"
            placeholder="Password"
            value={user.password}
            onChange={onChangeInput}
          />
          <input
            type="phone"
            name="phone"
            pattern="^[7-9][0-9]{9}$"
            required
            placeholder="phone"
            value={user.phone}
            onChange={onChangeInput}
          />
          <textarea
            style={{ border: "1px solid #228b22", marginTop: "10px" }}
            name="address"
            placeholder="Enter Your Address"
            required
            value={user.address}
            onChange={onChangeInput}
          />

          <div className="row">
            <button type="submit">Register</button>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
