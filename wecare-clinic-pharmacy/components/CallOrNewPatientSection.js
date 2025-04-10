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
          grid-cols-1 
          sm:grid-cols-[1fr_auto_1fr] 
          items-stretch 
          gap-8 
          px-6
        "
      >
        {/* 1) Right Side on mobile, 3rd on desktop */}
        <div className="order-1 sm:order-3 flex flex-col justify-center space-y-4">
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
          <p className="text-lg">Or you can call us at +1 (905) 848-4844.</p>
        </div>

        {/* 2) Separator */}
        <div className="relative flex items-center justify-center order-2 sm:order-2">
          {/* on mobile: full‑width horizontal line; on sm+: vertical */}
          <div className="w-full h-px sm:w-px sm:h-full bg-white/40" />
          <div
            className="
              absolute 
              top-1/2 
              left-1/2 
              transform 
              -translate-x-1/2 
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

        {/* 3) Left Side on mobile, 1st on desktop */}
        <div className="order-3 sm:order-1 flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold">Need Care Right Away?</h2>
          <p>
            Call us now to schedule your appointment! Our team is ready to
            assist you with any needs promptly.
          </p>
          <div className="text-lg font-semibold">Phone: +1 (905) 848-4844</div>
          <p>
            <span className="text-lg font-semibold">Address:</span>
            <br />
            169 Dundas St E, Mississauga, ON L5A 1W4
          </p>
        </div>
      </div>
    </div>
  );
}
