"use client"

import { useRef } from "react"
// import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import about from "./components/brand_image.png"
import brandmid from "./components/brand_mid.png"
import { useState } from "react"
import { ArrowRight, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import blacklogo from "./components/black_white_logo.png"
import whitelogo from "./components/logo-color.png"
// import { Button } from "@/components/ui/button"
import hamburger from "./components/hamburger.png"

export default function Permance() {

  // Refs for scroll containers
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const strategyRef = useRef(null)
  const servicesRef = useRef(null)
  const faqRef = useRef(null)
  const [logo , setLogo] = useState(blacklogo);
  const [hovered, setHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll progress for different sections
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Transform values for parallax effects
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50])
  const strategyY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0])
  const imageScale = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1])
  const servicesY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0])

  return (
    <div ref={containerRef} className="relative">
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

    className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors"  style={{fontSize : "2.5rem" , fontWeight : '600'}}
  >
    Home
  </button>
  <button 

    className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors"  style={{fontSize : "2.5rem" , fontWeight : '600' }}
  >
    About 
  </button>
  <button 

    className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors"  style={{fontSize : "2.5rem" , fontWeight : '600'}}
  >
 Services
  </button>
  <button 

    className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{fontSize : "2.5rem" , fontWeight : '600'}}
  >
 Influencer Marketing
  </button>
  <button 

    className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors"  style={{fontSize : "2.5rem" , fontWeight : '600'}}
  >
Blog
  </button>
  <button 

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
      {/* Smooth Scroll Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Parallax */}
        <motion.div ref={heroRef} style={{ y: heroY }} className="mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
          >
               <section className="text-black py-20 text-center min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-center mb-8 font-use" style={{ fontSize: "10rem" }}>
          Performance <br/> Marketing & lead gen
          </h1>
        </div>
      </section>

     
          </motion.h1>
        </motion.div>

        {/* Strategy Section with Parallax */}
        <motion.section ref={strategyRef} style={{ y: strategyY }} className="mb-24">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold text-gray-900 mb-4 font-use"
          >
            Drive Brand Success with Purposeful Strategy
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mb-6 font-pop text-xl" style={{font : '1.3rem'}}
          >
            Your brand is more than just a logo or a tagline—it's the essence of your business. A well-built brand tells
            a compelling story, builds trust, and creates emotional connections with your audience. We help businesses
            carve out a unique space in the market with strategic brand-building solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 mb-8"
          >
            <h3 className="font-bold text-xl"   style={{fontSize : '1.3rem'}}>Why Brand Building Matters?</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Recognition & Recall</span> - A strong brand ensures your business is
                memorable and stands out from competitors.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Trust & Credibility</span> - Consistent branding establishes
                reliability, making it easier to gain and retain customers.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Market Differentiation</span> - Position yourself uniquely with a strong
                brand identity that resonates with your audience.
              </li>
            </ul>
          </motion.div>

          <motion.div style={{ scale: imageScale }} className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <img
              src={about}
              alt="Brand Building Concept"
              className="object-cover"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <div className="flex justify-center items-center ">
  <button className="bg-gray-900 text-white text-center rounded-full px-12 py-4 hover:bg-orange-600">
    Let's Create Your Brand Together →
  </button>
</div>

          </motion.div>
        </motion.section>

        {/* Sub-Services Section with Parallax */}
        <motion.section ref={servicesRef} style={{ y: servicesY }} className="mb-24">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl font-bold mb-8 font-use">
            OUR SUB-SERVICES:
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {[
              {
                title: "Search Engine Optimization (SEO)",
                content:
                  "We offer professional SEO services to boost your online presence with tailored SEO service packages. Our strategies include comprehensive keyword research, technical optimization, keyword research, and link building.",
              },
              {
                title: "Social Media Marketing(SMM)",
                content:
                  "Our social media marketing services enhance your brand's visibility, engagement, and growth through targeted campaigns. We connect you with the right audience, drive traffic, and generate measurable results to boost awareness and customer loyalty.",
              },
              {
                title: "Pay-per-click (PPC)",
                content:
                  "We offer cutting-edge PPC (SEM) services and PPC campaign management services to drive targeted traffic, generate high-quality leads, and maximize ROI through optimized strategies on Google Ads, Bing, and social media platforms.",
              },
              {
                title: "Content Marketing Service",
                content:
                  "We provide expert content marketing services, crafting engaging, high-quality content tailored to your brand. Our solutions enhance digital marketing efforts, boost visibility, drive conversions, and establish your brand as an industry leader through impactful, audience-focused strategies.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b pb-8"
              >
                <h3 className="font-bold mb-4" style={{fontSize : '1.5rem'}}>{service.title}</h3>
                <p className="text-gray-600" style={{fontSize : '1.5rem'}}>{service.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.div style={{ scale: imageScale }} className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <img
              src={brandmid}
              alt="Brand Building Concept"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {[
              {
                title: "Lead Generation",
                content:
                  "We specialize in B2B lead generation, utilizing advanced strategies and tools to deliver high-quality prospects. As one of the best lead generation companies, we help businesses grow by enhancing sales efficiency and accelerating growth.",
              },
              {
                title: "Email Marketing:",
                content:
                  "As an expert email campaign agency, we craft personalized, engaging email marketing strategies to boost sales, retention, and brand awareness. Our services ensure impactful, optimized campaigns, delivering measurable results for your business.",
              },
              {
                title: "Budget & Planning:",
                content:
                  "We provide cost-effective marketing strategies tailored to maximize your digital marketing budget, ensuring optimal results. Our budget and planning approach ensures efficient allocation, delivering measurable ROI while meeting your business goals effectively.",
              },
              {
                title: "Marketing Roadmap:",
                content:
                  "Our Marketing Roadmap integrates SEO, content, and social media strategies to boost visibility and conversions, while the Sales Strategy Roadmap optimizes lead generation and customer retention, aligning marketing and sales for sustained business growth.",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b pb-8"
              >
                <h3 className="font-bold mb-4" style={{fontSize : '1.5rem'}}>{service.title}</h3>
                <p className="text-gray-600" style={{fontSize : '1.5rem'}}>{service.content}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <div className="flex justify-center items-center ">
  <button className="bg-gray-900 text-white text-center rounded-full px-12 py-4 hover:bg-orange-600 mt-10">
    Let's Create Your Brand Together →
  </button>
</div>

          </motion.div>

        {/* FAQ Section with Parallax */}
        <motion.section
          ref={faqRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-5xl font-bold mb-8 mt-20 ml-5 font-use">FAQ</h2>
          <div className="space-y-8">
            {[
              {
                question: "What do you mean by brand building?",
                answer:
                  "Brand building refers to creating a strong and positive perception of your business in the minds of your target audience through consistent messaging, visual identity, and customer experiences. It forms trust, loyalty, and long-term customer relationships.",
              },
              {
                question: "How do SEO, SMM, & PPC work together in digital marketing?",
                answer:
                  "SEO drives organic growth through optimized content and audience engagement in search results while PPC delivers good paid ads for immediate results. Together, they create a comprehensive digital strategy, enhancing reach, conversions, and ROI.",
              },
              {
                question: "How can businesses use email marketing effectively for lead generation?",
                answer:
                  "Businesses can use email marketing by crafting personalized campaigns with clear CTAs and including new CTAs. Automated follow-ups and segmentation help nurture leads and convert them into customers.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2" style={{fontSize : "1.5rem"}}>{faq.question}</h3>
                <p className="text-gray-600" style={{fontSize : "1.5rem"}}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        
      </div>
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
  )
}

