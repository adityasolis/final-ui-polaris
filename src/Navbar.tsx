import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import hamburger from "./components/hamburger.png";
import blacklogo from "./components/fin-logo.png";
import whitelogo from "./components/fin-logo-2.png";
import { X } from 'lucide-react';

const Navbar = () => {
  const [logo, setLogo] = useState(blacklogo);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <div className="fixed top-0 left-0 z-50 p-4 md:p-6 text-2xl font-bold">
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
      <nav className="fixed top-0 right-0 z-50 p-4 md:p-6">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <img src={hamburger} alt="Menu Open" className="w-6 h-6 inline-block ml-2" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-8 space-y-12 mt-20">
          <Link to="/">
            <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{ fontSize: "2.5rem", fontWeight: '600', marginBottom: '2rem' }}>
              HOME
            </button>
          </Link>
          <Link to="/about">
            <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{ fontSize: "2.5rem", fontWeight: '600', marginBottom: '2rem' }}>
              ABOUT US
            </button>
          </Link>
          <Link to="/service">
            <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{ fontSize: "2.5rem", fontWeight: '600', marginBottom: '2rem' }}>
              SOLUTIONS
            </button>
          </Link>
          <Link to="/influencer">
            <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{ fontSize: "2.5rem", fontWeight: '600', marginBottom: '2rem' }}>
              INFLUENCER MARKETING
            </button>
          </Link>
          <Link to="/career">
            <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{ fontSize: "2.5rem", fontWeight: '600', marginBottom: '2rem' }}>
              CAREERS
            </button>
          </Link>
          <Link to="/contact">
            <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{ fontSize: "2.5rem", fontWeight: '600', marginBottom: '2rem' }}>
              CONTACT US
            </button>
          </Link>
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
