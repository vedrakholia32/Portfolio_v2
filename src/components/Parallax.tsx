'use client';

import { useRef, ReactNode } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function Parallax({ 
  children, 
  speed = 0.5, 
  className = '',
  direction = 'up'
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  // Always call hooks - calculate transforms for both x and y
  const yUp = useTransform(scrollYProgress, [0, 1], [0, -speed * 100]);
  const yDown = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -speed * 100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
  const noTransform = useTransform(scrollYProgress, [0, 1], [0, 0]);

  // Select the appropriate transform based on direction
  const getStyle = () => {
    switch (direction) {
      case 'up':
        return { y: yUp };
      case 'down':
        return { y: yDown };
      case 'left':
        return { x: xLeft };
      case 'right':
        return { x: xRight };
      default:
        return { y: noTransform };
    }
  };

  return (
    <motion.div
      ref={ref}
      style={getStyle()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
