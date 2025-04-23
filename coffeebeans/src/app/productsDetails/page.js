"use client";
import React, { useEffect, useState } from "react";
import "../product/product.css";
import FooterSection from "../footer/fooeter";

const ProductDetailsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headingText = "Product - Details";
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="overflow-auto bg-white h-screen bg-cover bg-fixed bg-center">
      <div className="relative w-full h-[300px]  md:h-[600px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/assets/homevideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full  flex items-center justify-center">
          <h1 className="text-white  uppercase text-[30px] md:text-[60px] font-bold">
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
      {/* <div className='bg-white'> */}
      <h2 className="text-center text-2xl md:text-5xl font-bold my-5 md:my-8 text-green-800">
            ARAKU - PEARL
          </h2>
           
      <div className="flex flex-col bg-white md:flex-row items-center justify-between m-3 space-y-5 md:space-y-0 overflow-hidden  p-4 rounded-xl  shadow-lg  transition">
        {/* Image with Border Radius and Hover Animation */}
        <img
          src="/assets/PocketBrew.png"
          alt="Coffee Plant"
          className=" w-100 h-100 transition-transform duration-500 hover:scale-105 rounded-tl-[20px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[5px] m-3"
        />
        {/* Text with Font Size and Centering */}
        <div className="relative group w- text-black flex flex-col items-center justify-center font-bold text-center md:text-left space-y-4 md:space-y-2 p-3 m-2 overflow-hidden">
          <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>

          <div className="absolute top-0 right-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
          <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
          <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
          <div className="absolute top-0 right-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
          <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
          <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>

          <div className="relative inline-block group">
            <span className="text-[#80411e] text-2xl  md:text-[40px] font-semibold">
              Pocket Brew
            </span>
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#8f755f] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </div>
          <div className="flex flex-col items-start justify-start mb-3 gap-1">
            <h1 className="text-gray-700 text-md md:text-lg text-justify">
              Roast Level : {" "}
              <span className="font-normal">
                Medium to Medium Dark | SCA Score: 82–85
              </span>
            </h1>
            <h1 className="text-gray-700 text-md md:text-lg text-justify">
              Flavour Profile : {""}
              <span className="font-normal">
                Versatile & Smooth
              </span>{" "}
            </h1>
            <h1 className="text-gray-700 text-md md:text-lg text-justify">
              {" "}
              Altitude : {""}
              <span className="font-normal">
                1000–1200 meters
              </span>
            </h1>
            <p className="text-gray-700 text-md md:text-lg text-justify">
            Description : {" "}
            <span className="font-normal">
              
              Pocket Brew brings convenience without compromise. Perfect for the
              explorer, traveler, or café on the go, this single-serve drip bag
              offers the full-bodied richness of Araku’s specialty coffee wherever
              you are. Whether you’re on a plane, in a hotel room, or at your
              desk enjoy a balanced and smooth cup without the need for
              equipment. Nitrogen-flushed for freshness and portability, each
              sachet fits right into your pocket or purse—specialty coffee,
              simplified. For moments when only the best will do, Pocket Brew is
              your ideal companion
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between m-3 space-y-5 md:space-y-0 overflow-hidden    p-4 rounded-xl shadow-lg transition">
        {/* Image with Border Radius and Hover Animation */}

        {/* Text with Font Size and Centering */}
        <div className="relative group bg-white w-full text-black flex flex-col items-center justify-center font-bold text-center md:text-left space-y-4 md:space-y-2 p-3 m-2 overflow-hidden">
          <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>

          <div className="absolute top-0 right-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
          <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-[#ad6d2f] transition-all duration-500 group-hover:w-10"></div>
          <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
          <div className="absolute top-0 right-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
          <div className="absolute bottom-0 left-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>
          <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-[#ad6d2f] transition-all duration-500 group-hover:h-10"></div>

          <div className="relative inline-block group">
            <span className="text-[#80411e] text-2xl md:text-[40px] font-semibold">
              Forest Whisper
            </span>
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#8f755f] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </div>
          <div className="flex flex-col items-start justify-start mb-3  gap-1">
            <h1 className="text-gray-700 text-md md:text-lg text-justify">
              Roast Level : {" "}
              <span className="font-normal">
                Medium Roast | SCA Score: 83
              </span>
            </h1>
            <h1 className="text-gray-700 text-md md:text-lg text-justify">
              Flavour Profile : {" "}
              <span className="font-normal">
                Green Pepper, Cherry, Dark Chocolate
              </span>{" "}
            </h1>
            <h1 className="text-gray-700 text-md md:text-lg text-justify">
              {" "}
              Altitude : {" "}
              <span className="font-normal"> 1000 meters</span>
            </h1>
            <p className="text-gray-700 text-md md:text-lg text-justify">
            Description : {" "}
            <span className="font-normal">
              Let the
              whispers of the forest envelop your senses with Forest Whisper. A
              medium roast from the misty Araku Valley, where the earthy essence
              of the land and the morning mist cultivate rich, bold beans. With
              vibrant notes of green pepper, ripe cherry, and a touch of dark
              chocolate, this coffee is a comforting invitation to reconnect with
              nature’s depth. Each sip offers a harmonious blend of aromatic
              complexity, drawing you into the soul of Araku Valley.
              </span>
            </p>
          </div>
        </div>
        <img
          src="/assets/forestwhisper.jpeg"
          alt="Coffee Plant"
          className=" transition-transform w-100 h-100  duration-500 hover:scale-105 rounded-tl-[20px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[5px] m-3"
        />
      </div>

      <div className="flex flex-col bg-white md:flex-row items-center justify-between m-3 space-y-5 md:space-y-0 overflow-hidden    p-4 rounded-xl shadow-lg transition">
        {/* Image with Border Radius and Hover Animation */}
        <img
          src="/assets/PearlReserve.png"
          alt="Coffee Plant"
          className=" transition-transform duration-500 w-100 h-100 hover:scale-105 rounded-tl-[20px] rounded-tr-[10px] rounded-br-[30px] rounded-bl-[5px] m-3"
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
            <span className="text-[#80411e] text-2xl md:text-[40px] font-semibold">
              Pearl Reserve
            </span>
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[#8f755f] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </div>
          <div className="flex flex-col items-start justify-start mb-3  gap-1">
            <h1 className="text-gray-700 text-md md:text-lg text-justify">
              Roast Level : {" "}
              <span className="font-normal">
                {" "}
                Medium Roast | SCA Score: 85
              </span>
            </h1>
            <h1 className="text-gray-700 text-md md:text-lg text-justify">
              Flavour Profile : {" "}
              <span className="font-normal">
                {" "}
                Floral, Dates, Citrus, Tropical Fruits
              </span>{" "}
            </h1>
            <h1 className="text-gray-700 text-md md:text-lg text-justify">
              {" "}
              Altitude : {" "}
              <span className="font-normal">1200+ meters</span>
            </h1>
             <p className="text-gray-700 text-md md:text-lg text-justify">
            Description : {" "}
            <span className="font-normal">A true
              masterpiece of organic coffee, Pearl Reserve is the crowning jewel
              of Araku Pearl. Grown at altitudes above 1200 meters in
              mineral-rich scree soils, this medium roast reflects the pinnacle
              of artisanal craftsmanship. Floral elegance merges with the
              sweetness of dates, zesty citrus, and a rich tropical depth,
              creating a complex and refined experience. With a combination of
              washed and natural processes, this coffee offers a sensory journey
              that speaks to the artistry of the land and the purity of nature’s
              finest beans
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}

      <FooterSection />
    </div>
  );
};

export default ProductDetailsPage;
