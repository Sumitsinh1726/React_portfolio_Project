import React from "react";

const Contact = () => {
  return (
    <>
      <div className="md:mx-container mt-[2%]">
        <section className="flex  gap-9">
          <div className="w-4/12 px-12 py-5 border rounded-xl bg-blue-100">
            <h2>Get in touch</h2>
            <p>Visit Us</p>
          </div>
          <div className="w-8/12 px-12 py-5 border rounded-xl">
            <p className="text-2xl font-bold">Contact Form</p>
            <div className="flex gap-2 py-2">
              <div className="flex flex-col  w-6/12">
                <input className="border rounded py-2 px-2 hover:border-blue-400" type="text" placeholder="Firstname"  />
              </div>
              <div className="flex flex-col  w-6/12">
                <input className="border rounded py-2 px-2 hover:border-blue-400" type="text" placeholder="Lastname" />
              </div>
              div
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
