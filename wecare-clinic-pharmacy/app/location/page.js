"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";
import HeroSection from "@/components/HeroSection";
import TestimonialsAndStats from "@/components/home/TestimonialsAndStats";
import Footer from "@/components/Footer";

export default function LocationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        bgImage="/download.png"
        height="30vh"
        overlayOpacity={"0.21"}
        title={"WeCare Walk-in Clinic &amp; Pharmacy"}
        subtitle={"4.5 ★ (218) – Walk-in Clinic in Mississauga, Ontario"}
      />

      {/* Main Content */}
      <div className="flex mx-auto flex-row grid grid-cols-1 sm:grid-cols-2 max-w-7xl gap-10 py-15">
        {/* Left Column */}
        <main className="w-full px-4 flex flex-col justify-between py-8 space-y-8 relative">
          {/* Location Card */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Location Details
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> 169 Dundas St E, Mississauga, ON L5A 1W4
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Located in:</strong> Dundas Centre
            </p>
            <p className="text-gray-700">
              <strong>Province:</strong> Ontario
            </p>
          </section>

          {/* Hours Card */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Hours of Operation
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 text-gray-700">
              <li className="flex items-center">
                <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
                Wednesday: 10 a.m. – 8 p.m.
              </li>
              <li className="flex items-center">
                <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
                Thursday: 10 a.m. – 7 p.m.
              </li>
              <li className="flex items-center">
                <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
                Friday: 10 a.m. – 5 p.m.
              </li>
              <li className="flex items-center">
                <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
                Saturday: 10 a.m. – 3 p.m.
              </li>
              <li className="flex items-center">
                <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
                Sunday: Closed
              </li>
              <li className="flex items-center">
                <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
                Monday: 10 a.m. – 7 p.m.
              </li>
              <li className="flex items-center">
                <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
                Tuesday: 10 a.m. – 7 p.m.
              </li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact
              </h2>
              <p className="flex items-center text-gray-700 mb-1">
                <PhoneIcon className="h-5 w-5 text-blue-500 mr-2" />
                <strong>Phone:</strong>
                <a
                  href="tel:905-275-1935"
                  className="ml-2 text-blue-600 hover:text-blue-800 transition"
                >
                  (905) 275-1935
                </a>
              </p>
              <p className="flex items-center mt-4 text-gray-700 mb-1">
                <PhoneIcon className="h-5 w-5 text-blue-500 mr-2" />
                <strong>Fax:</strong>
                <a
                  href="tel:905-275-1935"
                  className="ml-2 text-blue-600 hover:text-blue-800 transition"
                >
                  (905) 275-1935
                </a>
              </p>
            </div>
            <div>
              <a
                href="contact-us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-5 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg shadow transition"
              >
                Send us a message
              </a>
            </div>
          </section>
        </main>

        {/* Right Column */}
        <div className="animate-fade-in space-y-8 py-8">
          {/* COME VISIT US Section */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              COME VISIT US
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Stop by WeCare Pharma at 169 Dundas St E, Mississauga, ON L5A 1W4.
              Located in the heart of Dundas Centre, our clinic is easily
              accessible and ready to serve your healthcare needs.
            </p>
          </section>

          {/* Map Section */}
          <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-300 hover:shadow-xl transition-shadow duration-300">
            <iframe
              width="100%"
              height="450"
              frameBorder="0"
              className="w-full rounded-3xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46230.56295099943!2d-79.65816642046208!3d43.59800036649927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b46fd8e7eda29%3A0x6eb0cc620d46ea78!2sWeCare%20Walk-in%20Clinic%20and%20Pharmacy!5e0!3m2!1sen!2sca!4v1744196620316!5m2!1sen!2sca"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <TestimonialsAndStats bgClassName="bg-gray-100" />
      <Footer statsBgClassName="bg-gray-100" />
    </div>
  );
}
