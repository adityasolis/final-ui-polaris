import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import blacklogo from "./components/black_white_logo.png";
import whitelogo from "./components/logo-color.png";
import { X } from 'lucide-react'; // Import only what you need
import hamburger from "./components/hamburger.png";
import Footer from './Footer';
import Navbar from './Navbar';

const CareerInfo = () => {
  const [title, setTitle] = useState('');
  const [responsibilities, setResponsibilities] = useState<string[]>([]);
  const [logo, setLogo] = useState(blacklogo);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [resume, setResume] = useState<File | null>(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const jobId = params.get('jd');

    if (jobId === 'CONTENT WRITER') {
      setTitle('Content Writer');
      setResponsibilities([
        'Content Creation: Write, edit, and proofread high-quality content for various platforms including websites, blogs, social media, email campaigns, and marketing collateral.',
        'Research: Conduct thorough research on industry-related topics to generate original content and ensure accuracy and credibility.',
        'SEO Optimization: Implement SEO best practices to enhance content visibility and ranking on search engines.',
        'Content Strategy: Collaborate with the marketing team to develop and execute content strategies that align with business goals and audience needs.',
        'Brand Voice: Maintain and adapt the company’s brand voice and style across all content to ensure consistency.',
        'Deadline Management: Manage multiple projects simultaneously while meeting deadlines and maintaining high standards of quality.',
        'Feedback Integration: Incorporate feedback from stakeholders and revise content as needed to improve effectiveness and alignment with objectives.',
        'Analytics: Monitor content performance using analytics tools and adjust strategies to improve engagement and conversion rates.'
      ]);
    } else if (jobId === 'MOTION GRAPHIC DESIGNER') {
      setTitle('Motion Graphic Designer');
      setResponsibilities([
        'Collaborate with the marketing and creative teams to develop design concepts.',
        'Create compelling and visually appealing graphics that align with brand guidelines.',
        'Design marketing materials, including brochures, flyers, posters, and digital advertisements.',
        'Develop layouts and production designs for websites, social media, and other digital platforms.',
        'Ensure final graphics and layouts are visually appealing and on-brand.',
        'Amend designs based on feedback and make revisions as necessary.',
        'Stay up-to-date with industry trends and best practices in graphic design and digital media.',
      ]);
    } else if (jobId === 'SEO EXECUTIVE') {
      setTitle('Seo Executive');
      setResponsibilities([
        'Conduct thorough keyword research to identify opportunities for content optimization and growth.',
        'Optimize website content, including landing pages, blog posts, and product descriptions, for targeted keywords.',
        'Implement on-page SEO strategies, including meta tags, headers, and internal linking structures.',
        'Analyze website performance using tools such as Google Analytics, Google Search Console, and other SEO tools to track KPIs and measure success',
        'Collaborate with content creators to develop SEO-friendly content and ensure alignment with best practices.',
        'Stay updated on industry trends, algorithm updates, and emerging SEO technologies to ensure strategies are current and effective.',
        "Monitor competitors' SEO strategies and performance to identify areas for improvement.",
        'Generate regular reports on SEO performance, highlighting key insights and recommendations for optimization.'  
      ]);
    }
  }, [location.search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create FormData to handle file upload and other fields
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone_number', phoneNumber);
    formData.append('portfolio_url', portfolioUrl);
    formData.append('cover_letter', coverLetter);
    formData.append('position_role', title);
    if (resume) {
      formData.append('resume', resume);
    }

    try {
      const response = await fetch('http://localhost:3000/job-mail', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        alert('Your application has been submitted successfully!');
        window.location.reload()
      } else {
        throw new Error('Error submitting application');
      }
    } catch (error) {
      console.error('Error:', error); // for logging the errors
      alert('There was an error submitting your application.');
      window.location.reload()
    }
  };

  return (
    <div>
      {/* Logo */}
      <Navbar />
      {/* Career Section */}
      <div className="min-h-screen bg-white">
        {/* Main Content */}
        <main className="pt-32 px-6 max-w-6xl mx-auto">
          <h1 className="text-6xl sm:text-6xl md:text-6xl font-bold text-center mb-4">CAREERS</h1>

          <h2 className="text-4xl text-center mb-16">{title}</h2>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6">KEY RESPONSIBILITY AREA (KRA)</h3>
            <ul className="space-y-4">
              {responsibilities.map((item, index) => (
                <li key={index} className="text-lg">{item}</li>
              ))}
            </ul>
          </div>

          {/* Application Form */}
          <form className="space-y-6 mb-16" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Enter Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-lg bg-gray-50"
                  placeholder="Enter Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2">Contact</label>
                <input 
                  type="tel" 
                  className="w-full p-3 rounded-lg bg-gray-50"
                  placeholder="+91"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-3 rounded-lg bg-gray-50"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2">Choose File</label>
                <input 
                  type="file" 
                  className="w-full p-3 rounded-lg bg-gray-50"
                  onChange={(e) => setResume(e.target.files?.[0] || null)}
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
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
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
