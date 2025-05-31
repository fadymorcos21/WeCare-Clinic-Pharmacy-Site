"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsAndStats from "@/components/home/TestimonialsAndStats";

export default function RefillPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    rx_number: "",
    note: "",
  });
  // 'result' holds an object like { message, success }.
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const res = await fetch("/api/refill", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // Check response status to determine success or failure.
      if (res.status === 201) {
        setResult({ message: data.message, success: true });
      } else {
        setResult({
          message: data.message || "Submission failed. Please try again.",
          success: false,
        });
      }
    } catch (error) {
      console.error("Error submitting refill request:", error);
      setResult({
        message: "There was an error submitting your refill. Please try again.",
        success: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Success Overlay */}
      {result && result.success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="max-w-md w-full bg-green-50 p-8 rounded-lg shadow-md text-center">
            {/* Check Icon */}
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
            {/* Success Heading */}
            <h1 className="mt-4 text-3xl font-bold text-green-700">
              Refill Submission Successful
            </h1>
            {/* Display Submitted Information */}
            <div className="mt-4 text-left text-gray-700">
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {formData.first_name} {formData.last_name}
              </p>
              <p>
                <span className="font-semibold">DOB:</span>{" "}
                {formData.date_of_birth}
              </p>
              <p>
                <span className="font-semibold">RX Number:</span>{" "}
                {formData.rx_number}
              </p>
              {formData.note && (
                <p>
                  <span className="font-semibold">Note:</span> {formData.note}
                </p>
              )}
            </div>
            <p className="mt-4 text-gray-700">
              Thank you for your submission. We will process your refill and
              contact you when it's ready.
            </p>
            {/* Return Home Link */}
            <a
              href="/"
              className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Return Home
            </a>
          </div>
        </div>
      )}

      {/* Main Refill Form */}
      {!result?.success && (
        <div className="relative isolate bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Refill Prescription
            </h2>
          </div>
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-5 max-w-5xl md:mt-8 sm:mt-5"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                    required
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Last Name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last_name"
                    type="text"
                    autoComplete="family-name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                    required
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="date-of-birth"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Date of Birth (DOB)
                </label>
                <div className="mt-2.5">
                  <input
                    id="date-of-birth"
                    name="date_of_birth"
                    type="date"
                    autoComplete="bday"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                    required
                  />
                </div>
              </div>

              {/* RX Number */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="rx-number"
                  className="block text-sm font-semibold text-gray-900"
                >
                  RX Number
                </label>
                <div className="mt-2.5">
                  <input
                    id="rx-number"
                    name="rx_number"
                    type="text"
                    placeholder="Enter your RX number"
                    value={formData.rx_number}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                    required
                  />
                </div>
              </div>

              {/* Note */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="note"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Note
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="note"
                    name="note"
                    rows={4}
                    placeholder="Optionally leave a message for the pharmacist"
                    value={formData.note}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                disabled={isSubmitting}
                className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {isSubmitting ? "Submitting..." : "Submit Refill"}
              </button>

              {/* Display error message if submission failed */}
              {result && !result.success && (
                <p className="mt-4 text-center text-red-600">
                  {result.message} If the issue persists, please contact the
                  pharmacy.
                </p>
              )}
            </div>
          </form>
        </div>
      )}

      <TestimonialsAndStats />

      <Footer />
    </>
  );
}
