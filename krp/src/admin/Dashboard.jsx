import React from "react";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Profile from "../images/profile.avif";
import Handshake from "../images/handshake.svg";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="w-10/12 absolute right-0 top-[70px] px-12 flex gap-12">
        <div className="w-[71%] py-4">
          <div className="flex justify-between">
            <div className="bg-gray-50 py-4 px-12 rounded-lg">
              <p className="text-sm font-medium text-gray-400">
                Total Earning <TrendingUpIcon />
              </p>
              <h3 className="text-2xl font-medium">$12,495.00</h3>
            </div>
            <div className="bg-gray-50 py-4 px-12 rounded-lg">
              <p className="text-sm font-medium text-gray-400">
                Total Spending <TrendingDownRoundedIcon />
              </p>
              <h3 className="text-2xl font-medium">$09,495.00</h3>
            </div>
            <div className="bg-gray-50 py-4 px-12 rounded-lg">
              <p className="text-sm font-medium text-gray-400">
                Goal This Month <TrendingUpIcon />
              </p>
              <h3 className="text-2xl font-medium">$24,435.00</h3>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-medium">New Invoice</h2>

            <table className="w-full">
              <thead>
                <tr className="text-sm font-normal text-gray-400 border-b">
                  <th className="text-start font-medium py-4">INVOICE NAME</th>
                  <th className="text-start font-medium py-4">INVOICE ID</th>
                  <th className="text-start font-medium py-4">DATE</th>
                  <th className="text-start font-medium py-4">AMOUNT</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                <tr className="border-b">
                  <td className="py-4">Mailchip Support</td>
                  <td className="py-4">Invoice V12-345679</td>
                  <td className="py-4">28-02-22</td>
                  <td className="py-4">$320,00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">Cash Withdrawal</td>
                  <td className="py-4">Invoice V12-345679</td>
                  <td className="py-4">14-04-22</td>
                  <td className="py-4">$320,00</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">Ronald Gmbh</td>
                  <td className="py-4">Invoice V12-345679</td>
                  <td className="py-4">05-06-22</td>
                  <td className="py-4">$320,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-[29%] bg-gray-50 p-4 rounded-xl">
          <div className="flex justify-between bg-[#266663] text-white p-5 rounded-xl">
            <div className="">
              <h5 className="text-sm font-medium">
                <span className="text-2xl"> $30.50</span> / Month
              </h5>
              <p className="text-sm my-2 font-medium">$20.99 Billed Annually</p>
              <button className="px-3 py-2 bg-white text-[#266663] text-sm font-medium rounded mt-3 ">
                Accept
              </button>
            </div>
            <img src={Handshake} alt="" width={110} className="invert" />
          </div>

          <div className="mt-4">
            <h3 className="text-2xl font-medium mb-3">Recent Activity</h3>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <img src={Profile} alt="" width={45} />
                  <span>
                    <h3 className="text-lg font-medium">Alehe Anuha</h3>
                    <p className="text-sm text-gray-500">Just Now</p>
                  </span>
                </div>
                <p className="text-sm">Invoices V12-345679</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <img src={Profile} alt="" width={45} />
                  <span>
                    <h3 className="text-lg font-medium">Arnta Nasu</h3>
                    <p className="text-sm text-gray-500">2 Minutes Ago</p>
                  </span>
                </div>
                <p className="text-sm">Invoices V12-345679</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <img src={Profile} alt="" width={45} />
                  <span>
                    <h3 className="text-lg font-medium">Rohija Jaban</h3>
                    <p className="text-sm text-gray-500">3 Minutes Ago</p>
                  </span>
                </div>
                <p className="text-sm">Invoices V12-345679</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <img src={Profile} alt="" width={45} />
                  <span>
                    <h3 className="text-lg font-medium">Erama Kunta</h3>
                    <p className="text-sm text-gray-500">3 Minutes Ago</p>
                  </span>
                </div>
                <p className="text-sm">Invoices V12-345679</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <img src={Profile} alt="" width={45} />
                  <span>
                    <h3 className="text-lg font-medium">Batin Hure</h3>
                    <p className="text-sm text-gray-500">4 Minutes Ago</p>
                  </span>
                </div>
                <p className="text-sm">Invoices V12-345679</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <img src={Profile} alt="" width={45} />
                  <span>
                    <h3 className="text-lg font-medium">Hanoa Katil</h3>
                    <p className="text-sm text-gray-500">5 Minutes Ago</p>
                  </span>
                </div>
                <p className="text-sm">Invoices V12-345679</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
