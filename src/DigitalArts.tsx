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
import Influencers from "./components/influencer_marketing.png"
import influence1 from "./components/influence1.png"
import marketplace1 from "./components/marketplace-management.png"
import marketplace2 from "./components/Marketplace(2).png"
import d1 from "./components/Digital Arts.png"
import d2 from "./components/d-2.png"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"

export default function DigitalArts() {

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
             <Navbar/>
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
          <h1 className="text-6xl font-bold text-center mb-8 font-use footer-text-influencer" >
          DIGITAL ARTS
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
        INNOVATIVE DIGITAL ARTS SOLUTIONS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mb-6 font-pop text-xl" style={{font : '1.3rem'}}
          >
    We are a creative agency specializing in cutting-edge digital art solutions. We blend artistic vision with the power of technology to deliver stunning visuals that captivate audiences. Whether you need eye-catching advertisements, innovative graphics, or captivating videos, our team of skilled artists and technologists will bring your ideas to life. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 mb-8"
          >
            <h3 className="font-bold text-xl"   style={{fontSize : '1.3rem'}}>Why it Matters ?</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Enhanced Brand Identity:</span> -  Create a strong and memorable brand identity with visually stunning designs.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}> Increased Engagement:</span> -    Captivate your audience with visually compelling content that drives engagement.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Improved Marketing Effectivenes:</span> -   Enhance the effectiveness of your marketing campaigns with high-quality visuals.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Competitive Advantage: </span> -   Stand out from the competition with unique and innovative visual content.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}> Cost-Effective Solutions: </span> -  : Explore creative and cost-effective solutions for your visual content needs with AI-powered tools.
              </li>
            </ul>
          </motion.div>

          <motion.div style={{ scale: imageScale }} className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <img
              src={d1}
              alt="Brand Building Concept"
              className="object-cover"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <div className="flex justify-center items-center ">
            <Link to="/contact">
  <button className="bg-gray-900 text-white text-center rounded-full px-12 py-4 hover:bg-orange-600 ">
    Let's Create Your Brand Together →
  </button>
  </Link>
</div>

          </motion.div>
        </motion.section>

        {/* Sub-Services Section with Parallax */}
        <motion.section ref={servicesRef} style={{ y: servicesY }} className="mb-24">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl font-bold mb-8 font-use">
          OUR KEY OFFERING:
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {[
              {
                title: "AI Advertisement:",
                content:
                  "Leverage the power of AI to create dynamic and personalized advertisements that resonate with your target audience.",
              },
              {
                title: "AI Graphics:",
                content:
                  "Explore the possibilities of AI-powered graphic design tools to generate unique and innovative visual concepts.",
              },
              {
                title: "AI Videos:",
                content:
                  "Create stunning and engaging AI-powered videos, including animations, motion graphics, and deepfakes.",
              },
              {
                title: "Visual Effects:",
                content:
                  "Bring your creative vision to life with stunning visual effects, from subtle enhancements to mind-blowing special effects.",
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
              src={d2}
              alt="Brand Building Concept"
              className="object-cover"
            />
          </motion.div>

         
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <div className="flex justify-center items-center ">
            <Link to="/contact">
  <button className="bg-gray-900 text-white text-center rounded-full px-12 py-4 hover:bg-orange-600 mb-20">
    Let's Get Started →
  </button>
  </Link>
</div>
<motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {[
              {
                title: "Comic Design:",
                content:
                  "Create captivating comic books, graphic novels, and webcomics that tell compelling stories and engage readers.",
              },
              {
                title: "Graphics Design:",
                content:
                  "From logos and branding to brochures and website graphics, we create high-quality, visually appealing designs that meet your specific needs.",
              },
              {
                title: "Logo Design:",
                content:
                  "Develop unique and memorable logos that effectively communicate your brand identity and resonate with your target audience.",
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

          </motion.div>

        {/* FAQ Section with Parallax */}
        <motion.section
          ref={faqRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-8xl font-bold mb-8 mt-20 ml-5 font-use">FAQ</h2>
          <div className="space-y-2">
            {[
              {
                question: "What is the role of AI in your creative process?",
                answer:
                  " AI plays a crucial role in enhancing our creative process, enabling us to explore new possibilities, accelerate production timelines, and deliver more innovative and cost-effective solutions.",
              },
              {
                question: "How do you ensure the quality of AI-generated content?",
                answer:
                  "Our skilled artists meticulously review and refine all AI-generated content, ensuring it meets the highest standards of quality and aligns with your brand's aesthetic.",
              },
              {
                question: "How can I get a quote for your digital art services?",
                answer:
                  "Please contact us through our website or by phone to schedule a consultation. We will discuss your project requirements and provide you with a personalized quote.",
              },
              {
                question: "What is your turnaround time for projects?",
                answer:
                 "Our turnaround time varies depending on the scope and complexity of the project. We will provide you with an estimated timeline during the initial consultation."
              },
              {
                question: "How do you stay updated on the latest trends in digital art and technology?",
                answer:
                  " Our team actively researches and explores the latest advancements in digital art and technology to ensure we are always at the forefront of innovation.",
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
        <Link to="/contact">
        <h2 className="text-8xl font-bold text-left mb-24  relative group font-use" >
      LET'S CONNECT
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </h2>
    </Link>
        

        
      </div>
     <Footer/>
    </div>
  )
}

