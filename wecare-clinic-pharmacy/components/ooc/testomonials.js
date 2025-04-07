"use client";
import React from "react";

const testimonials = [
  {
    name: "Leslie Alexander",
    testimonial:
      "“Laborum quis quam. Dolorum ut et quasi. Voluptas numquam delectus. Et, itaque repudiandae.”",
    image: "https://via.placeholder.com/40",
  },
  {
    name: "Michael Foster",
    testimonial:
      "“Consequatur aut ratione. Qui quis dolorem expedita eveniet. Cumque provident consequatur reprehenderit!”",
    image: "https://via.placeholder.com/40",
  },
  {
    name: "Brenna Goyette",
    testimonial:
      "“Integer id nunc mi. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.”",
    image: "https://via.placeholder.com/40",
    // For this testimonial, we have a brand name instead of username.
    brand: "SavvyCal",
  },
  {
    name: "Leonard Krasner",
    testimonial:
      "“Quas repellat tempore pariatur, doloremque consequatur officiis. Mollitia maiores eveniet accusamus nisi ipsam!”",
    image: "https://via.placeholder.com/40",
  },
  {
    name: "Floyd Miles",
    testimonial:
      "“Temporibus incidunt nobis sapiente? Qui totam aliquid illo nulla rerum. Molestias maiores eum maxime?”",
    image: "https://via.placeholder.com/40",
  },
  {
    name: "Dries Vincent",
    testimonial:
      "“Consectetur at, atque nam. Eos corporis sapiente eveniet accusantium adipisci, voluptatum doloremque quasi!”",
    image: "https://via.placeholder.com/40",
  },
  {
    name: "Courtney Henry",
    testimonial:
      "“At repellendus quae magni vero culpa, quia provident quibusdam aliquam natus dolore dignissimos.”",
    image: "https://via.placeholder.com/40",
  },
  {
    name: "Whitney Francis",
    testimonial:
      "“Ipsam voluptas culpa officia corrupti, consequatur voluptatibus excepturi, ea commodi possimus blanditiis sequi.”",
    image: "https://via.placeholder.com/40",
  },
  {
    name: "Emily Selman",
    testimonial:
      "“Molestiae nobis perferendis fugit repellendus omnis culpa reprehenderit possimus, nam doloremque ipsam!”",
    image: "https://via.placeholder.com/40",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#05294a] mb-12 text-center">
          Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-6 flex flex-col justify-between">
                <p className="text-gray-700 mb-6">{item.testimonial}</p>
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                  <div>
                    <div className="font-semibold text-[#004a7f]">
                      {item.name}
                    </div>
                    {item.brand ? (
                      <div className="text-sm text-gray-600">{item.brand}</div>
                    ) : (
                      <div className="flex mt-1">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-yellow-500 mr-1">★</span>
                        <span className="text-yellow-500">★</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
