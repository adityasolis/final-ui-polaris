import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import blacklogo from "./components/black_white_logo.png";
import whitelogo from "./components/logo-color.png";
import { X } from 'lucide-react'; // Import only what you need
import hamburger from "./components/hamburger.png";
import Footer from './Footer';

const CareerInfo = () => {
  const [title, setTitle] = useState('');
  const [responsibilities, setResponsibilities] = useState<string[]>([]);
  const [logo, setLogo] = useState(blacklogo);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const jobId = params.get('jd');

    if (jobId === 'CONTENT WRITER') {
      setTitle('Content Writer');
      setResponsibilities([
        'Craft compelling, high-quality content that engages and informs.',
        'Collaborate with the team to develop content strategies.',
        'Edit and proofread content for clarity, grammar, and style.',
        'Research industry trends to create relevant and valuable content.',
      ]);
    } else if (jobId === 'GRAPHIC DESIGNER') {
      setTitle('Graphic Designer');
      setResponsibilities([
        'Collaborate with marketing and creative teams to develop design concepts.',
        'Create compelling and visually appealing graphics that align with brand guidelines.',
        'Design marketing materials, including brochures, flyers, posters, and digital advertisements.',
        'Develop layouts and production designs for websites, social media, and other digital platforms.',
        'Ensure final graphics and layouts are visually appealing and on-brand.',
        'Amend designs based on feedback and make revisions as necessary.',
        'Stay up-to-date with industry trends and best practices in graphic design and digital media.',
      ]);
    } else if (jobId === 'DIGITAL MARKETING EXPERT') {
      setTitle('Digital Marketing Expert');
      setResponsibilities([
        'Elevate our online presence and drive growth through innovative strategies.',
        'Analyze digital marketing data to track performance and optimize campaigns.',
        'Work with cross-functional teams to develop and implement marketing campaigns.',
        'Research and identify new digital marketing trends and opportunities.',
      ]);
    }
  }, [location.search]);

  return (
    <div>
      {/* Logo */}
      <div className="fixed top-0 left-0 z-50 p-4 md:p-6 text-2xl font-bold">
        <img
          src={logo}
          alt="logo"
          width={100}
          height={100} // Fix height here for consistency
          onMouseEnter={() => setLogo(whitelogo)}
          onMouseLeave={() => setLogo(blacklogo)}
        />
      </div>

      {/* Hamburger Menu Button */}
      <nav className="fixed top-0 right-0 z-50 p-4 md:p-6">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <img src={hamburger} alt="Menu Open" className="w-6 h-6 inline-block ml-2" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 space-y-12 mt-16">
          <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{ fontSize: "2.5rem", fontWeight: '600' }}>
            Home
          </button>
          <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{ fontSize: "2.5rem", fontWeight: '600' }}>
            About
          </button>
          <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{ fontSize: "2.5rem", fontWeight: '600' }}>
            Services
          </button>
          <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{ fontSize: "2.5rem", fontWeight: '600' }}>
            Influencer Marketing
          </button>
          <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{ fontSize: "2.5rem", fontWeight: '600' }}>
            Blog
          </button>
          <button className="block w-full text-left py-3 px-4 text-xl hover:text-orange-500 rounded-lg transition-colors" style={{ fontSize: "2.5rem", fontWeight: '600' }}>
            Career
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Career Section */}
      <div className="min-h-screen bg-white">
        {/* Main Content */}
        <main className="pt-32 px-6 max-w-6xl mx-auto">
          <h1 className="text-8xl font-bold text-center mb-4">CAREERS</h1>
          <h2 className="text-4xl text-center mb-16">{title}</h2>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">RESPONSIBILITIES</h3>
            <ul className="space-y-4">
              {responsibilities.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul>
          </div>

          {/* Application Form */}
          <form className="space-y-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Enter Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-lg bg-gray-50"
                  placeholder="Enter Full Name"
                />
              </div>
              <div>
                <label className="block mb-2">Contact</label>
                <input 
                  type="tel" 
                  className="w-full p-3 rounded-lg bg-gray-50"
                  placeholder="+91"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-3 rounded-lg bg-gray-50"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Choose File</label>
                <input 
                  type="file" 
                  className="w-full p-3 rounded-lg bg-gray-50"
                />
              </div>
              <div>
                <label className="block mb-2">Position Applying For</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-lg bg-gray-50"
                  placeholder="Autofill"
                  value={title}
                  readOnly
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Cover Letter</label>
              <textarea 
                className="w-full p-3 rounded-lg bg-gray-50 min-h-[150px]"
                placeholder="Write Cover Letter"
              />
            </div>

            <div className="text-center">
              <button 
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-full inline-flex items-center space-x-2"
              >
                <span>Submit</span>
                <span>→</span>
              </button>
            </div>
          </form>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CareerInfo;
