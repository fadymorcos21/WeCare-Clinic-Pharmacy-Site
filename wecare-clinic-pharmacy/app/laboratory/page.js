"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import InfoSection from "@/components/InfoSection";
import InfoSectionMedCheck from "@/components/InfoSectionMedCheck";
import PharmacySplitSection from "@/components/PharmacySplitSection";
import TestimonialsAndStats from "@/components/home/TestimonialsAndStats";

export default function LaboratoryPage() {
  return (
    <>
      <Navbar />
      <HeroSection
        title={"On-Site Laboratory"}
        bgImage="lab.png"
        height="31vh"
        overlayOpacity={0.25}
      />
    </>
  );
}
