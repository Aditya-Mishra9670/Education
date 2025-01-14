import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <header
      className="shadow sticky z-50 top-0 bg-[#F4EAE6]"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        border: "1px solid #000",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav className="px-2 lg:px-4">
        <div
          className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
          style={{ height: "48px" }}
        >
          {/* Logo */}
          <div className="hidden lg:flex justify-between items-center lg:space-x-6">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-2 h-8" 
              alt="Site Logo"
            />
          </Link>
            {[
              { path: "/", label: "Home" },
              { path: "/courses", label: "Courses" },
              { path: "/categories", label: "Categories" },
            ].map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                    `text-sm font-medium duration-200 ${
                      isActive ? "text-[#E57F84]" : "text-gray-800"
                    } hover:text-[#E57F84] no-underline`
                  }  
              >
                {label}
              </NavLink>
              
            ))}
          </div>
            <div className=''>
            
            </div>
          {/* Buttons */}
          <div className="flex items-center space-x-4">
        
            <form action='#' className="d-flex" role="search">
            <input className='border border-gray-300 rounded-2xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 bg-[#F4EAE6]'
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                />
            <button 
                className="text-white bg-[#2F5061] hover:text-black focus:ring-orange-300 rounded-2xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2" 
                type="submit">
                Search
            </button>

            </form>

            <div className='px-3'>
            <NavLink
                    key="/login"
                    to="/login"
                    className={({ isActive }) =>
                        `text-sm font-medium duration-200 ${
                        isActive ? "text-[#E57F84]" : "text-gray-700"
                        } hover:text-[#E57F84]`
                    }  
                >
                    Sign In
                </NavLink>/
                <NavLink
                    key="/register"
                    to="/register"
                    className={({ isActive }) =>
                        `text-sm font-medium duration-200 ${
                        isActive ? "text-[#E57F84]" : "text-gray-700"
                        } hover:text-[#E57F84]`
                    }  
                >
                    Sign Up
                </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
