import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
  delay: number;
  isVisible: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, color, delay, isVisible }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isVisible) {
      timeout = setTimeout(() => {
        setWidth(percentage);
      }, delay);
    } else {
      setWidth(0);
    }
    
    return () => clearTimeout(timeout);
  }, [isVisible, percentage, delay]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-slate-800 dark:text-white">{name}</span>
        <span className="text-slate-600 dark:text-slate-400">{percentage}%</span>
      </div>
      <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-1000 ease-out rounded-full`}
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;