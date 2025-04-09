// File: components/EbenezerHero.jsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WeCareClinicHero() {
  return (
    <section className="flex justify-center px-4 py-8">
      {/* Outer container with gradient, rounded corners, and shadow */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#3DB0FE] to-[#82CAFF] rounded-xl p-8 md:p-12 shadow-lg max-w-7xl w-full">
        {/* LEFT SIDE: Text Content */}
        <div className="md:w-1/2 text-white">
          <h2 className="text-lg md:text-xl font-semibold">
            Your Journey to better health starts here.
          </h2>
          <h1 className="text-2xl md:text-4xl font-bold mt-2 mb-4">
            Experience exceptional healthcare tailored for your needs.
          </h1>
          <p className="leading-relaxed">
            Welcome to ebenezer clinic; where expertise meets personalised care.
            Our mission is to deliver quality healthcare services to you.
            Whether you’re seeking medical solutions or treatments, we’re here
            to help you achieve your health goals. We will be happy to see you.
          </p>

          <div className="mt-6">
            <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
              Book Appointment
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-end">
          <Image
            src="/healthcare-hero.jpg"
            alt="Group of healthcare professionals"
            width={500}
            height={400}
            className="rounded-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
