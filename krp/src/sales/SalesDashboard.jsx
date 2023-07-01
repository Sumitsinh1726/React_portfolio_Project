import React from "react";
import Sidebar from "./component/Sidebar";

const SalesDashboard = () => {

   
  return (
    <>

     <section>
        <div className="flex">
            <div className="w-[100px]">
                <Sidebar/>
            </div>
            <div className="">
                <h1>DashBoard</h1>
            </div>
        </div>
     </section>
    </>
  );
};

export default SalesDashboard;
