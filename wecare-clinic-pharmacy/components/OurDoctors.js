"use client";
import React from "react";

const doctors = [
  {
    name: "Dr. Thomas Reynolds",
    title: "Family Physician",
    bio: "Specializes in comprehensive family medicine with a focus on preventive care, chronic disease management, and men’s health.",
    image: "/doc1.png",
  },
  {
    name: "Dr. Mark Thomson",
    title: "Walk-In Specialist",
    bio: "Expert in acute care, providing immediate medical attention with compassion and efficiency.",
    image: "/docw.png",
  },
  {
    name: "Dr. Leila Khatri",
    title: "Family Doctor",
    bio: "Dedicated pharmacist with expertise in medication management, consultations, and minor ailment prescriptions.",
    image: "/doc3.png",
  },
];

export default function OurDoctors() {
  return (
    <section className="pb-16 pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-[#05294a] text-center text-3xl  md:text-4xl font-bold leading-tight mb-12">
          Meet Our Doctors
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {doctors.map((doc) => (
            <div
              key={doc.name}
              className="shadow-lg rounded-lg overflow-hidden bg-gray-50 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="w-80 h-110
                  object-cover mx-auto rounded-lg"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#004a7f]">{doc.name}</h3>
                <h4 className="text-md font-semibold text-[#f49988] mb-3">
                  {doc.title}
                </h4>
                <p className="text-gray-600 mb-6">{doc.bio}</p>
                <div className="flex gap-3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
