import React from "react";
import ImageCorousel from "../components/ImageCorousel";
import ContactUs from "./ContactUs";
import DoctorProfile from "../components/DoctorProfile";

const madan_office = "https://res.cloudinary.com/dxaf36ydh/image/upload/f_auto,q_auto/v1/mMaxDentalCare/iretqecsb4mjnsqktmdk";

const Home = () => {
  return (
    <div className="relative text-secondary_text pt-16 h-auto flex flex-col">
      {/* Background Image applied to full screen */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center bg-fixed -z-10"
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
              src={madan_office}
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
              <b>Welcome to Max Dental Care and Implant Centre,</b> जो सुविधाजनक
              रूप से स्थित है{" "}
              <b>
              राजकीय मेडिकल कालेज गेट नं. 2 के सामने, जालौन, उरई 285001
              </b> {" "}
              हम विभिन्न प्रकार के दंत उपचार और सौंदर्य प्रक्रियाएँ प्रदान करते
              हैं, जिससे हर मरीज को उच्चतम स्तर की देखभाल मिले। हमारे क्लिनिक का
              नेतृत्व <b>डॉ. मदन निरंजन (BDS, MDS)</b> कर रहे हैं, जो एक अनुभवी{" "}
              <b>डेंटल सर्जन और इंप्लांटोलॉजिस्ट</b> हैं। वर्तमान में, वह{" "}
              <b>कैरियर डेंटल कॉलेज, लखनऊ</b> में <b>असिस्टेंट प्रोफेसर</b> के
              रूप में कार्यरत हैं। इससे पहले, उन्होंने{" "}
              <b>राजकीय मेडिकल कॉलेज, ओरई</b> में <b>सीनियर रेजिडेंट</b> के रूप
              में कार्य किया है। मैक्स डेंटल केयर में, हम उत्कृष्टता के प्रति
              समर्पित हैं और उन्नत उपचार प्रदान करते हैं, जिससे मरीज को आरामदायक
              और अनुकूल माहौल में एक स्वस्थ और आत्मविश्वासी मुस्कान मिल सके!
            </p>
            <button className="px-6 py-3 bg-golden_bg text-secondary_text rounded-md font-bold shadow-md hover:bg-yellow-600 transition duration-300">
            अपॉइंटमेंट बुक करें
            </button>
          </div>
        </div>
      </div>
      <div>
        <DoctorProfile />
      </div>
      {/* form */}
      <div className="">
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
