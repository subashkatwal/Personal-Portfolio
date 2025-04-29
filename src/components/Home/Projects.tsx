import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import ProjectCard from '../UI/ProjectCard';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [

  {
    id: 1,
    title: 'Word Predictor Using LSTMs',
    description: 'A word prediction model using LSTM that predicts the next word based on user input, trained on text data in English and Nepali',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ripBrsqalnkc867wY4xnNw.png',
    tags: ['LSTM', 'API Integration'],
    link: '#',
  },
  {
    id: 2,
    title: 'Book Recommendation System',
    description: 'A simple book recommender built with Python, NumPy, and Pandas that suggests top books using a popularity-based algorithm',
    image: 'https://1.bp.blogspot.com/-b_mm9GxYn2I/Vw1a8uS_lcI/AAAAAAAACg4/1JriSOSnnBcSMdepO-uZeyWV3GSc_FloQCLcB/s1600/books1.jpg',
    tags: ['Python', 'Numpy', 'Scikit-Learn'],
    link: 'https://github.com/subashkatwal/BookRecommendationSystem',
  },
  {
    id: 3,
    title: 'EventHub',
    description: 'An event management platform for creating, viewing, and registering for events, with calendar integration and admin controls for easy event handling',
    image: 'https://catchspaces.sfo2.digitaloceanspaces.com/nepalbuzz/2017/09/26091-1240437_10151706090538090_58590359_n-940x529.jpg',
    tags: ['Django', 'SQLite', 'HTML/CSS','JS'],
    link: 'https://github.com/subashkatwal/EventHub',
  },
  {
    id: 4,
    title: 'Machine Learning',
    description: 'A set of ML projects including heart disease prediction, password strength checker, and rock vs mine classification built using Python.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Python', 'Scikit-Learn','Numpy','Pandas','Decision Tree'],
    link: 'https://github.com/subashkatwal/Machine-Learning/tree/master',
  },
  
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  
  const isSectionInView = useInView(sectionRef, { threshold: 0.1 });
  const isTitleInView = useInView(titleRef, { threshold: 0.1 });

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`py-20 transition-opacity duration-1000 ${
        isSectionInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isTitleInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project represents unique challenges 
            and solutions that showcase my skills and approach to development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isSectionInView}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/subashkatwal?tab=repositories"
            className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 font-medium rounded-lg transition-colors border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl inline-block"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;