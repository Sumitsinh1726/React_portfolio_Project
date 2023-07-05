import React from "react";
import Card from "../component/Card";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import Carousel from "../component/Carousel";

const Home = () => {
  return (
    <>
      <div className="">
        <section className="flex flex-col items-center justify-center h-[95vh] bg-home-hero bg-center bg-cover ">
          <h3 className="text-6xl font-bold mb-12 text-black">
            Realtime tracking <br /> your entire
            <span className="text-violet-700"> business</span>
          </h3>

          <div className="flex">
            <button className="flex items-center px-7 py-4 bg-blue-800 rounded-lg text-white mr-4 hover:bg-blue-900">
              Start tracking
              <EastRoundedIcon className="ml-1" />
            </button>
            <button className="px-7 py-4 outline outline-1 text-black rounded-lg hover:bg-blue-800 hover:text-white hover:outline-none">
              Try demo account
              <EastRoundedIcon className="ml-1" />
            </button>
          </div>
        </section>
        <section className="md:mx-container">
          <Carousel />
        </section>
        <section className="md:mx-container">
          <Card />
        </section>
      </div>
    </>
  );
};

export default Home;
