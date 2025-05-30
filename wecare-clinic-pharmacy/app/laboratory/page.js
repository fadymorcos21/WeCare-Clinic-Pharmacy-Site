"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Footer from "@/components/Footer";
import TestimonialsAndStats from "@/components/home/TestimonialsAndStats";

export default function LaboratoryPage() {
  return (
    <>
      <Navbar />
      <HeroSection
        title="On-Site Laboratory"
        bgImage="lab.png"
        height="31vh"
        overlayOpacity={0.25}
      />

      <section className="max-w-5xl mx-auto px-10 py-10">
        <h2 className="text-4xl font-bold mb-6">On-Site Laboratory</h2>
        <div className="text-gray-700 leading-relaxed text-lg">
          <img
            src="/lab-icon.png"
            alt="Lab Icon"
            className="float-right ml-8 mt-16 w-105 h-auto object-contain hidden sm:block"
          />
          <p className="mb-6">
            Our walk-in clinic offers on-site lab testing for your convenience.
          </p>
          <p className="mb-6">
            We provide a wide range of diagnostic tests with our on-site
            laboratory services, ensuring quick and accurate results during your
            visit.
          </p>
          <h3 className="text-2xl font-semibold mb-4">
            Common Lab Tests Include:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Blood Testing</li>
            <li>Urinalysis</li>
            <li>Strep Throat Testing</li>
            <li>Flu Testing</li>
            <li>Pregnancy Test</li>
            <li>STD Testing</li>
          </ul>
        </div>
      </section>

      {/* Additional Laboratory Details Section */}
      <section className="bg-gray-100 py-16 px-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <img
              src="/lab-3.png"
              alt="Lab Testing"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="lg:w-1/2 space-y-6">
            <ul className="space-y-4">
              {[
                "Exclusive",
                "Secure",
                "Fast",
                "Accurate",
                "Reliable",
                "Convenient",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 bg-white rounded-lg shadow px-4 py-2"
                >
                  <span className="text-blue-600 font-semibold">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-17">
          <h3 className="text-2xl font-bold mb-3">Laboratory Details:</h3>
          <p className="text-gray-700">
            At WeCare Clinic, we are proud to offer an exclusive on-site lab
            dedicated solely to our patients, ensuring superior convenience and
            care. Our state-of-the-art lab provides fast and accurate diagnostic
            results, allowing timely and effective treatment plans. Utilizing
            cutting-edge technology and adhering to the highest standards, we
            guarantee reliable results. Our dedicated team ensures each
            patient's experience is seamless and personalized, enhancing the
            quality of healthcare and providing unparalleled peace of mind.
          </p>
        </div>
      </section>

      <div className="bg-[#1E4E8C] py-4 px-8 flex flex-col md:flex-row items-center justify-center md:justify-between text-white">
        <div className="max-w-6xl mx-auto flex gap-15 sm:gap-50 lg:gap-100">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="relative w-12 h-12 bg-white text-[#1E4E8C] flex items-center justify-center transform rotate-45 rounded-md">
              <PhoneIcon className="w-6 h-6 transform -rotate-45" />
            </div>
            <div>
              <p className="font-semibold text-base md:text-lg">
                Call Us to Book Now
              </p>
              <p className="text-sm md:text-base">(905) 275-1935</p>
            </div>
          </div>

          <Link href="/contact-us">
            <button className="bg-white text-[#1E4E8C] font-semibold px-6 py-2 rounded-md flex items-center space-x-2 hover:opacity-90 transition">
              <PhoneIcon className="w-5 h-5" />
              <span>CONTACT US</span>
            </button>
          </Link>
        </div>
      </div>

      <TestimonialsAndStats />
      <Footer />
    </>
  );
}
