import React from "react";
import ImageCorousel from "../components/ImageCorousel";

const Home = () => {
  return (
    <div className="relative text-secondary_text py-16 h-auto flex flex-col">
      {/* Background Image applied to full screen */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-fixed -z-10"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2022/01/08/08/07/dentist-6923507_1280.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-white opacity-60"></div>
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
          <div className="w-full  md:w-1/2">
            <img
              src="/madan_office.JPG"
              alt="Welcome Image"
              className="w-full  shadow-lg border-4 border-blue-950"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4  p-6">
            <h1 className="text-2xl md:text-3xl font-bold">
              Welcome To Our Max Dental Care & Implant Centre
            </h1>
            <h3 className="text-xl md:text-2xl text-secondary_text">
              Bringing Smiles to Life with Expert Care
            </h3>
            <h6 className="font-semibold text-secondary_text">
              "Transforming Smiles, Enhancing Confidence!"
            </h6>
            <p className="text-gray-600 leading-relaxed">
              <b>Welcome to Max Dental Care and Implant Centre,</b> conveniently located
              <b>opposite Gate No. 2 of Rajkiya Medical College, Jalaun, Orai
              (285001).</b> We specialize in providing a comprehensive range of
              dental treatments and cosmetic procedures, ensuring the highest
              standard of care for every patient. Our clinic is led by <b>Dr.
              Madan Niranjan (BDS, MDS),</b> an experienced <b>Dental Surgeon and
              Implantologist,</b> currently serving as an <b>Assistant Professor at
              Career Dental College, Lucknow.</b> He has previously worked as a
              <b>Senior Resident at Rajkiya Medical College, Orai.</b> At Max
              Dental Care, we are committed to excellence, offering advanced
              treatments in a comfortable and patient-friendly environment to
              help you achieve a healthy and confident smile!
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
