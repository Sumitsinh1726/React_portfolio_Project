import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    mobile: "",
    city: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formValues.firstname.length === 0 ||
      formValues.lastname.length === 0 ||
      formValues.username.length === 0 ||
      formValues.mobile.length === 0 ||
      formValues.city.length === 0 ||
      formValues.email.length === 0 ||
      formValues.password.length === 0
    ) {
      setError(true);
    }
    if (
      formValues.firstname &&
      formValues.lastname &&
      formValues.username &&
      formValues.mobile &&
      formValues.city &&
      formValues.email &&
      formValues.password
    ) {
      axios
        .post("http://localhost:3001/register", {
          firstname: formValues.firstname,
          lastname: formValues.lastname,
          username: formValues.username,
          mobile: formValues.mobile,
          city: formValues.city,
          email: formValues.email,
          password: formValues.password,
        })
        .then((response) => {
          if (response.data.message) {
            alert(response.data.message);
          } else {
            alert("User is Register");
          }
        });
    }
  };
  return (
    <div className="md:mx-container">
      <section className="">
        <div className="flex w-full justify-center">
          <div className="w-6/12  flex flex-col justify-center items-center bg-loginimg bg-cover bg-center rounded-[20px] my-5  ">
            {/* <div className="w-9/12  "> */}
            <div className=" backdrop-blur-lg w-full pl-20 pt-12 py-4">
              <h1 className="text-2xl font-semibold ">Register Now</h1>
              <p className="text-gray-6000 mt-4 text-start font-semibold ">
                Register and Grow Your Business
              </p>
            </div>

            <form
              className="text-start flex flex-col w-9/12 py-5 pb-10 space-y-5"
              onSubmit={handleSubmit}
            >
              <section className="flex gap-2">
                <div className="">
                  <label className="text-gray-600  ">First Name</label>

                  <input
                    type="text"
                    name="firstname"
                    onChange={inputEvent}
                    className="capitalize border mt-1 text-gray-500 rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500 w-full"
                    placeholder="Enter Your First Name"
                  />
                  {error && formValues.firstname.length <= 0 ? (
                    <span className="text-red-500">First Name is required!</span>
                  ) : (
                    ""
                  )}
                </div>

                <div className="">
                  <label className="text-gray-600 ">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    onChange={inputEvent}
                    className="capitalize border mt-1 text-gray-500 rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500 w-full"
                    placeholder="Enter Your Last Name"
                  />
                  {error && formValues.lastname.length <= 0 ? (
                    <span className="text-red-500">Last Name is required!</span>
                  ) : (
                    ""
                  )}
                </div>
              </section>
              <div className="">
                <label className="text-gray-600 ">Username</label>
                <input
                  type="text"
                  name="username"
                  onChange={inputEvent}
                  className="border mt-1 text-gray-500 w-full rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                  placeholder="Enter Your Username"
                />
                {error && formValues.username.length <= 0 ? (
                  <span className="text-red-500">Username is required!</span>
                ) : (
                  ""
                )}
              </div>

              <div className="">
                <label className="text-gray-600 ">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  onChange={inputEvent}
                  className="border mt-1 text-gray-500 w-full rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                  placeholder="Enter Your Mobile Number"
                />
                {error && formValues.mobile.length <= 0 ? (
                  <span className="text-red-500">Mobile Number is required!</span>
                ) : (
                  ""
                )}
              </div>

              <div className="">
                <label className="text-gray-600 ">City</label>
                <input
                  type="text"
                  name="city"
                  onChange={inputEvent}
                  className="capitalize border mt-1 text-gray-500 w-full rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                  placeholder="Enter Your City "
                />
                {error && formValues.city.length <= 0 ? (
                  <span className="text-red-500">City is required!</span>
                ) : (
                  ""
                )}
              </div>

              <div className="">
                <label className="text-gray-600 mt-3">Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={inputEvent}
                  placeholder="Enter Your Email "
                  className="border mt-1 text-gray-500 w-full rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                />
                {error && formValues.email.length <= 0 ? (
                  <span className="text-red-500">Email is required!</span>
                ) : (
                  ""
                )}
              </div>

              <div className="">
                <label className="text-gray-600 ">Password</label>
                <input
                  type="password"
                  name="password"
                  onChange={inputEvent}
                  className="border mt-1 text-gray-500 rounded px-3 py-3 w-full hover:border-violet-400 outline-1 outline-violet-500"
                  placeholder="Enter Your Password"
                />
                {error && formValues.password.length <= 0 ? (
                  <span className="text-red-500">Password is required!</span>
                ) : (
                  ""
                )}
              </div>

              {/* <p className="text-end text-violet-600 font-medium my-2 cursor-pointer">
                  Forget Password
                </p> */}
              <div className="">
                <button
                  type="submit"
                  className="bg-violet-600 px-3 py-3 w-full text-center rounded  text-white"
                >
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
