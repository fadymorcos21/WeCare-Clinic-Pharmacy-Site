"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import InfoSection from "@/components/InfoSection";
import InfoSectionMedCheck from "@/components/InfoSectionMedCheck";
import PharmacySplitSection from "@/components/PharmacySplitSection";
import TestimonialsAndStats from "@/components/home/TestimonialsAndStats";
import OurDoctors from "@/components/OurDoctors";
import CallOrNewPatientSection from "@/components/CallOrNewPatientSection";
import WeCareClinicHero from "@/components/WeCareClinicHero";
import InfoSectionClinic from "@/components/InfoSectionClinic";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection
        bgImage="/everything-will-be-ok-i-promise.jpg"
        height="33vh"
        title="Walk-In Clinic and Family Practice"
        creditLink={
          <a href="https://www.freepik.com/free-photo/everything-will-be-ok-i-promise_11981881.htm#fromView=search&page=1&position=3&uuid=ce95b582-3c8a-4907-810b-91a6dcd45d85&query=Walk-In+Clinic+and+Family+Practice">
            Image by gpointstudio on Freepik
          </a>
        }
      />

      <div className="bg-[#004a7f] text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-sm sm:text-base">
          <div>
            <strong className="block text-lg">✔ Care for All Ages</strong>
            Our doctors are here for your whole family.
          </div>
          <div>
            <strong className="block text-lg">✔ Walk-Ins Welcome</strong>
            No appointment? No problem.
          </div>
          <div>
            <strong className="block text-lg">✔ Reduced Waiting Times</strong>
            Be seen quickly — no long waits.
          </div>
        </div>
      </div>
      {/* Embedded form for new or current patients */}
      <CallOrNewPatientSection />
      <InfoSectionClinic />
      <ServicesSection />
      {/* <WeCareClinicHero /> */}

      {/* --- Begin Custom Page Content --- */}

      <div className="relative">
        <svg
          className="w-full h-20 text-[#d1ebfc] -mb-1"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,224L48,192C96,160,192,96,288,69.3C384,43,480,53,576,80C672,107,768,149,864,144C960,139,1056,85,1152,64C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <section className="py-8 bg-[#d1ebfc]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mt-2">
            <h3 className="text-2xl font-semibold mb-4">Additional Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* First Column of List Items */}
              <ul className="list-disc pl-5 space-y-3">
                <li>Injury &amp; Illness Care</li>
                <li>Common Viral Illnesses</li>
                <li>Wart Treatments</li>
                <li>Allergies &amp; Asthma</li>
                <li>Skin Rashes</li>
              </ul>

              {/* Second Column of List Items */}
              <ul className="list-disc pl-5 space-y-3">
                <li>Driver’s Medical</li>
                <li>Sexually Transmitted Diseases</li>
                <li>Medication Renewals</li>
                <li>Musculoskeletal Injuries</li>
                <li>Urinary &amp; Vaginal Infections</li>
              </ul>

              {/* Third Column with the Image */}
              {/* <div className=" hidden md:flex items-center justify-center">
                <img
                  src="/earth.png"
                  alt="Additional Services"
                  className="w-50 h-50"
                />
              </div> */}
              <ul className="list-disc pl-5 space-y-3">
                <li>Blood Pressure Checks</li>
                <li>Ear Wax Removal</li>
                <li>Travel Health Advice &amp; Vaccinations</li>
                <li>Smoking Cessation Support</li>
                <li>Mental Health Consultations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 1 x 7 Icons with Labels */}
        <div className="max-w-7xl mx-auto px-0 pt-14 pb-10 ">
          <div className="grid grid-cols-2 sm:grid-cols-7 gap-6">
            {/* ADHD */}
            <div className="flex flex-col items-center text-center">
              <img src="/adhd.png" alt="ADHD" className="w-16 h-16" />
              <p className="mt-2 font-semibold">ADHD</p>
            </div>

            {/* Weight Loss */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/weight-loss.png"
                alt="Weight Loss"
                className="w-16 h-16"
              />
              <p className="mt-2 font-semibold">Weight Loss</p>
            </div>

            {/* Birth Control Prescription */}
            <div className="flex flex-col items-center text-center">
              <img
                src="/rx-2.png"
                alt="Birth Control Prescription"
                className="w-16 h-16"
              />
              <p className="mt-2 font-semibold">Birth Control</p>
            </div>

            {/* Prescription (Rx) */}
            <div className="flex flex-col items-center text-center">
              <img src="/rx.png" alt="Prescription" className="w-16 h-16" />
              <p className="mt-2 font-semibold">Prescription</p>
            </div>

            {/* ED */}
            <div className="flex flex-col items-center text-center">
              <img src="/ed.png" alt="ED" className="w-16 h-16" />
              <p className="mt-2 font-semibold">ED</p>
            </div>

            {/* Back Pain */}
            <div className="flex flex-col items-center text-center">
              <img src="/back-pain.png" alt="Back Pain" className="w-16 h-16" />
              <p className="mt-2 font-semibold">Back Pain</p>
            </div>

            {/* Headache */}
            <div className="flex flex-col items-center text-center">
              <img src="/headache.png" alt="Headache" className="w-16 h-16" />
              <p className="mt-2 font-semibold">Headache</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- End Custom Page Content --- */}

      {/* <img src="/process.png" className="mx-auto max-w-5xl" /> */}

      <OurDoctors />
      <TestimonialsAndStats />
      <Footer />
    </>
  );
}
