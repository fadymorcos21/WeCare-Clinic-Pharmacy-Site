"use client";
import React from "react";
import { Star, Users, CalendarCheck, MessageSquare } from "lucide-react";

export default function TestimonialsAndStats({
  bgClassName = "bg-gradient-to-r from-gray-50 to-blue-50",
}) {
  const testimonials = [
    {
      name: "Monica McIlroy",
      testimonial:
        "Dr. Samir Mansour is a great listener, has an incredible bedside manner and takes his patients seriously. I would really recommend him and there are never long waits to see him. His office is very accommodating.",
      image: "/Monica.png",
    },
    {
      name: "Nicholas Kusmich",
      testimonial:
        "Best walk in I've ever experienced. For context I was having some medical issues and went to another walk in clinic. That doc told me I'm fine and there was nothing for me to do but wait. I wanted a second opinion so went to WeCare. Within 5 min doc had a requisition to get blood work and an ultrasound to get to the bottom of things. That's the level of care you get here. Just go. They are top notch.",
      image: "/Nicholas.png",
    },
    {
      name: "Manasi Shukla",
      testimonial:
        "Very accommodative, experienced doctors.. Dr.Mansoor is great. Have has excellent experience with other walk in docs as well. Manal at reception is smart at managing and knowledgeable. The latest pharmacist that they have ( old lady with curly hair) is superb- takes good time to explain before delivering medications.",
      image: "/Manasi.png",
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
    <section className={`${bgClassName} pt-20 pb-2`}>
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

        {/* Stats Section (currently commented out) */}
        {/*
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[2px] rounded-xl overflow-hidden">
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
        */}
      </div>
    </section>
  );
}
