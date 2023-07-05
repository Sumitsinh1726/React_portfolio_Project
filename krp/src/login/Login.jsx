import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import imglogin from "../images/Login.jpg";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValues.email.length === 0 || formValues.password.length === 0) {
      setError(true);
    }
    if (formValues.email && formValues.password) {
      axios
        .post("http://localhost:3001/login", {
          email: formValues.email,
          password: formValues.password,
        })
        .then((response) => {
          if (response.data.message) {
            alert(response.data.message);
          } else {
            navigate("/");
            localStorage.setItem("UserId", response.data[0].user_id)
          }
        });
    }
  };
  return (
    <>
      <div className="md:mx-container">
        <section className="">
          <div className="flex w-full px-4 justify-center">
            <div className="w-6/12 py-24 flex justify-center items-center bg-loginimg bg-cover bg-center rounded-[15px] my-5">
              <div className="w-9/12">
                <form className="w-12/12" onSubmit={handleSubmit}>
                  <h1 className="text-2xl font-semibold ">Welcome Back</h1>
                  <p className="text-gray-6000 my-4">
                    Welcome Back! Please Enter your Details
                  </p>

                  <div className="text-start flex flex-col ">
                    <label className="text-gray-600 mt-3">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={inputEvent}
                      placeholder="Enter Your Email "
                      className="border  mt-1 text-gray-500 rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                    />
                    {error && formValues.email.length <= 0 ? (
                      <span className="text-red-500">Email is required!</span>
                    ) : (
                      ""
                    )}

                    <label className="text-gray-600 mt-5">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={inputEvent}
                      className="border mt-1 text-gray-500 rounded px-3 py-3  hover:border-violet-400 outline-1 outline-violet-500"
                      placeholder="Enter Your Password"
                    />
                    {error && formValues.password.length <= 0 ? (
                      <span className="text-red-500">
                        Password is required!
                      </span>
                    ) : (
                      ""
                    )}

                    <p className="text-end text-violet-600 font-medium my-2 cursor-pointer">
                      Forget Password
                    </p>

                    <button
                      type="submit"
                      className="bg-violet-600 px-3 py-3 text-center rounded my-5 text-white"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
