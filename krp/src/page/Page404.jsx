import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-[50vh] justify-center items-center">
      <section className="flex gap-2">
        <h1 className="text-center text-[40px] border-indigo-500 pr-4 border-r-4 font-bold">
          404
        </h1>
        <h1 className="text-center text-[40px] pl-4 font-bold">
          Page Not Found
        </h1>
      </section>
      <div className="flex gap-3 p-5">
        <section className="pt-3">
          <NavLink
            to="/"
            className="inline-flex items-center bg-red-300 text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Home
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </NavLink>
        </section>
        <section className="pt-3">
          <NavLink
            onClick={() => navigate(-1)}
            className="inline-flex items-center bg-indigo-300 text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Go to Previous Page
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </NavLink>
        </section>
      </div>
    </div>
  );
};

export default Page404;
