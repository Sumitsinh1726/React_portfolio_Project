import React from "react";
import Sidebar from "./component/Sidebar";
import NevbarSales from "./component/NevbarSales";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import Bird from "../images/Bird.png"

const SalesDashboard = () => {
  return (
    <>
      <Sidebar />
      <NevbarSales />
      <div className="w-[93%] absolute right-0 top-[90px] px-14">
        <div className="mt-24 flex gap-5">
          <div className="w-7/12">
            <h1 className="text-2xl font-semibold">Bookshelf</h1>

            <div className="flex gap-10 my-20">
              <div className="w-4/12 bg-red-500 p-5 rounded-3xl flex flex-col max-h-screen relative ">
                <div className="flex flex-col items-center">
                  <div className="w-9/12 flex flex-col absolute -top-12 bg-[#eeeeee] -rotate-6 justify-center items-center text-center py-4 px-2 rounded-3xl">
                    <p className="text-[7px] text-gray-400 tracking-widest">
                      A Minimialist's Self-discovery Tale
                    </p>

                    <h1 className="text-[10px] text-gray-400 tracking-widest">
                      SEZEN AHISKAL
                    </h1>

                    <div className="my-16">
                      <input
                        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch"
                      />
                    </div>
                    <div className="text-center">
                      <h1 className="text-[14px] tracking-widest text-gray-600">
                        BLACK OUT
                      </h1>
                      <p className="text-[7px] text-gray-400 tracking-widest">
                        How I Found My True Self Once I Logged Out of Social
                        Media
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-[91%]">
                  <h1 className="text-xl  text-red-50 font-medium mt-3">
                    Blackout
                  </h1>
                  <p className="text-red-50 my-2">by Sezen Ahiskal</p>

                  <div className="flex justify-between mt-4">
                    <button className="bg-black text-white px-5 py-2 rounded-3xl">
                      View
                    </button>
                    <button className="border border-red-200 px-5 py-2 text-white rounded-3xl">
                      Buy for $12
                    </button>
                  </div>
                </div>

              </div>


              {/* Card  Second */}


              <div className="w-3/12 bg-[#f2f1ef] flex flex-col justify-center relative h-80 rounded-3xl ">
                <div className="flex flex-col items-center justify-center ">
                  <div className="w-9/12 text-center bg-[#f9cecb] absolute rounded-3xl h-48 ">
                    <p className="py-14">Img</p>
                    <p className="text-gray-400 text-[7px] tracking-widest py-4">My Img</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center mt-[70%]">
                  <h1 className="text-lg font-semibold">The Crow"s vov</h1>
                  <p className="text-sm text-gray-400 font-medium">By Susan Briscoe </p>
                  <button className="px-3 py-1 bg-red-500 border rounded-3xl text-white mt-2">View Book</button>
                </div>

              </div>

              <div className="w-3/12 bg-[#f2f1ef] flex flex-col justify-center relative h-80 rounded-3xl ">
                <div className="flex flex-col items-center justify-center ">
                  <div className="w-9/12 text-center bg-yellow-400 absolute rounded-3xl h-48">
                    <p className="py-7">Img</p>
                    <p className="tracking-widest text-xs text-gray-100"> Motherhood</p>
                    <p className="text-[6px] py-3">A Confession</p>
                    <p className="text-gray-400 text-[7px] tracking-widest py-4
                    ">NATALIE CARNES</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center mt-[70%]">
                  <h1 className="text-lg font-semibold">Motherhood</h1>
                  <p className="text-sm text-gray-400 font-medium">By Natalie Carnes </p>
                  <button className="px-3 py-1 bg-red-500 border rounded-3xl text-white mt-2">View Book</button>
                </div>

              </div>

            </div>
          </div>

          <div className="w-5/12">
            <h1 className="text-2xl font-bold">Reading Now</h1>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 my-5">
              <div className="border rounded-2xl p-5">
                <h1 className="font-bold">Spare</h1>
                <p className="text-sm text-gray-400 my-2">by Prince Harry</p>

                <div className="flex justify-between items-center">
                  <button className="bg-[#faf7f8] px-3 py-1 rounded-2xl ">
                    {" "}
                    <span className="mx-1">
                      <MenuBookIcon />
                    </span>{" "}
                    Read
                  </button>
                  <h1>Loader</h1>
                </div>
              </div>

              <div className="border rounded-2xl p-5">
                <h1 className="font-bold">Spare</h1>
                <p className="text-sm text-gray-400 my-2">by Prince Harry</p>

                <div className="flex justify-between items-center">
                  <button className="bg-[#faf7f8] px-3 py-1 rounded-2xl ">
                    {" "}
                    <span className="mx-1">
                      <MenuBookIcon />
                    </span>{" "}
                    Read
                  </button>
                  <h1>Loader</h1>
                </div>
              </div>

              <div className="border rounded-2xl p-5">
                <h1 className="font-bold">Spare</h1>
                <p className="text-sm text-gray-400 my-2">by Prince Harry</p>

                <div className="flex justify-between items-center">
                  <button className="bg-[#faf7f8] px-3 py-1 rounded-2xl ">
                    {" "}
                    <span className="mx-1">
                      <MenuBookIcon />
                    </span>{" "}
                    Read
                  </button>
                  <h1>Loader</h1>
                </div>
              </div>

              <div className="border rounded-2xl p-5">
                <h1 className="font-bold">Spare</h1>
                <p className="text-sm text-gray-400 my-2">by Prince Harry</p>

                <div className="flex justify-between items-center">
                  <button className="bg-[#faf7f8] px-3 py-1 rounded-2xl ">
                    {" "}
                    <span className="mx-1">
                      <MenuBookIcon />
                    </span>{" "}
                    Read
                  </button>
                  <h1>Loader</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Name */}
      </div>
    </>
  );
};

export default SalesDashboard;
