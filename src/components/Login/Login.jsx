import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages
  
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      if (response.status === 200) {
        console.log("Login successful:", response.data);
        localStorage.setItem("authToken", response.data.token);
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
        setErrorMessage(error.response.data.message || "An error occurred. Please try again.");
      } else if (error.request) {
        setErrorMessage("No response from the server. Please check your network connection.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };
  

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        backgroundImage: "linear-gradient(to right, #6a11cb, #2575fc)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        width: "100vw",
        height: "100vh",
        margin: 0,
      }}
    >
      <div
        className="card p-4 w-100"
        style={{
          maxWidth: "400px",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2 className="text-center mb-4">Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <div className="alert alert-danger text-center">{errorMessage}</div>
          )}
          <div className="d-flex justify-content-between mb-3">
            <a href="/forgot-password" className="text-decoration-none">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="text-decoration-none">
              Sign Up
            </a>
          </p>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-outline-light w-100 mb-2">
            Login with Google
          </button>
          <button className="btn btn-outline-light w-100">
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
