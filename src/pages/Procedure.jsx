import React from "react";

const Procedure = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white p-8 flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2019/07/30/15/57/dentist-4373290_1280.jpg')",
      }}
    >
      {/* Dark Overlay for Better Readability */}
      <div className="bg-black bg-opacity-60 p-16 mt-4 rounded-xl  w-screen">
        <h1 className="text-5xl font-bold text-center mb-6 text-blue-400">
          Procedure
        </h1>
        <p className="text-lg text-justify leading-relaxed mb-6">
          At <b> Max Dental Care</b>, we are committed to transforming smiles with
          precision and care. Our expert dental specialists offer a
          comprehensive range of advanced treatments, from dental implants and
          cosmetic enhancements to orthodontics and oral surgery. With
          cutting-edge technology and a patient-first approach, we ensure
          healthy, confident smiles for a lifetime.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-blue-300">
          Dental Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
              Dental Implants
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li className="hover:text-gray-300 transition">
                Missing Multiple Teeth
              </li>
              <li className="hover:text-gray-300 transition">
                Missing Single Tooth
              </li>
              <li className="hover:text-gray-300 transition">
                Missing All Teeth
              </li>
              <li className="hover:text-gray-300 transition">
                All-On-4 Technology
              </li>
              <li className="hover:text-gray-300 transition">
                Nobel Guide Computer Guided Surgery
              </li>
              <li className="hover:text-gray-300 transition">
                Nobel Biocare - Dental Implants
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-400">
              Cosmetic Dentistry
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li className="hover:text-gray-300 transition">Smile Makeover</li>
              <li className="hover:text-gray-300 transition">Tooth Crystal</li>
              <li className="hover:text-gray-300 transition">
                No Prep / Prepless Veneers
              </li>
              <li className="hover:text-gray-300 transition">
                Teeth Whitening
              </li>
              <li className="hover:text-gray-300 transition">
                Metal Free Crowns & Bridges (Zirconia)
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-yellow-400">
              Orthodontics
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li className="hover:text-gray-300 transition">
                Braces (Metallic or Ceramic)
              </li>
              <li className="hover:text-gray-300 transition">Lingual Braces</li>
              <li className="hover:text-gray-300 transition">
                Clear Aligners (Invisible Braces)
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-6 mb-3 text-yellow-400">
              Kids Dentistry
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li className="hover:text-gray-300 transition">
                Fluoride Fillings
              </li>
              <li className="hover:text-gray-300 transition">
                Kids Root Canal Treatment
              </li>
              <li className="hover:text-gray-300 transition">
                Conscious Sedation for Kids
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Procedure;
