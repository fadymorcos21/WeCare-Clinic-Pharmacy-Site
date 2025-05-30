"use client";
import React from "react";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function InfoSectionClinic() {
  return (
    <>
      <div className="relative overflow-hidden  py-12">
        {/* Left side background image – visible on large screens only */}
        <div
          className="absolute hidden lg:block w-1/2 h-[90%] rounded-r-xl shadow-lg bg-cover bg-center"
          style={{
            backgroundImage: "url('/smiling-doctor-2.png')",
          }}
        >
          {/* Heading Overlay */}
          <div className="flex flex-col gap-8 absolute w-4/10 top-[35%] left-[77%] transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-white drop-shadow-lg">
              Embark on Your Journey to Enhanced Wellness
            </p>
            <p className="text-xl sm:text-xl lg:text-2xl text-white drop-shadow-lg">
              Experience exceptional, personalized care crafted just for you
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            {/* Left Column Spacer (empty on mobile) */}
            <div className="hidden lg:block" />

            {/* Right Column: Updated Info Section */}
            <div className="lg:pl-16">
              <div className="lg:max-w-xl">
                {/* ABOUT US Section */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 uppercase">
                  ABOUT US
                </h2>
                <p className="text-gray-700 mb-3">
                  Devoted to Revolutionizing Your Well-Being with Superior
                  Medical Attention.
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Your Reliable Ally in Achieving a Vibrant, Graceful, and
                  Confident Life.
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At WeCare Clinic, we’re more than just healthcare providers –
                  we’re part of your community, a caring neighbor, and a
                  dedicated support system. Our goal is to deliver exceptional,
                  accessible healthcare that meets your unique needs, ensuring
                  everyone gets the personalized treatment they deserve.
                </p>
                {/* WHY CHOOSE US Section */}
                <div className="mt-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Why Choose Us
                  </h2>
                  <p className="text-gray-700 mb-3">
                    Compassionate Service, Broad Expertise, and a Deep Community
                    Connection.
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    We Treat Every Patient Like Family.
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    We’re not just medical professionals – we embody the spirit
                    of our community. Our diverse team brings together varied
                    expertise and cultural insights to deliver outstanding,
                    tailor-made care for each individual who walks through our
                    doors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
