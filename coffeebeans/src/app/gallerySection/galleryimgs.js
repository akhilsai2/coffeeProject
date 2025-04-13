import React from "react";
import "../product/product.css"

const strips = [
  {
    className: "one",
    photos: [
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg", name: "Kyoto" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-austria.jpeg", name: "Halstatt" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-peru.jpeg", name: "Peru" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rio.jpeg", name: "Rio" }
    ]
  },
  {
    className: "two",
    photos: [
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-italy.jpeg", name: "Italy" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-osaka.jpeg", name: "Osaka" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali.jpeg", name: "Bali" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris2.jpg", name: "Paris" }
    ]
  },
  {
    className: "three",
    photos: [
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-cusco.jpeg", name: "Cusco" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rome.jpeg", name: "Rome" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris.jpeg", name: "Paris" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali2.jpeg", name: "Bali" }
    ]
  },
  {
    className: "four",
    photos: [
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-milan.jpeg", name: "Milan" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-budapest.jpg", name: "Budapest" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-vienna.jpg", name: "Vienna" },
      { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-mexico.jpg", name: "Mexico" }
    ]
  }
];

const Gelleryimgs = () => {
  return (
    <div className="gallery">
     
    </div>
  );
};

export default Gelleryimgs;
