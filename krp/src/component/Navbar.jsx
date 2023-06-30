import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font md:mx-container ">
        <div className=" mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">Sales Manage</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink to="/" className="mr-5 hover:text-green-900">
              Home
            </NavLink>
            <NavLink to="/download" className="mr-5 hover:text-green-900">
              Download
            </NavLink>
            <NavLink to="/about" className="mr-5 hover:text-green-900">
              About
            </NavLink>
            <NavLink to="/contact" className="mr-5 hover:text-green-900">
              Contact Us
            </NavLink>
          </nav>
          <NavLink
            to="/signup"
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Sign Up
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
