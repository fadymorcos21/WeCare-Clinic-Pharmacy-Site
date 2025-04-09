"use client";
import React from "react";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function InfoSectionMedCheck() {
  return (
    <div className="overflow-hidden bg-whitse pb-4 pb-16 sm:pt-16 sm:pb-16">
      <div className="mx-auto lg:max-w-7xl 2xl:max-w-[1600px]  px-6 lg:px-8">
        <div
          className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 
                        lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center"
        >
          {/* Left Column: Free Medication Reviews */}
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-xl">
              <h2 className="text-base font-semibold text-[#155dfc]">
                Free Medication Reviews
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Enhance Your Health with a Free Medication Review
              </p>
              <p className="mt-6 text-lg text-gray-600">
                Our expert pharmacists provide a comprehensive review of your
                medications to ensure they’re working effectively for you.
                Receive personalized advice, prevent harmful interactions, and
                optimize your overall well‑being.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#155dfc] flex-shrink-0" />
                  <span className="ml-3 text-gray-700">
                    Personalized medication counseling
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#155dfc] flex-shrink-0" />
                  <span className="ml-3 text-gray-700">
                    Comprehensive medication safety review
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-[#155dfc] flex-shrink-0" />
                  <span className="ml-3 text-gray-700">
                    Identification of potential drug interactions
                  </span>
                </li>
              </ul>
              <a
                href="/pharmacy/book-consultation"
                className="mt-8 inline-block bg-[#155dfc] text-white font-bold py-3 px-6 rounded-full shadow border border-[#155dfc] hover:border hover:text-[#155dfc] hover:bg-[white] transition"
              >
                Book Your Free Review
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center">
            <img
              alt="Medication review illustration"
              src="/medcheck.jpg"
              width={500}
              height={400}
              className="w-full max-w-md rounded-xl ring-1 shadow-xl ring-gray-400/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
