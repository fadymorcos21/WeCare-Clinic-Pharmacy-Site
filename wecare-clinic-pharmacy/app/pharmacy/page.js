"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import InfoSection from "@/components/InfoSection";
import InfoSectionMedCheck from "@/components/InfoSectionMedCheck";
import PharmacySplitSection from "@/components/PharmacySplitSection";
import TestimonialsAndStats from "@/components/home/TestimonialsAndStats";

export default function PharmacyPage() {
  return (
    <>
      <Navbar />
      <HeroSection bgImage="/pharmacy1.png" height="33vh" title="Pharmacy" />
      <div className="bg-[#004a7f] text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-sm sm:text-base">
          <div>
            <strong className="block text-lg">✔ Fast Refills</strong>
            We have lightning fast refill times
          </div>
          <div>
            <strong className="block text-lg">✔ Free Consults</strong>
            Speak with a pharmacist, no extra cost.
          </div>
          <div>
            <strong className="block text-lg">✔ Easy Transfers</strong>
            We handle the paperwork for you.
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-8">
        <main className="2xl:max-w-[1600px] lg:max-w-7xl mx-auto px-4 py-8 space-y-12">
          {/* Our Services Section */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">
              Care, meet convenience
            </h2>

            {/* Two columns: left timeline + right 2x2 service cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: New Patient Timeline */}
              <div className="flex flex-col justify-center px-4">
                <h3 className="text-2xl font-semibold mb-4">New Patient?</h3>
                <p className="text-gray-700 mb-8">
                  Easy and Effortless Transfer!
                </p>

                {/* Steps 1 & 2 share the same vertical line */}
                <div className="relative border-l-4 border-purple-400 pl-6 mb-10 space-y-8">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="absolute -left-11 top-0 w-8 h-8 flex items-center justify-center text-white bg-purple-500 rounded-full">
                      1
                    </div>
                    <h4 className="text-lg font-bold">Fill Out Our Form</h4>
                    <p className="text-gray-600">
                      We’ll guide you every step of the way.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="absolute -left-11 top-2 w-8 h-8 flex items-center justify-center text-white bg-purple-500 rounded-full">
                      2
                    </div>
                    <h4 className="text-lg font-bold">
                      We Contact Your Pharmacy
                    </h4>
                    <p className="text-gray-600">
                      Seamless prescription transfer—no hassle.
                    </p>
                  </div>

                  {/* Step 3 (No vertical line) */}
                  <div className="relative">
                    <div className="absolute -left-11 bottom-0 w-8 h-8 flex items-center justify-center text-white bg-purple-500 rounded-full">
                      3
                    </div>
                    <div className="relative h-10">
                      <div className="absolute">
                        <h4 className="text-lg font-bold">We Notify You</h4>
                        <p className="text-gray-600">
                          As soon as it’s done! That’s it—welcome aboard.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Four Service Cards (2x2) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Online Refill Card */}
                <div className="p-6 bg-gray-50 border rounded-lg shadow hover:shadow-lg transition flex flex-col items-start text-left">
                  {/* Hidden heading for accessibility */}
                  <h3 className="sr-only">Online Refill</h3>
                  <img
                    src="/online-refill.png"
                    alt="Online Refill"
                    className="mb-3 h-20 w-auto"
                  />
                  <p className="text-gray-700">
                    Request your prescription refills with just a few clicks.
                    Secure &amp; fast processing. User-friendly form.
                  </p>
                  <button className="mt-4 text-sm font-semibold text-blue-600 hover:underline">
                    Learn More
                  </button>
                </div>

                {/* Transfer Prescriptions Card */}
                <div className="p-6 bg-gray-50 border rounded-lg shadow hover:shadow-lg transition flex flex-col items-start text-left">
                  <h3 className="sr-only">Transfer Prescriptions</h3>
                  <img
                    src="/transfer-prescriptions.png"
                    alt="Transfer Prescriptions"
                    className="mb-3 h-20 w-auto"
                  />
                  <p className="text-gray-700">
                    Moving your prescription from another pharmacy? Effortless
                    process. You’ll never look back.
                  </p>
                  <button className="mt-4 text-sm font-semibold text-blue-600 hover:underline">
                    Learn More
                  </button>
                </div>

                {/* Refill Reminders Card */}
                <div className="p-6 bg-gray-50 border rounded-lg shadow hover:shadow-lg transition flex flex-col items-start text-left">
                  <h3 className="sr-only">Refill Reminders</h3>
                  <img
                    src="/refill-reminders.png"
                    alt="Refill Reminders"
                    className="mb-3 h-20 w-auto"
                  />
                  <p className="text-gray-700">
                    Never miss a dose with our timely refill reminders. Simple
                    signup process. Peace of mind.
                  </p>
                  <button className="mt-4 text-sm font-semibold text-blue-600 hover:underline">
                    Learn More
                  </button>
                </div>

                {/* Blister Packaging Card */}
                <div className="p-6 bg-gray-50 border rounded-lg shadow hover:shadow-lg transition flex flex-col items-start text-left">
                  <h3 className="sr-only">Blister Packaging</h3>
                  <img
                    src="/blister-packaging.png"
                    alt="Blister Packaging"
                    className="mb-3 h-20 w-auto"
                  />
                  <p className="text-gray-700">
                    Stay organized with our compliance aids. Elite packaging
                    service. Never miss a dose again.
                  </p>
                  <button className="mt-4 text-sm font-semibold text-blue-600 hover:underline">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <InfoSection />
        <PharmacySplitSection />
        <InfoSectionMedCheck />
        <TestimonialsAndStats />
      </div>
    </>
  );
}
