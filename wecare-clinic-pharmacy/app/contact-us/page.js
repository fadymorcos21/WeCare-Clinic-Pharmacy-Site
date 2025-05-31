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
  const [submittedData, setSubmittedData] = useState(null);

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
      // Send formData to Next.js API route
      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      // Build a result object for overlay
      setResult({
        success: res.ok,
        message:
          data.message || (res.ok ? "Message sent!" : "Error sending message."),
      });

      if (res.ok) {
        // Capture a snapshot of formData before clearing
        setSubmittedData({ ...formData });
        // Now clear the form fields
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

      {/* Success Overlay (only shows when result.success is true) */}
      {result?.success && submittedData && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/50 px-4">
          <div className="max-w-md w-full bg-green-50 p-8 rounded-lg shadow-md text-center">
            <svg
              className="mx-auto h-16 w-16 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
              />
            </svg>
            <h1 className="mt-4 text-3xl font-bold text-green-700">
              Message Sent Successfully
            </h1>
            <div className="mt-4 text-left text-gray-700">
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {submittedData.firstName} {submittedData.lastName}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {submittedData.email}
              </p>
            </div>
            <p className="mt-4 text-gray-700">
              Thank you for reaching out! We’ll get back to you within 24 hours.
            </p>
            <a
              href="/"
              className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Return Home
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50">
        <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-10">
            {/* Left Column: Contact Details */}
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-base text-gray-700">
                Need to get in touch? Fill out the form or call us at{" "}
                <a
                  href="tel:+19052751935"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  (905) 275‑1935
                </a>
                . We’re located at:
                <br />
                <strong>169 Dundas St E, Mississauga, ON L5A 1W8</strong>
              </p>

              {/* Clinic Info */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Clinic
                </h2>
                <p className="text-base text-gray-700 mt-2">
                  <strong>Phone:</strong> (905) 275‑1935
                  <br />
                  <strong>Fax:</strong> (905) 275‑3742
                  <br />
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:wecaremedical17@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    wecaremedical17@gmail.com
                  </a>
                </p>
              </div>

              {/* Pharmacy Info */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Pharmacy
                </h2>
                <p className="text-base text-gray-700 mt-2">
                  <strong>Phone:</strong> (905) 275‑7555
                  <br />
                  <strong>Fax:</strong> (905) 275‑0038
                  <br />
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:wecarepharmacy169@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    wecarepharmacy169@gmail.com
                  </a>
                </p>
              </div>

              {/* Business Hours */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Business Hours
                </h2>
                <p className="text-base text-gray-700">
                  <strong>Monday – Thursday:</strong> 10:00 AM – 7:00 PM
                  <br />
                  <strong>Friday:</strong> 10:00 AM – 5:00 PM
                  <br />
                  <strong>Saturday:</strong> 10:00 AM – 3:00 PM
                  <br />
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            {!result?.success && (
              <div className="bg-white shadow-2xl p-6 rounded-lg">
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
                      What can we help you with?*
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

                {/* Inline error message if submission failed */}
                {result && !result.success && (
                  <p className="mt-4 text-center text-red-600">
                    {result.message}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
