"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrescriptionBottleMedical,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesSection() {
  return (
    <div className="overflow-hidden relative bg-gray-s py-24">
      <div className="mx-auto max-w-7xl sm:max-w-[1700px] px-6">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Left Column: Overview Section */}
          <section className="pt-12 pb-4 bg-gry-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8">
                Our Clinic Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Walk-In Care */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Walk-In Care</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Treatment of common illnesses (flu, colds, infections)
                    </li>
                    <li>Minor injuries (cuts, sprains, burns)</li>
                    <li>Allergy treatments</li>
                    <li>
                      Vaccinations (flu shots, travel vaccines, immunizations)
                    </li>
                  </ul>
                </div>
                {/* Family Medicine */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Family Medicine
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Routine check-ups and annual physicals</li>
                    <li>Pediatric care and well-child exams</li>
                    <li>Women’s and men’s health screenings</li>
                    <li>
                      Chronic disease management (diabetes, asthma,
                      hypertension)
                    </li>
                  </ul>
                </div>
                {/* Preventive Care */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Preventive Care
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Health screenings (blood tests, cholesterol checks)</li>
                    <li>Weight management and dietary guidance</li>
                    <li>Smoking cessation support</li>
                  </ul>
                </div>
                {/* Diagnostic Services */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Diagnostic Services
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>On-site lab tests (blood work, urinalysis)</li>
                    <li>Rapid diagnostic testing (COVID, strep, flu)</li>
                    <li>ECG and cardiac assessments</li>
                  </ul>
                </div>

                {/* Prescription Services */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Prescription Services
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Information on prescription refills and renewals</li>
                    <li>Request policies available online</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* Right Column: Image */}
          <img
            alt="image"
            src="/process-2.png"
            className="w-[25rem] sm:w-[58rem] max-w-none  md:w-[35rem] lg:w-[40rem] xl:w-[44rem] 2xl:w-[51rem]  md:-ml-4 lg:-ml-4"
          />
        </div>
      </div>
      <img
        alt="image"
        src="/doctor-cartoon-2.png"
        className="w-[10rem] hidden lg:block absolute right-0 bottom-0   md:-ml-4 lg:-ml-4"
      />
      <img
        alt="image"
        src="/heart.png"
        className="w-[5rem] hidden lg:block absolute xl:right-23 2xl:right-30 lg:right-10 top-5   md:-ml-4 lg:-ml-4"
      />
      <img
        alt="image"
        src="/stethoscope.png"
        className="w-[5rem] hidden lg:block absolute xl:left-23 2xl:left-35 lg:left-10 top-30   md:-ml-4 lg:-ml-4"
      />
    </div>
  );
}
