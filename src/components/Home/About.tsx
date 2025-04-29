import React, { useEffect, useRef } from 'react';
import { useInView } from '../../hooks/useInView';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const isSectionInView = useInView(sectionRef, { threshold: 0.1 });
  const isImageInView = useInView(imageRef, { threshold: 0.1 });
  const isContentInView = useInView(contentRef, { threshold: 0.1 });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 transition-opacity duration-1000 ${
        isSectionInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 transform ${
              isImageInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <img 
                // src="/assests/images/me.png" 
                alt="Developer working" 
                className="object-cover w-full h-full"
              />
              {/* <div className="absolute inset-0 bg-blue-500 opacity-10"></div> */}
            </div>
            {/* <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-xl opacity-20"></div> */}
            {/* <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-500 rounded-xl opacity-20"></div> */}
          </div>
          
          <div 
            ref={contentRef}
            className={`transition-all duration-1000 transform ${
              isContentInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Machine Learning and AI Enthusiast
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            Hello! I’m passionate about AI and Machine Learning, using them to create smart, data-driven applications.
             With a strong foundation in Django for backend development and NLP for processing text, 
             I design solutions that are both functional and intelligent. I also focus on core web concepts, 
             ensuring smooth integration and easy-to-use experiences. By combining advanced algorithms with simple design,
              I use modern technology to solve real-world problems
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              My approach combines clean code with thoughtful design to build applications 
              that are not only visually appealing but also highly functional and accessible. 
              I believe in the power of good design to solve problems and create meaningful 
              digital experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Name:</h4>
                <p className="text-slate-600 dark:text-slate-400">Subash Katwal</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Email:</h4>
                <p className="text-slate-600 dark:text-slate-400">subashkatwal112@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Location:</h4>
                <p className="text-slate-600 dark:text-slate-400">Bhaktapur,Nepal</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Availability:</h4>
                <p className="text-slate-600 dark:text-slate-400">Freelance/Full-time</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;