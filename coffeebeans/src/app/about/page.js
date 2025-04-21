"use client";
// AboutUs.jsx
import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import FooterSection from "../footer/fooeter";
import { BsInstagram } from "react-icons/bs";
import {
  AiOutlineYoutube,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
const AboutPage = () => {
  return (
    <div className="bg-stone-50 text-gray-800 font-sans">
      {/* Header */}

      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1551882230-8baed57a4f2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNvZmZlZSUyMHBsYW50fGVufDB8fDB8fHww")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          {/* <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Committed to sustainable farming practices, providing organic food for a healthier tomorrow
          </p> */}
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 inline-block relative">
              Our Journey
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-1/2 h-1 bg-green-300"></span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                From Seeds to Success
              </h3>
              <p className="mb-4">
                AgroVerse Innovations is where tradition meets transformation. We empower Indian farmers by bridging them directly with global markets ering premium, traceable,
                and ethically sourced organic commodities.<br /> From the lush hills of Araku Valley to roasters and retailers around the world, we deliver more than
                just products—we deliver purpose. Rooted in sustainability and driven by innovation, we are building a future where agriculture thrives, communities grow, and conscious commerce leads the way.
              </p>


            </div>
            <div
              className="md:w-1/2 h-96 rounded-lg overflow-hidden"
              style={{
                // backgroundImage: 'url("https://media.istockphoto.com/id/1440234731/photo/red-coffee-berries-on-twig.webp?a=1&b=1&s=612x612&w=0&k=20&c=j0HTP_LnJ3cOxMlb5oTDoFRltwUFHwcWznCTUz2-mo0=")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {" "}
              <img src="https://media.istockphoto.com/id/1440234731/photo/red-coffee-berries-on-twig.webp?a=1&b=1&s=612x612&w=0&k=20&c=j0HTP_LnJ3cOxMlb5oTDoFRltwUFHwcWznCTUz2-mo0=" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 inline-block relative">
              Our Values
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-1/2 h-1 bg-green-300"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl text-green-800 mb-4 text-center">🌱</div>
              <h3 className="text-xl font-semibold text-green-800 mb-3 text-center">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We believe in farming practices that nurture the soil and
                protect biodiversity. Our regenerative approach ensures we're
                leaving the land better than we found it for future generations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl text-green-800 mb-4 text-center">
                <GiCoffeeBeans
                  size={40}
                  style={{ marginLeft: "45%" }}
                  className="text-4xl text-green-800 mb-4 text-cente"
                />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-3 text-center">
                Quality
              </h3>
              <p className="text-gray-600">
                From seed selection to harvest, we maintain rigorous standards
                to ensure every product that bears our name is nutritious,
                flavorful, and grown with care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl text-green-800 mb-4 text-center">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold text-green-800 mb-3 text-center">
                Community
              </h3>
              <p className="text-gray-600">
                We're building more than just a business – we're cultivating a
                community of farmers, customers, and partners united by a vision
                of a healthier food system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 inline-block relative">
              Meet Our Team
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-1/2 h-1 bg-green-300"></span>
            </h2>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 flex flex-row flex-wrap items-center justify-center text-center"
            style={{ display: "flex" }}
          >
            <div className="bg-white text-center rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div
                className="h-64 bg-gray-200"
                style={{
                  backgroundImage: 'url("/assets/ceo.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-1">Yanala Prudhvi Raj</h3>
                <p className="text-gray-600 mb-4">Founder & CEO</p>
                <div className="flex justify-center space-x-3">
                  <a href="https://www.linkedin.com/company/agroverse-innovations/?viewAsMember=true"
                    target="_blank" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors"> <AiFillLinkedin size={18} className="text-amber-100" /></a>
                  {/* <a href="https://www.instagram.com/agroverse.innovations/?igsh=OHJhNTNncGxkdmt3&utm_source=qr#"
                    target="_blank" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors"><BsInstagram size={18} className="text-amber-100" /></a>
                  <a href="https://wa.me/4917645267316?text=Get%20more%20I%20Information"
                    target="_blank" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors"><AiOutlineWhatsApp size={18} className="text-amber-100" /></a> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 inline-block relative">
            India’s Pride, World’s Delight - Endorsed by Icons
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-1/2 h-1 bg-green-300"></span>
            </h2>
          </div>
          <div className="mx-auto flex flex-col md:flex-row justify-center gap-3">
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-xs">
              {/* Card Header with Image and Title */}
              <div className="flex items-center space-x-4 mb-4">
                {/* Profile Image */}
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkmcREKjBp7BfHcwfxqFBPc62a0Uy46Hp6g&s"
                  alt="Person's Image"
                />
                {/* Name and Title */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Narendra Modi</h3>
                  <p className="text-sm text-gray-600">Prime Minister of India</p>
                </div>
              </div>

              {/* Article Content */}
              <div className="text-gray-700 text-base mb-4">
                <p>
                “If you are a coffee lover from any part of the world, I invite you to taste Araku coffee from Andhra Pradesh. It will leave you speechless.”
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-xs">
              {/* Card Header with Image and Title */}
              <div className="flex items-center space-x-4 mb-4">
                {/* Profile Image */}
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSerJXa6eLLbl_esUYcoIeY9Uyytyu-Z2fQ&s"
                  alt="Person's Image"
                />
                {/* Name and Title */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Chandrababu Naidu</h3>
                  <p className="text-sm text-gray-600">Chief Minister, Andhra Pradesh, India</p>
                </div>
              </div>

              {/* Article Content */}
              <div className="text-gray-700 text-base mb-4">
                <p>
                “Great news for coffee enthusiasts in the Parliament! You can now enjoy a freshly brewed cup of Araku Coffee right on the premises”
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-xs">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  className="w-16 h-16 rounded-full object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW01eCK0HqYrrDI9l_CJuA0TZQkMOv9Kfvtg&s"
                  alt="Person's Image"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Anand Mahindra</h3>
                  <p className="text-sm text-gray-600">Chairman & Team member, Mahindra Group</p>
                </div>
              </div>
              <div className="text-gray-700 text-base mb-4">
                <p>
                " ⁠It just makes me very, very proud. Araku Coffee is the perfect example of ‘The best in the World, Grown in India’"…
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default AboutPage;
