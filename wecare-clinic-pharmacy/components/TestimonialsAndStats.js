"use client";
import React from "react";
import { Star, Users, CalendarCheck, MessageSquare } from "lucide-react";

export default function TestimonialsAndStats() {
  const testimonials = [
    {
      name: "Yulian Yurik",
      testimonial:
        "It's the best walk-in clinic that I saw before. There is a high level organization. The doctors and staff is very helpful, and all personnel are very nice people.",
      image: "/Yulian.png",
    },
    {
      name: "John K.",
      testimonial:
        "Quick walk-in clinic service, saw the doctor right away. Amazing experience overall. Everyone was caring and professional, and they resolved my issue promptly. Definitely the best clinic I've visited.",
      image: "/john.png",
    },
    {
      name: "Emily R.",
      testimonial:
        "Outstanding family practice! The doctors truly care and take time to listen. I've been visiting for years, and each visit reassures me of their commitment to patient care. Absolutely exceptional service every time.",
      image: "/emily.png",
    },
  ];

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
      number: "300+",
      label: "Positive Reviews",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#05294a] mb-14">
          Hear From Our Patients
        </h2>

        {/* Testimonials Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((review, i) => (
            <div
              key={i}
              className="bg-white shadow-xl p-6 rounded-lg border-t-4 border-[#004a7f] hover:shadow-2xl transition-shadow duration-300 flex gap-4"
            >
              <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
                <img
                  src={review.image}
                  alt={`Profile of ${review.name}`}
                  className="object-cover h-full w-full"
                />
              </div>
              <div>
                <p className="text-gray-600 italic mb-4">
                  "{review.testimonial}"
                </p>
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-[#004a7f]">
                    — {review.name}
                  </p>
                </div>
                <div className="flex gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-yellow-400 w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-[2px] rounded-xl overflow-hidden">
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
        </div> */}
      </div>
    </section>
  );
}
