import hamburger from "./components/hamburger.png";
import blacklogo from "./components/black_white_logo.png";
import { X } from 'lucide-react';
import { Parallax } from 'react-parallax';
import { useState } from "react";
import AboutUs from "./components/about-3.jpg";
import ImageSlider from "./ImageSlider";
import pic1 from "./components/pic-1.png";
import pic2 from "./components/pic-2.png";
import pic3 from "./components/pic-3.png";
import pic4 from "./components/pic-4.png";
import pic5 from "./components/pic-5.png";
import pic6 from "./components/pic-6.jpg";
import group from "./components/BB.jpg";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const horizontalImages = [pic1, pic2, pic3, pic4, pic5, pic6];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
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

      {/* About Section */}
      <section className="text-black py-20 text-center min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-center mb-8 font-use" style={{ fontSize: "10rem" }}>
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Parallax with Background Image */}
      <Parallax
        blur={0}
        bgImage={AboutUs}
        strength={200}
        className="h-[800px] relative mb-10"
      >
      </Parallax>

      {/* Content Section with Parallax Effect */}
      <Parallax strength={150} className="bg-white py-16">
        <section>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-8 text-lg md:text-xl lg:text-2xl">
                Digital Polaris illuminates brands in the digital universe. Fueled by innovation and data-driven
                strategies, we craft tailored solutions that amplify visibility, boost engagement, and drive conversions.
                Our team of seasoned professionals delivers measurable results that spark growth and ensure your
                brand's success in an ever-evolving digital world.
              </p>
              <h3 className="text-3xl font-bold mb-6">Experience Limitless Growth</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold">Ethos:</h4>
                  <p className="text-lg md:text-xl lg:text-2xl">
                    We are a results-oriented team of digital marketing specialists, which builds thriving brands.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Mastery:</h4>
                  <p className="text-lg md:text-xl lg:text-2xl">
                    We craft tailored digital strategies that ensure manifold visibility, engagement, and deliver desired results.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold">Polaris:</h4>
                  <p className="text-lg md:text-xl lg:text-2xl">
                    Ensuring transformative growth to propel brands to market leadership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Parallax>

      {/* Image Slider with Horizontal Parallax */}
      <Parallax strength={100}>
        <section className="py-16">
          <ImageSlider images={horizontalImages} type="horizontal" autoSlideInterval={10000000} />
        </section>
      </Parallax>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold mb-1 text-center">TESTIMONIAL</h3>
          <h2 className="text-4xl font-bold mb-12 text-center">OUR HAPPY CUSTOMERS</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold">Anita R.</h3>
                <div className="ml-4 text-yellow-400">★★★★★</div>
              </div>
              <p className="text-gray-700 italic">
                "What sets them apart is their transparency and dedication. They provide clear reports, strategic insights, and consistent communication. A truly professional team!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Parallax Section */}
      <Parallax
        blur={0}
        bgImage={group}
        strength={200}
        className="h-[800px] relative"
      >
      </Parallax>
      <div className="container mx-auto ">
      <h2 className="text-8xl font-bold text-left mb-24  relative group font-use" >
      LET'S DISCUSS
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </h2>
  </div>
      <section >

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
</section>
    </div>
  );
};

export default About;
