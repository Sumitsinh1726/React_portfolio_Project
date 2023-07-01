import React from "react";

const Signup = () => {
  return (
    <div className="md:mx-container">
      <section className="">
        <div className="flex w-full px-4 justify-center">
          <div className="w-5/12  flex flex-col justify-center items-center bg-loginimg bg-cover bg-center rounded-[15px] my-5 overflow-auto max-h-[84vh] ">
            {/* <div className="w-9/12  "> */}
            <div className="sticky top-0 backdrop-blur-lg w-full text-center py-4">
              <h1 className="text-2xl font-semibold ">Register Now</h1>
              <p className="text-gray-6000 mt-4 ">Register self Here</p>
            </div>

            <form className="text-start flex flex-col w-9/12 pt-80 pb-12 space-y-5">
              <div className="">
                <label className="text-gray-600  ">First Name</label>

                <input
                  type="text"
                  name=""
                  className="border mt-1 text-gray-500 rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500 w-full"
                  placeholder="Enter your Last Name"
                />
              </div>

              <div className="">
                <label className="text-gray-600 ">Last Name</label>
                <input
                  type="text"
                  name=""
                  className="border mt-1 text-gray-500 rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500 w-full"
                  placeholder="Enter your Last Name"
                />
              </div>

              <div className="">
                <label className="text-gray-600 ">Username</label>
                <input
                  type="text"
                  name=""
                  className="border mt-1 text-gray-500 w-full rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                  placeholder="Enter your username"
                />
              </div>

              <div className="">
                <label className="text-gray-600 ">Mobile Number</label>
                <input
                  type="tel"
                  name=""
                  className="border mt-1 text-gray-500 w-full rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                  placeholder="Enter your Mobile Number"
                />
              </div>

              <div className="">
                <label className="text-gray-600 ">City</label>
                <input
                  type="text"
                  name=""
                  className="border mt-1 text-gray-500 w-full rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                  placeholder="Enter your City "
                />
              </div>

              <div className="">
                <label className="text-gray-600 mt-3">Email</label>
                <input
                  type="email"
                  name=""
                  placeholder="Enter Your Email "
                  className="border  mt-1 text-gray-500 w-full rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                />
              </div>

              <div className="">
                <label className="text-gray-600 ">Password</label>
                <input
                  type="password"
                  name=""
                  className="border mt-1 text-gray-500 rounded px-3 py-3 w-full hover:border-violet-400 outline-1 outline-violet-500"
                  placeholder="Enter your Password"
                />
              </div>

              {/* <p className="text-end text-violet-600 font-medium my-2 cursor-pointer">
                  Forget Password
                </p> */}
              <div className="">
                <button className="bg-violet-600 px-3 py-3 w-full text-center rounded  text-white">
                  Register
                </button>
              </div>
            </form>
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
