"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrescriptionBottleMedical,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";

export default function OverviewWithImage() {
  return (
    <div className="overflow-hidden bg-gray-50s py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Left Column: Overview Section */}
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              {/* Top Section */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#EE2D3F] text-sm font-bold tracking-wide uppercase">
                    About Us
                  </span>
                </div>
                <h2 className="text-[#05294a] text-3xl md:text-4xl font-bold leading-tight mb-4">
                  Family Practice &amp; Walk-In Clinic.
                </h2>
                <p className="text-[#4b4b4b] leading-relaxed">
                  We’re here to support your health with compassionate, prompt
                  medical care. Whether you’re coming in for a routine visit or
                  need urgent attention, our experienced physicians are ready to
                  help with a wide range of services to meet your needs.
                </p>
              </div>
              {/* Bottom Section: Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <div className="mb-3 text-3xl text-[#EE2D3F]">
                    <FontAwesomeIcon icon={faPrescriptionBottleMedical} />
                  </div>
                  <h3 className="text-[#05294a] text-xl md:text-2xl font-bold mb-2">
                    Pharmacy
                  </h3>
                  <p className="text-[#4b4b4b] leading-relaxed">
                    Our pharmacy staff is here to offer friendly, personalized
                    service tailored to your needs. Swing by with any questions
                    — we’re happy to guide you through your medication options.
                  </p>
                </div>
                <div className="flex flex-col">
                  <div className="mb-3 text-3xl text-[#EE2D3F]">
                    <FontAwesomeIcon icon={faFlask} />
                  </div>
                  <h3 className="text-[#05294a] text-xl md:text-2xl font-bold mb-2">
                    On Site Laboratory
                  </h3>
                  <p className="text-[#4b4b4b] leading-relaxed">
                    Our in-house lab team provides fast, confidential testing
                    services to ensure quick and reliable results. We're
                    committed to making your visit seamless and stress-free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: Image */}
          <img
            alt="image"
            src="/overview-photo.png"
            className="w-[25rem] sm:w-[58rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[67rem] md:w-[67rem] md:-ml-4 lg:-ml-4"
          />
        </div>
      </div>
    </div>
  );
}
