import React, { useState } from "react";
import { db } from "../../firebaseconfig";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
// import emailjs from "@emailjs/browser";

const Form = () => {
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

  // Environment variables
//   const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//   const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//   const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
      // Save to Firestore db
      await addDoc(collection(db, "enquiry"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      // send email via emailjs

    //   await emailjs.send(
    //     SERVICE_ID,
    //     TEMPLATE_ID,
    //     {
    //       to_name: "Madan",
    //       from_name: formData.name,
    //       number: formData.number,
    //       email: formData.email,
    //       message: formData.message,
    //     },
    //     PUBLIC_KEY
    //   );

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
    <div className="border-2 border-black w-80 bg-gray-100 flex flex-col items-center text-center mx-auto mt-10 p-5 rounded-lg shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <h1 className="text-2xl font-semibold mb-4">Make An Appointment</h1>
        <input
          className="border-2 border-black block p-2 rounded w-4/5 mb-3"
          type="text"
          name="name"
          id="name"
          placeholder="Enter Your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black block p-2 rounded w-4/5 mb-3"
          type="number"
          name="number"
          id="number"
          placeholder="Mobile Number"
          value={formData.number}
          onChange={handleChange}
        />
        <input
          className="border-2 border-black block p-2 rounded w-4/5 mb-3"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="border-2 border-black block p-2 rounded w-4/5 mb-3"
          name="message"
          id="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        {status.error && <p className="text-red-500">{status.error}</p>}
        {status.success && <p className="text-green-500">{status.success}</p>}

        <button
          type="submit"
          className={`bg-secondary_button_grad text-primary_text px-8 py-2 rounded-full transition-transform duration-300 ${
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

export default Form;
