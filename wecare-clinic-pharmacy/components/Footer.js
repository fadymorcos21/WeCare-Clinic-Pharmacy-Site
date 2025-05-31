"use client";
import React from "react";
import { Star, Users, CalendarCheck, MessageSquare } from "lucide-react";

export default function Footer({
  statsBgClassName = "bg-gradient-to-r from-gray-50 to-blue-50",
}) {
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
      number: "5",
      label: "Google Star Rating",
    },
    {
      icon: MessageSquare,
      number: "200+",
      label: "Positive Reviews",
    },
  ];

  return (
    <>
      {/* STATS SECTION */}
      <div className={`py-10 w-full h-67 sm:h-43 z-50 ${statsBgClassName}`}>
        <div className="sm:max-w-7xl mx-auto z-50 px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 rounded-xl overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-[#004a7f] z-50 text-white py-8 px-4 flex flex-col items-center justify-center shadow-lg hover:bg-[#00375e] transition duration-300"
              >
                <stat.icon className="w-8 h-8 sm:w-12 sm:h-12 mb-4" />
                <div className="text-xl sm:text-3xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-center opacity-90 text-sm sm:font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="relative flex flex-col ">
        {/* MAIN FOOTER WITH NEGATIVE MARGIN OVERLAP */}
        <div className="relative left-0 right-0 bottom-0 bg-[#05294a] text-white -mt-8 pt-60 sm:pt-35 ">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column: Location Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="font-bold">WeCare Walk-in Clinic & Pharmacy</li>
                <li>169 Dundas St E</li>
                <li>Mississauga, ON L5A 1W8</li>
                <li>Dundas Centre</li>
              </ul>
            </div>

            {/* Column: Clinic & Pharmacy */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="font-bold text-white">Clinic</li>
                <li>Phone: (905) 275-1935</li>
                <li>Fax: (905) 275-3742</li>
                <li>Email: wecaremedical17@gmail.com</li>

                <li className="mt-4 font-bold text-white">Pharmacy</li>
                <li>Phone: (905) 275-7555</li>
                <li>Fax: (905) 275-0038</li>
                <li>Email: wecarepharmacy169@gmail.com</li>
              </ul>
            </div>
            {/* Column: Hours of Operation */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Hours of Operation</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Monday - Thursday: 10:00 AM – 7:00 PM</li>
                <li>Friday: 10:00 AM – 5:00 PM</li>
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
    </>
  );
}
