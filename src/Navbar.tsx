import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import hamburger from "./components/hamburger.png";
import blacklogo from "./components/fin-logo.png";
import whitelogo from "./components/fin-logo-2.png";
import { X } from 'lucide-react';

const Navbar = () => {
  const [logo, setLogo] = useState(blacklogo);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : ''}`}>
        <div className="flex justify-between items-center max-w-[1920px] mx-auto">
          <div className="p-4 md:p-6 text-2xl font-bold">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                width={100}
                height={200}
                onMouseEnter={() => setLogo(whitelogo)}
                onMouseLeave={() => setLogo(blacklogo)}
              />
            </Link>
          </div>
          <nav className="p-4 md:p-6">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <img src={hamburger} alt="Menu Open" className="w-6 h-6 inline-block ml-2" />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-white transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-hidden`}
      >
        <div className="flex flex-col justify-center h-full">
          <div className="space-y-4">
            <Link to="/">
              <button className="block w-full py-2 md:py-3 px-4 text-right hover:text-orange-500 transition-colors text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold pr-8 md:pr-12 lg:pr-16 xl:pr-24">
                Home
              </button>
            </Link>
            <Link to="/about">
              <button className="block w-full py-2 md:py-3 px-4 text-right hover:text-orange-500 transition-colors text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold pr-8 md:pr-12 lg:pr-16 xl:pr-24">
                About Us
              </button>
            </Link>
            <Link to="/service">
              <button className="block w-full py-2 md:py-3 px-4 text-right hover:text-orange-500 transition-colors text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold pr-8 md:pr-12 lg:pr-16 xl:pr-24">
                Solutions
              </button>
            </Link>
            <Link to="/influencer">
              <button className="block w-full py-2 md:py-3 px-4 text-right hover:text-orange-500 transition-colors text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold pr-8 md:pr-12 lg:pr-16 xl:pr-24">
                Influencer Marketing
              </button>
            </Link>
            <Link to="/career">
              <button className="block w-full py-2 md:py-3 px-4 text-right hover:text-orange-500 transition-colors text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold pr-8 md:pr-12 lg:pr-16 xl:pr-24">
                Careers
              </button>
            </Link>
            <Link to="/contact">
              <button className="block w-full py-2 md:py-3 px-4 text-right hover:text-orange-500 transition-colors text-6xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold pr-8 md:pr-12 lg:pr-16 xl:pr-24">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;