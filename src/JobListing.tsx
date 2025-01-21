import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const JobCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-white p-8 flex flex-col items-center text-center border border-gray-100 w-[445px] h-[445px] transition-shadow duration-300 hover:shadow-lg">
    <h2 className="text-4xl font-bold mb-8 text-gray-900 tracking-wide font-use">{title}</h2>
    <p className="text-gray-600 mb-8 w-full text-lg flex-grow">{description}</p>
    <Link to={`/careerinfo?jd=${title}`} >
    <button className="inline-flex items-center gap-2 text-gray-900 border border-gray-900 rounded-full px-8 py-3 transition-colors duration-300 hover:bg-[#ff6b00] hover:text-white hover:border-[#ff6b00] group">
      Apply
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
    </Link>
  </div>
  );
};

const JobListings = () => {
  const jobs = [
    {
      title: 'DIGITAL MARKETING EXPERT',
      description: 'We are looking for a creative and results-driven Digital Marketing Expert to elevate our online presence and drive growth. If you\'re passionate about crafting innovative strategies, analyzing data, and achieving measurable results, we want you!'
    },
    {
      title: 'GRAPHIC DESIGNER',
      description: 'We\'re on the lookout for a talented and innovative Graphic Designer to bring fresh ideas to life and create visually stunning designs. If you have a passion for design, creativity, and attention to detail, we want you!'
    },
    {
      title: 'CONTENT WRITER',
      description: 'We\'re seeking a skilled and creative Content Writer to craft compelling, high-quality content that engages and informs. If you have a passion for writing and a knack for storytelling, we want you! . Feel free to include your thought in your content.'
    }
  ];

  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 justify-items-center">
          {jobs.map((job, index) => (
            <JobCard key={index} title={job.title} description={job.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;