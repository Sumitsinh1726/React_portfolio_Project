import React from "react";
import Sidebar from "./component/Sidebar";
import NevbarSales from "./component/NevbarSales";

const SalesDashboard = () => {

   
  return (
    <>

     <section>
        <div className="flex">
            <div className="w-[100px]">
                <Sidebar/>
            </div>
            <div className="w-full">
                <NevbarSales/>
            </div>
        </div>
     </section>
    </>
  );
};

export default SalesDashboard;
