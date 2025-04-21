import React from "react";
import { BsInstagram } from "react-icons/bs";
import {
  AiOutlineYoutube,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { GiCrowDive } from "react-icons/gi";

const data = [
  { id: 1, name: "Home", lint: "" },
  { id: 2, name: "Products", link: "productsDetails" },
  { id: 3, name: "About", link: "about" },
  { id: 4, name: "Contact", link: "contactus" },
];

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
                <div className="text-amber-900 w-6 h-6 text-center flex items-center justify-center rounded-full bg-amber-100">
                  <p className="font-extrabold">AI</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-amber-100">
                AGROVERSE INNOVATIONS
              </span>
            </div>
            <p className="text-[18px] text-amber-200 max-w-xs text-center md:text-left ltalic">
              Join us in our mission to promote sustainable living and make a
              positive impact on the planet.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {data.map((item) => (
              <a
                key={item?.id}
                href={`${item?.link}`}
                className="text-amber-200 hover:text-white text-[20px] transition-colors duration-300 font-medium relative group"
              >
                {item?.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/agroverse.innovations/?igsh=OHJhNTNncGxkdmt3&utm_source=qr#"
                target="_blank"
                className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
              >
                <BsInstagram size={18} className="text-amber-100" />
              </a>
              <a
                // href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGmtmFggQ_PDwAAAZZPQjwYlOZqS0bRzYgPTtlZNsCjSFhXqnVo0r4T3wPZX7U9cjccLIiFPcrXH78hghi0jftStTvqn70m5iTbMO25iUvADAsYbHmpySV0pwBfS-UEcU5MfuA=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fagroverse-innovations%2F%3FviewAsMember%3Dtrue"
                // target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
              >
                <AiOutlineYoutube size={18} className="text-amber-100" />
              </a>
              <a
                href="https://wa.me/4917645267316?text=Get%20more%20I%20Information"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
              >
                <AiOutlineWhatsApp size={18} className="text-amber-100" />
              </a>
              <a
                href="https://www.linkedin.com/company/agroverse-innovations/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
              >
                <AiFillLinkedin size={18} className="text-amber-100" />
              </a>
            </div>
            <p className="text-[15px] text-amber-300">
              Follow us for products & updates
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-amber-800"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-amber-400">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Agroverse Innovations. All rights
            reserved.
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
