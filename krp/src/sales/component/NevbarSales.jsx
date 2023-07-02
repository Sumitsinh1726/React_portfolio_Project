import React from "react";
import StarIcon from "@mui/icons-material/Star";
import salesProfile from "../../images/sales profile.avif";
import Navimg from "../../images/navbarimage.jpeg"


const NevbarSales = () => {
    return (
        <>
            <header className="h-28 bg-black text-white   w-[93%] absolute top-0 right-0">


                <div className=" ml-12 flex justify-center items-center absolute w-[27%] -bottom-[38%] ">

                    <div className="flex justify-between items-start w-full">
                        <img src={salesProfile} alt="" width={95} />

                        <p className="text-2xl font-medium ">Sales Grow</p>
                        <p className=" text-center flex items-center bg-yellow-500 rounded-3xl px-3 "> <span><StarIcon /></span> Pro User</p>

                    </div>

                </div>



                <div className="invert mix-blend-plus-lighter flex justify-end">
                    <img src={Navimg} alt="" />
                </div>

                <div className= "flex justify-center text-black w-4/12 text-center my-3 ml-8">
                    <p className="border rounded-2xl font-medium text-sm px-3 py-1 mr-6">#Romance</p>
                    <p className="border rounded-2xl text-sm font-medium px-3 py-1">#Mystery</p>
                </div>

            </header>




        </>
    );
};

export default NevbarSales;

