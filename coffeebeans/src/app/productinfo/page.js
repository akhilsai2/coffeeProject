"use client";
import React, { useEffect, useState } from "react";
const images = [
    "https://images.unsplash.com/photo-1462690417829-5b41247f6b0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMHBsYW50fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1647049052430-d7d270f38298?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvZmZlZSUyMHBsYW50fGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1666976503799-4ef00906ab2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGNvZmZlZSUyMHBsYW50fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1616672500662-86c0867923bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvZmZlZSUyMHBsYW50fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1616672500735-7015803d497f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvZmZlZSUyMHBsYW50fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1561986810-4f3ba2f46ceb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGNvZmZlZSUyMHBsYW50fGVufDB8fDB8fHww",
];
const ProductDetails = () => {
    const [isVisible, setIsVisible] = useState(false);
    const headingText = "Product Info";
    useEffect(() => {
        setIsVisible(true);
    }, []);
    return (
        <section className="bg-gray-100 py-20">
            <div className="relative w-full h-[600px] overflow-hidden">
                <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                    <source src="/assets/productinfo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute top-0 left-0 w-full h-full bg-[#00000054] flex items-center justify-center">
                    <h1 className="text-white fw-bold uppercase" style={{ fontSize: '40px' }}>
                        {headingText.split("").map((char, index) => (
                            <span
                                key={index}
                                className="letter"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>
            </div>


            <div className="relative">
                <div className="absolute inset-0 bg-cover bg-fixed opacity-50" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvZmZlZSUyMHBsYW50fGVufDB8fDB8fHww')" }}></div>
                <div className="container mx-auto text-center relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-12">Product Details: Coffee Beans</h2>

                    {/* Step 1: Coffee Seed Planting */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center transition-all ${isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 scale-90'}`}>
                        <div className="text-center md:text-left">
                            <h3 className="text-[28px] font-semibold text-gray-800 animate__animated animate__fadeIn animate__delay-1s">
                                1. Coffee Bean Seed Planting
                            </h3>
                            <p className="text-[18px] text-gray-700 animate__animated animate__fadeIn animate__delay-2s">
                                Learn how coffee bean seeds are carefully planted in fertile soil to grow the best coffee plants. This step is crucial for the perfect coffee crop.
                                Learn how coffee bean seeds are carefully planted in fertile soil to grow the best coffee plants. This step is crucial for the perfect coffee crop.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src={images[0]}
                                alt="Coffee Seed Planting"
                                className="w-400 h-100 rounded-lg shadow-lg transition-all transform scale-90 hover:scale-100 duration-500"
                            />
                        </div>
                    </div>


                    {/* Step 2: Growing Coffee Plant */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all ${isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 scale-90'}`}>
                        <div className="flex justify-center">
                            <img src={images[1]} alt="Growing Coffee Plant" className="w-full rounded-lg shadow-lg transition-all transform scale-90 hover:scale-100 duration-500" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-2xl font-semibold text-gray-800">2. Growing the Coffee Plant</h3>
                            <p className="text-gray-700">As the coffee plant grows, it requires careful nurturing. This stage ensures that the plant will eventually produce the finest coffee beans.</p>
                        </div>
                    </div>

                    {/* Step 3: Harvesting the Coffee Beans */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all ${isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 scale-90'}`}>
                        <div className="text-left">
                            <h3 className="text-2xl font-semibold text-gray-800">3. Harvesting the Coffee Beans</h3>
                            <p className="text-gray-700">After months of care, the coffee beans are finally harvested at the perfect time, ensuring their rich and full flavor.</p>
                        </div>
                        <div className="flex justify-center">
                            <img src={images[2]} alt="Harvesting Coffee Beans" className="w-400 h-100 rounded-lg shadow-lg transition-all transform scale-90 hover:scale-100 duration-500" />
                        </div>
                    </div>

                    {/* Step 4: Grading the Coffee Beans */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all ${isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 scale-90'}`}>
                        <div className="flex justify-center">
                            <img src={images[3]} alt="Grading Coffee Beans" className="w-400 h-100 rounded-lg shadow-lg transition-all transform scale-90 hover:scale-100 duration-500" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-2xl font-semibold text-gray-800">4. Grading the Coffee Beans</h3>
                            <p className="text-gray-700">After harvesting, coffee beans are carefully graded to ensure only the highest quality beans make it to the packaging stage.</p>
                        </div>
                    </div>

                    {/* Step 5: Packing the Coffee Beans */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 m-5 mb-16 transition-all ${isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 scale-90'}`}>
                        <div className="text-left">
                            <h3 className="text-2xl font-semibold text-gray-800">5. Packing the Coffee Beans</h3>
                            <p className="text-gray-700">The graded coffee beans are then packed carefully to preserve their freshness and flavor, ready to be shipped to stores.</p>
                        </div>
                        <div className="flex justify-center">
                            <img src={images[4]} alt="Packing Coffee Beans" className="w-400 h-100 rounded-lg shadow-lg transition-all transform scale-90 hover:scale-100 duration-500" />
                        </div>
                    </div>

                    {/* Step 6: Coffee in a Cup */}
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all ${isVisible ? 'opacity-100 transform scale-100' : 'opacity-0 scale-90'}`}>
                        <div className="flex justify-center">
                            <img src={images[5]} alt="Coffee in a Cup" className="w-400 h-100 rounded-lg shadow-lg transition-all transform scale-90 hover:scale-100 duration-500" />
                        </div>
                        <div className="text-left">
                            <h3 className="text-2xl font-semibold text-gray-800">6. Coffee in a Cup</h3>
                            <p className="text-gray-700">Finally, the carefully packaged coffee beans are brewed into a delicious cup of coffee that brings joy with every sip.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
