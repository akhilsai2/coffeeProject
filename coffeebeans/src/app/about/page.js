
// AboutUs.jsx
import React from 'react';
import { GiCoffeeBeans } from "react-icons/gi";
import FooterSection from '../footer/fooeter';
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
const AboutPage = () => {
  return (
    <div className="bg-stone-50 text-gray-800 font-sans">
      {/* Header */}


      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1551882230-8baed57a4f2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNvZmZlZSUyMHBsYW50fGVufDB8fDB8fHww")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          {/* <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Committed to sustainable farming practices, providing organic food for a healthier tomorrow
          </p> */}
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 inline-block relative">
              Our Journey
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-1/2 h-1 bg-green-300"></span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">From Seeds to Success</h3>
              <p className="mb-4">
                Founded in 2023, Organic Harvest began as a small family farm with a big vision.
                We started with just 5 acres of land and a commitment to growing food the way nature
                intended – without harmful pesticides or synthetic fertilizers.
              </p>
              <p className="mb-4">
                Our journey wasn't always easy. Converting conventional farmland to certified organic
                took time, patience, and a deep understanding of natural farming methods. But we persevered,
                guided by our belief that everyone deserves access to healthy, sustainable, and delicious food.
              </p>
              <p>
                Today, we're proud to manage over 200 acres of certified organic farmland, supplying fresh
                produce to communities across the region. Our growth is a testament to the increasing demand
                for transparent, ecological farming practices and the incredible support of our customers who share our values.
              </p>
            </div>
            <div
              className="md:w-1/2 h-96 rounded-lg overflow-hidden"
              style={{
                // backgroundImage: 'url("https://media.istockphoto.com/id/1440234731/photo/red-coffee-berries-on-twig.webp?a=1&b=1&s=612x612&w=0&k=20&c=j0HTP_LnJ3cOxMlb5oTDoFRltwUFHwcWznCTUz2-mo0=")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}

            > <img src="https://media.istockphoto.com/id/1440234731/photo/red-coffee-berries-on-twig.webp?a=1&b=1&s=612x612&w=0&k=20&c=j0HTP_LnJ3cOxMlb5oTDoFRltwUFHwcWznCTUz2-mo0=" /></div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 inline-block relative">
              Our Values
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-1/2 h-1 bg-green-300"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl text-green-800 mb-4 text-center">🌱</div>
              <h3 className="text-xl font-semibold text-green-800 mb-3 text-center">Sustainability</h3>
              <p className="text-gray-600">
                We believe in farming practices that nurture the soil and protect biodiversity.
                Our regenerative approach ensures we're leaving the land better than we found it for future generations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl text-green-800 mb-4 text-center"><GiCoffeeBeans size={40} style={{ marginLeft: "45%" }} className="text-4xl text-green-800 mb-4 text-cente" /></div>
              <h3 className="text-xl font-semibold text-green-800 mb-3 text-center">Quality</h3>
              <p className="text-gray-600">
                From seed selection to harvest, we maintain rigorous standards to ensure every
                product that bears our name is nutritious, flavorful, and grown with care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="text-4xl text-green-800 mb-4 text-center">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-semibold text-green-800 mb-3 text-center">Community</h3>
              <p className="text-gray-600">
                We're building more than just a business – we're cultivating a community of farmers,
                customers, and partners united by a vision of a healthier food system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 inline-block relative">
              Meet Our Team
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-1/2 h-1 bg-green-300"></span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 flex flex-row flex-wrap items-center justify-center text-center" style={{ display: "flex" }}>
            <div className="bg-white text-center rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 bg-gray-200" style={{ backgroundImage: 'url("/assets/ceo.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-1">Yanala Prudhvi Raj</h3>
                <p className="text-gray-600 mb-4">Founder & Head Farmer</p>
                <div className="flex justify-center space-x-3">
                  <a href="https://www.linkedin.com/company/agroverse-innovations/?viewAsMember=true"
                    target="_blank" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors"> <AiFillLinkedin size={18} className="text-amber-100" /></a>
                  <a href="https://www.instagram.com/agroverse.innovations/?igsh=OHJhNTNncGxkdmt3&utm_source=qr#"
                    target="_blank" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors"><BsInstagram size={18} className="text-amber-100" /></a>
                  <a href="https://wa.me/4917645267316?text=Get%20more%20I%20Information"
                    target="_blank" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors"><AiOutlineWhatsApp size={18} className="text-amber-100" /></a>
                </div>
              </div>
            </div>
            {/* <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 bg-gray-200" style={{backgroundImage: 'url("/images/team2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-1">Michael Chen</h3>
                <p className="text-gray-600 mb-4">Agricultural Director</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors">f</a>
                  <a href="#" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors">t</a>
                  <a href="#" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors">in</a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 bg-gray-200" style={{backgroundImage: 'url("/images/team3.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-1">Emma Rodriguez</h3>
                <p className="text-gray-600 mb-4">Sustainability Expert</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors">f</a>
                  <a href="#" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors">t</a>
                  <a href="#" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors">in</a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <div className="h-64 bg-gray-200" style={{backgroundImage: 'url("/images/team4.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-green-800 mb-1">David Wilson</h3>
                <p className="text-gray-600 mb-4">Community Outreach</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors">f</a>
                  <a href="#" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors">t</a>
                  <a href="#" className="w-8 h-8 rounded-full bg-green-800 text-white flex items-center justify-center hover:bg-green-600 transition-colors">in</a>
                </div>
              </div>
            </div>  */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 inline-block relative">
              What Our Customers Say
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-3 w-1/2 h-1 bg-green-300"></span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <p className="text-gray-700 italic mb-4">
                "I've been a subscriber to Organic Harvest's weekly produce box for over two years now.
                The quality and freshness of their vegetables is unmatched, and I love knowing exactly where my food comes from!"
              </p>
              <div className="font-semibold text-green-800">— Rachel T., Loyal Customer</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">
                "After visiting their farm during one of their community events, I was impressed by their
                commitment to sustainable practices. You can truly taste the difference in their produce compared to conventional options."
              </p>
              <div className="font-semibold text-green-800">— Mark L., Local Chef</div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default AboutPage;