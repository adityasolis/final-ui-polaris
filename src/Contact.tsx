import React from 'react'
import { useState } from 'react';
import hamburger from "./components/hamburger.png"
import blacklogo from "./components/black_white_logo.png"
import whitelogo from "./components/logo-color.png"
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Menu, X } from 'lucide-react';
import { useEffect , useRef} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import useGeoLocation from './GeoLocation';



const Contact = () => {
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
    
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [logo , setLogo] = useState(blacklogo);
      const [hovered, setHovered] = useState(false);
      const navigate = useNavigate()
      const contactRef = useIntersectionObserver();
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
      const handleNavigation = () => {
        navigate('/about');
      };
      const handleServiceNavigation = ()=>{
        navigate('/service')
      }
      const locationData = useGeoLocation();
      console.log(locationData?.country_calling_code);
      const placeholder = locationData ? locationData?.country_calling_code : '+91';
    
      
      const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        setIsMenuOpen(false);
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      };
  return (
  <div>
       <Navbar/>
             <section className="text-black py-20 text-center min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-center font-use font-text-sol" >
   CONTACT US 
          </h1>
        </div>
      </section>
         <section ref={contactRef} className="animate-slide-in px-4 md:px-16 py-12 md:py-16 bg-white text-black">
            <Link to="/contact" >
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
  
  )
}

export default Contact