import hamburger from "./components/hamburger.png";
import { X } from 'lucide-react';
import { Parallax } from 'react-parallax';
import { useState } from "react";
import AboutUs from "./components/about-parallex.png";
import ImageSlider from "./ImageSlider";
import pic1 from "./components/pic-1.png";
import pic2 from "./components/pic-2.png";
import pic3 from "./components/pic-3.png";
import pic4 from "./components/pic-4.png";
import pic5 from "./components/pic-5.png";
import pic6 from "./components/pic-6.jpg";
import group from "./components/BB.jpg";
import Footer from "./Footer";
import blacklogo from "./components/fin-logo.png"
import whitelogo from "./components/fin-logo-2.png"
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const horizontalImages = [pic1, pic2, pic3, pic4, pic5, pic6];
  const [logo , setLogo] = useState(blacklogo);

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <Navbar/>
      {/* About Section */}
      <section className="text-black py-20 text-center min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-center mb-8 font-use font-text-sol" >
            ABOUT US
          </h1>
        </div>
      </section>

      {/* Parallax with Background Image */}
      <Parallax
        blur={0}
        bgImage={AboutUs}
        strength={200}
        className="h-[600px] relative" // Reduced from 1000px to 600px
      >
      </Parallax>

      {/* Content Section with Parallax Effect */}
      <Parallax strength={150} className="bg-white">
      <section className="pt-10 px-6"> {/* Reduced padding-top from py-20 */}
        <div className="max-w-6xl mx-auto">
          <p className="text-[1.5rem] leading-relaxed mb-10 text-[#333333]">
            Digital Polaris illuminates brands in the digital universe. Fueled by innovation and data-driven
            strategies, we craft tailored solutions that amplify visibility, boost engagement, and drive conversions.
            Our team of seasoned professionals delivers measurable results that spark growth and ensure your
            brand's success in an ever-evolving digital world.
          </p>

          <h2 className="text-[3.5rem] font-bold mb-10 text-[#333333]">
            Experience Limitless Growth
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-[1.5rem] font-bold text-[#333333] mb-1">
                Ethos:
              </h3>
              <p className="text-[1.5rem] text-[#333333]">
                We are a results-oriented team of digital marketing specialists, which builds thriving brands.
              </p>
            </div>

            <div>
              <h3 className="text-[1.5rem] font-bold text-[#333333] mb-1">
                Mastery:
              </h3>
              <p className="text-[1.5rem] text-[#333333]">
                We craft tailored digital strategies that ensures manifold visibility, engagement, and delivers
                desired results.
              </p>
            </div>

            <div>
              <h3 className="text-[1.55rem] font-bold text-[#333333] mb-1">
                Polaris:
              </h3>
              <p className="text-[1.5rem] text-[#333333]">
                Ensuring transformative growth to propel brands to market leadership.
              </p>
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
        <Link to="/contact">
      <h2 className="text-8xl font-bold text-left mb-24  relative group font-use" >
      LET'S CONNECT
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </h2>
    </Link>
  </div>
      <section >
<Footer/>
</section>
    </div>
  );
};

export default About;