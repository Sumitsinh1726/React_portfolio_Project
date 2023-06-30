import React from "react";
import Card from "../component/Card";
import EastRoundedIcon from '@mui/icons-material/EastRounded';

const Home = () => {
  return (
    <>
      <div className="md:mx-container">
        <section className="flex flex-col items-center justify-center h-[75vh]">
          <h3 className="text-6xl font-bold mt-24 mb-12">
            Realtime tracking <br /> your entire
            <span className="text-violet-700"> business</span>
          </h3>

          <div className="flex">
            <button className="flex items-center px-7 py-4 bg-blue-800 rounded-lg text-white mr-4 hover:bg-blue-900">
              Start tracking
              <EastRoundedIcon className="ml-1" />
            </button>
            <button className="px-7 py-4 outline outline-1 text-blue-600 rounded-lg hover:bg-blue-800 hover:text-white">
              Try demo account
              <EastRoundedIcon className="ml-1" />
            </button>
          </div>
        </section>

        <section>
            <Card />
        </section>
      </div>
    </>
  );
};

export default Home;
