import React from "react";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Handshake from "../images/handshake.svg";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="w-10/12 absolute right-0 top-[70px] px-12 flex ">
        <div className="w-[72%]"></div>
        <div className="w-[28%] bg-gray-50 p-4 rounded-xl">
          <div className="flex justify-between bg-[#266663] text-white p-5 rounded-xl">
            <div className="">
              <h5 className="text-sm font-medium"> <span className="text-2xl"> $30.50</span> / Month</h5>
              <p className="text-sm my-2 font-medium"> $20.99 Billed Annually </p>
              <button className="px-3 py-2 bg-white text-[#266663] text-sm font-medium rounded mt-3 ">Accept</button>
            </div>
            <img src={Handshake} alt="" width={110} className="invert" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
