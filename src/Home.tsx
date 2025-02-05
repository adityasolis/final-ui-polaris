import React, { useEffect, useRef, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ArrowRight, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import potential from "./components/potential.png";
import f1 from "./components/f-1.png"
import f2 from "./components/f-2.png"
import f3 from "./components/f-3.png"
import insurance from "./components/insure.png"
import it from "./components/IT.jpg"
import realestate from "./components/real-estate.png"
import retail from "./components/Retail.jpg"
import green from "./components/Green.jpg"
import healthcare from "./components/HEALTH CARE.jpg"
import achieve from "./components/ENAGE ICONS-10.jpg"
import analyze from "./components/ENAGE ICONS-02.jpg"

import engage from "./components/ENAGE ICONS-01.jpg"
import strateize from "./components/ENAGE ICONS-07.jpg"
import implement from "./components/ENAGE ICONS-04.jpg"
import hamburger from "./components/hamburger.png"
import blacklogo from "./components/fin-logo.png"
import whitelogo from "./components/fin-logo-2.png"
import { Link } from 'react-router-dom';
import useGeoLocation from './GeoLocation';

import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
import Navbar from './Navbar';


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


function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locationData = useGeoLocation();
  console.log(locationData?.country_calling_code);
  const placeholder = locationData ? locationData?.country_calling_code : '+91';
  const headerRef = useIntersectionObserver();
  const industriesRef = useIntersectionObserver();
  const approachRef = useIntersectionObserver();
  const impactRef = useIntersectionObserver();
  const storiesRef = useIntersectionObserver();
  const contactRef = useIntersectionObserver();
  const [logo , setLogo] = useState(blacklogo);
  const [hovered, setHovered] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    email: '',
    relatedTo: '',
    message :'',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    // Log the form data for debugging
    console.log('Form Data:', formData);
  
    // Send the form data to the backend API
    fetch('http://localhost:3000/contact-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        // Alert on success
        alert('Your message has been sent successfully!');
        // Optionally, reset form data here if needed
    
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error:', error);
        // Alert on error
        alert('There was an error sending your message. Please try again.');
        window.location.reload()
      });
  };




  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const navigate = useNavigate()
  const handleNavigation = () => {
    navigate('/about');
  };
  const handleServiceNavigation = ()=>{
    navigate('/service')
  }
  const handleCareerNavigation = ()=>{
    navigate('/career')
  }

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    setIsMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="min-h-screen bg-white relative">
      {/* Navigation */}
      <Navbar/>
      {/* Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <section ref={headerRef} className="h-screen flex items-center justify-center bg-white px-10">
        <div className="text-center slide-in-bottom">
          <h1>
          <div className="text-5xl sm:text-xl md:text-7xl lg:text-8xl text-black tracking-tight font-use font-test mt-30">
  SHAPING VISIONS, <br/> DELIVERING RESULTS
</div>
            <div className=" text-lg md:text-2xl text-gray-600 max-w-4xl  text-center  hi-test "  style={{marginBottom : '250px' , marginLeft : '100px' }}>
              We <span className="font-bold text-black">CREATE</span> brands, <span className="font-bold text-black">PRESERVE</span> unique identity, <span className="font-bold text-black">TRANSFORM</span> your business.
            </div>
          </h1>
        </div>
      </section>

        {/* Industries Section */}
        <section ref={industriesRef} className="px-4 md:px-16 py-12 md:py-20">
          <h2 className="text-3xl md:text-6xl font-bold mb-12 uppercase border-b-2 border-black pb-4 font-use">
            INDUSTRIES IMPACTED
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <img
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="mt-4 flex  items-center">
                  <h3 className="text-2xl font-bold text-black uppercase mr-2 font-use">{industry.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Approach Section */}
        <section ref={approachRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16 bg-gray-100">
          <h2 className="text-3xl md:text-6xl font-bold mb-12 uppercase border-b-2 border-black pb-4 font-use">OUR APPROACH</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {approaches.map((approach, index) => (
              <div key={index} className="text-center">
     <img 
                  src={approach.image} 
                  alt={approach.title} 
                  className="w-80 h-32 md:h-48 object-cover grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
                <p className="mt-2 font-semibold text-sm md:text-base">{approach.title}</p>
                
              </div> 
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 max-w-6xl mx-auto mt-20">
            {services.map((service, index) => (
                <Link to={service.link}>
              <button 
                key={index}
                className="px-6 py-3 border-black rounded-full transition-colors duration-300 flex items-center gap-2 whitespace-nowrap"  style={{border : '1px solid black'}}

  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#F5682A';
    e.currentTarget.style.color = 'white';
    e.currentTarget.style.border = 'none';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = 'black';
    e.currentTarget.style.border = '1px solid black';
  }}
              >
                {service.name} <ArrowRight className="w-4 h-4" />
              </button>
              </Link>
            ))}
          </div>
          
        </section>

        {/* Impact Section */}
        <section ref={impactRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-12 uppercase border-b-2 border-black pb-4 font-use">OUR POTENTIAL IMPACT</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  
                <img 
                  src={potential} 
                  
                  alt="Impact" 
                  className="w-full h-42 md:h-50 object-cover rounded-lg"
                  loading="lazy"
                />
          <div className="space-y-8 sm:space-y-12 md:space-y-20">
  {impactPoints.map((point, index) => (
    <div key={index} className="flex items-center gap-2">
      <div className="w-2 h-2 bg-black rounded-full flex-shrink-0" />
      <p className="text-base sm:text-lg md:text-[1.5rem]">{point}</p>
    </div>
  ))}
</div>
          </div>
        </section>

        {/* Stories Section */}
        <section ref={storiesRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-12 uppercase border-b-2 border-black pb-4 font-use">OUR FEATURED STORIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {stories.map((story, index) => (
              <div key={index} className="group cursor-pointer">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-78 object-cover rounded-lg mb-4 transition-transform group-hover:scale-105"
                  loading="lazy"
                />
                <p style={{color :'#F5682A'}} >Category</p>
                <h3 className="font-semibold text-sm md:text-base group-hover:text-blue-600 transition-colors font-pop">{story.title}</h3>
                <p style={{color :'#3E3A3A' }} className='mt-12 '>Read More</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section  */}
        <section className="mb-24">
  <h2 className="text-8xl font-bold mb-8 mt-20 ml-20 font-use">FAQ</h2>
  <div className="space-y-2 ml-14">
    <div className="p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2" style={{fontSize: "1.5rem"}}>
      What is a Digital Marketing Service?
      </h3>
      <p className="text-gray-600" style={{fontSize: "1.5rem"}}>
      A Digital Marketing Service refers to a range of online strategies and techniques used to promote a business, brand, or product on digital platforms. These services include Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, Social Media Marketing (SMM), Content Marketing, Email Marketing, and more. The goal is to increase online visibility, drive traffic, performance & lead generation, and improve conversions by leveraging digital channels like search engines, social media, websites, and email.
      </p>
    </div>
    <div className="p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2" style={{fontSize: "1.5rem"}}>
      What is Content Marketing Services?
      </h3>
      <p className="text-gray-600" style={{fontSize: "1.5rem"}}>
      Content marketing services involve creating, distributing, and optimizing valuable, relevant, and engaging content to attract and retain a target audience. These services typically include blog writing, SEO content, social media content, email marketing, video production, whitepapers, and more.<br/><br/>
      The goal is to build brand awareness, drive organic traffic, generate leads, and establish authority in a specific industry. Effective content marketing focuses on providing informative and useful content rather than direct sales, helping businesses nurture customer relationships and increase conversions over time.
      </p>
    </div>
    <div className="p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2" style={{fontSize: "1.5rem"}}>
      Why Should You Hire a Digital Marketing Agency?
      </h3>
      <ol  className="text-gray-600 list-decimal ml-8" type="1" style={{fontSize: "1.5rem" }}>
        <li><strong>Expertise and Experience:</strong> Digital marketing agencies in India have specialized knowledge and experience in various online marketing strategies like SEO, PPC, social media, and content marketing.
      </li>
      <li><strong>Time-Saving:</strong> Outsourcing to an agency allows you to focus on your core business while experts handle your digital marketing efforts
      </li>
      <li><strong>Access to Tools and Resources:</strong>Agencies use advanced tools and analytics to optimize campaigns and track performance, which may be costly or complex for in-house teams to manage.
      </li>
      <li><strong>Scalability:</strong> Agencies can scale your digital marketing efforts as your business grows, ensuring that your marketing strategies align with your evolving needs.
      </li>
      <li><strong>Fresh Perspective:</strong> A digital marketing company can offer the best fresh ideas and insights, helping you stay ahead of trends and competitors in a rapidly changing online landscape.
      </li>
      </ol>
    </div>
    <div className="p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2" style={{fontSize: "1.5rem"}}>
      How do Brand Sculpting, Lead Generation, Digital Arts, Marketplace Management, and E-Commerce Solutions help businesses grow?
      </h3>
      <p className="text-gray-600" style={{fontSize: "1.5rem"}}>
      These services work together to strengthen a brand’s presence and drive sales. Brand Sculpting refines identity and messaging, Lead Generation attracts and converts potential customers, Digital Arts enhances visual appeal, Marketplace Management optimizes sales on platforms like Amazon and Flipkart, and E-Commerce Solutions ensure smooth online store operations. Combined, they improve visibility, engagement, and business growth.
      </p>
    </div>
    <div className="p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2" style={{fontSize: "1.5rem"}}>
      Why Choose Digital Polaris for Your Digital Marketing?
      </h3>
      <p className="text-gray-600" style={{fontSize: "1.5rem"}}>
      Digital Polaris is a results-driven digital marketing agency specializing in SEO services, social media services, content creation, and PPC services. Their expert team creates tailored strategies that boost your online presence and drive measurable results.<br></br>
      </p>
      <p className="text-gray-600" style={{fontSize: "1.5rem"}}>
      By partnering with Digital Polaris, you save time and resources, as they handle all your marketing needs. Their data-driven approach ensures continuous optimization for maximum ROI, helping you focus on growing your business while they take care of the rest.
      </p>
    </div>
    <div className="p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2" style={{fontSize: "1.5rem"}}>
      How can AI-powered digital marketing services help small businesses grow?
      </h3>
      <p className="text-gray-600" style={{fontSize: "1.5rem"}}>
      AI-powered digital marketing services help small businesses by automating tasks, optimizing ad campaigns, personalizing customer interactions, and analyzing data for better decision-making. AI tools enhance SEO, content marketing, social media management, and email campaigns, making them more efficient and cost-effective. With AI-driven insights, small businesses can target the right audience, improve engagement, and maximize ROI, even with limited resources.
      </p>
    </div>
    
  </div>
</section>
         
        
        {/* Contact Section */}
        <section ref={contactRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16 bg-white text-black">
            <Link to="/contact">
        <h2 className="text-8xl font-bold text-left mb-24  relative group font-use" >
      LET'S CONNECT
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
    </h2>
    </Link>
         
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block mb-2">Enter Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Full Name"
            className="w-full p-4 rounded-3xl bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2">Contact</label>
          <input
            type="tel"
            name="contact"
            placeholder={placeholder}
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-4 rounded-3xl bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="w-full p-4 rounded-3xl bg-gray-100"
          />
        </div>
        <div>
          <label className="block mb-2">Related To</label>
          <select
            name="relatedTo"
            value={formData.relatedTo}
            onChange={handleChange}
            className="w-full p-4 py-4 rounded-3xl bg-gray-100"
          >
            <option value="" disabled>Select a service</option>
            <option value="consulting">Brand Sculpting</option>
            <option value="development">Performance Generation and Lead Gen</option>
            <option value="design">Influencer Marketing</option>
            <option value="marketing">E-commerce Solution</option>
            <option value="support">Marketplace Management</option>
            <option value="training">Digital Arts</option>
            <option value="other">Others</option>
          </select>
        </div>
      </div>
      <div className="mt-8">
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Write Your Query"
              onChange={handleChange}
              className="w-full p-4 rounded-3xl bg-gray-100 h-32"
            ></textarea>
          </div>
          <div className="mt-8 flex justify-center">
            <button type="submit" className="bg-[#3E3A3A] text-white px-12 py-4 rounded-full hover:bg-black transition-colors flex items-center gap-2">
              Submit <ArrowRight className="w-5 h-5" />
            </button>
          </div>
     
    </form>
   
        </section>
<Footer/>
    
      </div>
    </div>
  );
}

const industries = [
  {
    title: 'Insurance & Banking',
    image: insurance,
  },
  {
    title: 'Real Estate',
    image: realestate,
  },
  {
    title: 'Retail',
    image: retail,
  },
  {
    title: 'Healthcare',
    image: healthcare,
  },
  {
    title: 'IT Services',
    image : it,
  },
  {
    title: 'Green Energy',
    image: green,
  },
];

const approaches = [
  {
    title: 'ENGAGE',
    image: engage,
  },
  {
    title: 'ANALYZE',
    image: analyze,
  },
  {
    title: 'STRATEGIZE',
    image: strateize,
  },
  {
    title: 'IMPLEMENT',
    image: implement,
  },
  {
    title: 'ACHIEVE',
    image: achieve,
  },
];



const impactPoints = [
  'Increased Brand Visibility & Reach',
  'Enhanced Brand Reputation & Trust',
  'Stronger Customer Relationships & Loyalty',
  'Measurable Business Growth & ROI',
  'Data-Driven Insights & Strategic Direction',
];

const services = [
    { name: 'Brand Sculpting', link: '/brand' },
    { name: 'Performance & Lead Generation', link: '/performance' },
    { name: 'Digital Arts', link: '/digital' },
    { name: 'Marketplace Management', link: '/marketplace' },
    { name: 'Influencer Marketing', link: '/influencer' },
    { name: 'Ecommerce Solutions', link: '/ecommerce' }
  ];

const stories = [
  {
    title: 'Streamlining Business Operations: The Power of SaaS Business Tools',
    image: f1,
  },
  {
    title: 'Boost Your Marketing Results Through Data-Driven Decision Making',
    image: f2,
  },
  {
    title: 'Outshine the Competition with the Best Digital Marketing Company in Bangalore',
    image: f3,
  },
];

export default Home;