import React from "react";
import FeedbackCard from "../components/FeedbackCards";
import FeedBackForm from "../components/FeedBackForm";

const Testimonials = () => {
  return (
    <div className="rounded-xl bg-opacity-70 bg-white mx-4 md:mx-20 my-10 shadow-zinc-500 shadow-xl text-gray-900 p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-secondary_text text-center underline mb-6">
        Testimonials
      </h2>

      {/* Feedback Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-400 rounded-md p-4">
        <div className="flex justify-center">
          <FeedBackForm />
        </div>
        <div className="flex justify-center">
          <FeedbackCard />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
