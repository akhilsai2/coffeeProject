"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after the component mounts
    setTimeout(() => setAnimate(true), 500);
  }, []);

  return (
    <div className="relative text-center">
      <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/assets/homevideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Header, Description, and Button */}
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-4 transition-all duration-500 ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <h1 className="text-4xl md:text-[55px] font-extrabold mb-4 tracking-wide">
          AGROVERSE INNOVATIONS
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Grow with Purpose, Connect with Integrity, Transform with Power.
        </p>
        <button
          className="bg-orange-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition-all"
          onClick={() => (window.location.href = "/shop")}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}