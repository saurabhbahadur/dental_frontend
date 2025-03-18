import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dental_logo = "https://res.cloudinary.com/dxaf36ydh/image/upload/f_auto,q_auto/v1/mMaxDentalCare/ypao8wk9vajix907vmlv";

  return (
    <>
    <nav className="bg-primary_bg  text-primary_text px-6 md:px-16 lg:px-24 fixed top-0 w-full z-50 shadow-md">
      <div className="container py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-0">
        <img src={dental_logo} className="w-12 h-12 " alt="max dental care logo" />
        <div className="text-3xl font-bold"> Max Dental Care</div>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex  space-x-6">
          <Link to="/" className="hover:text-hover_color">Home</Link>
          <Link to="/why-us" className="hover:text-hover_color">Why Us</Link>
          <Link to="/meet-the-doctors" className="hover:text-hover_color">Meet The Doctors</Link>
          <Link to="/procedure" className="hover:text-hover_color">Procedure</Link>
          <Link to="/gallery" className="hover:text-hover_color">Gallery</Link>
          <Link to="/testimonials" className="hover:text-hover_color">Testimonials</Link>
          <Link to="/contact-us" className="hover:text-hover_color">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary_bg py-4 absolute top-full  left-0 w-full shadow-lg">
          <Link to="/" className="block py-2 px-6 hover:text-hover_color" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/why-us" className="block py-2 px-6 hover:text-hover_color" onClick={() => setIsOpen(false)}>Why Us</Link>
          <Link to="/meet-the-doctors" className="block py-2 px-6 hover:text-hover_color" onClick={() => setIsOpen(false)}>Meet The Doctors</Link>
          <Link to="/procedure" className="block py-2 px-6 hover:text-hover_color" onClick={() => setIsOpen(false)}>Procedure</Link>
          <Link to="/gallery" className="block py-2 px-6 hover:text-hover_color" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/testimonials" className="block py-2 px-6 hover:text-hover_color" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <Link to="/contact-us" className="block py-2 px-6 hover:text-hover_color" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </div>
      )}
      <hr className="border-t-2 border-blue-950 " />
    </nav>
     
    </>
    
  );
};

export default Navbar;
