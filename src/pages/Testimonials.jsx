import React from "react";
import FeedbackCard from "../components/FeedbackCards";
import FeedBackForm from "../components/FeedBackForm";

const Testimonials = () => {
  return (
    <div className="  text-gray-900 p-8">
      <h2 className="text-3xl font-bold text-secondary_text text-center underline  mb-6">Testimonials</h2>

      {/* Feedback Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="p-6 rounded-xl shadow-lg">
          <FeedBackForm />
        </div>
        <div className="">
            
            <FeedbackCard />
          
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
