
import React from 'react';
import './product.css'; // Import styles
const products = [{ id: 1, img: "https://plus.unsplash.com/premium_photo-1726072371400-996a95bd8e08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxjb2ZmZWUlMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D", heading: "Forest Whisper - Araku Pearl", subh1: "", subh2: "SCA", subh3: " Region", para1: "Organic Specality Coffee", para2: "84+", para3: "Araku Valley", button: "Read more" },
{ id: 2, img: "https://media.istockphoto.com/id/469858939/photo/black-pepper.jpg?s=612x612&w=0&k=20&c=GwF_EvFrYNtwTdY5DN9gRS1eJnRf949jUQeqgqoLExE=", heading: "Pearl Reserve - Araku Pearl", subh1: "Roast Level", subh2: "SCA", subh3: "Flavour Profile", para1: "Medium Roast", para2: "83", para3: " Green Pepper, Cherry, Dark Chocolate", button: "Read more" },
{ id: 3, img: "https://images.immediate.co.uk/production/volatile/sites/30/2024/02/Bowl-of-dates-6aae23f.jpg?quality=90&resize=440,400", heading: "Pocket Brew - Araku Pearl", subh1: "Roast Level", subh2: "SCA", subh3: " Region", subh4: " Terrain and Altitude", para1: "Medium Roast", para2: "85", para3: "Floral, Dates, Citrus, Tropical fruit", para4: "1200 meters and above", button: "Read more" },
  // { id: 4, img: "https://i.imgur.com/QYWAcXk.jpeg", heading: "Roasted Co ee Beans ( Pearl Reserve  )", subh1:"Roast Level",subh2:"SCA",subh3:" Region",subh4:" Terrain and Altitude",para1:"Medium to Medium Dark Roast",para2:"82-85",para3:"Floral, Dates, Citrus, Tropical fruits",para4:"Terrain and altitude: 1000-1200 Meters", button: "Read more" },
]

const ProductPage = () => {
  return (
    <section className="product-section h-100" >
      <div className='main-card mt-4 p-5'>
        {products?.map((each, index) => (
          <article className="card" key={index}>
            <img
              className="card__background "
              src={each?.img}
              alt="Photo of Cartagena's cathedral and colonial-style houses"
              width="1920"
              height="2200"
            />
            <div className="card__content flow">
              <div className="card__content--container flow text-white">
                <h2 className="card__title text-start">{each.heading}</h2>
                <p className="card__description">{each.para1}</p>
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
