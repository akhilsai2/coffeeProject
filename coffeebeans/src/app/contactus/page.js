"use client";

import "../product/product.css"
import FooterSection from "../footer/fooeter";
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
export default function ContactUsPage() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ah9d70j', 'template_93dc609', form.current, {
        publicKey: 'o5Wel34j5KvTSGHfP',
      })
      .then(
        () => {
          setSuccessMessage(true);
          form.current.reset();
          setTimeout(() => {
            setSuccessMessage(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

  };
  const headingText = "CONTACT-US";
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="about-page bg-white ">
      {/* Top Parallax (short height, no background on heading) */}
      <section
        className="relative h-96 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("/assets/contact.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
        <h1
          className="text-white  uppercase text-3xl md:text-[60px] font-bold"
        >
          {headingText.split("").map((char, index) => (
            <span
              key={index}
              className="letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
          {/* <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Committed to sustainable farming practices, providing organic food for a healthier tomorrow
          </p> */}
        </div>
      </section>
      {/* Contact Section */}
      <div className="flex flex-col md:flex-row justify-center gap-5 text-black items-center md:items-center  py-5 md:py-12 px-0 md:px-12">
        {/* Left Column - Corporate Offices */}
        <div className="flex-1 space-y-5 mb-12 md:mb-0 w-100 md:w-1/4">
          {/* Visakhapatnam Office */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-gray-900 mb-4 underline underline-offset-5 decoration-4 decoration-[#8f755f]">
              CORPORATE OFFICE
            </h3>
            {/* <p className="font-medium text-lg text-amber-800 mb-2"> Germany</p> */}

            <p className="text-1xl md:text-2xl font-medium mb-1">AGROVERSE INNOVATIONS</p>
            <p className="text-lg mb-1">Ewaldstrasse 90c,</p>
            <p className="text-lg mb-1">Berlin, Germany</p>
            <p className="text-lg">12524</p>
          </div>


          {/* Customer Support */}
          <div className="">
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-1">
              CUSTOMER SUPPORT
            </h3>
            <p className="text-xl font-medium text-amber-700">+4917645267316</p>
            <a >info@agroverseinnovations.com </a>
          </div>
          <div className="mt-4 rounded-xl overflow-hidden shadow-lg m-2">
            <iframe
              title="Berlin Office Map"
              src="https://www.google.com/maps?q=Ewaldstrasse+90c,+Berlin,+Germany,+12524&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1  p-6 text-gray-800 w-100 rounded-lg ml-4">
          <div className="border border-black-600 rounded-lg p-6 max-w-md mx-auto bg-white shaadow-lg">
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xl mb-1 text-black-700">Name</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-transparent border-b border-black-500 focus:outline-none pb-1 text-gray-800"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xl mb-1 text-black-700">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-black-500 focus:outline-none pb-1 text-gray-800"
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="subject" className="block text-xl mb-1 text-balck-700">Phone Number</label>
                <input
                  required
                  name="phone_number"
                  type="number"
                  id="subject"
                  className="w-full bg-transparent border-b border-black-500 focus:outline-none pb-1 text-gray-800"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xl mb-1 text-balck-700">Message (optional)</label>
                <textarea
                  id="message"
                  rows={3}
                  name="message"
                  className="w-full bg-transparent border-b border-black-500 focus:outline-none pb-1 text-gray-800"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  style={{ cursor: "pointer" }}
                  className="bg-[#8F755F] text-white rounded-lg uppercase font-medium text-xl py-2 px-8 hover:bg-green-700 transition-colors"
                >
                  SUBMIT
                </button>
              </div>
              {successMessage && (
                <p style={{ color: 'green', marginTop: '10px' }}>
                  ✅ Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>

      </div>

      {/* Bottom Parallax */}
      <div className="parallax parallax-bottom"></div>
      <FooterSection />
    </div>

  );
}


