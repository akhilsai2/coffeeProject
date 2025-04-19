
"use client";
import React, { useState } from 'react';
import "../product/product.css"
import FooterSection from '../footer/fooeter';
import product1 from "../../../public/FW1.png"
const ProductDetailsPage = () => {

    return (
        <div className="overflow-auto h-screen bg-cover bg-fixed bg-center" >
            <div className="product-details-card overflow-auto top-0  left-0 w-full z-50 bg-white flex flex-col items-center shadow-md">
                <h1 className="text-4xl font-bold text-white mt-[10%] uppercase">Products Info</h1>
                {/* <p className="text-xl text-white">Description of the product</p> */}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between m-3 space-y-5 md:space-y-0 overflow-auto  p-4 rounded-xl  transition">
                {/* Image with Border Radius and Hover Animation */}
                <img
                    src={product1.src}
                    alt="Coffee Plant"
                    className="product-image transition-transform duration-500 hover:scale-105 rounded-tl-[20px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[5px] m-3"
                />
                {/* Text with Font Size and Centering */}
                <div className="relative group w-full text-black flex flex-col items-center justify-center font-bold text-center md:text-left space-y-4 md:space-y-2 p-3 m-2 overflow-hidden">
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
                    <div>
                        <h1 className='product-sub-heaindg pl-2'>Roast Level:<span className='product-sub-paragraph pl-2' >Medium to Medium Dark | SCA Score: 82–85</span></h1>
                        <h1 className='product-sub-heaindg pl-2'>Flavour Profile:<span className='product-sub-paragraph pl-2' >Versatile & Smooth</span> </h1>
                        <h1 className='product-sub-heaindg pl-2'> Altitude:<span className='product-sub-paragraph pl-2' >1000–1200 meters</span></h1>
                        <p className="product-sub-paragraph opacity-90 p-2">
                            <span className='product-sub-heaindg'> Description:</span>  Pocket Brew brings convenience without compromise. Perfect for the explorer,
                            traveler, or café on the go, this single-serve drip bag o ers the full-bodied richness of Araku’s specialty
                            cffee wherever you are. Whether you’re on a plane, in a hotel room, or at your desk enjoy a
                            balanced and smooth cup without the need for equipment. Nitrogen-flushed for freshness
                            and portability, each sachet fits right into your pocket or purse—specialty coffee, simplified.
                            For moments when only the best will do, Pocket Brew is your ideal companion
                        </p>
                    </div>
                </div>
            </div>
            {/* Second Row with Scroll */}
            <div className="flex flex-col md:flex-row items-center justify-between m-3 space-y-5 md:space-y-0 overflow-auto  p-4 rounded-xl  transition">
                {/* Image with Border Radius and Hover Animation */}

                {/* Text with Font Size and Centering */}
                <div className="relative group w-full text-black flex flex-col items-center justify-center font-bold text-center md:text-left space-y-4 md:space-y-2 p-3 m-2 overflow-hidden">
                    <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>

                    <div className="absolute top-0 right-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute top-0 right-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>

                    <div className="relative inline-block group">
                        <span className="text-[#80411e] text-1xl md:text-2xl">Forest Whisper (Araku Pearl)</span>
                        <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#8f755f] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                    </div>
                    <div>
                        <h1 className='product-sub-heaindg pl-2'>Roast Level:<span className='product-sub-paragraph pl-2' >Medium Roast | SCA Score: 83</span></h1>
                        <h1 className='product-sub-heaindg pl-2'>Flavour Profile:<span className='product-sub-paragraph pl-2' >Green Pepper, Cherry, Dark Chocolate</span> </h1>
                        <h1 className='product-sub-heaindg pl-2'> Altitude:<span className='product-sub-paragraph pl-2' > ~1000 meters</span></h1>
                        <p className="product-sub-paragraph opacity-90 p-2">
                            <span className='product-sub-heaindg'> Description:</span>   Let the whispers of the forest envelop your senses with Forest Whisper. A medium roast from
                            the misty Araku Valley, where the earthy essence of the land and the morning mist cultivate
                            rich, bold beans. With vibrant notes of green pepper, ripe cherry, and a touch of dark
                            chocolate, this co ee is a comforting invitation to reconnect with nature’s depth. Each sip
                            o ers a harmonious blend of aromatic complexity, drawing you into the soul of Araku Valley.
                        </p>
                    </div>

                </div>
                <img
                    src={product1.src}
                    alt="Coffee Plant"
                    className="product-image transition-transform duration-500 hover:scale-105 rounded-tl-[20px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[5px] m-3"
                />
            </div>

            {/* First Row with Scroll */}
            <div className="flex flex-col md:flex-row items-center justify-between m-3 space-y-5 md:space-y-0 overflow-auto  p-4 rounded-xl  transition">
                {/* Image with Border Radius and Hover Animation */}
                <img
                    src={product1.src}
                    alt="Coffee Plant"
                    className="product-image transition-transform duration-500 hover:scale-105 rounded-tl-[20px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[5px] m-3"
                />
                {/* Text with Font Size and Centering */}
                <div className="relative group w-full text-black flex flex-col items-center justify-center font-bold text-center md:text-left space-y-4 md:space-y-2 p-3 m-2 overflow-hidden">
                    <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>

                    <div className="absolute top-0 right-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute top-0 right-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
                    <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>

                    <div className="relative inline-block group">
                        <span className="text-[#80411e] text-1xl md:text-2xl">
                            Pearl Reserve (Araku Pearl)
                        </span>
                        <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#8f755f] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                    </div>
                    <div>
                        <h1 className='product-sub-heaindg pl-2'>Roast Level:<span className='product-sub-paragraph pl-2' > Medium Roast | SCA Score: 85</span></h1>
                        <h1 className='product-sub-heaindg pl-2'>Flavour Profile:<span className='product-sub-paragraph pl-2' > Floral, Dates, Citrus, Tropical Fruits</span> </h1>
                        <h1 className='product-sub-heaindg pl-2'> Altitude:<span className='product-sub-paragraph pl-2' >1200+ meters</span></h1>
                        <p className="product-sub-paragraph opacity-90 p-2">
                            <span className='product-sub-heaindg'> Description:</span>A true masterpiece of organic co ee, Pearl Reserve is the crowning jewel of Araku Pearl.
                            Grown at altitudes above 1200 meters in mineral-rich scree soils, this medium roast reflects
                            the pinnacle of artisanal craftsmanship. Floral elegance merges with the sweetness of dates,
                            zesty citrus, and a rich tropical depth, creating a complex and refined experience. With a
                            combination of washed and natural processes, this co ee o ers a sensory journey that
                            speaks to the artistry of the land and the purity of nature’s finest beans
                        </p>
                    </div>
                </div>
            </div>


            {/* Third Row with Scroll */}

            <FooterSection />
        </div>



    );
};


export default ProductDetailsPage;
