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

      {/* --- Begin Custom Page Content --- */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Clinic Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Walk-In Care */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Walk-In Care</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Treatment of common illnesses (flu, colds, infections)</li>
                <li>Minor injuries (cuts, sprains, burns)</li>
                <li>Allergy treatments</li>
                <li>
                  Vaccinations (flu shots, travel vaccines, immunizations)
                </li>
              </ul>
            </div>
            {/* Family Medicine */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Family Medicine</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Routine check-ups and annual physicals</li>
                <li>Pediatric care and well-child exams</li>
                <li>Women’s and men’s health screenings</li>
                <li>
                  Chronic disease management (diabetes, asthma, hypertension)
                </li>
              </ul>
            </div>
            {/* Preventive Care */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Preventive Care</h3>
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
            {/* Virtual Care / Telemedicine */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Virtual Care / Telemedicine
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Remote consultations via video or phone</li>
                <li>Online follow-ups</li>
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
            {/* Specialty Care */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold mb-4">
                Specialty Care (If Available)
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Mental health support and counseling</li>
                <li>Nutritional counseling</li>
                <li>Travel medicine consultations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Patient Education & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Educational Health Blog */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Educational Health Blog
              </h3>
              <p className="mb-2">
                Read our articles on seasonal health issues, preventive care,
                and wellness tips. Stay up-to-date with health alerts and
                announcements.
              </p>
              <a href="/blog" className="text-blue-600 underline">
                Read our Blog &rarr;
              </a>
            </div>
            {/* FAQs */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">FAQs</h3>
              <p className="mb-2">
                Find answers to commonly asked questions about the clinic, our
                services, and our policies.
              </p>
              <a href="/faqs" className="text-blue-600 underline">
                View FAQs &rarr;
              </a>
            </div>
            {/* News & Updates */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">News & Updates</h3>
              <p className="mb-2">
                Stay informed about new services, special programs, and
                clinic-hosted events such as vaccine drives.
              </p>
              <a href="/news" className="text-blue-600 underline">
                Learn More &rarr;
              </a>
            </div>
            {/* COVID-19 Updates */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">COVID-19 Updates</h3>
              <p className="mb-2">
                Access current guidelines, safety measures, and information on
                vaccination and testing availability.
              </p>
              <a href="/covid-updates" className="text-blue-600 underline">
                Get the Latest &rarr;
              </a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">Additional Services</h3>
            <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-2">
              <li>Injury &amp; Illness Care</li>
              <li>Common Viral Illnesses</li>
              <li>Wart Treatments</li>
              <li>Allergies &amp; Asthma</li>
              <li>Skin Rashes</li>
              <li>Driver’s Medical</li>
              <li>Sexually Transmitted Diseases</li>
              <li>Medication Renewals</li>
              <li>Musculoskeletal Injuries</li>
              <li>Urinary &amp; Vaginal Infections</li>
              <li>WSIB-related Medical Services</li>
            </ul>
          </div>
        </div>
      </section>
      {/* --- End Custom Page Content --- */}

      <OurDoctors />
      <TestimonialsAndStats />
    </>
  );
}
