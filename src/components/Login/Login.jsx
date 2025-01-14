import React from "react";

const LoginPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{
      backgroundImage: "linear-gradient(to right, #2F5061, #E57F84)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      color: "#fff",
      width: "100vw",
      height: "100vh",
      margin: 0,
      fontFamily: '"Inconsolata", serif',
      fontOpticalSizing: "auto",
      fontWeight: 400, 
      fontVariationSettings: '"wdth" 100',
    }}>
        <div className="card p-4 w-100" style={{ maxWidth: "400px",border: "2px solid black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" , backgroundColor:"#F4EAE6"}}>
          <h2 className="text-center mb-4 font-serif">Sign in</h2>
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
              <label htmlFor="password" className="form-label ">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="d-flex justify-content-between mb-3">
              <a href="/forgot-password" className="text-decoration-none" style={{color:"#4297A0"}}>Forgot Password?</a>
            </div>
            <button type="submit" className="btn w-100" style={{color:"#F4EAE6",backgroundColor: "#2F5061"}}>Login</button>
          </form>
          <div className="text-center mt-3">
            <p>Don't have an account? <a href="/register" className="text-decoration-none" style={{color:"#4297A0"}}>Sign Up</a></p>
          </div>
        </div>
    </div>
  );
};

export default LoginPage;