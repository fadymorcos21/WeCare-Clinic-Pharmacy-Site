// app/minor-ailments/page.js
"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TestimonialsAndStats from "@/components/home/TestimonialsAndStats";
import Footer from "@/components/Footer";

const ailments = [
  {
    title: "Urinary Tract Infection (UTI)",
    desc: "A bacterial infection of the urinary tract causing burning during urination and frequent urges, most common in women.",
  },
  {
    title: "Pink Eye",
    desc: "Inflammation of the eye’s lining from bacteria, viruses, or allergens, leading to redness and discharge; highly contagious yet treatable.",
  },
  {
    title: "Oral Thrush",
    desc: "Overgrowth of yeast in the mouth resulting in white, creamy patches and soreness on the tongue and inner cheeks.",
  },
  {
    title: "Cold Sores",
    desc: "Fluid‑filled blisters around the lips caused by the herpes simplex virus; antiviral creams can help speed healing.",
  },
  {
    title: "Seasonal Allergies",
    desc: "Immune reaction to pollen and other seasonal triggers causing sneezing, itchy eyes, and a runny nose; relief available via antihistamines.",
  },
  {
    title: "Vaginal Yeast Infection",
    desc: "Candida fungus overgrowth in the vagina leading to itching, burning, and abnormal discharge; antifungal treatments are effective.",
  },
  {
    title: "Acid Reflux",
    desc: "Backflow of stomach acid into the esophagus causing chest burning and discomfort after eating.",
  },
  {
    title: "Skin Inflammation & Eczema",
    desc: "Dry, itchy, inflamed patches of skin from dermatitis; soothing creams and ointments can reduce irritation.",
  },
  {
    title: "Hemorrhoids",
    desc: "Swollen veins around the anus and rectum causing itching, pain, and occasional bleeding; topical remedies provide relief.",
  },
  {
    title: "Menstrual Cramps",
    desc: "Cramping pain in the lower abdomen associated with menstruation; various medications and heat therapy can ease discomfort.",
  },
  {
    title: "Insect Bites & Hives",
    desc: "Itchy, raised welts from insect stings or bites; antihistamines and topical lotions help reduce swelling and itching.",
  },
  {
    title: "Tick Bites",
    desc: "Bites from ticks may transmit bacteria such as Lyme disease; prophylactic medications can prevent infection.",
  },
  {
    title: "Impetigo",
    desc: "Contagious bacterial skin infection that forms yellow‑crusted sores, often around the nose and mouth; antibiotics clear it up.",
  },
  {
    title: "Muscle Sprains & Strains",
    desc: "Ligament sprains or muscle/tendon strains causing pain and swelling; rest, ice, compression, and elevation aid recovery.",
  },
  {
    title: "Acne",
    desc: "Clogged pores leading to pimples, blackheads, and whiteheads; topical treatments can help improve skin clarity.",
  },
  {
    title: "Pinworms",
    desc: "Tiny intestinal worms causing anal itching at night when they lay eggs; a short course of medication eliminates them.",
  },
  {
    title: "Canker Sores",
    desc: "Small, painful ulcers on the mouth lining or tongue; topical gels and antiseptic rinses speed healing.",
  },
  {
    title: "Diaper Rash",
    desc: "Irritated skin in the diaper area from moisture or irritants; barrier creams and frequent changes soothe and protect.",
  },
  {
    title: "Nausea & Vomiting in Pregnancy",
    desc: "Morning sickness during early pregnancy causing queasiness and vomiting; dietary adjustments and approved remedies can help.",
  },
];

export default function MinorAilmentsPage() {
  return (
    <>
      <Navbar />

      {/* Hero with subtitle and button */}
      <HeroSection
        bgImage="/pharmacist-w-1.jpg"
        height="42vh"
        title="Minor Ailments"
        subtitle="Skip the doctor's office—our pharmacists can assess and prescribe for common conditions right away."
        buttonLabel="Book Appointment"
        buttonHref="/pharmacy/book-consultation"
        overlayOpacity={0.2}
      />

      {/* Intro */}
      <section className="bg-blue-100 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-gray-800 text-lg">
          Pharmacists in Ontario can prescribe for minor health conditions. If
          you have an Ontario health card, you’re eligible for this free service
          — no appointment necessary.
        </div>
      </section>

      {/* Ailments Grid */}
      <section className="bg-white py-12 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#004a7f] mb-10">
            Common Minor Ailments We Treat
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ailments.map((ailment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group bg-white rounded-lg shadow-lg p-6 border-t-4 border-gray-100 hover:border-purple-700 transition-all transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl duration-300"
              >
                <h3 className="text-xl font-semibold text-[#004a7f] group-hover:text-[#004a7f] mb-2">
                  {ailment.title}
                </h3>
                <p className="text-gray-700">{ailment.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsAndStats />

      <Footer />
    </>
  );
}
