import React, { useEffect, useRef, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArrowRight, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import potential from "./components/potential.png";
import f1 from "./components/f-1.png"
import f2 from "./components/f-2.png"
import f3 from "./components/f-3.png"
import insurance from "./components/FINANCIAL.jpg"
import it from "./components/IT.jpg"
import realestate from "./components/Real Estate.jpg"
import retail from "./components/Retail.jpg"
import green from "./components/Green.jpg"
import healthcare from "./components/HEALTH CARE.jpg"
import achieve from "./components/ENAGE ICONS-10.jpg"
import analyze from "./components/ENAGE ICONS-02.jpg"

import engage from "./components/ENAGE ICONS-01.jpg"
import strateize from "./components/ENAGE ICONS-07.jpg"
import implement from "./components/ENAGE ICONS-04.jpg"
import hamburger from "./components/hamburger.png"
import blacklogo from "./components/black_white_logo.png"
import whitelogo from "./components/logo-color.png"
import { useNavigate } from 'react-router-dom'


function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return elementRef;
}

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useIntersectionObserver();
  const industriesRef = useIntersectionObserver();
  const approachRef = useIntersectionObserver();
  const impactRef = useIntersectionObserver();
  const storiesRef = useIntersectionObserver();
  const contactRef = useIntersectionObserver();
  const [logo , setLogo] = useState(blacklogo);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate()
  const handleNavigation = () => {
    navigate('/about');
  };
  const handleServiceNavigation = ()=>{
    navigate('/service')
  }

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    setIsMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <div className="fixed top-0 left-0 z-50 p-4 md:p-6 text-2xl font-bold">
      <img
      src={logo}
      alt="logo"
      width={100} 
      height={200} // Set a fixed height
    //   style={{ objectFit: 'contain', transition: 'opacity 0.3s ease' }}
      onMouseEnter={() => setLogo(whitelogo)}
      onMouseLeave={() => setLogo(blacklogo)}
    />
      </div>
      <nav className="fixed top-0 right-0 z-50 p-4 md:p-6">
      
      <button 
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className=""
      aria-label="Toggle menu"
    >
      {isMenuOpen ? (
        <>
          <X size={24} />
          {/* <img src={hamburger} alt="Menu Open" className="w-6 h-6 inline-block ml-2" /> */}
        </>
      ) : (
        <>
          <img src={hamburger} alt="Menu Open" className="w-6 h-6 inline-block ml-2" />
        </>
      )}
    </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
       <div className="p-8 space-y-12 mt-16">
  <button 
    onClick={() => scrollToSection(headerRef)} 
    className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors"  style={{fontSize : "2.5rem" , fontWeight : '600'}}
  >
    Home
  </button>
  <button 
    onClick={handleNavigation} 
    className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors"  style={{fontSize : "2.5rem" , fontWeight : '600' }}
  >
    About 
  </button>
  <button 
    onClick={handleServiceNavigation}  
    className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors"  style={{fontSize : "2.5rem" , fontWeight : '600'}}
  >
 Services
  </button>
  <button 
    onClick={handleServiceNavigation} 
    className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{fontSize : "2.5rem" , fontWeight : '600'}}
  >
 Influencer Marketing
  </button>
  <button 
    onClick={() => scrollToSection(storiesRef)} 
    className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors"  style={{fontSize : "2.5rem" , fontWeight : '600'}}
  >
Blog
  </button>
  <button 
    onClick={() => scrollToSection(contactRef)} 
    className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors"   style={{fontSize : "2.5rem" , fontWeight : '600'}}
  >
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

      {/* Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section ref={headerRef} className="h-screen flex items-center justify-center bg-white px-10">
        <div className="text-center slide-in-bottom">
          <h1>
            <div className="text-8xl md:text-8xl text-black tracking-tight font-use" style={{fontSize : "10rem"}} >
              SHAPING VISIONS, <br/> DELIVERING RESULTS
            </div>
            <div className="mt-8 text-xl md:text-2xl text-gray-600 max-w-4xl "  style={{marginBottom : '250px'}}>
              We <span className="font-bold text-black">CREATE</span> brands, <span className="font-bold text-black">PRESERVE</span> unique identity, <span className="font-bold text-black">TRANSFORM</span> your business.
            </div>
          </h1>
        </div>
      </section>

        {/* Industries Section */}
        <section ref={industriesRef} className="px-4 md:px-16 py-12 md:py-20">
          <h2 className="text-3xl md:text-3xl font-bold mb-12 uppercase border-b-2 border-black pb-4 font-use">
            INDUSTRIES IMPACTED
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <img
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="mt-4 flex  items-center">
                  <h3 className="text-2xl font-bold text-black uppercase mr-2 font-use">{industry.title}</h3>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm hover:bg-gray-800 transition-colors flex-shrink-0">
                    VIEW <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Approach Section */}
        <section ref={approachRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16 bg-gray-100">
          <h2 className="text-3xl md:text-3xl font-bold mb-12 uppercase border-b-2 border-black pb-4 font-use">OUR APPROACH</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {approaches.map((approach, index) => (
              <div key={index} className="text-center">
     <img 
                  src={approach.image} 
                  alt={approach.title} 
                  className="w-80 h-32 md:h-48 object-cover grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
                <p className="mt-2 font-semibold text-sm md:text-base">{approach.title}</p>
                
              </div> 
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 max-w-6xl mx-auto mt-20">
            {services.map((service, index) => (
              <button 
                key={index}
                className="px-6 py-3 border-2 border-black rounded-full transition-colors duration-300 flex items-center gap-2 whitespace-nowrap" 

  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#F5682A';
    e.currentTarget.style.color = 'white';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = 'black';
  }}
              >
                {service} <ArrowRight className="w-4 h-4" />
              </button>
            ))}
          </div>
          
        </section>

        {/* Impact Section */}
        <section ref={impactRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16">
          <h2 className="text-3xl md:text-3xl font-bold mb-12 uppercase border-b-2 border-black pb-4 font-use">POTENTIAL IMPACT</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  
                <img 
                  src={potential} 
                  alt="Impact" 
                  className="w-full h-42 md:h-58 object-cover rounded-lg"
                  loading="lazy"
                />
            <div className="space-y-14">
              {impactPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"  />
                  <p className="text-sm md:text-base">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stories Section */}
        <section ref={storiesRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16">
          <h2 className="text-3xl md:text-3xl font-bold mb-12 uppercase border-b-2 border-black pb-4 font-use">FEATURED STORIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {stories.map((story, index) => (
              <div key={index} className="group cursor-pointer">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-78 object-cover rounded-lg mb-4 transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <p style={{color :'#F5682A'}} >Category</p>
                <h3 className="font-semibold text-sm md:text-base group-hover:text-blue-600 transition-colors font-pop">{story.title}</h3>
                <p style={{color :'#3E3A3A' }} className='mt-12 '>Read More</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16 bg-white text-black">
        <h2 className="text-8xl font-bold text-left mb-24  relative group font-use" >
      LET'S DISCUSS
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2">Enter Full Name</label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full p-4 rounded-3xl bg-gray-100"
              />
            </div>
            <div>
              <label className="block mb-2">Contact</label>
              <input
                type="tel"
                placeholder="+91"
                className="w-full p-4 rounded-3xl bg-gray-100"
              />
            </div>
          </div>
          <div className="mt-8">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-4 rounded-3xl bg-gray-100"
            />
          </div>
          <div className="mt-8">
            <label className="block mb-2">Message</label>
            <textarea
              placeholder="Write Your Query"
              className="w-full p-4 rounded-3xl bg-gray-100 h-32"
            ></textarea>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="bg-[#3E3A3A] text-white px-12 py-4 rounded-full hover:bg-black transition-colors flex items-center gap-2">
              Submit <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
        {/* footer section here  */}
        <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">SERVICES</h3>
              <ul className="space-y-2">
                <li>Digital Marketing</li>
                <li>Web Development</li>
                <li>SEO</li>
                <li>Performance Marketing</li>
                <li>AI & ML Services</li>
                <li>Advanced Marketing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">CONTACT</h3>
              <div className="space-y-2">
                <p>Head Office: Ground Floor, Plot No 127, Sector 44,</p>
                <p>Gurugram, Haryana 122003</p>
                <p>Email: info@digitalpolaris.com</p>
                <p>Phone: +91 9818880100</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/20 pt-8">
            {/* Social Media and Navigation */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              {/* Social Media Icons */}
              <div className="flex gap-6">
                {/* <Facebook size={20} className="cursor-pointer hover:text-gray-300" />
                <Twitter size={20} className="cursor-pointer hover:text-gray-300" />
                <Linkedin size={20} className="cursor-pointer hover:text-gray-300" />
                <Instagram size={20} className="cursor-pointer hover:text-gray-300" />
                <Youtube size={20} className="cursor-pointer hover:text-gray-300" /> */}
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="#" className="hover:text-gray-300">ABOUT US</a>
                <a href="#" className="hover:text-gray-300">CONTACT US</a>
                <a href="#" className="hover:text-gray-300">HELP</a>
                <a href="#" className="hover:text-gray-300">PRIVACY POLICY</a>
                <a href="#" className="hover:text-gray-300">DISCLAIMER</a>
              </nav>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm">
              Copyright © 2024 Digital Polaris
            </div>
          </div>
        </div>
      </footer>

      </div>
    </div>
  );
}

const industries = [
  {
    title: 'Insurance & Banking',
    image: insurance,
  },
  {
    title: 'Real Estate',
    image: realestate,
  },
  {
    title: 'Retail',
    image: retail,
  },
  {
    title: 'Healthcare',
    image: healthcare,
  },
  {
    title: 'IT Services',
    image : it,
  },
  {
    title: 'Green Energy',
    image: green,
  },
];

const approaches = [
  {
    title: 'ENGAGE',
    image: engage,
  },
  {
    title: 'ANALYZE',
    image: analyze,
  },
  {
    title: 'STRATEGIZE',
    image: strateize,
  },
  {
    title: 'IMPLEMENT',
    image: implement,
  },
  {
    title: 'ACHIEVE',
    image: achieve,
  },
];

const impacts = [
  'https://images.unsplash.com/photo-1552581234-26160f608093',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  'https://images.unsplash.com/photo-1552664730-d307ca884978',
  'https://images.unsplash.com/photo-1552581234-26160f608093',
];

const impactPoints = [
  'Increased Brand Visibility & Reach',
  'Enhanced Brand Reputation & Trust',
  'Stronger Customer Relationships & Loyalty',
  'Measurable Business Growth & ROI',
  'Data-Driven Insights & Strategic Direction',
];

const services = [
  'Brand Building',
  'Performance & Lead Generation',
  'Digital Art & VFX',
  'Marketplace Management',
  'Influencer Marketing',
  'AR & VR solution'
];

const stories = [
  {
    title: 'Streamlining Business Operations: The Power of SaaS Business Tools',
    image: f1,
  },
  {
    title: 'Boost Your Marketing Results Through Data-Driven Decision Making',
    image: f2,
  },
  {
    title: 'Outshine the Competition with the Best Digital Marketing Company in Bangalore',
    image: f3,
  },
];

export default Home;