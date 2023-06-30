import React from "react";

const Login = () => {
  return (
    <>
      <div className="md:mx-container">
        <section className="">
          <div className="flex w-full px-4 justify-center">
            <div className="w-5/12 h-screen flex justify-center items-center">
              <div className="">
                <form className="">
                  <h1 className="text-2xl font-semibold ">Welcome Back</h1>
                  <p className="text-gray-6000 my-4">
                    Welcome Back! Please Enter your Details
                  </p>

                  <div className="text-start flex flex-col">
                    <label className="text-gray-600 mt-3">Email</label>
                    <input
                      type="email"
                      name=""
                      placeholder="Enter Your Email "
                      className="border mt-1 text-gray-500 rounded px-3 py-3"
                    />

                    <label className="text-gray-600 mt-5">Password</label>
                    <input
                      type="password"
                      name=""
                      className="border mt-1 text-gray-500 rounded px-3 py-3"
                      placeholder="Enter your Password"
                    />

                    <p className="text-end text-violet-600 font-medium my-2" >Forget Password</p>

                    <button className="bg-violet-600 px-3 py-3 text-center rounded my-5 text-white">Sign in</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-5/12 h-screen flex justify-center items-center">
              <div className="text-center">
                <h1 className="text-2xl font-semibold ">Welcome Back</h1>
                <p className="text-gray-6000">
                  Welcome Back! Please Enter your Details
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
