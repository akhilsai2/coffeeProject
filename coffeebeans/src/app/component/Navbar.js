"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
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

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-black bg-opacity-50" : "bg-transparent"}`}>
      <div className="flex justify-between items-center px-6 py-4 text-white">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer" onClick={() => router.push("/")}>
          CoffeeLogo
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-15">
          <span className="cursor-pointer hover:text-orange-500 text-lg font-semibold" onClick={() => router.push("/")}>
            Home
          </span>
          <span className="cursor-pointer hover:text-orange-500 text-lg font-semibold" onClick={() => router.push("/about")}>
            About
          </span>
          <span className="cursor-pointer hover:text-orange-500 text-lg font-semibold" onClick={() => router.push("/product")}>
            Product
          </span>
          <span className="cursor-pointer hover:text-orange-500 text-lg font-semibold" onClick={() => router.push("/contact")}>
            Contact Us
          </span>
        </div>

        {/* Get Started Button (Hidden on Mobile) */}
        <div></div>
        {/* <button className="hidden md:block bg-orange-500 text-white text-lg px-4 py-2 font-medium rounded-lg hover:bg-orange-600" onClick={() => router.push("/get-started")}>
          Get Started
        </button> */}

        {/* Hamburger Menu (Visible on Mobile) */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white mb-1"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-3/4 h-full bg-black bg-opacity-90 text-white z-50 p-6">
          <button className="text-white text-2xl absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
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
