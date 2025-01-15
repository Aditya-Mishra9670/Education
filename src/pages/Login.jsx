import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Globe, Facebook } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen p-5 sm:p-20 flex items-center justify-center bg-yellow-50">
      <div className="w-full max-w-6xl flex bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="hidden md:flex w-1/3 bg-sky-200 p-8 rounded-r-3xl items-center justify-center">
          <div className="text-center">
            <img
              src="https://ci3.googleusercontent.com/meips/ADKq_Nb--IXJ9pLL70f1Xt1aLNKQLSVRomZRY7qxNVR1eC44k_Ea_bqIGbVLVX1zXFAARvk_zd16ONTqTUIAy0kEWorBGO-_b-3AoiPFR5uEGel-VpaYxpaHHb9igPoamj7D5dNkmGpy3gv5lKysAQ=s0-d-e1-ft#https://res.cloudinary.com/dzitsseoz/image/upload/v1736671628/vcgq9rhodhvrs6dcridx.png"
              alt="Company Logo"
              className="mb-6"
            />
            <h3 className="text-2xl font-semibold text-sky-800">Welcome to Study Tube</h3>
            <p className="text-sky-600 mt-4 text-sm">
              Unlock your potential with our tailored learning solutions.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-sky-800 text-center">Log In</h2>
          <p className="text-sm text-gray-500 text-center mt-2">
            Access your account and continue learning
          </p>
          <form className="mt-8">
            <div className="mb-5 relative">
              <Mail className="absolute left-3 top-3 text-sky-400" />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full rounded-lg pl-10 focus:ring-1 focus:ring-sky-400 bg-sky-100"
              />
            </div>
            <div className="mb-5 relative">
              <Lock className="absolute left-3 top-3 text-sky-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full rounded-lg pl-10 focus:ring-1 focus:ring-sky-400 bg-sky-100"
              />
              <div
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </div>
            </div>
            <div className="flex justify-between items-center mb-6">
              <Link to="/forgot-password" className="text-sky-600 hover:underline">
                Forgot Password?
              </Link>
              <Link to="/signup" className="text-sky-600 hover:underline">
                Sign Up
              </Link>
            </div>
            <button
              type="submit"
              className="btn bg-sky-600 text-white w-full py-3 rounded-lg hover:bg-sky-500 transition duration-300"
            >
              Log In
            </button>
          </form>
          <div className="divider text-gray-500 my-8">OR</div>
          <div className="flex flex-col gap-4">
            <button className="btn bg-white border border-sky-300 text-sky-700 w-full py-3 rounded-lg hover:bg-sky-100 flex items-center justify-center gap-2">
              <Globe /> Continue with Google
            </button>
            <button className="btn bg-white border border-sky-300 text-sky-700 w-full py-3 rounded-lg hover:bg-sky-100 flex items-center justify-center gap-2">
              <Facebook /> Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
