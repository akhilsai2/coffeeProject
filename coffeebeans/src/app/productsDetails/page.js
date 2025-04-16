
"use client";
import React, { useState } from 'react';
import "../product/product.css"
import FooterSection from '../footer/fooeter';
const ProductDetailsPage = () => {

    return (
        <div className="overflow-auto h-screen bg-cover bg-fixed bg-center" >
            <div className="product-details-card overflow-auto top-0  left-0 w-full z-50 bg-white flex flex-col items-center shadow-md">
                <h1 className="text-3xl font-bold text-white mt-[10%]">Product Details</h1>
                <p className="text-xl text-white">Description of the product</p>
            </div>
            {/* First Row with Scroll */}
            <div className="flex flex-col md:flex-row items-center justify-between m-3 space-y-5 md:space-y-0 overflow-auto  p-4 rounded-xl  transition">
                {/* Image with Border Radius and Hover Animation */}
                <img
                    src="https://images.unsplash.com/photo-1654815439629-5e93cb7f74a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D"
                    alt="Coffee Plant"
                    className="w-300 h-40 object-cover md:h-70 transition-transform duration-500 hover:scale-105 rounded-tl-[20px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[5px] m-3"
                />
                {/* Text with Font Size and Centering */}
                <div className="relative group text-black flex flex-col items-center justify-center font-bold text-center md:text-left space-y-4 md:space-y-2 p-3 m-2 overflow-hidden">
                    <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>

                    <div className="absolute top-0 right-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute top-0 right-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>

                    <div className="relative inline-block group">
                        <span className="text-[#80411e] text-1xl md:text-2xl">Green Coffee Beans</span>
                        <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#8f755f] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                    </div>
                    <p className="text-10px md:text-1xl text-[#37251b] opacity-90 p-4">
                        Harvested from co ee terroirs shaded by pepper entwined silver oak trees and
                        nurtured by well aerated rocky soils. Terroir characterised by lots of rocks, and highest
                        percentage of silver oak trees. A blend of washed and natural coffees
                    </p>
                    <button className="bg-[#ad6d2f] text-white px-6 py-2 rounded-lg hover:bg-[#80411e] shadow-md transition duration-300">
                        Read More...
                    </button>
                </div>
            </div>

            {/* Second Row with Scroll */}
            <div className="flex flex-col md:flex-row items-center justify-between m-3 space-y-5 md:space-y-0 overflow-auto  p-4 rounded-xl  transition">
                {/* Image with Border Radius and Hover Animation */}


                {/* Text with Font Size and Centering */}
                <div className="relative group text-black flex flex-col items-center justify-center font-bold text-center md:text-left space-y-4 md:space-y-2 p-3 m-2 overflow-hidden">
                    <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>

                    <div className="absolute top-0 right-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute top-0 right-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>

                    <div className="relative inline-block group">
                        <span className="text-[#80411e] text-1xl md:text-2xl"> Roasted Co ee Beans ( Pearl Reserve  )</span>
                        <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#8f755f] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                    </div>
                    <p className="text-10px md:text-1xl text-[#37251b] opacity-90 p-4">
                        Complex and artisanal, grown in high-altitude scree soils with bio-diverse
                        conditions. This coffee consists of washed and natural process
                    </p>
                </div>
                <img
                    src="https://images.unsplash.com/photo-1447753072467-2f56032d1d48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGNvZmZlZSUyMHBsYW50fGVufDB8fDB8fHww"
                    alt="Coffee Plant"
                    className="w-250 h-40 object-cover md:h-70 transition-transform duration-500 hover:scale-105 rounded-tl-[20px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[5px] m-3"
                />
            </div>

            {/* Third Row with Scroll */}
            <div className="flex flex-col md:flex-row items-center justify-between m-3 space-y-5 md:space-y-0 overflow-auto  p-4 rounded-xl  transition">
                {/* Image with Border Radius and Hover Animation */}
                <img
                    src="https://images.unsplash.com/photo-1654815439629-5e93cb7f74a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D"
                    alt="Coffee Plant"
                    className="w-300 h-40 object-cover md:h-70 transition-transform duration-500 hover:scale-105 rounded-tl-[20px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[5px] m-3"
                />
                {/* Text with Font Size and Centering */}
                <div className="relative group text-black flex flex-col items-center justify-center font-bold text-center md:text-left space-y-4 md:space-y-2 p-3 m-2 overflow-hidden">
                    <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>

                    <div className="absolute top-0 right-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute top-0 right-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>

                    <div className="relative inline-block group">
                        <span className="text-[#80411e] text-1xl md:text-2xl">Pocket Brew( Pearl Reserve )</span>
                        <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#8f755f] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                    </div>
                    <p className="text-10px md:text-1xl text-[#37251b] opacity-90 p-4">
                        Our single-serve co ee packs combine the speed of an instant brew with the
                        unrivalled quality of ARAKU's specialty co ee. As the name suggests, these drip bag sachets
                        it any pocket or purse and o er an extremely portable co ee. Each sachet is packaged
                        individually and nitrogen-flushed to maintain the co ee's integrity and freshness. Suited for
                        the airplane, the open road, hotels, o ces, or even when you just need a quick fix at home. A
                        sturdy cup and hot water does the trick.
                    </p>
                </div>
            </div>
            <FooterSection />
        </div>



    );
};


export default ProductDetailsPage;
