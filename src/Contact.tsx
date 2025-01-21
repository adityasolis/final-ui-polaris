import React from 'react'
import { useState } from 'react';
import hamburger from "./components/hamburger.png"
import blacklogo from "./components/black_white_logo.png"
import whitelogo from "./components/logo-color.png"
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react';
import { useEffect , useRef} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const Contact = () => {
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
    
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [logo , setLogo] = useState(blacklogo);
      const [hovered, setHovered] = useState(false);
      const navigate = useNavigate()
      const contactRef = useIntersectionObserver();
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
  <div>
       <Navbar/>
             <section className="text-black py-20 text-center min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-center font-use" style={{ fontSize: "20rem" }}>
   CONTACT US 
          </h1>
        </div>
      </section>
         <section ref={contactRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16 bg-white text-black">
              <h2 className="text-8xl font-bold text-left mb-24  relative group font-use" >
            LET'S CONNECT
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
              <Footer/>
  </div>
  
  )
}

export default Contact