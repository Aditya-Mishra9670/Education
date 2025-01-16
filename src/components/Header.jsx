import { Bell, Menu, Search, User } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div className="navbar fixed backdrop-blur-lg bg-base-100/70 w-full top-0 z-40 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <Menu className="w-6 h-6" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-xl dropdown-content bg-white text-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            <li>
              <Link to="/course">Courses</Link>
            </li>
            <li>
              <Link to="/teachers">Teachers</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navbar-end flex items-center gap-4">
        <button
          className="btn btn-sm gap-2 transition-colors"
          onClick={() => setShowSearchBar(!showSearchBar)}
        >
          <Search className="w-5 h-5" />
          <span className="hidden sm:inline">Search</span>
        </button>
        <Link
          to="/notifications"
          className="btn btn-sm gap-2 transition-colors"
        >
          <Bell className="w-5 h-5" />
          <span className="hidden sm:inline">Notifications</span>
        </Link>
        {true ? (
          <Link
            to="/profile"
            className="btn btn-sm gap-2 transition-colors"
          >
            <User className="w-5 h-5" />
            <span className="hidden sm:inline">Profile</span>
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn btn-sm gap-2 transition-colors"
          >
            <span className="hidden sm:inline">Login</span>
          </Link>
        )}
      </div>

      {showSearchBar && (
        <dialog  className="modal">
        <div className="modal-box">
          <form method="dialog">
            
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <input type="text" />
        </div>
      </dialog>
      )}
    </div>
  );
};

export default Header;
