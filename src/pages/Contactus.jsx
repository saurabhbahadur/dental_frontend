import React from "react";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <div
      id="contact_us"
      className="relative bg-[url('https://res.cloudinary.com/dxaf36ydh/image/upload/f_auto,q_auto/v1/mMaxDentalCare/appointment_form_img_rxrung')] bg-cover bg-center bg-no-repeat text-secondary_text py-16 px-0 flex flex-col items-center"
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Google Map - Full Width */}
      <div className="relative z-10">
        {/* <GoogleMapComponent /> */}
      </div>

      {/* Contact Section */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl mt-10 px-4 md:px-8">
        {/* Left Side: Contact Details */}
        <div className="flex flex-col space-y-5 text-center lg:text-left">
          <h1 className="text-3xl font-bold text-white">
            Book Your Appointment Now
          </h1>
          <p className="text-white leading-relaxed text-lg">
            All consultations are booked directly with the dental clinicians.
            This allows you to visit our practice, meet the team, and discuss
            your treatment options accurately.
          </p>
          <div className="mt-2">
            <i className="block text-lg font-semibold text-white">Call 24/7</i>
            <a
              href="tel:9927488027"
              className="text-xl font-bold text-white hover:underline"
            >
              +91 9927488027
            </a>
          </div>
          <p className="text-white font-medium text-lg">
            राजकीय मेडिकल कालेज गेट नं. 2 के सामने, जालौन, उरई 285001
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
