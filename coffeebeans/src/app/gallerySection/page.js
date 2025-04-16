import React from "react";
import "../product/product.css"
import img1 from "../../../public/img1.jpg"
import img2 from "../../../public/img2.jpg"
import img3 from "../../../public/img3.jpg"
// import img1 from "../../../public/img1.jpg"

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
      <h1>The Purest of Doggos</h1>
      <div className="grid-container">
        <div>
          <img className='grid-item grid-item-1' src={img1.src} alt=''/>
            <p>"I'm so happy today!"</p>
        </div>
        <div>
          <img className='grid-item grid-item-2' src={img2.src} alt=''/>
            <p>"I see those nugs."</p>
        </div>
        <div>
          <img className='grid-item grid-item-3' src={img3.src} alt=''/>
            <p>"I love you so much!"</p>
        </div>
        <div>
          <img className='grid-item grid-item-4' src='https://images.unsplash.com/photo-1626402679707-b248aa61e5ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZSUyMHBsYW50fGVufDB8fDB8fHww' alt=''/>
            <p>"I'm the baby of the house!"</p>
        </div>
        <div>
          <img className='grid-item grid-item-5' src='https://plus.unsplash.com/premium_photo-1724820187222-f16594a37b3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29mZmVlJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D' alt=''/>
            <p>"Are you gunna throw the ball?"</p>
        </div>
        <div>
          <img className='grid-item grid-item-6' src='https://images.unsplash.com/photo-1616672500662-86c0867923bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvZmZlZSUyMHBsYW50fGVufDB8fDB8fHww' alt=''/>
            <p>"C'mon friend!"</p>
        </div>
        <div>
          <img className='grid-item grid-item-7' src='https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
            <p>"A rose for mommy!"</p>
        </div>
        <div>
          <img className='grid-item grid-item-8' src='https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
            <p>"You gunna finish that?"</p>
        </div>
        <div>
          <img className='grid-item grid-item-9' src='https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
            <p>"We can't afford a cat!"</p>
        </div>
        <div>
          <img className='grid-item grid-item-10' src='https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt=''/>
            <p>"Dis my fren!"</p>
        </div>
      </div>
    </div>
  );
};

export default Gelleryimgs;
