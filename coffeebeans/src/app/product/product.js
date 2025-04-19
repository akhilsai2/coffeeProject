import React from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowRight } from "react-icons/hi";

const products = [
  {
    id: 1,
    images: ["/assets/product1.jpeg", "/assets/product1-2.jpeg"], // Multiple images
    heading: "Forest Whisper - Araku Pearl",
    link: "/productDetails/forest-whisper",
  },
  {
    id: 2,
    images: ["/assets/product1.jpeg", "/assets/product1-3.jpeg"], // Multiple images
    heading: "Pearl Reserve - Araku Pearl",
    link: "/productDetails/pearl-reserve",
  },
  {
    id: 3,
    images: ["/assets/product1.jpeg", "/assets/product1-2.jpeg"], // Multiple images
    heading: "Pocket Brew - Araku Pearl",
    link: "/productDetails/pocket-brew",
  },
];

const ProductCard = ({ product }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } flex flex-col items-center rounded-full`}
    >
      {/* Carousel */}
      <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
        <Slider {...settings}>
          {product.images.map((image, index) => (
            <div key={index} className="rounded-full overflow-hidden">
              <img
                src={image}
                alt={product.heading}
                className="w-48 h-48 object-cover rounded-full shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Product Name and Link */}
      <h2 className="mt-4 text-lg font-bold text-gray-800 text-center">
        {product.heading}
      </h2>
      <a
        href={product.link}
        className="mt-2 flex items-center text-orange-500 hover:text-green-700 transition font-medium"
      >
        Know More <HiArrowRight className="ml-2" size={20} />
      </a>
    </div>
  );
};

const ProductPage = () => {
  return (
    <div className="bg-white py-10 md:px-10">
      <h1 className="text-center text-4xl font-bold mb-3 md:mb-8 text-green-800">
        Shop Us
      </h1>
      <p className="text-center text-gray-600 text-[14px] md:text-lg mb-8 px-4 md:px-20 italic">
        At AgroVerse Innovations, we are more than just coffee. We are a
        movement dedicated to promoting organic living and sustainability. From
        premium organic coffee to a wide range of eco-friendly and organic
        products, we bring you the best nature has to offer. Every product we
        offer is a testament to our commitment to quality, sustainability, and
        the well-being of our planet. Join us in creating a healthier, greener
        future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
