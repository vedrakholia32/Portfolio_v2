'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import TextScramble from './TextScramble';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 px-4" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'          }}>
            <TextScramble 
              text="About Me" 
              delay={isInView ? 200 : 0}
              speed={70}
            />
          </h2>          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="neu-card-white p-6 sm:p-8"
            >              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                With over 5 years of experience in software development, I specialize in creating 
                scalable web applications using modern technologies. My journey began with a curiosity 
                about how websites work, and it has evolved into a passion for building digital 
                experiences that make a difference.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                industry trends. When I&apos;m not coding, you can find me contributing to open-source 
                projects, mentoring junior developers, or exploring new technologies.
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">{['Problem Solving', 'Team Leadership', 'Agile Methodologies', 'Code Review'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="neu-tag px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-indigo-600"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="neu-card-white p-6 sm:p-8"
            >
              <h4 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-800">Quick Facts</h4>
              <div className="space-y-4 sm:space-y-6">
                {[
                  '5+ years of development experience',
                  '50+ projects completed',
                  'Bachelor\'s in Computer Science',
                  'Based in San Francisco, CA',
                  'Available for remote work'
                ].map((fact, index) => (
                  <motion.div
                    key={fact}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center"
                  >                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mr-3 sm:mr-4 neu-glow flex-shrink-0 mt-1"></div>
                    <span className="text-sm sm:text-base text-gray-600">{fact}</span>
                  </motion.div>
                ))}
              </div>              <div className="mt-8 sm:mt-10">
                <h5 className="font-semibold mb-3 sm:mb-4 text-gray-800 text-base sm:text-lg">Interests</h5>
                <div className="flex flex-wrap gap-2 sm:gap-3">{['AI/ML', 'Open Source', 'Photography', 'Travel'].map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      className="neu-tag px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-purple-600"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
