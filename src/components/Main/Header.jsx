import { Bell, Lock, Menu, Search, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar, MenuC } from "../index";

const Header = () => {
  const userAuth = true;
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar fixed backdrop-blur-xl bg-base-100/70 w-full top-0 z-40 shadow-lg">
      <div className="navbar-start">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle ml-5"
        >
          <Link to="/">
            <img
              src="https://ci3.googleusercontent.com/meips/ADKq_Nb--IXJ9pLL70f1Xt1aLNKQLSVRomZRY7qxNVR1eC44k_Ea_bqIGbVLVX1zXFAARvk_zd16ONTqTUIAy0kEWorBGO-_b-3AoiPFR5uEGel-VpaYxpaHHb9igPoamj7D5dNkmGpy3gv5lKysAQ=s0-d-e1-ft#https://res.cloudinary.com/dzitsseoz/image/upload/v1736671628/vcgq9rhodhvrs6dcridx.png"
              alt="Logo"
            />
          </Link>
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
        {userAuth && (
          <Link
            to="/notifications"
            className="btn btn-sm gap-2 transition-colors"
          >
            <Bell className="w-5 h-5" />
            <span className="hidden sm:inline">Notifications</span>
          </Link>
        )}
        {userAuth ? (
          <button
            className="btn btn-sm gap-2 transition-colors"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {!openMenu && <Menu className="w-5 h-5" />}
            {openMenu && <X className="w-5 h-5" />}
            <span className="hidden sm:inline">Menu</span>
          </button>
        ) : (
          <Link to="/login" className="btn btn-sm gap-2 transition-colors">
            <Lock className="w-5 h-5" />
            <span className="hidden sm:inline">Login</span>
          </Link>
        )}
      </div>

      {<MenuC isOpen={openMenu} />}
      {/* Update required  */}
      {
        <SearchBar
          isOpen={showSearchBar}
          isClose={() => setShowSearchBar(false)}
        />
      }
    </div>
  );
};

export default Header;
