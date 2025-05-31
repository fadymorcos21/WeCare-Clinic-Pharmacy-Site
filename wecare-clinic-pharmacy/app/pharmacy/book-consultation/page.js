// File: app/(your‑app‑layout)/consultation/booking/page.jsx
// (Adjust the path as needed based on your Next.js folder structure)

"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import TestimonialsAndStats from "@/components/home/TestimonialsAndStats";
import Footer from "@/components/Footer";

// Helper function to generate half‑hour increment time slots
function generateTimeSlots(startTime, endTime) {
  const slots = [];
  let current = startTime;
  while (current <= endTime) {
    const hours = Math.floor(current);
    const minutes = Math.round((current - hours) * 60);
    const date = new Date(1970, 0, 1, hours, minutes);
    const options = { hour: "numeric", minute: "numeric" };
    slots.push(date.toLocaleTimeString([], options));
    current += 0.5;
  }
  return slots;
}

export default function ConsultationBookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [bookedSlots, setBookedSlots] = useState([]);

  // Allow bookings from today until two weeks from now
  const today = new Date();
  const minDateString = today.toISOString().split("T")[0];
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 14);
  const maxDateString = maxDate.toISOString().split("T")[0];

  // Form data state
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    date_of_birth: "",
    reason: "Minor Ailment Assessment",
    appointment_date: "",
    time_slot: "",
    note: "",
  });

  const [availableSlots, setAvailableSlots] = useState([]);

  // Fetch booked slots for a given date from the API
  const fetchBookedSlots = async (date) => {
    try {
      const res = await fetch(
        `/api/booked-slots?date=${encodeURIComponent(date)}`
      );
      const data = await res.json();
      if (res.ok) {
        setBookedSlots(data.bookedSlots || []);
      } else {
        console.error("Error fetching booked slots:", data.error);
        setBookedSlots([]);
      }
    } catch (error) {
      console.error("Error fetching booked slots:", error);
      setBookedSlots([]);
    }
  };

  // Update available time slots whenever the appointment date changes
  useEffect(() => {
    if (!formData.appointment_date) {
      setAvailableSlots([]);
      return;
    }
    fetchBookedSlots(formData.appointment_date);
  }, [formData.appointment_date]);

  // Recalculate available slots when bookedSlots updates
  useEffect(() => {
    if (!formData.appointment_date) {
      setAvailableSlots([]);
      return;
    }

    const selectedDate = new Date(formData.appointment_date + "T00:00:00");
    const dayOfWeek = selectedDate.getDay();

    // No appointments on Sunday
    if (dayOfWeek === 0) {
      setAvailableSlots([]);
      return;
    }

    let defaultStart, defaultEnd;
    if (dayOfWeek === 0) {
      // Sunday — closed
      setAvailableSlots([]);
      return;
    } else if (dayOfWeek === 6) {
      // Saturday: 10 AM to 3 PM
      defaultStart = 10.0;
      defaultEnd = 15.0;
    } else if (dayOfWeek === 5) {
      // Friday: 10 AM to 5 PM
      defaultStart = 10.0;
      defaultEnd = 17.0;
    } else {
      // Monday–Thursday: 10 AM to 7 PM
      defaultStart = 10.0;
      defaultEnd = 19.0;
    }

    let slots;
    const todayStr = today.toISOString().split("T")[0];
    if (formData.appointment_date === todayStr) {
      const now = new Date();
      // 1‑hour buffer from current time
      const currentDecimal = now.getHours() + now.getMinutes() / 60 + 1;
      const newStart = Math.max(defaultStart, currentDecimal);
      slots =
        newStart > defaultEnd ? [] : generateTimeSlots(newStart, defaultEnd);
    } else {
      slots = generateTimeSlots(defaultStart, defaultEnd);
    }

    // Exclude slots that have already been booked
    const filteredSlots = slots.filter((slot) => !bookedSlots.includes(slot));
    setAvailableSlots(filteredSlots);

    // Reset time slot if the previously selected value is no longer available
    if (!filteredSlots.includes(formData.time_slot)) {
      setFormData((prev) => ({ ...prev, time_slot: "" }));
    }
  }, [bookedSlots]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.time_slot) {
      alert("Please select a time slot for your consultation.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/submit-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.status === 201) {
        setResult({ message: data.message, success: true });
      } else {
        setResult({
          message: data.message || "Submission failed. Please try again.",
          success: false,
        });
      }
    } catch (error) {
      console.error("Error booking consultation:", error);
      setResult({
        message:
          "There was an error booking your consultation. Please try again.",
        success: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // If the booking is successful, render a success view instead of the form
  if (result?.success) {
    return (
      <>
        <Navbar />
        <div className="relative isolate bg-white px-6 py-16 lg:px-8 min-h-[75vh] flex flex-col items-center justify-center">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Consultation Booked!
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Your appointment has been scheduled. We’ll see you soon.
            </p>
            <div className="mt-6 text-sm text-gray-600 space-y-2">
              <p>
                <strong>Name:</strong> {formData.first_name}{" "}
                {formData.last_name}
              </p>
              <p>
                <strong>Appointment Date:</strong> {formData.appointment_date}
              </p>
              <p>
                <strong>Time Slot:</strong> {formData.time_slot}
              </p>
            </div>
            <div className="mt-8">
              <a
                href="/"
                className="inline-block bg-blue-600 hover:bg-blue-800 text-white px-5 py-3 rounded-lg text-sm font-semibold shadow-md"
              >
                Return Home
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Otherwise, render the booking form
  return (
    <>
      <Navbar />

      <div className="relative isolate bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-16 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Book a Consultation
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

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  required
                />
              </div>
            </div>

            {/* Date of Birth */}
            <div className="sm:col-span-1">
              <label
                htmlFor="date_of_birth"
                className="block text-sm font-semibold text-gray-900"
              >
                Date of Birth (DOB)
              </label>
              <div className="mt-2.5">
                <input
                  id="date_of_birth"
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

            {/* Consultation Type */}
            <div className="sm:col-span-2">
              <label
                htmlFor="reason"
                className="block text-sm font-semibold text-gray-900"
              >
                Consultation Type
              </label>
              <div className="mt-2.5">
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                >
                  <option value="Minor Ailment Assessment">
                    Minor Ailment Assessment
                  </option>
                  <option value="Medication Review Consultation">
                    Medication Review Consultation
                  </option>
                </select>
              </div>
            </div>

            {/* Appointment Date */}
            <div className="sm:col-span-2">
              <label
                htmlFor="appointment_date"
                className="block text-sm font-semibold text-gray-900"
              >
                Appointment Date
              </label>
              <div className="mt-2.5">
                <input
                  id="appointment_date"
                  name="appointment_date"
                  type="date"
                  min={minDateString}
                  max={maxDateString}
                  value={formData.appointment_date}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  required
                />
              </div>
            </div>

            {/* Time Slot */}
            <div className="sm:col-span-2">
              <label
                htmlFor="time_slot"
                className="block text-sm font-semibold text-gray-900"
              >
                Time Slot
              </label>
              <div className="mt-2.5">
                {availableSlots.length > 0 ? (
                  <select
                    id="time_slot"
                    name="time_slot"
                    value={formData.time_slot}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
                    required
                  >
                    <option value="">-- Select a Time --</option>
                    {availableSlots.map((slot, idx) => (
                      <option key={idx} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                ) : formData.appointment_date ? (
                  <p className="text-gray-600 text-sm">No available slots.</p>
                ) : (
                  <p className="text-gray-500 text-sm">
                    Please select a date to view available times.
                  </p>
                )}
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

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              disabled={isSubmitting}
              className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {isSubmitting ? "Submitting..." : "Book Consultation"}
            </button>
          </div>

          {result && !result.success && (
            <p className="mt-4 text-center text-red-600">
              {result.message} If the issue persists, please try again.
            </p>
          )}
        </form>
      </div>

      <TestimonialsAndStats />
      <Footer />
    </>
  );
}
