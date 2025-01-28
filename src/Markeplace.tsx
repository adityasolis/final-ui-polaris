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
import Footer from "./Footer"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"

export default function Marketplace() {

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
          <h1 className="text-6xl font-bold text-center mb-8 font-use footer-text-marketplace" >
          MARKETPLACE <br/> MANAGEMENT
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
        LEAD THE MARKETPLACE. ACHEIVE SALES EXCELLENCE.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mb-6 font-pop text-xl" style={{font : '1.3rem'}}
          >
     We provide a comprehensive suite of marketplace management solutions to help you navigate the complexities of online selling. From product listing optimization to inventory management and customer support, we handle all aspects of your marketplace presence.
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
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Increased Sales & Revenue:</span> -  Tap into a massive customer base and significantly boost your online sales.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Enhanced Brand Visibility</span> -   Gain greater visibility and brand awareness within your target market.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Improved Market Share</span> -   Dominate your product category and outpace your competitors.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Reduced Operational Costs: </span> -  Streamline your operations and free up valuable internal resources.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Data-Driven Growth: </span> -  : Leverage real-time data to make informed decisions and optimize your marketplace strategy for maximum ROI.
              </li>
            </ul>
          </motion.div>

          <motion.div 
      style={{ scale: imageScale }} 
      className="relative h-[400px] mb-8 rounded-lg overflow-hidden"
    >
      {/* Mobile image (default) */}
      <img
        src={marketplace1}
        alt="Brand Building Concept - Mobile"
        className="object-cover w-full h-full md:hidden"
      />
      
      {/* Tablet and desktop image */}
      <img
        src={marketplace1}
        alt="Brand Building Concept - Desktop"
        className="hidden md:block object-cover w-full h-full"
      />
    </motion.div>


          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <div className="flex justify-center items-center ">
            <Link to='/contact'>
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
                title: "Organic Presence:",
                content:
                  "We optimize your product listings with relevant keywords, high-quality images, and compelling product descriptions to improve search rankings and drive organic traffic.",
              },
              {
                title: "Content Management:",
                content:
                  "We create and manage engaging product content, including compelling descriptions, high-quality images and videos, and customer reviews to enhance the overall buyer experience.",
              },
              {
                title: "Product Launch:",
                content:
                  "We plan and execute successful product launches on marketplaces, including promotional campaigns, flash sales, and influencer marketing to generate maximum buzz and drive initial sales.",
              },
              {
                title: "Product Placement:",
                content:
                  " We strategically place your products in relevant categories and placements on marketplace platforms to maximize visibility and increase conversion rates.",
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

        <motion.div 
      style={{ scale: imageScale }} 
      className="relative h-[400px] mb-8 rounded-lg overflow-hidden"
    >
      {/* Mobile image (default) */}
      <img
        src={marketplace2}
        alt="Brand Building Concept - Mobile"
        className="object-cover w-full h-full md:hidden"
      />
      
      {/* Tablet and desktop image */}
      <img
        src={marketplace2}
        alt="Brand Building Concept - Desktop"
        className="hidden md:block object-cover w-full h-full"
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
                title: "Product Graphics Enhancement:",
                content:
                  "We enhance your product images and videos with professional editing and retouching to make them more visually appealing and engaging to customers.",
              },
              {
                title: "Positive Product Reviews:",
                content:
                  "We encourage and manage customer reviews to build social proof and improve your product credibility and customer trust.",
              },
              {
                title: "Paid Campaigns:",
                content:
                  "We run targeted paid advertising campaigns on marketplaces to increase product visibility, drive traffic, and boost sales.",
              },
              {
                title: "Delivery Partner:",
                content:
                  "We manage your logistics and delivery operations, ensuring timely and efficient order fulfillment to enhance customer satisfaction.",
              },
              {
                title: "Chatbot Setup/Whatsapp Chat:",
                content:
                  "We implement chatbots and WhatsApp chat support to provide 24/7 customer assistance, answer inquiries promptly, and improve customer satisfaction.",
              },
              {
                title: "Inventory Management:",
                content:
                  "We track and manage your inventory levels in real-time to prevent stockouts and ensure timely order fulfillment, optimizing your cash flow and minimizing operational costs.",
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
          <div className="space-y-8">
            {[
              {
                question: "How can I improve my product rankings on marketplaces like Amazon and Flipkart?",
                answer:
                  "We optimize your product listings with relevant keywords, high-quality images, and compelling product descriptions to improve search rankings and drive organic traffic. We also leverage strategies like A+ Content (Amazon) and Brand Story (Flipkart) to enhance your product pages and attract more customers.",
              },
              {
                question: "How do you ensure timely order fulfillment and customer satisfaction?",
                answer:
                  "We manage your logistics and delivery operations, ensuring timely and efficient order fulfillment to enhance customer satisfaction. We also integrate with leading delivery partners to provide reliable and cost-effective shipping options. ",
              },
              {
                question: "How do you handle customer inquiries and support on marketplaces?",
                answer:
                  "We implement chatbots and WhatsApp chat support to provide 24/7 customer assistance, answer inquiries promptly, and resolve issues efficiently. Our team also monitors customer reviews and proactively addresses any concerns to maintain a positive brand image.",
              },
              {
                question: "How do you stay ahead of the ever-changing marketplace algorithms?",
                answer:
                 " We closely monitor marketplace policies, algorithm updates, and industry trends to ensure our strategies are always up-to-date and effective. We leverage data analytics and competitor analysis to identify opportunities for improvement and maintain a competitive edge."
              },
              {
                question: "How do you manage Delivery Partner relationships to ensure timely fulfillment?",
                answer:
                  "Our Delivery Partner Management service optimizes relationships with logistics partners to ensure timely and efficient order fulfillment. With continuous support, we streamline operations and enhance customer satisfaction by ensuring reliable delivery and fulfillment processes for your e-commerce marketplace.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-2 rounded-lg shadow-sm"
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

