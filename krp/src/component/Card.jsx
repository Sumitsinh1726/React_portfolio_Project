import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EastRoundedIcon from "@mui/icons-material/EastRounded";

const Card = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          {/* <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Pricing
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
            </p>
            <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
              <button className="py-1 px-4 bg-indigo-500 text-white focus:outline-none">
                Monthly
              </button>
              <button className="py-1 px-4 focus:outline-none">Annually</button>
            </div>
          </div> */}

          <div className="flex flex-wrap -m-4 justify-center items-end">
            <div className="p-3 xl:w-1/3 md:w-1/3 w-full">
              <div className="h-full p-4 rounded-2xl border-2 border-gray-300 flex flex-col relative overflow-hidden hover:shadow-3xl">
                <div className="border-b border-gray-200 mt-4 px-4">
                  <h1 className="text-4xl text-gray-900 leading-none flex items-end pb-2 mb-4  ">
                    <span className="font-semibold">$43.99</span>
                    <span className="text-sm ml-1 font-normal text-gray-500">
                      /6-month
                    </span>
                  </h1>
                  <p className="bg-gray-200 text-gray-600 rounded-md px-3 py-1 mb-5 w-3/12 text-center">
                    20% off
                  </p>
                </div>

                <h4 className="text-xl font-medium my-5 px-4">
                  Start up starter packs
                </h4>

                <p className="flex items-center text-gray-600 text-sm">
                  <ArrowRightIcon className="text-blue-300 " fontSize="large" />
                  10k projects / month
                </p>

                <p className="flex items-center text-gray-600 mb-1 text-sm">
                  <ArrowRightIcon className="text-blue-300 " fontSize="large" />
                  Expanded channel up to 500 channels
                </p>

                {/* <div>
                  <div className=""></div>  
                </div> */}
                <p className="flex items-center leading-6 text-gray-600 text-sm mb-16">
                  <ArrowRightIcon
                    className="text-blue-300  "
                    fontSize="large"
                  />
                  Cutomable chart to predict how your growth would go
                </p>

                <button className=" text-center mt-auto flex justify-center items-center text-lg text-blue-800 bg-gray-200 border-0 py-3 px-4 my-5 focus:outline-none hover:bg-blue-800 hover:text-white rounded">
                  More Features
                  <EastRoundedIcon className="ml-1" />
                </button>
              </div>
            </div>

            <div className="p-3 xl:w-1/3 md:w-1/3 w-full ">
              <div className=" rounded-2xl text-center bg-blue-800 text-white px-[2px] pb-[1px] hover:shadow-3xl">
                <div className=" flex items-center justify-center py-3">
                  <h1>Top Picks</h1>
                </div>

                <div className="bg-white h-full p-4 rounded-2xl  flex flex-col relative overflow-hidden ">
                  <div className="border-b border-gray-200 mt-4 px-4">
                    <h1 className="text-4xl text-gray-900 leading-none flex items-end pb-2 mb-4  ">
                      <span className="font-semibold">$43.99</span>
                      <span className="text-sm ml-1 font-normal text-gray-500">
                        /6-month
                      </span>
                    </h1>
                    <p className="bg-gray-200 rounded-md px-3 py-1 mb-5 w-3/12 text-center text-gray-600">
                      30% off
                    </p>
                  </div>

                  <h4 className="text-xl font-medium my-5 px-4 text-start  text-gray-600">
                    Start up starter packs
                  </h4>

                  <p className="flex items-center text-gray-600 text-sm">
                    <ArrowRightIcon
                      className="text-blue-300 "
                      fontSize="large"
                    />
                    10k projects / month
                  </p>

                  <p className="flex items-center text-gray-600 mb-1 text-sm">
                    <ArrowRightIcon
                      className="text-blue-300 "
                      fontSize="large"
                    />
                    Expanded channel up to 500 channels
                  </p>

                  <p className="flex items-center leading-6 text-gray-600 text-sm mb-16">
                    <ArrowRightIcon
                      className="text-blue-300  "
                      fontSize="large"
                    />
                    Cutomable chart to predict how your growth would go
                  </p>

                  <button className=" text-center mt-auto flex justify-center items-center text-lg text-blue-800 bg-gray-200 border-0 py-3 px-4 my-5 focus:outline-none hover:bg-blue-800 hover:text-white rounded">
                    More Features
                    <EastRoundedIcon className="ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <div className="p-3 xl:w-1/3 md:w-1/3 w-full">
              <div className="h-full p-4 rounded-2xl border-2 border-gray-300 flex flex-col relative overflow-hidden hover:shadow-3xl">
                <div className="border-b border-gray-200 mt-4 px-4">
                  <h1 className="text-4xl text-gray-900 leading-none flex  pb-4 mb-2 items-end">
                    <span className="font-semibold">$72.99</span>
                    <span className="text-sm ml-1 font-normal text-gray-500 mt-2">
                      /year
                    </span>
                  </h1>
                  <p className="bg-gray-200 rounded-md px-3 py-1 mb-5 w-3/12 text-center text-gray-600">
                    60% off
                  </p>
                </div>

                <h4 className="text-xl font-medium my-5 px-4">
                  Start up starter packs
                </h4>

                <p className="flex items-center text-gray-600 text-sm">
                  <ArrowRightIcon className="text-blue-300 " fontSize="large" />
                  10k projects / month
                </p>

                <p className="flex items-center text-gray-600 mb-1 text-sm">
                  <ArrowRightIcon className="text-blue-300 " fontSize="large" />
                  Expanded channel up to 500 channels
                </p>

                {/* <div>
                  <div className=""></div>  
                </div> */}
                <p className="flex items-center leading-6 text-gray-600 text-sm mb-16">
                  <ArrowRightIcon
                    className="text-blue-300  "
                    fontSize="large"
                  />
                  Cutomable chart to predict how your growth would go
                </p>

                <button className=" text-center mt-auto flex justify-center items-center text-lg text-blue-800 bg-gray-200 border-0 py-3 px-4 my-5  focus:outline-none hover:bg-blue-800 hover:text-white rounded">
                  More Features
                  <EastRoundedIcon className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
