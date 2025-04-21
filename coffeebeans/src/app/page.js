"use client";

import React, { useEffect, useState, useRef } from "react";
import ProductPage from "./product/product";
// import Gelleryimgs from "./gallerySection/page";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import AlwaysOpenExample from "./faq/FAQ";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaSeedling,
  FaUniversity,
  FaRocket,
  FaGlobe,
  FaLeaf,
  FaRecycle,
  FaHandsHelping,
  FaComments,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import FooterSection from "./footer/fooeter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AnimatedTimelineElement({
  date,
  icon,
  title,
  content,
  isLeft,
  image,
}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 20% of the element is visible
  });

  return (
    <div
      ref={ref}
      className={`transition-transform duration-700 ${
        inView
          ? "translate-x-0 opacity-100"
          : isLeft
          ? "-translate-x-10 opacity-0"
          : "translate-x-10 opacity-0"
      }`}
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#f9f9f9",
          color: "#333",
          marginBottom: "20px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
          display: "flex",
          flexDirection: isLeft ? "row" : "row-reverse",
          justifyContent: "space-between", // Alternate image and content sides
          alignItems: "start",
          borderRadius: "10px",
          gap: "10px",
        }}
        contentArrowStyle={{
          borderRight: isLeft ? "7px solid #4caf50" : "7px solid #4caf50",
        }}
        date={date}
        dateClassName="text-lg font-bold text-green-800 "
        iconStyle={{ background: "#4caf50", color: "#fff" }}
        icon={icon}
        position={isLeft ? "left" : "right"} // Alternate position
      >
        {/* Image */}
        {image && (
          <div className="w-1/2 md:w-1/4 p-1">
            <img
              src={image}
              alt={title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}

        {/* Content */}
        <div className="w-1/2 md:w-2/4 p-0 text-left flex flex-col justify-center">
          <h3 className="vertical-timeline-element-title text-md md:text-2xl font-semibold text-green-800">
            {title}
          </h3>
          <p className="text-gray-700  text-[2px] md:text-2xl italic">
            {content}
          </p>
        </div>
      </VerticalTimelineElement>
    </div>
  );
}


export const ScrollArrow = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      setIsAtTop(scrollTop < 100);
      setIsAtBottom(scrollTop + windowHeight >= docHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToNext = () => window.scrollBy({ top: window.innerHeight, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isAtBottom && (
        <button
          onClick={scrollToNext}
          className="bg-amber-800 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg transition"
        >
          <FaArrowDown />
        </button>
      )}
      {isAtBottom && (
        <button
          onClick={scrollToTop}
          className="bg-amber-800 hover:bg-amber-700 text-white p-3 rounded-full shadow-lg transition"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};


export default function Home() {
  const [animateLeftCard, setAnimateLeftCard] = useState(false);
  const [animateRightCard, setAnimateRightCard] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const galleryImages = [
    "/assets/gallery1.jpeg",
    "/assets/gallery2.jpeg",
    "/assets/gallery3.jpeg",
    "/assets/gallery4.jpeg",
    "/assets/gallery5.jpg",
    "/assets/gallery6.jpg",
    "/assets/IMG_4490.jpg",
    "/assets/IMG_4560.jpg",
    "/assets/IMG_4559_6078.jpg",
    "/assets/IMG_4551.jpg",
    "/assets/IMG_4563.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

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
          {/* <img
            src="/assets/logo86.png" // Replace with the path to your logo file
            alt="CoffeeLogo"
            className="h-25 w-40 cursor-pointer none"
            onClick={() => (window.location.href = "/")}
          /> */}
        </div>

        <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
          {/* Poster Image */}
          <img
            src="/assets/homeimage1.png"
            alt="Poster"
            className="absolute top-0 left-0 w-full h-full object-cover"
            id="posterImage"
          />

          {/* Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            poster="/assets/homeimage1.png"
            onCanPlay={() => {
              const poster = document.getElementById("posterImage");
              if (poster) poster.style.display = "none";
            }}
          >
            <source src="/assets/homevideo4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000094]"></div>
        </div>
        <div
          className={`absolute top-[9%] md:top-[30%] left-1/2 w-[90%] md:w-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-0 md:p-4 transition-all duration-500 ${
            animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <h1 className="text-[20px] md:text-[55px] font-extrabold  mb-1 md:mb-4 tracking-wide">
            AGROVERSE INNOVATIONS
          </h1>
          <p className="text-[10px] md:text-xl mb-1 md:mb-6">
            Grow with Purpose - Connect with Integrity - Transform with Power.
          </p>
          <button
            className="bg-orange-500 text-white px-3 md:px-6 py-1 md:py-3 rounded-lg text-[8px] md:text-lg font-medium hover:bg-orange-600 transition-all"
            onClick={() => (window.location.href = "/shop")}
          >
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
              </div>
            </div>

            {/* Image */}
            <div
              className={`w-full md:w-1/3 flex justify-center transition-transform duration-700 ${
                animateImage ? "scale-100 opacity-100" : "scale-90 opacity-0"
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
              <div className="bg-gray-50 rounded-xl shadow-xl p-6 md:p-8 text-center md:text-left h-full flex flex-col items-center md:items-start">
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
                <div className="flex items-center  mt-4">
                  {/* Rounded Image */}
                  {/* <img
                    src="/assets/ceo.jpg" // Replace with the actual path to the CEO's image
                    alt="Yanala Prudhvi Raj"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg mr-4"
                  /> */}
                  {/* CEO Name and Title */}
                  <div>
                    <p className="text-lg text-black font-semibold">
                      — Yanala Prudhvi Raj
                    </p>
                    <p className="text-sm text-gray-600">
                      Founder & CEO, AgroVerse Innovations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative text-center">
          {/* Other sections */}
          <div>
            {/* A Journey of AgroVerse Innovations Section */}
            <div className="bg-green-50 py-10">
              <h2 className="text-2xl md:text-5xl font-bold text-center text-green-800 mb-8">
                A Journey of AgroVerse Innovations
              </h2>

              {/* Vertical Timeline */}
              <VerticalTimeline layout="horizontal" lineColor="#4caf50">
                {/* Timeline Item 1 */}
                <AnimatedTimelineElement
                  date="2020"
                  icon={<FaSeedling />}
                  title="AgroVerse Origins"
                  content="AgroVerse Innovations was born out of grit, vision, and an unshakable commitment to rewrite the rules of agriculture. Yanala Prudhvi Raj saw the truth behind India’s agricultural struggles while walking through his family farm in Andhra Pradesh."
                  isLeft={true}
                  image="/assets/journey1.jpg"
                />

                {/* Timeline Item 2 */}
                <AnimatedTimelineElement
                  date="2021"
                  icon={<FaUniversity />}
                  title="Education in Germany"
                  content="Prudhvi moved to Germany to pursue his Master’s in Industrial Engineering and International Management. From Europe’s innovation ecosystem, he prepared to disrupt outdated agricultural systems."
                  isLeft={false}
                  image="/assets/journey2.jpg" // Replace with your image path
                />

                {/* Timeline Item 3 */}
                <AnimatedTimelineElement
                  date="2024"
                  icon={<FaRocket />}
                  title="Official Launch"
                  content="AgroVerse Innovations officially launched  to empower farmers and connect ethical producers with conscious global buyers."
                  isLeft={true}
                  image="/assets/journey3.jpg"
                />

                {/* Timeline Item 4 */}
                <AnimatedTimelineElement
                  date="Today"
                  icon={<FaGlobe />}
                  title="AgroVerse Today"
                  content="AgroVerse Innovations stands as a force for change, where technology meets tradition and sustainability drives strategy."
                  isLeft={false}
                  image="/assets/journey4.jpg"
                />
              </VerticalTimeline>
            </div>
          </div>
        </div>

        <ProductPage />
        <div className="bg-green-50 py-10 mt-10">
          <h2 className="text-center text-4xl font-bold mb-8 text-green-800">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-20 ">
            {/* Feature 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
              <FaLeaf className="text-green-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Uncompromised Quality
              </h3>
              <p className="text-gray-600">
                Our coffee beans are handpicked from high-altitude organic farms
                in Araku Valley and scored 84+ by the Specialty Coffee
                Association (SCA). Every batch undergoes rigorous quality checks
                to ensure a rich, clean, and unforgettable experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
              <FaHandsHelping className="text-green-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Farmer-First, Always
              </h3>
              <p className="text-gray-600">
                We source directly from tribal farmers, ensuring fair prices
                without middlemen. By supporting us, you empower farming
                communities and contribute to a more equitable supply chain.
              </p>
            </div>

            {/* Feature 3 */}
            {/* <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
              <FaGlobe className="text-green-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Traceable & Transparent
              </h3>
              <p className="text-gray-600">
                From soil to sip, we offer full transparency. Our traceability
                system lets you know exactly where your coffee comes from and
                how it was grown.
              </p>
            </div> */}

            {/* Feature 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
              <FaSeedling className="text-green-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Sustainably Grown
              </h3>
              <p className="text-gray-600">
                Grown in biodiversity-rich regions using traditional organic
                methods, our products are free from chemicals and pesticides,
                making them healthier and planet-friendly.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
              <FaComments className="text-green-600 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Customer-Centric Experience
              </h3>
              <p className="text-gray-600">
                From sample requests to bulk orders, we ensure seamless
                communication and quick responses. We’re here to serve with
                integrity and care.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Other sections */}
      {/* <div className="relative w-full">
        <div className="bg-white flex flex-col justify-center items-center py-10">
          <h2 className="text-center text-4xl font-bold mb-8 text-green-800">
            Our Gallery
          </h2>
          <Slider {...sliderSettings} className="px-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="p-4">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div> */}
      <AlwaysOpenExample />
      {/* <Gelleryimgs/> */}
      <ScrollArrow/>
      <FooterSection />
    </>
  );
}
