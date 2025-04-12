"use client";

import React, { useEffect, useState, useRef } from "react";

export default function Home() {
  const [animateLeftCard, setAnimateLeftCard] = useState(false);
  const [animateRightCard, setAnimateRightCard] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {

    setTimeout(() => setAnimate(true), 500);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateLeftCard(true);
            setAnimateRightCard(true);
            setAnimateImage(true);
          } else {
            setAnimateLeftCard(false);
            setAnimateRightCard(false);
            setAnimateImage(false);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <div className="relative text-center">

         <div className="absolute top-4 left-4 z-10">
          <img
            src="/assets/logo86.png" // Replace with the path to your logo file
            alt="CoffeeLogo"
            className="h-25 w-40 cursor-pointer none"
            onClick={() => (window.location.href = "/")}
          />
        </div>

        <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
          <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
            <source src="/assets/homevideo4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000054] "></div>
        </div>

        <div
          className={`absolute top-[9%] md:top-[30%] left-1/2 w-[90%] md:w-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-0 md:p-4 transition-all duration-500 ${
            animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <h1 className="text-[20px] md:text-[55px] font-extrabold  mb-1 md:mb-4 tracking-wide">AGROVERSE INNOVATIONS</h1>
          <p className="text-[10px] md:text-xl mb-1 md:mb-6">Grow with Purpose, Connect with Integrity, Transform with Power.</p>
          <button className="bg-orange-500 text-white px-3 md:px-6 py-1 md:py-3 rounded-lg text-[8px] md:text-lg font-medium hover:bg-orange-600 transition-all" onClick={() => (window.location.href = "/shop")}>
            Shop Now
          </button>
        </div>
        {/* Other content */}
        <div className="relative w-full" ref={sectionRef}>
          <img
            src="/assets/bg.jpg"
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
          <div className="bg-white bg-opacity-80 backdrop-blur-sm flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-12 py-10 gap-10 md:gap-6">
            {/* Left Card */}
            <div
              className={`w-full md:w-1/3 transition-transform duration-700 ${
                animateLeftCard
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-gray-50 rounded-xl shadow-xl p-6 md:p-8 text-center md:text-left h-full">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">
                  Our Philosophy
                </h2>
                <p className="text-sm md:text-lg text-gray-600 mb-6 italic">
                  AgroVerse Innovations is where tradition meets transformation.
                  Rooted in sustainability and driven by purpose, we empower
                  farming communities and connect the world to organic
                  excellence. Every step we take is a step toward fairness,
                  transparency, and a future where nature and commerce thrive in
                  harmony.
                </p>
                <p className="text-lg text-black font-semibold">
                  Join us on this journey to create a better world, one cup of
                  coffee at a time.
                </p>
              </div>
            </div>

            {/* Image */}
            <div
              className={`w-full md:w-1/3 flex justify-center transition-transform duration-700 ${
                animateImage
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-0"
              }`}
            >
              <img
                src="/assets/coffeeplant.jpg"
                alt="Coffee Logo"
                className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-full shadow-lg"
              />
            </div>

            {/* Right Card */}
            <div
              className={`w-full md:w-1/3 transition-transform duration-700 ${
                animateRightCard
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="bg-gray-50 rounded-xl shadow-xl p-6 md:p-8 text-center md:text-left h-full">
                <p className="text-sm md:text-lg text-gray-600 mb-6 italic">
                  “At AgroVerse Innovations, this is more than business—it’s my
                  purpose. Born from the soil that raised me and the stories of
                  farmers who inspire me, we are redefining how the world
                  experiences organic agriculture. Every product we offer
                  carries the integrity of its origin, the dignity of the
                  farmer, and the commitment of a team that believes
                  sustainability and excellence must walk hand in hand. We don’t
                  just move commodities—we build bridges between tradition and
                  global innovation.”
                </p>
                <p className="text-lg text-black font-semibold">
                  — Yanala Prudhvi Raj
                  <br />
                  Founder & CEO, AgroVerse Innovations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}