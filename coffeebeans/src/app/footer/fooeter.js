import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="w-full bg-amber-900 text-amber-100 py-12 relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/api/placeholder/400/400')`,
          backgroundSize: "400px",
          backgroundRepeat: "repeat",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-950 to-transparent opacity-70"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-900 w-6 h-6"
                >
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path>
                  <line x1="6" y1="2" x2="6" y2="4"></line>
                  <line x1="10" y1="2" x2="10" y2="4"></line>
                  <line x1="14" y1="2" x2="14" y2="4"></line>
                </svg>
              </div>
              <span className="text-2xl font-bold text-amber-100">
                BeanCraft
              </span>
            </div>
            <p className="text-sm text-amber-200 max-w-xs text-center md:text-left">
              Artisanal coffee roasters committed to quality beans and
              exceptional brewing experiences.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-amber-200 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              <a
                href="#instagram"
                className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
              >
                <BsInstagram size={18} className="text-amber-100" />
              </a>
              <a
                href="#youtube"
                className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
              >
                <AiOutlineYoutube size={18} className="text-amber-100" />
              </a>
              <a
                href="#facebook"
                className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
              >
                <FaFacebook size={18} className="text-amber-100" />
              </a>
            </div>
            <p className="text-xs text-amber-300">
              Follow us for brewing tips & updates
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-amber-800"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-amber-400">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} BeanCraft Coffee Roasters. All
            rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#privacy"
              className="hover:text-amber-200 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="hover:text-amber-200 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
