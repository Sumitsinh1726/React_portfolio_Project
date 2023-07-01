import React from "react";
import { useLocation } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname.slice(7);

  return (
    <>
      <div className="w-10/12 absolute right-0 top-0 h-[70px] flex justify-between items-center px-12 ">
        <p className="capitalize text-2xl font-medium">{pathname}</p>

        <div className="">
          <div className="">
            <SearchRoundedIcon className="mr-2" />
            <input type="text" name="" placeholder="Search" className="px-2 py-2" />
          </div>

          <div className="">

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
