import React from "react";
import ImageCorousel from "../components/ImageCorousel";

const Home = () => {
  return (
    <div className="text-secondary_text w-full mx-auto mt-16  ">
      {/* Image carousel full width */}
      <div className="">
        <ImageCorousel />
      </div>

      {/* sub main Content container */}
      <div className=" mx-auto px-4 sm:px-8 md:px-16 lg:px-24 space-y-10">
        {/* Image and welcome container */}
        <div className="flex flex-col  md:flex-row  w-full items-center gap-8">
          {/* Image container */}
          <div className="w-full px-12 pt-12 md:w-1/2">
            <img
              src="http://www.idccindia.com/images/welcome-img.jpg"
              alt="Welcome Image"
              className="w-full  rounded-lg shadow-lg"
            />
          </div>

          {/* Content container */}
          <div className="w-full   md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="text-2xl md:text-3xl text-center font-bold">
              Welcome To Our International Dental & Cosmetic Centre
            </h1>
            <h3 className="text-xl md:text-2xl text-center text-gray-700">
              The Best Medical Services Based on Experience
            </h3>
            <h6 className="font-semibold text-center text-golden_bg">
              "Smile Bright, Live Bold – Your Ultimate Destination for Dental
              Excellence!"
            </h6>
            <p className="text-gray-600 text-center leading-relaxed">
              Welcome to the International Dental and Cosmetic Centre (IDCC),
              856, Sector 14, Gurugram. Our clinic offers a comprehensive range
              of dental treatments and asthetics, each administered by
              specialists in every branch of dentistry. IDCC was established 35
              years back and is a concoction of its Distinguished Directors. Dr.
              Harish Yadav, former Principal Professor and Head of
              Prosthodontics and Implantology at SGT University, Gurgaon.
            </p>
            <button className="px-6 py-3  bg-golden_bg text-secondary_text rounded-md font-bold shadow-md hover:bg-yellow-600 transition duration-300">
              Read More
            </button>
          </div>
        </div>
        {/* doctor intro container */}
      </div>
    </div>
  );
};

export default Home;
