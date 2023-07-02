import React from "react";
import Logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssessmentIcon from "@mui/icons-material/Assessment";

const Sidebar = () => {
  const active = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "white" : "",
      color: isActive ? "black" : "",
    };
  };
  return (
    <>
      <aside className="w-[7%] h-screen bg-[#f9f5f2] relative ">
        <div className="flex  justify-center text-center mb-12 ">
          <img
            src={Logo}
            alt=""
            className="w-7/12 flex justify-center mix-blend-darken my-3 "
          />
        </div>

        <div className="text-center">
          <div className="">
            <ul className="">
              <li className="my-5">
                <NavLink
                  to="/sales/dashboard"
                  className=" px-2 py-2 rounded-lg"
                  style={active}
                >
                  <HomeIcon fontSize="large" className="text-gray-500" />
                </NavLink>
              </li>

              <li className="my-5">
                <NavLink
                  to="/sales/home"
                  className=" px-2 py-2 rounded-lg"
                  style={active}
                >
                  <MenuBookIcon fontSize="large" className="text-gray-500" />
                </NavLink>
              </li>

              <li className="my-5">
                <NavLink
                  to="/sales/about"
                  className=" px-2 py-2 rounded-lg"
                  style={active}
                >
                  <AssessmentIcon fontSize="large" className="text-gray-500" />
                </NavLink>
              </li>
            </ul>
          </div>

          <div className=" text-center justify-center items-center absolute bottom-0 w-full">
            <ul className=" ">
              <li className="my-5 ">
                <NavLink to="/sales/contact" className="px-2 py-2 rounded-lg" style={active}>
                  <AssessmentIcon fontSize="large" className="text-gray-500" />
                </NavLink>
              </li>

              <li className="my-5">
                <NavLink to="/sales/product" className="px-2 py-2 rounded-lg" style={active}>
                  <AssessmentIcon fontSize="large" className="text-gray-500" />
                </NavLink>
              </li>

              <li className="my-5">
                <NavLink
                  to="/sales/users"
                  className="bg-white px-2 py-2 rounded-full"
                  style={active}
                >
                  <AssessmentIcon fontSize="large" className="text-gray-500"/>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
