import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars, FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Maine container */}
      <nav className="bg-primary_bg text-primary_text px-6 md:px-16 lg:px-24 top-0 w-full z-50 shadow-md">
        {/* sub main container  */}
        <div className="container py-3 flex justify-between items-center">
          {/* Logo container */}
          <div>
            <img src="http://www.idccindia.com/images/logo.png" alt="" />
          </div>
          {/* Details and nav bar container */}
          <div className=" justify-between items-center">
            {/* Details and button  */}
            <div className="flex  items-center justify-end space-x-5 mb-4">
              {/* details number  */}
              <div className="flex space-x-4 items-center ">
                <FaPhone />
                <a href="tel:9927488027">+91 9927488027</a>{" "}
                <a href="tel:9716820045"> 9716820045 </a>
              </div>
              {/* button  */}
              <div className="items-center px-2 py-2 text-secondary_text font-bold bg-golden_bg rounded">
                <button>Request a Consultation</button>
              </div>
            </div>

            {/* Navbar */}
            <div className=" md:flex space-x-6">
              <Link to="/">Home</Link>
              <Link to="/why-us">Why Us</Link>
              <Link to="/meet-the-doctors">Meet The Doctors</Link>
              <Link to="/procedure">Procedure</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/testimonials">Testimonials</Link>
              <Link to="/contact-us">Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
