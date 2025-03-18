import React from "react";
import GoogleMapComponent from "../components/GoogleMapComponent";
import ContactForm from "../components/ContactForm";

const ContactUs = () => {
  return (
    <div className="relative bg-secondary_bg text-secondary_text py-16 px-0 flex flex-col items-center">
      {/* Google Map - Full Width */}
      <div className="">
        {/* <GoogleMapComponent /> */}
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl mt-10 px-4 md:px-8">
        {/* Left Side: Contact Details */}
        <div className="flex flex-col space-y-5 text-center lg:text-left">
          <h1 className="text-3xl font-bold text-primary_text">
            Book Your Appointment Now
          </h1>
          <p className="text-primary_text leading-relaxed text-lg">
            All consultations are booked directly with the dental clinicians.
            This allows you to visit our practice, meet the team, and discuss
            your treatment options accurately.
          </p>
          <div className="mt-2">
            <i className="block text-lg font-semibold text-primary_text">Call 24/7</i>
            <a
              href="tel:9927488027"
              className="text-xl font-bold text-primary_text hover:underline"
            >
              +91 9927488027
            </a>
          </div>
          <p className="text-primary_text font-medium text-lg">
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
