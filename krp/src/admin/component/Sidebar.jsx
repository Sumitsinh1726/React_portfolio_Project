import React from "react";
import Logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
  const active = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "black" : "",
      color: isActive ? "white" : "",
    };
  };
  return (
    <>
      <aside className="w-2/12 relative h-screen border-r">
        <NavLink to="/" className="text-center text-lg font-medium py-4 block">
          <span className="flex items-center  ml-3 text-xl">
            <img src={Logo} className="h-[6vh]" alt="" />
            <p className="font-navlogo text-xl pt-2">Sales Grow</p>
          </span>
        </NavLink>

        <ul className="">
          <li className="mx-3 my-1">
            <NavLink
              to="/admin/dashboard"
              style={active}
              className="block pl-5 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              <DashboardIcon className="mr-2" />
              Dashboard
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink
              to="/admin/invoices"
              style={active}
              className="block pl-5 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              <DashboardIcon className="mr-2" />
              Invoices
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink
              to="/admin/transection"
              style={active}
              className="block pl-5 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              <DashboardIcon className="mr-2" />
              Transection
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink
              to="/admin/products"
              style={active}
              className="block pl-5 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              <DashboardIcon className="mr-2" />
              Products
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink
              to="/admin/myteam"
              style={active}
              className="block pl-5 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              <DashboardIcon className="mr-2" />
              My Team
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink
              to="/admin/setting"
              style={active}
              className="block pl-5 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              <DashboardIcon className="mr-2" />
              Settings
            </NavLink>
          </li>
        </ul>
        <section className="absolute bottom-0 w-full">
          <ul>
            <li className="mx-3 my-1 ">
              <NavLink
                to="/"
                style={active}
                className="block pl-5 py-3 rounded-lg hover:bg-black hover:text-white"
              >
                <DashboardIcon className="mr-2" />
                Logout
              </NavLink>
            </li>
          </ul>
        </section>
      </aside>
    </>
  );
};

export default Sidebar;
