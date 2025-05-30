"use client";
import React, { useState } from "react";
import Link from "next/link"; // import Next.js Link for client-side navigation
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Walk-In Clinic", url: "/walk-in-clinic" },
  { label: "Minor Ailments", url: "/pharmacy/minor-ailments" },
  { label: "Laboratory", url: "/laboratory" },
  { label: "Pharmacy", url: "/pharmacy" },
  { label: "Location", url: "/location" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // This wrapping div is relatively positioned so the mobile dropdown
    // will be positioned relative to this container.
    <div className="relative z-[9998]">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative top-0 left-0 w-full flex items-center justify-between pl-18 pr-5 md:pl-24 md:pr-12 py-6 md:pb-6 md:pt-10 z-10 shadow-[0_10px_20px_-8px_rgba(0,0,0,0.15)]"
      >
        {/* Logo & Title */}
        <div className="flex items-center gap-2">
          <a href="/">
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
          </a>
          {/* Navigation Links (Desktop) */}
          <motion.ul
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden px-10 md:flex ml-12 gap-8 text-[#05294a]"
          >
            {navItems.map((item, i) => (
              <Link key={i} href={item.url}>
                <motion.li
                  className="cursor-pointer hover:opacity-80 font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                </motion.li>
              </Link>
            ))}
          </motion.ul>
        </div>

        {/* Desktop Contact Us Button & Mobile Hamburger */}
        <div className="flex items-center gap-8">
          <span className="text-[#004a7f] hidden lg:block font-normal">
            Call to book your appointment now!
          </span>
          <div className="hidden sm:block">
            <Link href={"/contact-us"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#004a7f] text-white px-4 py-2 rounded-md hover:bg-[#00375e]"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
          {/* Hamburger menu appears on small screens */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#004a7f] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Dropdown (positioned relative to the wrapping div) */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 z-[9999]">
          <ul className="flex flex-col gap-4 px-6">
            {navItems.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.url}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-[#05294a] font-semibold hover:text-[#004a7f]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li key={"Contact Us"}>
              <Link
                href={"/contact-us"}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-[#05294a] font-semibold hover:text-[#004a7f]"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
