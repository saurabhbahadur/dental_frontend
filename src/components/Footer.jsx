import React from "react";
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
    <footer className="bg-blue-950 text-primary_text py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-6">
          
          {/* Left Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 underline">Max Dental Care</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-lg" />
                <span>राजकीय मेडिकल कालेज गेट नं. 2 के सामने, जालौन, उरई 285001</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <span>
                  <a href="tel:9927488027" className="hover:underline">+91 9927488027</a> / 
                  <a href="tel:9716820045" className="hover:underline"> 9716820045</a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:MaxdentalDrmadan@gmail.com" className="hover:underline">
                  MaxdentalDrmadan@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaClock className="mt-1 text-lg" />
                <span>
                  Mon - Sat: 10:00 AM - 08:00 PM <br />
                  Sun: 10:00 AM - 05:00 PM <br />
                  <strong>Thursday Closed</strong>
                </span>
              </li>
            </ul>
          </div>

          {/* Right Section - Map */}
          <div>
            <h3 className="text-2xl font-bold mb-4 underline">Location</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <a href="https://maps.app.goo.gl/RgWdtURWJzFsPwMu6"><img 
                className="w-full h-[250px] scale-150 object-cover object-center" 
                src="https://res.cloudinary.com/dxaf36ydh/image/upload/f_auto,q_auto/v1/mMaxDentalCare/Dental_map_mbbzj6" 
                alt="Dental Clinic Location Map" 
              /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Max Dental Care. All rights reserved. <br />
            Web Designed by 
            <a href="https://saurabh-6e678.web.app/" className="hover:underline ml-1">
              Saurabh
            </a>
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 my-4 md:my-0">
            {[
              { icon: <FaEnvelope />, link: "#", label: "Email" },
              { icon: <FaInstagram />, link: "#", label: "Instagram" },
              { icon: <FaYoutube />, link: "#", label: "YouTube" },
              { icon: <FaFacebook />, link: "#", label: "Facebook" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-primary_text text-2xl hover:text-primary_bg transition"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Privacy & Terms */}
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-secondary_text hover:text-primary_text transition">
              Privacy
            </a>
            <a href="#" className="text-secondary_text hover:text-primary_text transition">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
