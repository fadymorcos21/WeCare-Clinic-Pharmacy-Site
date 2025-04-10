"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export default function WeCarePharmacyLayout() {
  const router = useRouter();

  return (
    <div className="bg-white">
      {/* SECTION 1: "We Care Pharmacy" (2/3 text, 1/3 image) */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: 2/3 text */}
          <div className="md:col-span-2">
            <h1 className="flex items-center text-3xl md:text-4xl font-bold text-[#05294a] mb-4">
              We Care Pharmacy
              {/* <span className="ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 fill-red-600"
                  viewBox="0 0 24 24"
                  stroke="red"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 016.364 
        6.364L12 21.364 4.318 12.682a4.5 4.5 0 010-6.364z"
                  />
                </svg>
              </span> */}
            </h1>

            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to We Care Pharmacy, where your health is our top
              priority. We provide a wide range of services to ensure you get
              the best possible care—from quick prescription services to free
              consultations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team is committed to offering personalized solutions tailored
              to your needs. Explore our services below to see how we can help!
            </p>
          </div>

          {/* Right: 1/3 image */}
          <div>
            <img
              src="/download.png"
              alt="We Care Pharmacy"
              className="object-cover mx-auto rounded shadow"
              style={{ width: "80%" }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Rx Quick Access Services (4 in a row) */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#05294a] mb-8">
          Quick Access Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Online Refill */}
          <div className="bg-white rounded shadow p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-[#05294a] mb-3">
              Online Refill
            </h3>
            <p className="text-gray-700 mb-3">
              Request your prescription refills with just a few clicks.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Secure & fast processing</li>
              <li>User-friendly form</li>
            </ul>
            <button
              onClick={() => router.push("/pharmacy/online-refill")}
              className="mt-auto bg-[#f49988] hover:bg-[#d17564] text-white font-semibold py-2 px-4 rounded"
            >
              Refill Now
            </button>
          </div>

          {/* Transfer Prescriptions */}
          <div className="bg-white rounded shadow p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-[#05294a] mb-3">
              Transfer Prescriptions
            </h3>
            <p className="text-gray-700 mb-3">
              Moving your prescription from another pharmacy?
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Effortless process</li>
              <li>You'll never look back</li>
            </ul>
            <button
              onClick={() => router.push("/pharmacy/transfer-rx")}
              className="mt-auto bg-[#004a7f] hover:bg-[#00375e] text-white font-semibold py-2 px-4 rounded"
            >
              Transfer Now
            </button>
          </div>

          {/* Refill Reminders */}
          <div className="bg-white rounded shadow p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-[#05294a] mb-3">
              Refill Reminders
            </h3>
            <p className="text-gray-700 mb-3">
              Never miss a dose with our timely refill reminders.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Simple signup process</li>
              <li>Peace of mind</li>
            </ul>
            <button
              onClick={() => router.push("/contact-us")}
              className="mt-auto bg-[#004a7f] hover:bg-[#00375e] text-white font-semibold py-2 px-4 rounded"
            >
              Contact Us
            </button>
          </div>

          {/* Blister Packaging */}
          <div className="bg-white rounded shadow p-6 flex flex-col">
            <h3 className="text-xl font-semibold text-[#05294a] mb-3">
              Blister Packaging
            </h3>
            <p className="text-gray-700 mb-3">
              Stay organized with our Compliance aids
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Elite packaging service</li>
              <li>Never miss a dose again</li>
            </ul>
            <button
              onClick={() => router.push("/contact-us")}
              className="mt-auto bg-[#f49988] hover:bg-[#d17564] text-white font-semibold py-2 px-4 rounded"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: Free Minor Ailment Assessment 
          Left side: text + image in 2 rows
          Right side: 2-column ailments with green checks
      */}
      <section className="max-w-7xl mx-auto px-6 pt-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: 1x2 layout -> text on top, image on bottom */}
          <div className="flex flex-col gap-6">
            {/* Text block */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#05294a] mb-4">
                Free Minor Ailment Assessment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Save time by getting a direct pharmacist diagnosis and
                prescription for common ailments. No need to wait for a doctor’s
                appointment—walk in or book a free consultation anytime. Did you
                know pharmacists can prescribe for these minor ailments? It’s
                quick, convenient, and best of all, it’s free!
              </p>
            </div>
            {/* Image block */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#05294a] mb-4">
                Free Medication Review Consultations
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Get the most from your medications with a personalized
                consultation from our pharmacists. We’ll review your current
                prescriptions, identify potential interactions or side effects,
                and ensure you’re receiving optimal treatment. No need to wait
                for a doctor—walk in or book your free review at your
                convenience. Did you know pharmacists can provide tailored
                advice on medication safety and effectiveness? It’s fast, easy,
                and completely free!
              </p>
            </div>
          </div>

          {/* Right: Ailments in 2 columns with green checks */}
          <div className="grid">
            <h2 className="text-xl md:text-3xl font-bold text-[#05294a] mb-4">
              Ontario pharmacists can now prescribe for 19 minor ailments:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {[
                "Hay fever (allergic rhinitis)",
                "Pink eye (conjunctivitis)",
                "Oral thrush",
                "Cold sores",
                "Seasonal allergies",
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
              ].map((ailment) => (
                <div key={ailment} className="flex items-start gap-2">
                  {/* Green check icon */}
                  <svg
                    className="w-5 h-5 text-green-500 mt-[2px]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{ailment}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
