import React from "react";
import { useLocation } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AdminProfile from "../../images/profile.avif";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(7);

  return (
    <>
      <div className="w-10/12 absolute right-0 top-0 h-[70px] flex justify-between items-center px-12 ">
        <p className="capitalize text-2xl font-medium">{pathname}</p>

        <div className="flex items-center space-x-8">
          <div className="">
            <SearchRoundedIcon className="mr-2" />
            <input
              type="text"
              name=""
              placeholder="Search"
              className="px-2 py-2 border-none rounded"
            />
          </div>

          <NotificationsNoneIcon fontSize="large" className="bg-gray-50 px-2 cursor-pointer rounded-full" />

          <div className="flex items-center">
            <img src={AdminProfile} alt="" width={45} />
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropodwn"
              className="focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm pl-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              <span className="flex items-center justify-start">
                <p className="text-lg">Smith Dhin</p> 
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
              <p className="text-gray-400 font-normal">Product Manager</p>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li> */}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
