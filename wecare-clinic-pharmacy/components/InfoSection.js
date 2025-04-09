"use client";
import React from "react";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const minorAilments = [
  "Hay fever (allergic rhinitis)",
  "Pink eye (conjunctivitis)",
  "Seasonal allergies",
  "Oral thrush",
  "Cold sores",
  "Vaginal yeast infection",
  "Acid reflux",
  "Skin inflammation & eczema",
  "Hemorrhoids",
  "Menstrual cramps",
  "Insect bites & hives",
  "Tick bites",
  "Impetigo",
  "Muscle sprains & strains",
  "Acne",
  "Pinworms",
  "Canker sores",
  "Diaper rash",
  "Nausea & vomiting in pregnancy",
];

export default function InfoSection() {
  return (
    <>
      <div className="relative overflow-hidden py-12">
        {/* Left side background image – visible on large screens only */}
        <div
          className="absolute hidden lg:block w-1/2 h-[90%] rounded-r-xl shadow-lg bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/medium-shot-pharmacist-helping-patient.jpg')",
          }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
            {/* Left Column Spacer (empty on mobile) */}
            <div className="hidden lg:block" />

            {/* Right Column: Info */}
            <div className="lg:pl-16">
              <div className="lg:max-w-xl">
                {/* Main Header */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ontario Pharmacists Can Now Prescribe For Minor Ailments!
                </h2>
                <p className="text-gray-700 mb-6">
                  If you're experiencing minor health concerns, there's no need
                  to wait for a doctor's appointment. Ontario pharmacists are
                  now authorized to assess and prescribe medications for a
                  variety of minor ailments, providing you with prompt and
                  professional care right in your community.
                </p>

                {/* Why Visit Your Pharmacist */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Why Visit Your Pharmacist for Minor Ailments?
                </h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <span className="font-semibold">Immediate Access:</span> No
                    appointment necessary—walk in and receive timely care.
                  </li>
                  <li>
                    <span className="font-semibold">Expert Care:</span>{" "}
                    Pharmacists are highly trained professionals equipped to
                    manage minor health issues effectively.
                  </li>
                  <li>
                    <span className="font-semibold">Convenience:</span> With
                    numerous locations and extended hours, pharmacies offer
                    flexible options to suit your schedule.
                  </li>
                </ul>

                <p className="text-gray-700 mb-6">
                  Come in now and get a free minor ailment assessment!
                </p>

                <Link href="/learn-more">
                  <button className="inline-block bg-[#155dfc] text-white font-bold py-3 px-6 rounded-full shadow border border-[#155dfc] hover:border hover:bg-[white]  hover:text-[#155dfc] transition">
                    Schedule A Free Minor Ailment Assement
                  </button>
                  {/* <button className="ml-5 inline-block bg-white text-[#155dfc] border-2 border-[#155dfc] font-bold py-3 px-6 rounded-full shadow hover:text-white hover:bg-[#155dfc] transition">
                    Book Consultation
                  </button> */}
                </Link>
                <p className="text-gray-700 mt-6">
                  No appointment necessary — Walk-Ins are always welcome too
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minor Ailments Title & List */}
      <div className="mx-auto lg:max-w-7xl 2xl:max-w-[1600px] px-6 pb-20 lg:px-8 mt-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          Minor Ailments
        </h3>
        <p className="text-gray-700 mb-6">
          As of October 1, 2023, Ontario pharmacists are authorized to prescribe
          medications for 19 minor ailments that include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-gray-700">
          {minorAilments.map((ailment, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5" />
              <span>{ailment}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-700 mt-6">
          — Come get a free minor ailment assessment today!
        </p>
      </div>
    </>
  );
}
