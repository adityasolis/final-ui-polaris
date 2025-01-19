import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react';

function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return elementRef;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useIntersectionObserver();
  const industriesRef = useIntersectionObserver();
  const approachRef = useIntersectionObserver();
  const impactRef = useIntersectionObserver();
  const storiesRef = useIntersectionObserver();
  const contactRef = useIntersectionObserver();

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    setIsMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 z-50 p-4 md:p-6">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 space-y-6 mt-16">
          <button onClick={() => scrollToSection(headerRef)} className="block w-full text-left py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors">Home</button>
          <button onClick={() => scrollToSection(industriesRef)} className="block w-full text-left py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors">Industries</button>
          <button onClick={() => scrollToSection(approachRef)} className="block w-full text-left py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors">Approach</button>
          <button onClick={() => scrollToSection(impactRef)} className="block w-full text-left py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors">Impact</button>
          <button onClick={() => scrollToSection(storiesRef)} className="block w-full text-left py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors">Stories</button>
          <button onClick={() => scrollToSection(contactRef)} className="block w-full text-left py-3 px-4 hover:bg-blue-50 rounded-lg transition-colors">Contact</button>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section ref={headerRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-20 bg-white">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            SHAPING VISIONS,<br />
            DELIVERING RESULTS
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            We <span className="font-semibold">CREATE</span> brands, <span className="font-semibold">PRESERVE</span> unique identity, <span className="font-semibold">TRANSFORM</span> your business.
          </p>
        </section>

        {/* Industries Section */}
        <section ref={industriesRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16 bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">INDUSTRIES IMPACTED</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={industry.image} 
                  alt={industry.title} 
                  className="w-full h-48 md:h-64 object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                  <h3 className="text-lg font-semibold">{industry.title}</h3>
                  <button className="mt-2 text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Approach Section */}
        <section ref={approachRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">OUR APPROACH</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {approaches.map((approach, index) => (
              <div key={index} className="text-center">
                <img 
                  src={approach.image} 
                  alt={approach.title} 
                  className="w-full h-32 md:h-48 object-cover grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
                <p className="mt-2 font-semibold text-sm md:text-base">{approach.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section ref={impactRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16 bg-gray-50">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">POTENTIAL IMPACT</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-4">
              {impacts.map((impact, index) => (
                <img 
                  key={index} 
                  src={impact} 
                  alt="Impact" 
                  className="w-full h-32 md:h-48 object-cover rounded-lg"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="space-y-4">
              {impactPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                  <p className="text-sm md:text-base">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stories Section */}
        <section ref={storiesRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">FEATURED STORIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {stories.map((story, index) => (
              <div key={index} className="group cursor-pointer">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-48 object-cover rounded-lg mb-4 transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <h3 className="font-semibold text-sm md:text-base group-hover:text-blue-600 transition-colors">{story.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16 bg-gray-900 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">LET'S DISCUSS YOUR DIGITAL MARKETING NEEDS</h2>
          <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="bg-transparent border border-gray-700 p-3 rounded-lg w-full focus:border-blue-500 focus:outline-none transition-colors"
            />
            <input 
              type="text" 
              placeholder="Contact" 
              className="bg-transparent border border-gray-700 p-3 rounded-lg w-full focus:border-blue-500 focus:outline-none transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent border border-gray-700 p-3 rounded-lg w-full focus:border-blue-500 focus:outline-none transition-colors"
            />
            <textarea 
              placeholder="Message" 
              rows={4} 
              className="bg-transparent border border-gray-700 p-3 rounded-lg w-full md:col-span-2 focus:border-blue-500 focus:outline-none transition-colors"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors md:col-span-2 w-full md:w-auto md:mx-auto">
              Submit
            </button>
          </form>

          <footer className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
            <img 
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9" 
              alt="Logo" 
              className="h-8 md:h-12 w-auto object-contain"
              loading="lazy"
            />
            <div className="flex items-center gap-4 md:gap-6">
              <Mail className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
              <Phone className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors" />
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

const industries = [
  {
    title: 'Insurance & Banking',
    image: 'https://images.unsplash.com/photo-1560472355-536de3962603',
  },
  {
    title: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
  },
  {
    title: 'Retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
  },
  {
    title: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
  },
  {
    title: 'IT Services',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
  },
  {
    title: 'Green Energy',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e',
  },
];

const approaches = [
  {
    title: 'ENGAGE',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093',
  },
  {
    title: 'ANALYZE',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
  {
    title: 'STRATEGIZE',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  },
  {
    title: 'IMPLEMENT',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093',
  },
  {
    title: 'ACHIEVE',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  },
];

const impacts = [
  'https://images.unsplash.com/photo-1552581234-26160f608093',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  'https://images.unsplash.com/photo-1552664730-d307ca884978',
  'https://images.unsplash.com/photo-1552581234-26160f608093',
];

const impactPoints = [
  'Increased Brand Visibility & Reach',
  'Enhanced Brand Reputation & Trust',
  'Stronger Customer Relationships & Loyalty',
  'Measurable Business Growth & ROI',
  'Data-Driven Insights & Strategic Direction',
];

const stories = [
  {
    title: 'Streamlining Business Operations: The Power of SaaS Business Tools',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093',
  },
  {
    title: 'Boost Your Marketing Results Through Data-Driven Decision Making',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
  {
    title: 'Outshine the Competition with the Best Digital Marketing Company in Bangalore',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
  },
];

export default App;