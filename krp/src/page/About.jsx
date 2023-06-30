import React from "react";
import image1 from "../Image/image1.jpg"

const About = () => {
  return (
    <>
      <div className="md:mx-container">
        {/* Dirst Section */}
        <section className="">
          <div className="h-96 flex flex-col items-center justify-center text-center">
            <h1 className="text-6xl font-semibold">About us</h1>
            <p className="font-medium">
              Home / <span className="text-gray-600"> About </span>{" "}
            </p>
          </div>
        </section>

        {/* Second Section */}

        <section className=" ">
          <div className="flex flex-col justify-center items-center">
            <div className="w-8/12 text-center ">
              <h1 className="text-6xl font-semibold">About us</h1>
              <p className="text-gray-600 my-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum quia, iste nulla beatae impedit veritatis eius
                voluptatem aspernatur autem quisquam?
              </p>
            </div>
          </div>
          <div className="my-12">
            <div className="grid grid-cols-2 gap-16
            ">
              <div className="">
                <img src={image1} alt=""  className="rounded-2xl"/>
              
              </div>
              <div className="">
                <p className="text-gray-600"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus velit eveniet consectetur ad, in maxime nihil dolorum quod maiores dignissimos explicabo voluptate exercitationem est, consequatur incidunt amet iure. Consequatur odit vero, veniam nemo quibusdam sequi blanditiis architecto fugit </p>
                <p className="my-5 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quod quidem a pariatur laboriosam assumenda dolorem enim molestias ab fugit nostrum deserunt facere dignissimos non, id reprehenderit eius animi illo distinctio inventore sunt voluptatum tenetur. Ullam voluptatibus expedita explicabo aperiam velit laborum quibusdam, illo quis repellat! Quia repellendus pariatur amet cum quibusdam, eum, est earum, at iure ullam hic. Perferendis rerum temporibus cum voluptatum officiis itaque, quaerat beatae quibusdam ducimus animi eius labore corporis ullam, et, nemo eum repudiandae nesciunt.
                </p>

                <button className=" outline outline-1 text-blue-400 px-3 text-center rounded-lg hover:bg-blue-400 hover:text-white py-3 my-4">Get In Touch</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
