import React from "react";

const Signup = () => {
  return (
    <div className="md:mx-container">
      <section className="">
        <div className="flex w-full px-4 justify-center">
          <div className="w-5/12 py-20 flex justify-center items-center bg-loginimg bg-cover bg-center rounded-[15px] my-5">
            <div className="w-9/12">
              <form className="w-12/12">
                <h1 className="text-2xl font-semibold ">Register Now</h1>
                <p className="text-gray-6000 my-4">Register self Here</p>

                <div className="text-start flex flex-col ">
                  <label className="text-gray-600 mt-5">First Name</label>
                  <input
                    type="text"
                    name=""
                    className="border mt-1 text-gray-500 rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                    placeholder="Enter your Last Name"
                  />

                  <label className="text-gray-600 mt-5">Last Name</label>
                  <input
                    type="text"
                    name=""
                    className="border mt-1 text-gray-500 rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                    placeholder="Enter your Last Name"
                  />

                  <label className="text-gray-600 mt-5">Username</label>
                  <input
                    type="text"
                    name=""
                    className="border mt-1 text-gray-500 rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                    placeholder="Enter your username"
                  />

                  <label className="text-gray-600 mt-5">Mobile Number</label>
                  <input
                    type="tel"
                    name=""
                    className="border mt-1 text-gray-500 rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                    placeholder="Enter your Mobile Number"
                  />

                  <label className="text-gray-600 mt-5">City</label>
                  <input
                    type="text"
                    name=""
                    className="border mt-1 text-gray-500 rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                    placeholder="Enter your City " 
                  />


                  <label className="text-gray-600 mt-3">Email</label>
                  <input
                    type="email"
                    name=""
                    placeholder="Enter Your Email "
                    className="border  mt-1 text-gray-500 rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                  />

                  <label className="text-gray-600 mt-5">Password</label>
                  <input
                    type="password"
                    name=""
                    className="border mt-1 text-gray-500 rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                    placeholder="Enter your Password"
                  />

                  {/* <p className="text-end text-violet-600 font-medium my-2 cursor-pointer">
                  Forget Password
                </p> */}

                  <button className="bg-violet-600 px-3 py-3 text-center rounded my-5 text-white">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
