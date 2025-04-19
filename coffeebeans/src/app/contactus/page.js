"use client";

import "../product/product.css"
import FooterSection from "../footer/fooeter";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
export default function ContactUsPage() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(false);
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
  return (
    <div className="about-page">
      {/* Top Parallax (short height, no background on heading) */}
      <div className="parallax parallax-top ">
        <h1 className="heading no-bg">CONTACT US</h1>
        
      </div>

      {/* Middle Parallax Section (Full Parallax Effect) */}
      {/* <div className="parallax parallax-mid"></div> */}

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row justify-between text-black items-start max-w-6xl mx-auto py-12 px-6">
        {/* Left Column - Corporate Offices */}
        <div className="flex-1 space-y-5 mb-12 md:mb-0">
          {/* Visakhapatnam Office */}
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-wider text-gray-900 mb-2 underline underline-offset-5 decoration-4 decoration-[#8f755f]">
              CORPORATE OFFICE
            </h3>
            {/* <p className="font-medium text-lg text-amber-800 mb-2"> Germany</p> */}

            <p className="text-1xl font-medium mb-1">AGROVERSE INNOVATIONS</p>
            <p className="text-lg mb-1">Ewaldstrasse 90c,</p>
            <p className="text-lg mb-1">Berlin, Germany</p>
            <p className="text-lg">12524</p>
          </div>

          {/* Hyderabad Office */}
          {/* <div className="mt-8">
          <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4">
            CORPORATE OFFICE
          </h3>
          <p className="font-medium text-amber-800 mb-2">Hyderabad</p>
          
          <p className="text-sm font-medium mb-1">Native araku coffee Pvt Ltd</p>
          <p className="text-sm mb-1">G-2, Varma Nilayam, Jaya nagar colony,</p>
          <p className="text-sm mb-1">Opp. Kalki colony, Kukkatpally,</p>
          <p className="text-sm">Hyderabad 50007.</p>
        </div> */}

          {/* Customer Support */}
          <div className="">
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-1">
              CUSTOMER SUPPORT
            </h3>
            <p className="text-xl font-medium text-amber-700">+4917645267316</p>
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
        <div className="flex-1 bg-black p-6 text-white rounded-lg ml-4">
          <div className="border border-white p-6 max-w-md mx-auto">
            <form className="space-y-6" ref={form} onSubmit={sendEmail}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-xl mb-1">Name</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-transparent border-b border-white focus:outline-none pb-1"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-xl mb-1">Email</label>
                <input
                  required
                  name="email"
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-white focus:outline-none pb-1"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-xl mb-1">Phone Number</label>
                <input
                  required
                  name="phone_number"
                  type="number"
                  id="subject"
                  className="w-full bg-transparent border-b border-white focus:outline-none pb-1"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-xl mb-1">Message (optional)</label>
                <textarea
                  id="message"
                  rows={3}
                  name="message"
                  className="w-full bg-transparent border-b border-white focus:outline-none pb-1"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  style={{ cursor: "pointer" }}
                  className="bg-white text-black uppercase font-medium text-xl py-2 px-8 hover:bg-gray-200 transition-colors"
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


