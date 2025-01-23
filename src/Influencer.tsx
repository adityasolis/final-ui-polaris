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
import Footer from "./Footer"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"
export default function Influencer() {

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
          INFLUENCER  <br/> MARKETING
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
        CONNECT WITH YOUR AUDIENCE THROUGH AUTHENTIC VOICES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mb-6 font-pop text-xl" style={{font : '1.3rem'}}
          >
      Engage with your target audience authentically and effectively through impactful influencer marketing campaigns. We leverage the power of social media influencers to build brand awareness, drive engagement, and generate leads. Our expertise lies in identifying the right influencers, developing compelling campaign strategies, and delivering measurable results.
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
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Enhanced Brand Authenticity:</span> - Leverage the credibility of influencers to build trust and authentically engage your target audience.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Targeted Audience Reach</span> -  Collaborate with relevant influencers to reach the right audience and maximize campaign effectiveness.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Boosted Engagement & Conversions</span> -  Influencer marketing boosts engagement, sparks user-generated content, and fosters a sense of community, driving potential customers to take action.
              </li>
              <li style={{fontSize : '1.3rem'}}>
                <span className="font-semibold" style={{fontSize : '1.3rem'}}>Measurable Results: </span> - Measure campaign effectiveness through key metrics (reach, engagement, conversions) and optimize accordingly.
              </li>
            </ul>
          </motion.div>

          <motion.div style={{ scale: imageScale }} className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
            <img
              src={Influencers}
              alt="Brand Building Concept"
              className="object-cover"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <div className="flex justify-center items-center ">
            <Link to="/contact">
  <button className="bg-gray-900 text-white text-center rounded-full px-12 py-4 hover:bg-orange-600">
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
                title: "Content Strategy:",
                content:
                  "We develop compelling and authentic content strategies that align with influencer voices and brand objectives. We create engaging content briefs, including creative concepts, target audience profiles, and key performance indicators (KPIs).",
              },
              {
                title: "Video Production:",
                content:
                  "We produce high-quality video content that resonates with your target audience and showcases your brand in the best possible light. We collaborate with influencers to create engaging video content formats, such as product reviews, unboxings, and behind-the-scenes footage.",
              },
              {
                title: "End-to-End Management",
                content:
                  "We manage all aspects of your influencer marketing campaigns, from influencer selection and outreach to campaign execution, reporting, and analysis. We provide ongoing campaign optimization and adjustments to ensure maximum ROI.",
              },
              {
                title: "On-Site Brand Events:",
                content:
                  "We organize and execute successful on-site brand events, such as meet-and-greets, workshops, and product launches, featuring influential figures.",
              },
              {
                title: "Campaign Strategy:",
                content:
                  "We develop and implement comprehensive campaign strategies that align with your business objectives and target audience. We identify the right influencers, negotiate partnerships, and track campaign performance to ensure success.",
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
              src={influence1}
              alt="Brand Building Concept"
              className="object-cover"
            />
          </motion.div>

         
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <div className="flex justify-center items-center ">
            <Link to="/contact">
  <button className="bg-gray-900 text-white text-center rounded-full px-12 py-4 hover:bg-orange-600 mt-10">
    Let's Get Started →
  </button>
  </Link>
</div>

          </motion.div>
          <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
        >
          <h2 className="text-5xl font-bold mb-12 text-left font-use">
            Influencer Marketing That Converts
          </h2>
          <div className="space-y-8 text-left text-xl leading-relaxed text-gray-700">
            <p style={{fontSize : '1.3rem'}}>
              Imagine your brand's message echoing through the voices of influencers who truly resonate with your audience. 
              With a dynamic network of 100+ creators across diverse industries, we create authentic partnerships that spark 
              conversations, set trends, and drive unstoppable growth.
            </p>
            <p style={{fontSize : '1.3rem'}}>
              We amplify your brand through powerful storytelling, seamlessly weaving it into the fabric of social media. 
              Every post, every mention, and every engagement transforms followers into devoted advocates and casual 
              scrollers into lifelong customers.
            </p>
            <p  style={{fontSize : '1.3rem'}} className="font-semibold text-gray-900">
              Welcome to the future of influencer marketing—where creativity meets data, and real connections spark 
              extraordinary success.
            </p>
          </div>
        </motion.section>

        {/* FAQ Section with Parallax */}
        <motion.section
          ref={faqRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-8xl font-bold mb-8  ml-5 font-use">FAQ</h2>
          <div className="space-y-2">
            {[
              {
                question: "How do you select the right influencers for my brand?",
                answer:
                  "We carefully analyze influencer demographics, audience engagement, brand alignment, and campaign objectives to select the most suitable influencers for your brand.",
              },
              {
                question: "How do you measure the success of an influencer marketing campaign?",
                answer:
                  "We track key metrics such as reach, engagement, website traffic, conversions, and brand mentions to measure campaign effectiveness and ROI.",
              },
              {
                question: "What types of content do influencers typically create for brands?",
                answer:
                  "Influencers create a variety of content formats, including social media posts (images, videos, stories), blog posts, vlogs, live streams, and stories.",
              },
              {
                question: "What are the costs associated with influencer marketing?",
                answer:
                 "Costs vary depending on factors such as influencer reach, campaign objectives, content type, and the number of influencers involved."
              },
              {
                question: "What are 3 Rs of influencer Marketing?  ",
                answer:
                  "The 3 Rs of Influencer Marketing—Relevance, Reach, and Resonance—guide successful collaborations. Relevance ensures alignment with your brand and audience, Reach measures audience size and engagement, and Resonance evaluates credibility and impact. Focusing on these factors helps brands choose influencers who authentically connect with their audience and drive real results.",
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

