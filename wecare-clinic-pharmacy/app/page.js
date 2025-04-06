"use client";
import React, { useEffect, useRef, useState } from "react";

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

    // Optionally update on resize
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[url('/landing-page-upscale.jpeg')] bg-center bg-cover bg-no-repeat">
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="relative top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-6 md:pb-6 md:pt-10 z-10"
      >
        {/* Logo & Title */}
        <div className="flex items-center gap-2">
          <div className="flex w-10 h-10 items-center justify-center">
            <img
              src="/logo.png"
              alt="Clinic Logo"
              className="absolute object-contain max-w-[70px] max-h-[70px]"
            />
          </div>
          {/* <img
            src="/logo-placeholder.png"
            alt="Clinic Logo"
            className="w-10 h-10 object-contain"
          /> */}

          {/* Navigation Links */}
          <ul className="hidden px-10 md:flex ml-8 gap-8 text-[#05294a]">
            <li className="cursor-pointer hover:opacity-80 font-semibold">
              Home
            </li>
            <li className="cursor-pointer hover:opacity-80 font-semibold">
              About
            </li>
            <li className="cursor-pointer hover:opacity-80 font-semibold">
              Services
            </li>
            <li className="cursor-pointer hover:opacity-80 font-semibold">
              Contact
            </li>
          </ul>
        </div>
        {/* Book Button */}
        <button className="bg-[#004a7f] text-white px-4 py-2 rounded-md hover:bg-[#00375e]">
          Book Appointment
        </button>
      </nav>

      {/* HEADER & SERVICES SECTIONS */}
      <div
        className="landing-div"
        style={{ height: `calc(100vh - ${navbarHeight}px)` }}
      >
        {/* Header Section */}
        <div
          className="relative flex md:flex-row items-center mx-auto py-20 px-6 md:px-20 xl:px-20 2xl:px-[45px] max-w-full sm:max-w-7xl 2xl:max-w-[1600px]"
          style={{ height: "60%", minHeight: "20rem" }}
        >
          {/* Left side: text */}
          <div className="w-full md:w-1/2">
            <h6 className="text-xl mb-2 md:text-xl 2xl:text-2xl font-semibold">
              Your Health, Our Priority
            </h6>
            <h1 className="leading-tight font-bold mb-6 text-[#0a192a] text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">
              {/* We<span className="text-red-400">Care</span> */}
              WeCare
              <br className="hidden md:block" />
              Walk-In Clinic & Pharmacy
            </h1>
            <button className="bg-[#004a7f] text-white px-6 py-3 rounded-md hover:bg-[#00375e] text-md 2xl:text-xl">
              Book Appointment
            </button>
          </div>
          {/* Right side: empty for BG image */}
          <div className="w-full md:w-1/2" />
        </div>

        {/* Services Section */}
        <div
          style={{
            background:
              "linear-gradient(to bottom, transparent 50%, #004a7f 50%)",
            minHeight: "43%",
          }}
        >
          <div className="relative z-20 w-full py-8 px-4 md:px-10 lg:px-20 xl:px-20 2xl:px-[45px] max-w-full sm:max-w-7xl 2xl:max-w-[1600px] mx-auto">
            <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-8 2xl:gap-12">
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center p-6 xl:p-8 shadow-md rounded-md bg-white">
                <img
                  src="/family-medicine-3.png"
                  alt="Primary Care Icon"
                  className="w-17 h-17 mb-4"
                />
                <h3 className="font-semibold text-xl 2xl:text-2xl mb-2">
                  Family Medicine
                </h3>
                <p className="text-sm xl:text-lg text-gray-600">
                  Comprehensive healthcare for patients of all ages.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center text-center p-6 xl:p-8 shadow-md rounded-md bg-white">
                <img
                  src="/walk-in-logo-3.png"
                  alt="Walk-In Clinic Icon"
                  className="w-17 h-17 mb-3"
                />
                <h3 className="font-semibold text-xl 2xl:text-2xl mb-2">
                  Walk-In Clinic
                </h3>
                <p className="text-sm xl:text-lg text-gray-600">
                  Immediate care for non-emergency medical needs.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center text-center p-6 xl:p-8 shadow-md rounded-md bg-white">
                <img
                  src="/lab-logo.png"
                  alt="On-Site Lab Icon"
                  className="w-11 h-17 mb-3"
                />
                <h3 className="font-semibold text-xl 2xl:text-2xl mb-2">
                  On-Site Lab
                </h3>
                <p className="text-sm xl:text-lg text-gray-600">
                  Convenient diagnostic services available on-site.
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center text-center p-6 xl:p-8 shadow-md rounded-md bg-white">
                <img
                  src="/pharmacy-logo.png"
                  alt="Pharmacy Icon"
                  className="w-17 h-17 mb-3"
                />
                <h3 className="font-semibold text-xl 2xl:text-2xl mb-2">
                  Pharmacy
                </h3>
                <p className="text-sm xl:text-lg text-gray-600">
                  Full-service pharmacy for your prescriptions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
