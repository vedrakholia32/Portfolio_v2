'use client';

import { useState, useEffect } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
  scrambleChars?: string;
  delay?: number;
}

export default function TextScramble({ 
  text, 
  className = '', 
  speed = 50,
  scrambleChars = '!<>-_\\/[]{}—=+*^?#________',
  delay = 0
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const startScramble = () => {
      setIsScrambling(true);
      let frame = 0;
      const maxFrames = text.length * 3;
      
      const animate = () => {
        let output = '';
        
        for (let i = 0; i < text.length; i++) {
          if (frame > i * 3) {
            output += text[i];
          } else {
            output += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          }
        }
        
        setDisplayText(output);
        
        if (frame < maxFrames) {
          frame++;
          setTimeout(animate, speed);
        } else {
          setDisplayText(text);
          setIsScrambling(false);
        }
      };
      
      animate();
    };

    if (delay > 0) {
      timeout = setTimeout(startScramble, delay);
    } else {
      startScramble();
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [text, speed, scrambleChars, delay]);

  return (
    <span className={`${className} ${isScrambling ? 'animate-pulse' : ''}`}>
      {displayText || text}
    </span>
  );
}
