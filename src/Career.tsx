import React from 'react'
import Footer from './Footer'
import JobListings from './JobListing'
import { useState } from 'react'
import blacklogo from "./components/black_white_logo.png"
import whitelogo from "./components/logo-color.png"
import { ArrowRight, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react';
import hamburger from "./components/hamburger.png"
import Navbar from './Navbar'


const Career = () => {
    const [logo , setLogo] = useState(blacklogo);
    const [hovered, setHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
       <Navbar/>
            <section className="text-black py-20 text-center min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-center mb-8 font-use" style={{ fontSize: "20rem" }}>
            CAREERS
          </h1>
        </div>
        
      </section>
      <JobListings />
      <Footer/>
      
    </div>
  )
}

export default Career