import React, { useRef } from 'react';
import { useInView } from '../../hooks/useInView';
import SkillBar from '../UI/SkillBar';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const frontendSkills: Skill[] = [
  { name: 'Python', percentage: 90, color: 'bg-blue-400' },
  { name: 'Machine Learning', percentage: 80, color: 'bg-yellow-500' },
  { name: 'AI', percentage: 85, color: 'bg-purple-500' },
  { name: 'Django', percentage: 65, color: 'bg-purple-500' },
  { name: 'Scikit-Learn', percentage: 85, color: 'bg-blue-600' },
];

const designSkills: Skill[] = [
  { name: 'Video Editing', percentage: 88, color: 'bg-purple-500' },
  { name: 'UI Design', percentage: 85, color: 'bg-pink-500' },
  { name: 'Figma', percentage: 78, color: 'bg-green-500' },
  { name: 'Wireframing', percentage: 80, color: 'bg-indigo-500' },
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  
  const isSectionInView = useInView(sectionRef, { threshold: 0.1 });
  const isLeftColumnInView = useInView(leftColumnRef, { threshold: 0.1 });
  const isRightColumnInView = useInView(rightColumnRef, { threshold: 0.1 });

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className={`py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors transition-opacity duration-1000 ${
        isSectionInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            ref={leftColumnRef}
            className={`transition-all duration-1000 transform ${
              isLeftColumnInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Skills
            </h3>
            
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                  delay={index * 200}
                  isVisible={isLeftColumnInView}
                />
              ))}
            </div>
          </div>
          
          <div 
            ref={rightColumnRef}
            className={`transition-all duration-1000 transform ${
              isRightColumnInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Design
            </h3>
            
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <SkillBar
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                  delay={index * 200}
                  isVisible={isRightColumnInView}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Python', 'SQL', 'Figma', 'R'].map((tech, index) => (
            <div 
              key={index}
              className={`bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300 ${
                isSectionInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{tech}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Advanced</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Skills;