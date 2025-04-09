"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setResult({ success: res.ok, message: data.message || "Message sent!" });
      if (res.ok) {
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResult({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-gray-50 to-blue-50">
        {/* Main Section */}
        <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-10">
            {/* Left Column: Heading & Descriptive Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-base text-gray-700 mb-4">
                Need to get in touch with us? Fill out the form to the right
                with your inquiry or send us an email at{" "}
                <a
                  href="mailto:wecare@gmail.com"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  wecare@gmail.com
                </a>
                . We typically reply within 24 hours.
              </p>
              <p className="text-base text-gray-700">
                <strong>WeCare Walk-in Clinic & Pharmacy</strong>
                <br />
                169 Dundas St E, Mississauga, ON L5A 1W4
                <br />
                Floor 1 – Dundas Centre
              </p>
              <p className="text-base text-gray-700 mt-2">
                <strong>Phone:</strong> (905) 275-1933
              </p>
              <p className="text-base text-gray-700 mt-2">
                <strong>Business Hours:</strong>
                <br />
                Mon – Thu: 10:00 AM – 7:00 PM
                <br />
                Fri: 10:00 AM – 5:00 PM
                <br />
                Sat: 10:00 AM – 3:00 PM
                <br />
                Sun: Closed
              </p>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white shadow-2xl p-6 rounded-lg md:mt-0">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    What can we help you with?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>

              {result && (
                <p
                  className={`mt-4 text-center ${
                    result.success ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {result.message}
                </p>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
