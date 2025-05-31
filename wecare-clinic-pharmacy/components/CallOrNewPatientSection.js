"use client";

import { useState } from "react";

export default function CallOrNewPatientSection() {
  // 1) Keep the “live” form data in state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // 2) Keep a snapshot of what was submitted, so the overlay can still show it after we clear the form
  const [submittedData, setSubmittedData] = useState(null);

  // 3) Track submission state and backend response
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  // result = { success: boolean, message: string }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Fire off a POST to our Next.js API proxy
      const res = await fetch("/api/new-patient", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      // Build a local result object
      setResult({
        success: res.ok,
        message:
          data.message ||
          (res.ok ? "Request sent successfully!" : "Error sending request."),
      });

      if (res.ok) {
        // Snapshot the data for the overlay, then clear the live form
        setSubmittedData({ ...formData });
        setFormData({ name: "", email: "", phone: "" });
      }
    } catch (err) {
      console.error("Error submitting new‐patient request:", err);
      setResult({
        success: false,
        message: "Failed to send request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#004a7f] text-white py-12">
      {/* ----------------------------------------- */}
      {/* Full‑screen success overlay (only when result.success) */}
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
              Request Sent Successfully
            </h1>
            <div className="mt-4 text-left text-gray-700">
              <p>
                <span className="font-semibold">Name:</span>{" "}
                {submittedData.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                {submittedData.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {submittedData.phone}
              </p>
            </div>
            <p className="mt-4 text-gray-700">
              Thank you for requesting to join our family practice. We will
              contact you within 48 hours.
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
      {/* ----------------------------------------- */}

      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-stretch gap-8 px-6">
        {/* Right side on mobile (order-1), third on desktop (order-3) */}
        <div className="order-1 sm:order-3 flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold">Become a New Family Patient</h2>
          <p>
            Looking to join our family practice? Fill out the form below to
            request a consultation, and we’ll get back to you soon.
          </p>

          {/* Hide the form if success overlay is showing */}
          {!result?.success && (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                className="w-full rounded border border-gray-300 px-3 py-2 text-black"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                className="w-full rounded border border-gray-300 px-3 py-2 text-black"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                className="w-full rounded border border-gray-300 px-3 py-2 text-black"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold w-full"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </button>
              {result && !result.success && (
                <p className="mt-2 text-center text-red-300">
                  {result.message}
                </p>
              )}
            </form>
          )}

          <p className="text-lg">Or you can call us at +1 (905) 275-1935.</p>
        </div>

        {/* Separator (mobile: horizontal line, sm+: vertical line) */}
        <div className="relative flex items-center justify-center order-2 sm:order-2">
          <div className="w-full h-px sm:w-px sm:h-full bg-white/40" />
          <div
            className="
              absolute
              top-1/2
              left-1/2
              transform
              -translate-x-1/2
              -translate-y-1/2
              px-3
              py-1
              bg-[#004a7f]
              text-white
              font-bold
              text-sm
            "
          >
            OR
          </div>
        </div>

        {/* Left side on mobile (order-3), first on desktop (order-1) */}
        <div className="order-3 sm:order-1 flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold">Need Care Right Away?</h2>
          <p>
            Call us now to schedule your appointment! Our team is ready to
            assist you promptly.
          </p>
          <div className="text-lg font-semibold">Phone: (905) 275-1935</div>
          <p>
            <span className="text-lg font-semibold">Address:</span>
            <br />
            169 Dundas St E, Mississauga, ON L5A 1W4
          </p>
        </div>
      </div>
    </div>
  );
}
