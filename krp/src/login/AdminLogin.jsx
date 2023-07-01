import React from "react";

const AdminLogin = () => {
  return (
    <>
      <div className="">
        <section className="flex justify-center items-center bg-pink-50 h-screen">
          <div className="w-4/12 rounded-xl my-16 p-12 bg-white">
            <h3 className="text-3xl font-bold text-center mb-4">Admin Login</h3>
            <p className="text-center text-lg text-gray-700 font-medium mb-10">
              Hey, Enter your details to get sign in <br />  to your account
            </p>

            <form className="">
                <input type="text" name="" className="py-3 px-3 border w-full rounded-lg mb-3" placeholder="Enter Email / Phone No" /> <br />
                <input type="text" name="" className="py-3 px-3 border w-full rounded-lg mb-8" placeholder="Passcode" />

                <button type="submit" className="py-3 bg-blue-700 text-white w-full rounded-lg">Sign in</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdminLogin;
