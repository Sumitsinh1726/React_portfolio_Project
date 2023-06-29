import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Download from "../page/Download";
import About from "../page/About";
import Contact from "../page/Contact";
import Signup from "../page/Signup";
import Page404 from "../page/Page404";
import Login from "../page/Login";

const Router = () => {
  return (
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

        {/* This is For the page Login */}
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
