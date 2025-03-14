import React from "react";
import GoogleMapComponent from "./GoogleMapComponent";
import {
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary_bg text-primary_text py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-6">
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Dental Clinic</h3>
            <ul className="space-y-2">
              <li className="flex items-start mt-2 gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>House no 856, DLF Colony, Sector 14, Gurugram, Haryana 122001</span>
              </li>
              <li className="flex items-center mt-2 gap-2">
                <FaPhone />
                <span>+91-9811448281 / 01242306070</span>
              </li>
              <li className="flex items-center mt-2 gap-2">
                <FaEnvelope />
                <span>drharishyadav@hotmail.com</span>
              </li>
              <li className="flex items-start mt-2 gap-2">
                <FaClock className="mt-1" />
                <span>
                  Mon - Sat : <br /> 11:30 AM - 08:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Right Section - Map */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Location</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <GoogleMapComponent />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Dental Clinic. All rights reserved.</p>
          
          {/* Social Media Links */}
          <div className="flex space-x-4 my-4 md:my-0">
            {[
              { icon: <FaEnvelope />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaYoutube />, link: "#" },
              { icon: <FaFacebook />, link: "#" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-primary_text text-2xl hover:text-primary_bg transition"
                aria-label="Social Media Link"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Privacy & Terms */}
          <div className="flex space-x-4">
            <a href="#" className="text-secondary_text hover:text-primary_text transition">Privacy</a>
            <a href="#" className="text-secondary_text hover:text-primary_text transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
