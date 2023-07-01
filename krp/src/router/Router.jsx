import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
// import Download from "../page/Download";
import About from "../page/About";
import Contact from "../page/Contact";
import Page404 from "../page/Page404";
import Login from "../login/Login";
import Signup from "../login/Signup";
import AdminLogin from "../login/AdminLogin";
import Dashboard from "../admin/Dashboard";
// import Sidebar from "../admin/component/Sidebar";

// import Sidebar from "../sales/component/Sidebar";
import SalesDashboard from "../sales/SalesDashboard";

const Router = () => {
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <>
      {path.includes("admin") ? (
        <>
          {/* <Sidebar /> */}
          <Routes>
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </>
     ):
        path.includes("sales") ? (
          <>
          
            <Routes>
                <Route path="/sales/dashboard" element={<SalesDashboard/>} />
            </Routes>
          </>
        )
     :(
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* This is For the page Download */}
            {/* <Route path="/download" element={<Download />} /> */}

            {/* This is For the page About */}
            <Route path="/about" element={<About />} />

            {/* This is For the page Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* This is For the page signup */}
            <Route path="/signup" element={<Signup />} />

            {/* This is For the page Login */}
            <Route path="/login" element={<Login />} />

            {/* This is For the page AdminLogin */}
            <Route path="/admin" element={<AdminLogin />} />

            {/* This is For the 404page login  */}
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default Router;
