import React from "react";

const Login = () => {
  return (
    <>
      <div className="md:mx-container">
        <section className="">
          <div className="flex w-full px-4 justify-center h-96">
            <div className="w-4/12 h-full  items-center">
              <div>
                <form className="flex flex-col justify-center">
                  <h1 className="text-2xl font-semibold ">Welcome Back</h1>
                  <p className="text-gray-6000">Welcome Back! Please Enter your Details</p>
                </form>
              </div>
            </div>
            <div className="w-4/12 h-full items-center">
            <h1 className="text-2xl font-semibold ">Welcome Back</h1>
                  <p className="text-gray-6000">Welcome Back! Please Enter your Details</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
