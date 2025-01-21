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
import performancegen from "./components/performance-gen.png"
import performancegen2 from "./components/performance-gen-2.png"
// import { Button } from "@/components/ui/button"
import hamburger from "./components/hamburger.png"
import Footer from "./Footer"
import Navbar from "./Navbar"

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
            Generate More Qualified Leads
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mb-6 font-pop text-xl" style={{font : '1.3rem'}}
          >
          We help businesses achieve their marketing goals by driving targeted traffic, generating high-quality leads, and maximizing ROI through data-driven campaigns across various digital channels. Our expertise lies in developing and executing effective strategies that deliver measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 mb-8"
          >
            <h3 className="font-bold text-xl"   style={{fontSize : '1.3rem'}}>Why it Matters : </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Increased Revenue</span> - Drive more leads, convert more customers, and boost your bottom line.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Improved Brand Visibility</span> - Increase brand awareness and reach a wider audience within your target market.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Data-Driven Insights</span> -  Gain valuable data insights to understand customer behavior and refine your marketing strategy.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Competitive Advantage</span> -  Stay ahead of the competition by effectively reaching your target audience and generating high-quality leads.
              </li>
            </ul>
          </motion.div>

          <motion.div style={{ scale: imageScale }} className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <img
              src={performancegen}
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
          OUR KEY  OFFERING:
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {[
              {
                title: "Google ads:",
                content:
                  "We offer expert Google Ads support, managing Google Ads accounts and optimizing campaigns for maximum performance. Our services also include leveraging Google AdSense to drive targeted traffic and increase revenue.",
              },
              {
                title: "Meta ads",
                content:
                  "Boost your brand with expert Meta Ads support. We help run impactful Facebook & Instagram Meta Ads through Meta Business Suite, driving engagement, quality leads, and measurable results to elevate your digital marketing strategy.",
              },
              {
                title: "Linkedin Ads:",
                content:
                  "Manage LinkedIn Ads cost efficiently with our LinkedIn Paid Ads services. Reach decision-makers, drive meaningful leads, and maximize your advertising ROI on the world’s largest professional network.",
              },
              {
                title: "Email marketing:",
                content:
                  "Maximize impact with email marketing tools and automation. We design tailored campaigns that engage audiences, nurture leads, and deliver measurable results to elevate your business growth efficiently.",
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

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <div className="flex justify-center items-center ">
  <button className="bg-gray-900 text-white text-center rounded-full px-12 py-4 hover:bg-orange-600 mt-10 mb-20">
    Let's Create Your Brand Together →
  </button>
</div>

          </motion.div>

          <motion.div style={{ scale: imageScale }} className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <img
              src={performancegen2}
              alt="Brand Building Concept"
              className="object-cover"
            />
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
                question: "What key performance indicators (KPIs) do you track for lead generation campaigns?",
                answer:
                  "We track a variety of KPIs, including website traffic, conversion rates, cost per lead (CPL), customer acquisition cost (CAC), return on investment (ROI), and customer lifetime value (CLTV). We also monitor key engagement metrics such as click-through rates (CTR), open rates, and bounce rates to assess campaign effectiveness.",
              },
              {
                question: "How do you ensure the quality of leads generated? ",
                answer:
                  "We employ a multi-faceted approach to ensure lead quality. This includes targeted audience segmentation, lead scoring models, and regular campaign optimization to prioritize high-value leads and maximize ROI.",
              },
              {
                question: "What is the typical timeframe for seeing results from a lead generation campaign?",
                answer:
                  "The timeframe for seeing results varies depending on the specific campaign objectives, industry, and competition. However, we typically start to see significant results within a few weeks to a few months.",
              },
              {
                question: "How do you stay updated on the latest trends and best practices in performance marketing?",
                answer:
                  "We actively stay abreast of the latest industry trends and best practices through ongoing professional development, industry conferences, and continuous research. We leverage data analytics and industry benchmarks to inform our strategies and ensure our clients receive the most effective solutions.",
              },
              {
                question: "How can I get started with your lead generation services? ",
                answer:
                  "Schedule a free consultation with our team. During this initial call, we'll discuss your business goals, target audience, marketing budget, and desired outcomes. We'll then develop a customized strategy tailored to your specific needs and provide you with a detailed proposal.",
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
        <h2 className="text-8xl font-bold text-left mb-24  relative group font-use" >
      LET'S CONNECT
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </h2>
        
      </div>
      <Footer/>
    </div>
  )
}

