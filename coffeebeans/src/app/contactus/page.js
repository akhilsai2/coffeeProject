import React from "react";
import "../product/product.css"
import FooterSection from "../footer/fooeter";
export default function ContactUsPage() {
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
      <div className="flex-1 space-y-16 mb-12 md:mb-0">
        {/* Visakhapatnam Office */}
        <div>
          <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4">
            CORPORATE OFFICE
          </h3>
          <p className="font-medium text-amber-800 mb-2"> Germany</p>
          
          <p className="text-sm font-medium mb-1">Native araku coffee Pvt Ltd</p>
          <p className="text-sm mb-1">Ewaldstrasse 90c,</p>
          <p className="text-sm mb-1">Berlin, Germany</p>
          <p className="text-sm">12524</p>
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
        <div className="mt-8">
          <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 mb-4">
            CUSTOMER SUPPORT
          </h3>
          <p className="text-xl font-medium text-amber-700">+4917645267316</p>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="flex-1 bg-black p-6 text-white">
        <div className="border border-white p-6 max-w-md mx-auto">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm mb-1">Your name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-transparent border-b border-white focus:outline-none pb-1"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm mb-1">Your email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-transparent border-b border-white focus:outline-none pb-1"
              />
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm mb-1">Phone Number</label>
              <input
                type="number"
                id="subject"
                className="w-full bg-transparent border-b border-white focus:outline-none pb-1"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm mb-1">Your message (optional)</label>
              <textarea
                id="message"
                rows={3}
                className="w-full bg-transparent border-b border-white focus:outline-none pb-1"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                // type="submit"
                className="bg-white text-black uppercase font-medium text-sm py-2 px-8 hover:bg-gray-200 transition-colors"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

      {/* Bottom Parallax */}
      <div className="parallax parallax-bottom"></div>
      <FooterSection/>
    </div>

  );
}


