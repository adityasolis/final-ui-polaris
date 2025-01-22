import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Pointer as Pinterest,
  ArrowRight,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import whitelogo from "./components/fin-logo-2.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-black text-white pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Email Section */}
        <div className="space-y-6">
          <div className="w-16 h-16">
            <img src={whitelogo} alt="logo" width={150} />
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="SUBSCRIBE TO NEWSLETTER"
              className="w-full bg-transparent border border-white/40 rounded-full py-3 px-4 pr-12 text-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4 footer-left">COMPANY</h3>
          <ul className="space-y-3">
            <li className="footer-left"><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li className="footer-left"><Link to="/about" className="hover:text-gray-300">About Us</Link></li>
            {/* <li className="ml-10"><a href="#" className="hover:text-gray-300">Blog</a></li> */}
            <li className="footer-left"><Link to="/career" className="hover:text-gray-300">Career</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">SOLUTIONS</h3>
          <ul className="space-y-3">
            <li><Link to="/brand" className="hover:text-gray-300">Brand Sculpting</Link></li>
            <li><Link to="/performance" className="hover:text-gray-300">Performance Marketing & Lead Gen</Link></li>
            <li><Link to="/influencer" className="hover:text-gray-300">Influencer Marketing</Link></li>
            <li><Link to="/ecommerce" className="hover:text-gray-300">E-Commerce Solution</Link></li>
            <li><Link to="/marketplace" className="hover:text-gray-300">Marketplace Management</Link></li>
            <li><Link to="/digital" className="hover:text-gray-300">Digital Arts</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
            <p>Head Office : Ground Floor, Plot No 127, Sector 44, Gurugram, Haryana 122003</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 flex-shrink-0" />
            <p>Email: info@digitalpolaris.com</p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 flex-shrink-0" />
            <p>Phone: +91 9654160160</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 my-8">
        <hr className="border-white/20" />
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Social Links */}
          <div className="flex gap-6">
            <Link to="https://www.facebook.com/digitalpolaris" className="hover:text-gray-300"><Facebook className="w-5 h-5" /></Link>
            <Link to="https://x.com/DigitalPolaris1" className="hover:text-gray-300"><Twitter className="w-5 h-5" /></Link>
            <Link to="https://www.linkedin.com/company/digitalpolaris/" className="hover:text-gray-300"><Linkedin className="w-5 h-5" /></Link>
            <Link to="https://www.instagram.com/digital_polaris/" className="hover:text-gray-300"><Instagram className="w-5 h-5" /></Link>
     
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/about" className="hover:text-gray-300">ABOUT US</Link>
            <Link to="/contact" className="hover:text-gray-300">CONTACT US</Link>
            {/* <Link to="#" className="hover:text-gray-300">PRIVACY POLICY</Link> */}
            {/* <Link to="#" className="hover:text-gray-300">DISCLAIMER</Link> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-8">
          Copyright © 2025 • Digital Polaris
        </div>
      </div>
    </div>
  );
};

export default Footer;
