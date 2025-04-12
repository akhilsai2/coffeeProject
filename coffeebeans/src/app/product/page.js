
import React from 'react';
import './product.css'; // Import styles
const products = [{ id: 1, img: "https://i.imgur.com/QYWAcXk.jpeg", heading: "Green Coffee Beans ( Forest Whisper )",subh1:"",subh2:"SCA",subh3:" Region", para1: "Organic Specality Coffee",para2:"84+",para3:"Araku Valley", button: "Read more" },
{ id: 2, img: "https://i.imgur.com/QYWAcXk.jpeg", heading: "Roasted Co ee Beans ( Forest Whisper )",subh1:"Roast Level",subh2:"SCA",subh3:"Flavour Profile",para1:"Medium Roast",para2:"83",para3:" Green Pepper, Cherry, Dark Chocolate", button: "Read more" },
{ id: 3, img: "https://i.imgur.com/QYWAcXk.jpeg", heading: "Roasted Co ee Beans ( Pearl Reserve  )", subh1:"Roast Level",subh2:"SCA",subh3:" Region",subh4:" Terrain and Altitude",para1:"Medium Roast",para2:"85",para3:"Floral, Dates, Citrus, Tropical fruit",para4:"1200 meters and above", button: "Read more" },
{ id: 4, img: "https://i.imgur.com/QYWAcXk.jpeg", heading: "Roasted Co ee Beans ( Pearl Reserve  )", subh1:"Roast Level",subh2:"SCA",subh3:" Region",subh4:" Terrain and Altitude",para1:"Medium to Medium Dark Roast",para2:"82-85",para3:"Floral, Dates, Citrus, Tropical fruits",para4:"Terrain and altitude: 1000-1200 Meters", button: "Read more" },
]

const ProductPage = () => {
  return (
    <section className="product-section" >
    <div className='main-card mt-4'>
      {products?.map((each, index) => (
        <article className="card" key={index}>
          <img
            className="card__background"
            src="https://i.imgur.com/QYWAcXk.jpeg"
            alt="Photo of Cartagena's cathedral and colonial-style houses"
            width="1920"
            height="2193"
          />
          <div className="card__content flow">
            <div className="card__content--container flow">
              <h2 className="card__title text-start">{each.heading}</h2>
              <p className="">{each.para1}</p>
              <p className="card__description">{each.para2}</p>
              <p className="card__description">{each.para3}</p>
              <p className="card__description">{each.para4}</p>
            </div>
            <button className="card__button">{each.button}</button>
          </div>
        </article>
      ))}
    </div>
    </section>
  );
};


export default ProductPage;
