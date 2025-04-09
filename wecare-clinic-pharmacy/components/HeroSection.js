// components/HeroSection.jsx
"use client";
import React from "react";
import Link from "next/link";

function HeroSection({
  bgImage = "/7815.jpg",
  height = "80vh",
  title,
  subtitle,
  buttonLabel,
  buttonHref,
  picHref,
  picSrc,
  picAlt,
  creditLink, // Prop for attribution
  overlayOpacity = 0.18, // New prop for custom opacity with default value
}) {
  // Create overlay style using the provided overlayOpacity
  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
  };

  return (
    <div
      className="relative bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
        height,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" style={overlayStyle} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center justify-center h-full w-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-2xl">
          {title}
        </h1>

        {subtitle && (
          <p className="max-w-2xl text-lg md:text-xl mb-6 text-white drop-shadow-md">
            {subtitle}
          </p>
        )}

        {buttonLabel && buttonHref && (
          <Link href={buttonHref}>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white font-semibold transition-colors drop-shadow-md">
              {buttonLabel}
            </button>
          </Link>
        )}

        {picHref && picSrc && (
          <Link href={picHref} className="mt-4 inline-block">
            <img
              src={picSrc}
              alt={picAlt || "Hero Mini Image"}
              className="h-10 w-auto drop-shadow-md"
            />
          </Link>
        )}
      </div>

      {/* Attribution / Credit */}
      {creditLink && (
        <div className="absolute bottom-2 right-4 z-20 text-xs text-white opacity-80 hover:opacity-100 transition">
          {creditLink}
        </div>
      )}
    </div>
  );
}

export default HeroSection;
