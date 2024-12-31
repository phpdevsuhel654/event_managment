import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            localStorage.setItem("token", data.token);
            alert("Login successful");
        } catch (err) {
            alert("Login failed");
        }
    };

    return (
        <form onSubmit={handleLogin}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email} onChange={(e) => setEmail(e.target.value)} required 
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password} onChange={(e) => setPassword(e.target.value)} required
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="javascript:void()">password?</a>
        </p>
      </form>
        // <form onSubmit={handleLogin}>
        //     <h2>Login</h2>
        //     <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        //     <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        //     <button type="submit">Login</button>
        // </form>
    );
};

export default Login;