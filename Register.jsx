import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Replace with your actual Django registration endpoint
    const register_url = window.location.origin + "/djangoapp/register";

    const res = await fetch(register_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const json = await res.json();
    if (json.status === "OK") {
      window.location.href = "/"; // Redirect on success
    } else {
      alert("Registration failed: " + json.error);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h2>Create Your Account</h2>
          <p>Join the AutoElite Dealership community</p>
        </div>

        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <div className="input-group col">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group col">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <div className="register-footer">
          <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
