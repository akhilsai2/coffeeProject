"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import "./nav.css";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isWhiteBackground = pathname === "/about" || pathname === "/product";

  return (
    <nav
      className={`absolute md:fixed md:top-0 top-0  left-[78%] md:left-[37%]    z-50 transition-colors duration-300 my-2 rounded-3xl ${
        isWhiteBackground
          ? "md:bg-[#000000] "
          : isScrolled
          ? "md:bg-[#000000]"
          : "md:bg-[#000000ba]"
      }`}
    >
      <div
        className={`flex justify-between items-center px-10 py-2 text-white`}
      >
        {/* Logo */}
        <div></div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-15">
          <span
            className={`cursor-pointer text-lg font-medium tracking-wide ${
              pathname === "/"
                ? "bg-white rounded-xl px-10   text-black"
                : "text-white"
            }`}
            onClick={() => router.push("/")}
          >
            Home
          </span>
          <span
            className={`cursor-pointer text-lg font-medium tracking-wide ${
              pathname === "/about"
                ? "bg-white rounded-xl px-10   text-black"
                : "text-white"
            }`}
            onClick={() => router.push("/about")}
          >
            About
          </span>
          <span
            className={`cursor-pointer text-lg font-medium tracking-wide ${
              pathname === "/productDetails"
                ? "bg-white rounded-xl px-10   text-black"
                : "text-white"
            }`}
            onClick={() => router.push("/productsDetails")}
          >
            Product
          </span>
          <span
            className={`cursor-pointer text-lg font-medium tracking-wide ${
              pathname === "/contactus"
                ? "bg-white rounded-xl px-10   text-black"
                : "text-white"
            }`}
            onClick={() => router.push("/contactus")}
          >
            Contact Us
          </span>
        </div>

        {/* Get Started Button (Hidden on Mobile) */}
        <div></div>
        {/* <button className="hidden md:block bg-orange-500 text-white text-lg px-4 py-2 font-medium rounded-lg hover:bg-orange-600" onClick={() => router.push("/get-started")}>
          Get Started
        </button> */}

        {/* Hamburger Menu (Visible on Mobile) */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-1/2 h-full bg-white bg-opacity-90 text-black z-50 p-6">
          <button
            className="text-black text-2xl absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          <div className="flex flex-col gap-6 mt-12">
            <span
              className="cursor-pointer hover:text-orange-500 text-lg font-semibold"
              onClick={() => {
                router.push("/");
                setIsMenuOpen(false);
              }}
            >
              Home
            </span>
            <span
              className="cursor-pointer hover:text-orange-500 text-lg font-semibold"
              onClick={() => {
                router.push("/about");
                setIsMenuOpen(false);
              }}
            >
              About
            </span>
            <span
              className="cursor-pointer hover:text-orange-500 text-lg font-semibold"
              onClick={() => {
                router.push("/product");
                setIsMenuOpen(false);
              }}
            >
              Product
            </span>
            <span
              className="cursor-pointer hover:text-orange-500 text-lg font-semibold"
              onClick={() => {
                router.push("/contact");
                setIsMenuOpen(false);
              }}
            >
              Contact Us
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
