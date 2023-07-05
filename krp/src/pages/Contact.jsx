import React from "react";

const Contact = () => {
  return (
    <>
      <div className="md:mx-container mt-[2%]">
        <section className="flex  gap-9">
          <div className="w-4/12 px-12 py-5 border rounded-xl bg-blue-100">
            <h2 className="text-xl font-bold">Get in touch</h2>
            <p className="pt-2">Visit Us</p>
            <p>www.salesmanage.com</p>
            <div>
              <p>Social Media</p>
            </div>
          </div>
          <div className="w-8/12 px-12 py-5 border rounded-xl">
            <p className="text-2xl font-bold">Contact Form</p>
            <div className="flex gap-2 py-2">
              <div className="flex flex-col  w-6/12">
                <label>Firstname</label>
                <input
                  className="border rounded py-2 px-2 hover:border-blue-400"
                  type="text"
                />
              </div>
              <div className="flex flex-col  w-6/12">
                <label>Lastname</label>
                <input
                  className="border rounded py-2 px-2 hover:border-blue-400"
                  type="text"
                />
              </div>
            </div>
            <div className="gap-2 py-2">
              <label>Email</label>
              <input
                className="border rounded py-2 px-2 hover:border-blue-400 w-full"
                type="email"
              />
            </div>
            <div className="gap-2 py-2">
              <label>Mobile No</label>
              <input
                className="border rounded py-2 px-2 hover:border-blue-400 w-full"
                type="tel"
              />
            </div>
            <div className="gap-2 py-2">
              <label> Message </label>
              <textarea
                className="border rounded py-2 px-2 hover:border-blue-400 w-full"
                cols="20"
                rows="5"
              ></textarea>
            </div>
            <input
              className="rounded-[10px] border-white bg-violet-500 text-black hover:text-white hover:bg-violet-700 cursor-pointer border px-2 py-2 w-2/12"
              type="submit"
              value="Submit"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
