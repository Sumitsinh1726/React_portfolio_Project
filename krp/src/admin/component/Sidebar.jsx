import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";

const Sidebar = () => {
    const active = (isActive) => {
        return {
            backgroundColor: isActive ? "black" : "",
            color: isActive ? "white" : ""
        }
    } 
  return (
    <>
      <aside className="w-2/12 relative h-screen">
        <h4 className="text-center text-lg font-medium my-8">Sales</h4>

        <ul className="">
          <li className="mx-3 my-1">
            <NavLink to="/dashboard" style={active} className="block pl-5 py-3 rounded-lg">
              <DashboardIcon className="mr-2" />
              Dashboard
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink to="/invoices" style={active} className="block pl-5 py-3 rounded-lg">
              <DashboardIcon className="mr-2" />
              Invoices
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink to="/transection" style={active} className="block pl-5 py-3 rounded-lg">
              <DashboardIcon className="mr-2" />
              Transection
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink to="/products" style={active} className="block pl-5 py-3 rounded-lg">
              <DashboardIcon className="mr-2" />
              Products
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink to="/myteam" style={active} className="block pl-5 py-3 rounded-lg">
              <DashboardIcon className="mr-2" />
              My Team
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink to="/setting" style={active} className="block pl-5 py-3 rounded-lg">
              <DashboardIcon className="mr-2" />
              Settings
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
