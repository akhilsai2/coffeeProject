"use client";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
const products = [
  {
    id: 1,
    images: ["/assets/ArakuPearl.png"], // Single image
    heading: "Araku Pearl",
    link: "/productsDetails",
  },
  {
    id: 2,
    images: ["/assets/ArakuHeal.png"], // Single image
    heading: "Araku Refining",
    link: "/productsDetails",
  },
  // {
  //   id: 3,
  //   images: ["/assets/product1.jpeg"], // Single image
  //   heading: "Pocket Brew - Araku Pearl",
  //   link: "/productsDetails",
  // },
];

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center rounded">
      {/* Single Rounded Image */}
      <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
        <img
          src={product.images[0]} // Display the first image
          alt={product.heading}
          className="w-48 h-48 object-cover rounded shadow-lg"
        />
      </div>

      {/* Product Name and Link */}
      <h2 className="mt-4 text-lg font-bold text-gray-800 text-center">
        {product.heading}
      </h2>
      {/* <a
        href={product.link}
        className="mt-2 flex items-center text-orange-500 hover:text-green-700 transition font-medium"
      >
        Know More <HiArrowRight className="ml-2" size={20} />
      </a> */}
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
        At AgroVerse Innovations, we are more than just a business - We are a
        movement dedicated to promoting organic living and sustainability. From
        premium organic coffee to a wide range of eco-friendly and organic
        products, we bring you the best nature has to offer. Every product we
        offer is a testament to our commitment to quality, sustainability, and
        the well-being of our planet. Join us in creating a healthier, greener
        future.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-5">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
