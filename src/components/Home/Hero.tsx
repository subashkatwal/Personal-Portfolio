import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import TypedText from '../UI/TypedText';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 opacity-70 dark:opacity-80 transition-colors"></div>
        {/* <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10 dark:opacity-5"></div> */}
      </div>
      
      <div 
        className={`container mx-auto px-4 md:px-6 pt-20 pb-16 relative z-10 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
            Creating Digital <span className="text-blue-500">Experiences</span>
          </h1>
          
          <div className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-8 h-8">
            <TypedText
              strings={[
                'ML Enthusiast',
                'AI Enthusiast',
                'Creative Thinker',
                'Problem Solver',
                
              ]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
          I build AI and ML systems that turn data into smart decisions—and save you time!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a 
              href="https://drive.google.com/file/d/1Ekzb8UZpvmoeikPh4SzSubm-zXiHn1hm/view?usp=sharing" 
              className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 font-medium rounded-lg transition-colors border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl"
            >
              View Resume 
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 text-blue-500" />
      </button>
    </section>
  );
};

export default Hero;