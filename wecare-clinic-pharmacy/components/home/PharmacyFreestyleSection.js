// components/WeCarePharmacyLayout.jsx
"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export default function WeCarePharmacyLayout() {
  const router = useRouter();

  return (
    <div className="bg-white">
      {/* SECTION 1: "We Care Pharmacy" */}
      <section className="max-w-7xl mx-auto px-6 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-[#05294a] mb-4">
              We Care Pharmacy
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

      {/* SECTION 2: Quick Access Services */}
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
              <li>Secure &amp; fast processing</li>
              <li>User-friendly form</li>
            </ul>
            <button
              onClick={() => router.push("/pharmacy/online-refill")}
              className="mt-auto inline-block bg-[#f49988] hover:bg-[#d17564] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform hover:scale-105"
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
              <li>You’ll never look back</li>
            </ul>
            <button
              onClick={() => router.push("/pharmacy/transfer-rx")}
              className="mt-auto inline-block bg-[#004a7f] hover:bg-[#00375e] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform hover:scale-105"
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
              className="mt-auto inline-block bg-[#004a7f] hover:bg-[#00375e] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform hover:scale-105"
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
              Stay organized with our compliance aids.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Elite packaging service</li>
              <li>Never miss a dose again</li>
            </ul>
            <button
              onClick={() => router.push("/contact-us")}
              className="mt-auto inline-block bg-[#f49988] hover:bg-[#d17564] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform hover:scale-105"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: Free Minor Ailment Assessment */}
      <section className="max-w-7xl mx-auto px-6 pt-6 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#05294a] mb-4">
                Free Minor Ailment Assessment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Save time by getting a direct pharmacist diagnosis and
                prescription for common ailments. No need to wait for a doctor’s
                appointment— walk in or book a free consultation anytime. Did
                you know pharmacists can prescribe for these minor ailments?
                It’s quick, convenient, and best of all, it’s free!
              </p>
              <Link href="/pharmacy/minor-ailments">
                <button className="mt-4 inline-block bg-[#004a7f] hover:bg-[#00375e] text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform hover:scale-105">
                  Learn more about Minor Ailment services →
                </button>
              </Link>
            </div>
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
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-[#05294a] mb-4">
              Our Pharmacists Can Prescribe for 19 Minor Ailments:
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
