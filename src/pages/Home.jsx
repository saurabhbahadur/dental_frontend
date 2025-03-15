import React from "react";
import ImageCorousel from "../components/ImageCorousel";

const Home = () => {
  return (
    <div className="relative text-secondary_text py-16 h-auto flex flex-col">
      {/* Background Image applied to full screen */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-fixed -z-10"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2022/01/08/08/07/dentist-6923507_1280.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Image carousel full width */}
      <div>
        <ImageCorousel />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-12 space-y-10">
        {/* Image and Welcome Section */}
        <div className=" flex flex-col p-6 md:flex-row w-full items-center  rounded-lg shadow-lg bg-white bg-opacity-70 gap-8">
          {/* Image Container */}
          <div className="w-full px-8 md:w-1/2">
            <img
              src="http://www.idccindia.com/images/welcome-img.jpg"
              alt="Welcome Image"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4  p-6">
            <h1 className="text-2xl md:text-3xl font-bold">
              Welcome To Our International Dental & Cosmetic Centre
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-700">
              The Best Medical Services Based on Experience
            </h3>
            <h6 className="font-semibold text-golden_bg">
              "Smile Bright, Live Bold – Your Ultimate Destination for Dental Excellence!"
            </h6>
            <p className="text-gray-600 leading-relaxed">
              Welcome to the International Dental and Cosmetic Centre (IDCC), 856, Sector 14, Gurugram.
              Our clinic offers a comprehensive range of dental treatments and aesthetics, each administered
              by specialists in every branch of dentistry. IDCC was established 35 years ago and is led by
              Distinguished Directors like Dr. Harish Yadav, former Principal Professor and Head of Prosthodontics
              and Implantology at SGT University, Gurgaon.
            </p>
            <button className="px-6 py-3 bg-golden_bg text-secondary_text rounded-md font-bold shadow-md hover:bg-yellow-600 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
