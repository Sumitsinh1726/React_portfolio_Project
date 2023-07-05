import React from "react";
import Logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Sidebar = () => {
  const active = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "black" : "",
      color: isActive ? "white" : "",
    };
  };
  return (
    <>
      <aside className="w-2/12 fixed h-screen border-r">
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
              <TimelineRoundedIcon className="mr-2" />
              Dashboard
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink
              to="/admin/invoices"
              style={active}
              className="block pl-5 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              <ReceiptLongRoundedIcon className="mr-2" />
              Invoices
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink
              to="/admin/transection"
              style={active}
              className="block pl-5 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              <ImportExportRoundedIcon className="mr-2" />
              Transection
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink
              to="/admin/products"
              style={active}
              className="block pl-5 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              <ShoppingCartOutlinedIcon className="mr-2" />
              Products
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink
              to="/admin/myteam"
              style={active}
              className="block pl-5 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              <GroupOutlinedIcon className="mr-2" />
              My Team
            </NavLink>
          </li>
          <li className="mx-3 my-1">
            <NavLink
              to="/admin/setting"
              style={active}
              className="block pl-5 py-3 rounded-lg hover:bg-black hover:text-white"
            >
              <SettingsOutlinedIcon className="mr-2" />
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
                <LogoutRoundedIcon className="mr-2" />
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
