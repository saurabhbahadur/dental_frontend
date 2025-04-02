import React, { useState } from "react";
import { db } from "../../firebaseconfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const FeedBackForm = () => {
  const [formData, setFormData] = useState({ name: "", number: "", message: "" });
  const [status, setStatus] = useState({ error: "", success: "", loading: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ error: "", success: "", loading: true });

    if (!formData.name.trim() || !formData.number.trim() || !formData.message.trim()) {
      setStatus({ error: "All fields are required.", success: "", loading: false });
      return;
    }

    try {
      await addDoc(collection(db, "feedbacks"), {
        ...formData,
        number: formData.number.trim(),
        createdAt: serverTimestamp(),
      });

      setStatus({ error: "", success: "Feedback submitted successfully!", loading: false });
      setFormData({ name: "", number: "", message: "" });
    } catch (err) {
      setStatus({ error: "Failed to submit your feedback. Please try again.", success: "", loading: false });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="h-full  flex flex-col justify-between p-6 rounded-2xl space-y-4 w-full">
      <h3 className="text-2xl font-bold mb-4 text-secondary_text underline">Please Give Feedback</h3>

      {/* Name & Number Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name Field */}
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-400 bg-transparent rounded-md focus:ring-2 focus:ring-primary_bg"
          />
        </div>

        {/* Number Field */}
        <div className="flex flex-col">
          <label htmlFor="number" className="text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="number"
            id="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter your number"
            className="w-full p-2 border border-gray-400 bg-transparent rounded-md focus:ring-2 focus:ring-primary_bg"
          />
        </div>
      </div>

      {/* Message Field */}
      <div className="flex flex-col">
        <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your feedback here..."
          className="w-full p-2 border border-gray-400 bg-transparent rounded-md focus:ring-2 focus:ring-primary_bg resize-none"
          rows="4"
        />
      </div>

      {/* Error & Success Messages */}
      {status.error && <p className="text-red-500">{status.error}</p>}
      {status.success && <p className="text-green-500">{status.success}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className={`bg-primary_bg w-full shadow-zinc-500 shadow-md text-white px-6 py-2 rounded-full transition-transform duration-300 ${
          status.loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
        }`}
        disabled={status.loading}
      >
        {status.loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default FeedBackForm;
