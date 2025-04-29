import React, { useEffect, useRef, useState } from 'react';

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  typeSpeed = 100,
  backSpeed = 50,
  loop = true,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentString = strings[currentIndex];
    
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Handle typing or deleting logic
    if (!isDeleting && currentText === currentString) {
      // Pause at the end of typing before deleting
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(backSpeed);
      }, 1500);
    } else if (isDeleting && currentText === '') {
      // Move to the next string
      setIsDeleting(false);
      setTypingSpeed(typeSpeed);
      setCurrentIndex((prevIndex) => {
        if (prevIndex === strings.length - 1) {
          return loop ? 0 : prevIndex;
        }
        return prevIndex + 1;
      });
    } else {
      // Set the next timeout for typing or deleting
      timeoutRef.current = setTimeout(() => {
        if (isDeleting) {
          setCurrentText(currentString.substring(0, currentText.length - 1));
        } else {
          setCurrentText(currentString.substring(0, currentText.length + 1));
        }
      }, typingSpeed);
    }
    
    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [strings, currentIndex, currentText, isDeleting, typingSpeed, typeSpeed, backSpeed, loop]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypedText;