import React from "react";
import '../../App.css'; // Updated import path
import About from '../About';
import Footer from "../Footer";


export default function Aboutus() {
  return (
    <>
    <h1 className="aboutus">ABOUT US</h1>
      <About />
      <Footer/>
    </>
  );
}
