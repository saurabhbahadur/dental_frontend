import React from "react";

const doctorData = [
  {
    id: 1,
    name: "Dr. Madan Niranjan",
    image: "https://imagesx.practo.com/providers/dr-madan-mohan-niranjan-pediatric-dentist-gurgaon-f0974ad7-76d2-4c24-a01f-e3292c9900cc.jpg?i_type=t_70x70-2x-webp",
    degree: "BDS, MDS",
    description: "Pediatric Dentist,Dentist,Cosmetic/Aesthetic Dentist,Implantologist",
    subDescription: "12 Years Experience Overall  ",
  },
  {
    id: 2,
    name: "Dr. Ankit Arora",
    image: "https://imagesx.practo.com/providers/dr-ankit-arora-oral-and-maxillofacial-surgeon-delhi-325322c9-16e1-4e5d-bb2f-17b4db4aba55.jpg?i_type=t_70x70-2x-webp",
    degree: "BDS, MDS",
    description: "Oral And MaxilloFacial Surgeon",
    subDescription: "16 Years Experience Overall",
  },
  {
    id: 3,
    name: "Dr. Doctor 3",
    image: "https://res.cloudinary.com/dxaf36ydh/image/upload/f_auto,q_auto/v1/mMaxDentalCare/ypao8wk9vajix907vmlv",
    degree: "BDS, MDS",
    description: "Experienced in pediatric and geriatric dentistry.",
    subDescription: "Ensuring comfortable and precise dental procedures.",
  },
];

const DoctorProfile = () => {
  return (
    <div
      className="bg-cover bg-center p-6  flex flex-col items-center"
      style={{ backgroundImage: "url('https://img.freepik.com/free-vector/floral-ornamental-abstract-background_52683-30016.jpg')" }}
    >
      <h1 className="text-center text-white text-4xl font-bold mb-8">Our Doctors</h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-6   rounded-2xl shadow-lg">
        {doctorData.map((doctor) => (
          <div
            key={doctor.id}
            className="flex flex-col items-center bg-white  bg-opacity-80 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src={doctor.image || "https://via.placeholder.com/200"}
              alt={doctor.name}
              className="w-48 h-48 object-cover rounded-full border-4 border-blue-500 mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
            <h4 className="text-lg text-gray-600">{doctor.degree}</h4>
            <p className="text-sm text-gray-700 mt-2 text-center">{doctor.description}</p>
            <p className="text-xs text-gray-500 mt-1 text-center">{doctor.subDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorProfile;