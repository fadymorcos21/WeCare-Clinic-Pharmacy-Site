"use client";
import React from "react";
import { Star, Users, CalendarCheck, MessageSquare } from "lucide-react";

export default function Footer() {
  // Stats data
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
      number: "4.5",
      label: "Google Star Rating",
    },
    {
      icon: MessageSquare,
      number: "200+",
      label: "Positive Reviews",
    },
  ];

  return (
    <footer className="relative flex flex-col mt-40">
      {/* STATS SECTION */}
      <div className="py-10 relative bottom-70 z-10">
        <div className="abs top-20 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4  rounded-xl overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#004a7f] text-white py-8 px-4 flex flex-col items-center justify-center shadow-lg hover:bg-[#00375e] transition duration-300"
              >
                <stat.icon className="w-12 h-12 mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-center opacity-90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN FOOTER WITH NEGATIVE MARGIN OVERLAP */}
      <div className="absolute left-0 right-0 bottom-0 bg-[#05294a] text-white -mt-8 pt-30 ">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column: Our Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Walk-In Clinic</li>
              <li>Family Practice</li>
              <li>Pharmacy</li>
              <li>On-Site Lab</li>
              <li>Preventive Care</li>
            </ul>
          </div>

          {/* Column: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="font-bold">WeCare Walk-in Clinic & Pharmacy</li>
              <li>169 Dundas St E</li>
              <li>Mississauga, ON L5A 1W4</li>
              <li>Phone: (905) 275-1935</li>
            </ul>
          </div>

          {/* Column: Hours of Operation */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Hours of Operation</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 10:00 AM – 7:00 PM</li>
              <li>Saturday: 10:00 AM – 3:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center mt-10 py-4 bg-[#00172a] rounded-tr-3xl md:rounded-tr-none md:rounded-t-none">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} WeCare Walk-in Clinic & Pharmacy. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
