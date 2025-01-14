import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="bg-gray-100 border-t border-gray-300"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        padding: "4px 0",
        textAlign: "center",
        backgroundColor:"#F4EAE6",
        border: "1px solid #000",
        boxShadow: "0 -1px 3px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      }}
    >
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        {/* Logo */}
        <div className="flex items-center px-2">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
              className="h-8 mr-2"
            />
          </Link>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <Link to="/about" className="text-sm font-medium duration-200 text-gray-800 hover:text-[#E57F84] no-underline">
            About Us
          </Link>
          <Link to="/terms" className="text-sm font-medium duration-200 text-gray-800 hover:text-[#E57F84] no-underline">
            Terms of Service
          </Link>
          <Link to="/privacypolicy" className="text-sm font-medium duration-200 text-gray-800 hover:text-[#E57F84] no-underline">
            Privacy Policy
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900"
            aria-label="Facebook"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900"
            aria-label="Twitter"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fillRule="evenodd"
                d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900"
            aria-label="Linkedin"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 17"
            >
              <path
                fillRule="evenodd"
                d="M16 0H1.984C.89 0 0 .89 0 1.984v14.032C0 17.11.89 18 1.984 18H16c1.094 0 2-.89 2-1.984V1.984C18 .89 17.094 0 16 0ZM5.266 15.4H2.798V7.267h2.468V15.4ZM4.032 6.236A1.433 1.433 0 0 1 2.6 4.8c0-.8.632-1.433 1.433-1.433.8 0 1.434.633 1.434 1.433 0 .8-.633 1.433-1.434 1.433Zm11.336 9.164h-2.468V11.65c0-.895-.018-2.043-1.243-2.043-1.243 0-1.434.97-1.434 1.973v3.82H7.752V7.267h2.37v1.11h.033c.329-.622 1.131-1.276 2.332-1.276 2.49 0 2.949 1.634 2.949 3.76v4.538Z"
                clipRule="evenodd"
                />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
