"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link"; // still used for nav items if needed
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faFax } from "@fortawesome/free-solid-svg-icons";
import OverviewSection from "@/components/home/OverviewSection";
import CallOrNewPatientSection from "@/components/CallOrNewPatientSection";
import PharmacySplitSection from "@/components/PharmacySplitSection";
import PharmacyFreestyleSection from "@/components/home/PharmacyFreestyleSection";
import OurDoctors from "@/components/OurDoctors";
import TestimonialsAndStats from "@/components/home/TestimonialsAndStats";
import { Star, Users, CalendarCheck, MessageSquare } from "lucide-react";
import Footer from "@/components/Footer";
import { Menu, X } from "lucide-react";

const stats = [
  {
    icon: CalendarCheck,
    number: "17+",
    label: "Years in Practice",
  },
  {
    icon: Users,
    number: "10k+",
    label: "Happy Patients",
  },
  {
    icon: Star,
    number: "5",
    label: "Google Star Rating",
  },
  {
    icon: MessageSquare,
    number: "200+",
    label: "Positive Reviews",
  },
];

const navItems = [
  { label: "Walk-In Clinic", url: "/walk-in-clinic" },
  { label: "Minor Ailments", url: "/pharmacy/minor-ailments" },
  { label: "Laboratory", url: "/laboratory" },
  { label: "Pharmacy", url: "/pharmacy" },
  { label: "Location", url: "/location" },
];

export default function Home() {
  const router = useRouter();
  const navbarRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.clientHeight);
      }
    };

    // Set initial navbar height
    updateNavbarHeight();

    // Update on resize
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  return (
    <div>
      <div className="relative w-full h-screen sm:min-h-[900px] bg-[url('/landing-page-mobile.png')] sm:bg-[url('/landing-page-upscale-stethoscope.jpg')] bg-center bg-cover bg-no-repeat">
        {/* Navbar */}
        <motion.nav
          ref={navbarRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`relative z-[9998] top-0 left-0 w-full  flex items-center justify-between pl-18 pr-5 md:pl-24 md:pr-12 py-6 md:pb-6 md:pt-10 z-10 ${
            isMenuOpen ? "bg-white" : ""
          }`}
        >
          {/* Logo & Desktop Links */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex w-10 h-10 items-center justify-center"
              >
                <img
                  src="/logo-3.png"
                  alt="Clinic Logo"
                  className="absolute object-contain max-w-[155] max-h-[72px]"
                />
              </motion.div>
            </Link>

            <motion.ul
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden px-10 md:flex ml-12 gap-8 text-[#05294a] font-semibold"
            >
              {navItems.map((item, i) => (
                <Link key={i} href={item.url}>
                  <motion.li
                    className="cursor-pointer hover:opacity-80"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.label}
                  </motion.li>
                </Link>
              ))}
            </motion.ul>
          </div>

          {/* Contact CTA & Hamburger */}
          <div className="flex items-center gap-8">
            <span className="text-[#004a7f] hidden lg:block font-normal">
              Call to book your appointment now!
            </span>
            <motion.button
              onClick={() => router.push("/contact-us")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block bg-[#004a7f] text-white px-4 py-2 rounded-md hover:bg-[#00375e]"
            >
              Contact Us
            </motion.button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden text-[#004a7f]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20"
            >
              <ul className="flex flex-col gap-4 px-6 py-4">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.url}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 text-[#05294a] font-semibold hover:text-[#004a7f]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={"/contact-us"}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-[#05294a] font-semibold hover:text-[#004a7f]"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </motion.nav>

        {/* Landing Section */}
        <motion.div
          className="landing-div flex flex-col justify-between"
          style={{ height: `calc(100vh - ${navbarHeight}px)` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Header Section (top) */}
          <motion.div
            className="flex flex-col sm:block h-screen sm:min-h-[30em] lg:min-h-[32em]"
            style={{
              height: "62%",
            }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div
              className="block sm:flex flex-start h-full items-center mx-auto py-3 sm:py-20 px-6 md:px-20 xl:px-20 2xl:px-[45px] max-w-full sm:max-w-7xl 2xl:max-w-[1600px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <h6 className="text-xl mb-2 md:text-xl 2xl:text-2xl font-semibold">
                  Your Health, Our Priority
                </h6>
                <h1 className="leading-tight font-bold mb-6 text-[#0a192a] text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
                  Family Practice
                  <br className="md:block" />
                  Walk-In Clinic & Pharmacy
                </h1>
                {/* Buttons Container */}
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    onClick={() => router.push("/pharmacy/transfer-rx")}
                    className="bg-[#004a7f] text-white px-6 py-3 rounded-lg hover:bg-[#60b9f7] transition-colors duration-300 text-md 2xl:text-xl"
                  >
                    Transfer Rx
                  </motion.button>

                  <motion.button
                    onClick={() => router.push("/walk-in-clinic")}
                    className="bg-transparent text-[#004a7f] border border-[#004a7f] hover:border-[#60b9f7] px-6 py-3 rounded-lg hover:bg-[#60b9f7] hover:text-white transition-colors duration-300 text-md 2xl:text-xl"
                  >
                    New Patient
                  </motion.button>
                </div>

                {/* Center Section: Phone & Fax using Font Awesome */}
                <div className="absolute hidden pt-8 sm:flex items-center gap-8 text-[#004a7f]">
                  {/* Phone */}
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center mb-2 sm:mb-0 gap-2">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-[#004a7f] w-4 h-4"
                      />
                      <span className="text-lg font-semi-bold">
                        (905) 275-1935
                      </span>
                    </div>
                  </div>
                  {/* Fax */}
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faFax}
                        className="text-[#004a7f] w-4 h-4"
                      />
                      <span className="text-lg font-semi-bold">
                        (905) 275-1935
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Optional right side (empty or image) */}
              <motion.div className="w-full hidden sm:block md:w-1/2" />
            </motion.div>
          </motion.div>

          {/* Services Section (bottom) */}
          <motion.div
            className="pb-19 sm:pb-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, #004a7f 40%)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <motion.div
              className="relative z-20 w-full py-8 px-4 md:px-10 lg:px-20 xl:px-20 2xl:px-[45px] max-w-full sm:max-w-7xl 2xl:max-w-[1600px] mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.div className="mx-auto grid grid-cols-4 sm:grid-cols-4 gap-0 sm:gap-3 lg:gap-8 2xl:gap-12">
                {/* Card 2: Walk-In Clinic */}
                <motion.div
                  onClick={() => router.push("/walk-in-clinic")}
                  className="flex flex-col items-center text-center p-2 sm:p-6 xl:p-8 shadow-2xl bg-white hover:shadow-xl transition-shadow transition-transform duration-300 hover:scale-105 rounded-none sm:rounded-xl first:rounded-l-xl last:rounded-r-xl border-l border-gray-300 first:border-l-0 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 1.2 }}
                >
                  <img
                    src="/family-medicine-3.png"
                    alt="Walk-In Clinic Icon"
                    className="w-11 h-11 sm:w-17 sm:h-17 mb-3"
                  />
                  <h3 className="font-semibold text-md sm:text-lg 2xl:text-2xl mb-2">
                    Family Practice & Clinic
                  </h3>
                  <p className="text-sm xl:text-lg hidden sm:block text-gray-600">
                    Immediate care for any non-emergency medical needs.
                  </p>
                </motion.div>
                {/* Card 1: Family Medicine */}
                <motion.div
                  onClick={() => router.push("/pharmacy/minor-ailments")}
                  className="flex flex-col items-center text-center p-2 sm:p-6 xl:p-8 shadow-2xl bg-white hover:shadow-xl transition-shadow transition-transform duration-300 hover:scale-105 rounded-none sm:rounded-xl first:rounded-l-xl last:rounded-r-xl border-l border-gray-300 first:border-l-0 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 1 }}
                >
                  <img
                    src="/walk-in-logo-3.png"
                    alt="Primary Care Icon"
                    className="w-12 h-11 sm:w-17 sm:h-17 mb-4"
                  />
                  <h3 className="font-semibold text-md sm:text-xl 2xl:text-2xl mb-2">
                    Prescribing Pharmacist
                  </h3>
                  <p className="text-sm hidden sm:block xl:text-lg text-gray-600">
                    No time for a doctor? Our pharmacists are certified to
                    prescribe
                  </p>
                </motion.div>

                {/* Card 3: On-Site Lab */}
                <motion.div
                  onClick={() => router.push("/laboratory")}
                  className="flex flex-col items-center text-center p-2 sm:p-6 xl:p-8 shadow-2xl bg-white hover:shadow-xl transition-shadow transition-transform duration-300 hover:scale-105 rounded-none sm:rounded-xl first:rounded-l-xl last:rounded-r-xl border-l border-gray-300 first:border-l-0 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 1.4 }}
                >
                  <img
                    src="/lab-logo.png"
                    alt="On-Site Lab Icon"
                    className="w-8 h-12 sm:w-11 sm:h-17 mb-3"
                  />
                  <h3 className="font-semibold text-md sm:text-xl 2xl:text-2xl mb-2">
                    On-Site Lab
                  </h3>
                  <p className="text-sm xl:text-lg hidden sm:block text-gray-600">
                    Convenient diagnostic services available on-site.
                  </p>
                </motion.div>

                {/* Card 4: Pharmacy */}
                <motion.div
                  onClick={() => router.push("/pharmacy")}
                  className="flex flex-col items-center text-center p-2 sm:p-6 xl:p-8 shadow-2xl bg-white hover:shadow-xl transition-shadow transition-transform duration-300 hover:scale-105 rounded-none sm:rounded-xl first:rounded-l-xl last:rounded-r-xl border-l border-gray-300 first:border-l-0 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 1.6 }}
                >
                  <img
                    src="/pharmacy-logo.png"
                    alt="Pharmacy Icon"
                    className="w-11 h-11 sm:w-17 sm:h-17 mb-3"
                  />
                  <h3 className="font-semibold text-md sm:text-xl 2xl:text-2xl mb-2">
                    Pharmacy
                  </h3>
                  <p className="text-sm xl:text-lg hidden sm:block text-gray-600">
                    Full-service pharmacy for your prescriptions.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <CallOrNewPatientSection />
      <OverviewSection />
      <PharmacyFreestyleSection />
      <PharmacySplitSection />
      <TestimonialsAndStats />
      <Footer />
    </div>
  );
}
