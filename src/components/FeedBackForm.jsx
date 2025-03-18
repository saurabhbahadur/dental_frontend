import React, { useState } from "react";

const FeedBackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.number.trim()) {
      newErrors.number = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.number)) {
      newErrors.number = "Enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Feedback submitted successfully!");
      setFormData({ name: "", number: "", message: "" });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      {/* Name & Number in One Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name Field */}
        <div>
          {/* <label className="block text-primary_text font-medium">Name</label> */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Phone Number Field */}
        <div>
          {/* <label className="block text-primary_text font-medium">Phone Number</label> */}
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}
        </div>
      </div>

      {/* Message Field (Next Row) */}
      <div>
        {/* <label className="block text-primary_text font-medium">Message</label> */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your feedback here..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          rows="4"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-primary_bg text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedBackForm;
