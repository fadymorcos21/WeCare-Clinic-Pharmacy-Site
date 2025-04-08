"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faFax } from "@fortawesome/free-solid-svg-icons";
import OverviewSection from "@/components/OverviewSection";
import CallOrNewPatientSection from "@/components/CallOrNewPatientSection";
import PharmacySplitSection from "@/components/PharmacySplitSection";
import PharmacyFreestyleSection from "@/components/PharmacyFreestyleSection";
import OurDoctors from "@/components/OurDoctors";
import TestimonialsAndStats from "@/components/TestimonialsAndStats";
import { Star, Users, CalendarCheck, MessageSquare } from "lucide-react";
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

// TODO make reviews DP and content wrap properly
// TODO Make split sections wrap properly
// TODO add humburger menu toggle
export default function Home() {
  const navbarRef = useRef(null);
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
      {/* <div className="relative w-full min-h-screen bg-[url('/landing-page-upscale.jpeg')] bg-center bg-cover bg-no-repeat"> */}
      <div className="relative w-full h-screen min-h-[900px] bg-[url('/landing-page-mobile.png')] sm:bg-[url('/landing-page-upscale-stethoscope.jpg')] bg-center bg-cover bg-no-repeat">
        {/* Navbar */}
        <motion.nav
          ref={navbarRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative top-0 left-0 w-full flex items-center justify-between px-18 md:px-24 py-6 md:pb-6 md:pt-10 z-10"
        >
          {/* Logo & Title */}
          <div className="flex items-center gap-2">
            <motion.div
              className="flex w-10 h-10 items-center justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="/logo-3.png"
                alt="Clinic Logo"
                className="absolute object-contain max-w-[155] max-h-[72px]"
              />
            </motion.div>
            {/* Navigation Links */}
            <motion.ul
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden px-10 md:flex ml-12 gap-8 text-[#05294a]"
            >
              {["Walk-In Clinic", "Family Practice", "Pharmacy", "About"].map(
                (item, i) => (
                  <motion.li
                    key={i}
                    className="cursor-pointer hover:opacity-80 font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.li>
                )
              )}
            </motion.ul>
          </div>

          {/* Contact Us Button */}
          <div className="flex items-center gap-8">
            <span className="text-[#004a7f] hidden sm:block font-normal">
              Call to book your appointment now!
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#004a7f] text-white px-4 py-2 rounded-md hover:bg-[#00375e]"
            >
              Contact Us
            </motion.button>
          </div>
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
            className="flex flex-col sm:block"
            style={{
              height: "62%",
              minHeight: "31em",
            }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div
              className=" block sm:flex flex-start h-full items-center mx-auto py-10 sm:py-20 px-6 md:px-20 xl:px-20 2xl:px-[45px] max-w-full sm:max-w-7xl 2xl:max-w-[1600px]"
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
                  <br className=" md:block" />
                  Walk-In Clinic & Pharmacy
                </h1>
                {/* Buttons Container */}
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    // Removed hover scale effect; using color transition instead
                    className="bg-[#004a7f] text-white px-6 py-3 rounded-lg hover:bg-[#60b9f7] transition-colors duration-300 text-md 2xl:text-xl"
                  >
                    Transfer Rx
                  </motion.button>
                  <motion.button
                    // Transparent background with outline and hover fill
                    className="bg-transparent text-[#004a7f] border border-[#004a7f] hover:border-[#60b9f7]  px-6 py-3 rounded-lg hover:bg-[#60b9f7] hover:text-white transition-colors duration-300 text-md 2xl:text-xl"
                  >
                    Learn More
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
                        (905) 749-9990
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
                        (905) 749-9991
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
              <motion.div className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-8 2xl:gap-12">
                {/* Card 1 */}
                <motion.div
                  className="flex flex-col items-center text-center p-6 xl:p-8 shadow-2xl rounded-xl bg-white hover:shadow-xl transition-shadow transition-transform duration-300 hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 1 }}
                >
                  <img
                    src="/family-medicine-3.png"
                    alt="Primary Care Icon"
                    className="w-12 h-11 sm:w-17 sm:h-17 mb-4"
                  />
                  <h3 className="font-semibold text-xl 2xl:text-2xl mb-2">
                    Family Medicine
                  </h3>
                  <p className="text-sm hidden sm:block xl:text-lg text-gray-600">
                    Comprehensive healthcare for patients of all ages.
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  className="flex flex-col items-center text-center p-6 xl:p-8 shadow-2xl rounded-xl bg-white hover:shadow-xl transition-shadow transition-transform duration-300 hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 1.2 }}
                >
                  <img
                    src="/walk-in-logo-3.png"
                    alt="Walk-In Clinic Icon"
                    className="w-11 h-11 sm:w-17 sm:h-17 mb-3"
                  />
                  <h3 className="font-semibold text-xl 2xl:text-2xl mb-2">
                    Walk-In Clinic
                  </h3>
                  <p className="text-sm xl:text-lg hidden sm:block text-gray-600">
                    Immediate care for non-emergency medical needs.
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  className="flex flex-col items-center text-center p-6 xl:p-8 shadow-2xl rounded-xl bg-white hover:shadow-xl transition-shadow transition-transform duration-300 hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 1.4 }}
                >
                  <img
                    src="/lab-logo.png"
                    alt="On-Site Lab Icon"
                    className="w-8 h-12 sm:w-11 sm:h-17 mb-3"
                  />
                  <h3 className="font-semibold text-xl 2xl:text-2xl mb-2">
                    On-Site Lab
                  </h3>
                  <p className="text-sm xl:text-lg hidden sm:block text-gray-600">
                    Convenient diagnostic services available on-site.
                  </p>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                  className="flex flex-col items-center text-center p-6 xl:p-8 shadow-2xl rounded-xl bg-white hover:shadow-xl transition-shadow transition-transform duration-300 hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 1.6 }}
                >
                  <img
                    src="/pharmacy-logo.png"
                    alt="Pharmacy Icon"
                    className="w-11 h-11 sm:w-17 sm:h-17 mb-3"
                  />
                  <h3 className="font-semibold text-xl 2xl:text-2xl mb-2">
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
      <OurDoctors />
      <TestimonialsAndStats />
    </div>
  );
}
