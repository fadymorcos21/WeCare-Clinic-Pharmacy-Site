"use client";
import React from "react";

export default function PharmacySplitSection() {
  return (
    <div className="bg-[#004a7f] text-white py-12 px-6">
      <div
        className="
          mx-auto 
          max-w-7xl 
          grid 
          grid-cols-[1fr_auto_1fr] 
          items-stretch 
          gap-8
        "
      >
        {/* Left Side: Pharmacy Info */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold">New to Our Pharmacy?</h2>
          <p>
            Transfer your prescriptions now or submit an online refill request.
            Our staff is always just a call away if you have any questions or
            need help.
          </p>
          {/* Links/Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="inline-block bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold text-white text-center"
            >
              Transfer Rx
            </a>
            <a
              href="#"
              className="inline-block border border-red-600 hover:bg-red-700 hover:text-white px-4 py-2 rounded font-semibold text-red-600 text-center"
            >
              Online Refill
            </a>
          </div>
          {/* Phone Mention */}
          <div className="text-lg font-semibold pt-2">
            Or call us: +1 (905) 848-4844
          </div>
        </div>

        {/* Middle Column: Vertical Divider + "OR" */}
        <div className="relative flex items-center justify-center">
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

        {/* Right Side: Phone Call Emphasis */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold">Prefer to Talk?</h2>
          <p>
            Our pharmacists are happy to assist you over the phone. Give us a
            call now to get the help you need—no matter if it’s a new
            prescription or a refill.
          </p>
          <div className="text-lg font-semibold">Phone: +1 (905) 848-4844</div>
        </div>
      </div>
    </div>
  );
}
