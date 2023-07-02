import React from "react";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font md:mx-container ">
        <div className=" mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="flex items-center  ml-3 text-xl">
              <img src={Logo} className="h-[6vh]" alt="" />
              <p className="font-navlogo text-xl pt-2">Sales Grow</p>
            </span>
          </NavLink>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="/"
              className="mr-5  text-xl text-black font-semibold hover:text-indigo-500"
            >
              Home
            </NavLink>
            {/* <NavLink to="/download" className="mr-5 hover:text-green-900">
              Download
            </NavLink> */}
            <NavLink
              to="/about"
              className="mr-5 text-xl text-black font-semibold hover:text-indigo-500"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="mr-5 text-xl text-black font-semibold hover:text-indigo-500"
            >
              Contact Us
            </NavLink>
          </nav>

          <div className="flex gap-3">
            <section>
              <NavLink
                to="/login"
                className="inline-flex items-center bg-blue-800 text-white border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 rounded text-lg mt-4 md:mt-0"
              >
                Login
              </NavLink>
            </section>
            <section>
              <NavLink
                to="/signup"
                className="inline-flex items-center outline outline-1 text-black border-0 py-1 px-4 focus:outline-none hover:bg-blue-900 hover:text-white rounded text-lg mt-4 md:mt-0"
              >
                Sign Up
              </NavLink>
            </section>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
