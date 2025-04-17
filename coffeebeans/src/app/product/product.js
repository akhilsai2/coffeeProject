import React from "react";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    images: ["/assets/product1.jpeg", "/assets/product1-2.jpeg"], // Multiple images
    heading: "Forest Whisper - Araku Pearl",
    para1: "Organic Specialty Coffee",
    para2: "SCA Score: 84+",
    para3: "Region: Araku Valley",
    button: "Know More",
  },
  {
    id: 2,
    images: ["/assets/product1.jpeg", "/assets/product1-3.jpeg"], // Multiple images
    heading: "Pearl Reserve - Araku Pearl",
    para1: "Medium Roast",
    para2: "SCA Score: 83",
    para3: "Flavour Profile: Green Pepper, Cherry, Dark Chocolate",
    button: "Know More",
  },
  {
    id: 3,
    images: ["/assets/product1.jpeg", "/assets/product1-2.jpeg"], // Multiple images
    heading: "Pocket Brew - Araku Pearl",
    para1: "Medium Roast",
    para2: "SCA Score: 85",
    para3: "Flavour Profile: Floral, Dates, Citrus, Tropical Fruit",
    para4: "Altitude: 1200 meters and above",
    button: "Know More",
  },
];

const ProductCard = ({ product }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.5, // Trigger when 20% of the element is visible
  });

  // Slick carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform`}
    >
      {/* Carousel */}
      <Slider {...settings}>
        {product.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={product.heading}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Product Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{product.heading}</h2>
        <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-green-700 transition">
          {product.button}
        </button>
      </div>
    </div>
  );
};

const ProductPage = () => {
  return (
    <div className=" bg-white py-10 md:px-10">
      <h1 className="text-center text-4xl font-bold mb-8 text-green-800">
        Shop Us
      </h1>
      <p className="text-center text-gray-600 text-lg mb-8 px-4 md:px-20">
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
