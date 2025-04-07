"use client";
import React from "react";

export default function CallOrNewPatientSection() {
  return (
    <div className="bg-[#004a7f] text-white py-12">
      <div
        className="
          mx-auto 
          max-w-7xl 
          grid 
          grid-cols-[1fr_auto_1fr] 
          items-stretch 
          gap-8 
          px-6
        "
      >
        {/* Left Side: Call to Book */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold">Need Care Right Away?</h2>
          <p>
            Call us now to schedule your appointment! Our team is ready to
            assist you with any immediate needs.
          </p>
          <div className="text-lg font-semibold">Phone: +1 (905) 848-4844</div>
          <p>
            Address: <br />
            104-105 3885 Duke of York Blvd
          </p>
        </div>

        {/* Middle Column: Vertical Line + "OR" */}
        <div className="relative flex items-center justify-center h-full">
          {/* Thin vertical line */}
          <div className="w-px h-full bg-white/40" />
          {/* “OR” absolutely centered */}
          <div
            className="
              absolute 
              top-1/2 
              -translate-y-1/2 
              px-3 
              py-1 
              bg-[#004a7f] 
              text-white 
              font-bold 
              text-sm
            "
          >
            OR
          </div>
        </div>

        {/* Right Side: New Patient Form */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold">Become a New Family Patient</h2>
          <p>
            Looking to join our family practice? Fill out the form below to
            request a consultation, and we’ll get back to you soon.
          </p>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full rounded border border-gray-300 px-3 py-2 text-black"
            />
            <input
              type="email"
              placeholder="Email*"
              className="w-full rounded border border-gray-300 px-3 py-2 text-black"
            />
            <input
              type="tel"
              placeholder="Phone*"
              className="w-full rounded border border-gray-300 px-3 py-2 text-black"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold"
            >
              Send Request
            </button>
          </form>
          <p className="text-lg font-normal">
            Or you can call us at +1 (905) 848-4844.
          </p>
        </div>
      </div>
    </div>
  );
}
