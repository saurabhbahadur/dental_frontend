import React from "react";

const doctorData = [
  {
    id: 1,
    name: "Dr. Madan Niranjan",
    image: "https://imagesx.practo.com/providers/dr-madan-mohan-niranjan-pediatric-dentist-gurgaon-f0974ad7-76d2-4c24-a01f-e3292c9900cc.jpg?i_type=t_70x70-2x-webp",
    degree: "BDS, MDS",
    description: "Pediatric Dentist,Dentist,Cosmetic/Aesthetic Dentist,Implantologist",
    subDescription: "12 Years Experience",
  },
  {
    id: 2,
    name: "Dr. Ankit Arora",
    image: "https://imagesx.practo.com/providers/dr-ankit-arora-oral-and-maxillofacial-surgeon-delhi-325322c9-16e1-4e5d-bb2f-17b4db4aba55.jpg?i_type=t_70x70-2x-webp",
    degree: "BDS, MDS",
    description: "Oral And MaxilloFacial Surgeon",
    subDescription: "16 Years Experience",
  },
  {
    id: 3,
    name: "Dr. Rajat Suri",
    image: "https://res.cloudinary.com/dxaf36ydh/image/upload/f_auto,q_auto/v1/mMaxDentalCare/WhatsApp_Image_2025-03-30_at_12.41.40_f310174d_lwqmc7",
    degree: "BDS, MDS",
    description: "Ensuring comfortable and precise dental procedures.",
    subDescription: "Experienced in Orthodonitics & Orofacial.",
  },
];



const DoctorProfile = () => {
  return (
    <div
      className="bg-cover bg-center p-6  flex flex-col items-center"
      style={{ backgroundImage: "url('')" }}
    >
      <h1 className="text-center text-black text-4xl font-bold mb-8 underline">Our Doctors</h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 ">
        {doctorData.map((doctor) => (
          <div
            key={doctor.id}
            className="flex flex-col items-center  shadow-xl shadow-zinc-500 bg-white  bg-opacity-70 p-6 rounded-xl  "
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-48 h-48 object-cover shadow-cyan-500/50 shadow-md rounded-full border-4 border-primary_bg mb-4"
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