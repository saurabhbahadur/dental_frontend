import React, { useState } from "react";
import { db } from "../../firebaseconfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    error: "",
    success: "",
    loading: false,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ error: "", success: "", loading: true });

    if (
      !formData.name ||
      !formData.number ||
      !formData.email ||
      !formData.message
    ) {
      setStatus({
        error: "All fields are required",
        success: "",
        loading: false,
      });
      return;
    }

    try {
      await addDoc(collection(db, "enquiry"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setStatus({
        success: "Message sent successfully!",
        error: "",
        loading: false,
      });

      setFormData({ name: "", number: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus({
        error: "Failed to send message. Please try again.",
        success: "",
        loading: false,
      });
    }
  };

  return (
    <div className="border border-gray-300 bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="w-full flex flex-col">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Make An Appointment
        </h1>

        <input
          className="border border-gray-400 p-2 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="border border-gray-400 p-2 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="number"
          name="number"
          placeholder="Mobile Number"
          value={formData.number}
          onChange={handleChange}
        />
        <input
          className="border border-gray-400 p-2 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="border border-gray-400 p-2 rounded w-full mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        />

        {status.error && (
          <p className="text-red-500 text-sm text-center">{status.error}</p>
        )}
        {status.success && (
          <p className="text-green-500 text-sm text-center">{status.success}</p>
        )}

        <button
          type="submit"
          className={`bg-primary_bg text-white px-6 py-2 rounded-full transition-transform duration-300 ${
            status.loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
          }`}
          disabled={status.loading}
        >
          {status.loading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
