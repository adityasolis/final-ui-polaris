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
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

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

  const handleContactNavigation = () => {
    navigate('/contact');
  };
  

  return (
    <div>
      <Navbar/>

      <main className="min-h-screen bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16"
        >
        <section className="text-black py-20 text-center min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-center mb-8 font-use" style={{ fontSize: "20rem" }}>
       SOLUTIONS
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
          <Link to={service.link}>
       <button
  className="bg-gray-900 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm hover:bg-orange-500 transition-colors flex-shrink-0"
   // Wrap in arrow function
>
  VIEW <ArrowRight className="w-4 h-4" />
</button>
</Link>

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
      LET'S CONNECT
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </h2>
          </motion.section>
        </motion.div>

       <Footer/>
      </main>
    </div>
  );
};

export default Service;
