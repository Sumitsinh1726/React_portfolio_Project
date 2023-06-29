import React from "react";
import Card from "../component/Card";
import EastRoundedIcon from '@mui/icons-material/EastRounded';

const Home = () => {
  return (
    <>
      <div className="md:mx-container">
        <section className="flex flex-col items-center justify-center">
          <h3 className="text-6xl font-bold mt-24 mb-12">
            Realtime tracking <br /> your entire
            <span className="text-violet-700"> business</span>
          </h3>

          <div className="flex">
            <button className="flex items-center px-7 py-3 bg-blue-600 rounded-lg text-white mr-4">
              Start tracking
              <EastRoundedIcon className="ml-1" />
            </button>
            <button className="px-7 py-3 outline outline-1 text-blue-600 rounded-lg">
              Try demo account
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
