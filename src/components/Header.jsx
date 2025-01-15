import { Bell, Menu, Search, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar fixed backdrop-blur-lg bg-base-100/70 w-full top-0 z-40 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
            <Menu className="w-6 h-6" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content bg-white text-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center flex justify-center">
        <Link to="/" className="btn btn-ghost text-xl font-bold text-white sm:text-lg md:text-2xl">
          Study Tube
        </Link>
      </div>
      <div className="navbar-end flex items-center gap-4 sm:gap-2 text-sm sm:text-base">
        <button className="btn btn-ghost btn-circle">
          <Search className="text-white w-5 h-5" />
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Bell className="text-white w-5 h-5" />
          </div>
        </button>
        {false ? (
          <Link to="/profile" className="btn bg-base-300/65 text-white flex items-center gap-2 sm:gap-1">
            <User className="w-5 h-5" />
            <span className="hidden sm:inline">Profile</span>
          </Link>
        ) : (
          <Link to="/login" className="btn text-white flex items-center gap-2 sm:gap-1">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
