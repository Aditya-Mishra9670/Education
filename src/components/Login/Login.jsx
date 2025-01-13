import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{
      backgroundImage: "linear-gradient(to right, #6a11cb, #2575fc)",
      color: "#fff",
    }}>
      <div className="card p-4" style={{ width: "400px", borderRadius: "15px" }}>
        <h2 className="text-center mb-4">Sign in</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="d-flex justify-content-between mb-3">
            <a href="/forgot-password" className="text-decoration-none">Forgot Password?</a>
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          <p>Don't have an account? <a href="/signup" className="text-decoration-none">Sign Up</a></p>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-outline-light w-100 mb-2">Login with Google</button>
          <button className="btn btn-outline-light w-100">Login with Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
