import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import hamburger from "./components/hamburger.png";
import blacklogo from "./components/black_white_logo.png";
import { motion } from "framer-motion"; // Assuming you're using framer-motion for animations
import  i1 from "./components/i-1.png"
import  i2 from "./components/i-2.png"
import  i3 from "./components/i-3.png"
import  i4 from "./components/i-4.png"
import  i5 from "./components/i-5.png"
import  i6 from "./components/i-6.png"
import { ArrowRight, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react';

const services = [
  {
    title: "BRAND SCULPTING",
    description: "We carve unique brand identities through the art of storytelling, innovative design, and strategic positioning.",
    image: i1,
    link : '/brand',
    alt: "Service 1 Image"
  },
  {
    title: "PERFORMANCE MARKETING & LEAD GEN",
    description: "Our precise analysis of data ensures premium leads and maximum ROI through targeted ads and catalysis conversion.",
    image: i2,
    link : '/performance',
    alt: "Service 1 Image"
  },
  {
    title: "INFLUENCER MARKETING",
    description: "Building impactful brand partnerships with social media influencers to reach target audiences and drive engagement.",
    image: i3,
    link : '/influencer' , 
    alt: "Service 1 Image"
  },
  {
    title: "E-COMMERCE SOLTUION",
    description: "Providing a comprehensive suite of services to enable businesses to thrive online, from setting up online stores to managing order fulfillment.",
    image: i4,
    link : '/ecommerce' , 
    alt: "Service 1 Image"
  },
  {
    title: "MARKETPLACE MANAGEMENT",
    description: "Maximizing sales and brand visibility on online marketplaces through optimized listings, efficient inventory management, and excellent customer service.",
    image: i5,
    link : '/marketplace' , 
    alt: "Service 1 Image"
  },
  {
    title: "DIGITAL ARTS",
    description: "A modern art form encompassing digital painting, 3D modeling, animation, AI art, and more, pushing the boundaries of creative expression.",
    image: i6,
    link : '/digital' , 
    alt: "Service 1 Image"
  },
  // Add more services as needed
];

const Service = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/about');
  };

  const handleServiceNavigation = () => {
    navigate('/service');
  };

  return (
    <div>
      <div className="fixed top-0 left-0 z-50 p-4 md:p-6 text-2xl font-bold">
        <img src={blacklogo} alt="logo" width={100} />
      </div>
      <nav className="fixed top-0 right-0 z-50 p-4 md:p-6">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className=""
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <img src={hamburger} alt="Menu Open" className="w-6 h-6 inline-block ml-2" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 space-y-12 mt-16">
          <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{fontSize: "2.5rem", fontWeight: '600'}}>
            Home
          </button>
          <button onClick={handleNavigation} className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{fontSize: "2.5rem", fontWeight: '600'}}>
            About
          </button>
          <button onClick={handleServiceNavigation} className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{fontSize: "2.5rem", fontWeight: '600'}}>
            Services
          </button>
          <button onClick={handleServiceNavigation} className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{fontSize: "2.5rem", fontWeight: '600'}}>
            Influencer Marketing
          </button>
          <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{fontSize: "2.5rem", fontWeight: '600'}}>
            Blog
          </button>
          <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{fontSize: "2.5rem", fontWeight: '600'}}>
            Career
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <main className="min-h-screen bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
        <section className="text-black py-20 text-center min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-center mb-8 font-use" style={{ fontSize: "10rem" }}>
        INNOVATIONS
          </h1>
        
        </div>
      </section>
      <h2 className="text-4xl md:text-4xl font-bold mb-4 uppercase border-b-2 border-black pb-4 font-use">
      SPARK YOUR SUCCESS
          </h2>
          <p className="text-black-600 mb-12 text-2xl">We build lasting connections through innovative digital strategies.</p>

          <section className="mb-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {services.map((service, index) => (
      <motion.div
        key={service.title + index} // Ensure unique keys by adding index
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative overflow-hidden rounded-lg"
      >
        <div className="aspect-[4/3] relative overflow-hidden">
          <img
            src={service.image || "/placeholder.svg"}
            alt={service.alt}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-3xl text-left font-bold mb-3 font-use">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
       <button
  className="bg-gray-900 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm hover:bg-orange-500 transition-colors flex-shrink-0"
  onClick={() => navigate(service.link)}  // Wrap in arrow function
>
  VIEW <ArrowRight className="w-4 h-4" />
</button>

        </div>
      </motion.div>
    ))}
  </div>
</section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
        <h2 className="text-8xl font-bold text-left mb-24  relative group font-use" >
      LET'S DISCUSS
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </h2>
          </motion.section>
        </motion.div>

        <footer className="bg-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4">COMPANY</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-300">About Us</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">Blog</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">Careers</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">SERVICES</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-300">Brand Strategy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">Digital Marketing</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-300">E-commerce</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">CONTACT</h3>
                <address className="not-italic">
                  <p>Head Office: Ground Floor, Plot No 123</p>
                  <p>Email: info@digitalagency.com</p>
                  <p>Phone: +91 1234567890</p>
                </address>
              </div>
              <div>
                <h3 className="font-bold mb-4">FOLLOW US</h3>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-gray-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {/* Insert Facebook Icon */}
                    </svg>
                  </a>
                  <a href="#" className="hover:text-gray-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {/* Insert Twitter Icon */}
                    </svg>
                  </a>
                  <a href="#" className="hover:text-gray-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {/* Insert Linkedin Icon */}
                    </svg>
                  </a>
                  <a href="#" className="hover:text-gray-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {/* Insert Instagram Icon */}
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2024 Digital Agency</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                  <a href="#" className="hover:text-gray-300">Terms of Service</a>
                  <a href="#" className="hover:text-gray-300">Disclaimer</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Service;
