'use client';

import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Github, Linkedin, Mail } from 'lucide-react';
import TextScramble from './TextScramble';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 px-4 sm:px-6">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(102, 126, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(240, 147, 251, 0.1) 0%, transparent 50%)'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}          className="text-center max-w-4xl mx-auto"
        >
          {/* Profile Avatar with Neumorphism */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 sm:mb-12"
          >
            {/* <div className="neu-avatar mx-auto w-32 h-32 sm:w-48 sm:h-48">
              <div className="neu-avatar-inner w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <span className="text-4xl sm:text-6xl font-bold text-white">VR</span>
              </div>
            </div> */}
          </motion.div>          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 gradient-text px-2"
          >
            <TextScramble 
              text="Ved Rakholia" 
              delay={800}
              speed={80}
            />
          </motion.h1>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="neu-card inline-block px-4 sm:px-6 lg:px-8 py-3 sm:py-4 mb-6 sm:mb-8 mx-2"
          >            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium leading-tight">
              <TextScramble 
                text="Web Developer & Machine Learning Enthusiast" 
                delay={1500}
                speed={20}
              />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}            className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Passionate about creating innovative web solutions and exploring the frontiers of machine learning.
            Specializing in modern web technologies and AI-driven applications.
          </motion.p>          {/* Social Links with Neumorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="neu-social"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="neu-social"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:john@example.com"
              className="neu-social"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>          {/* CTA Buttons with Neumorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4"
          >
            <motion.button
              onClick={scrollToAbout}
              className="neu-button-primary px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Work
            </motion.button>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              className="neu-button px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-gray-700 transition-all duration-300 inline-block text-center w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>          {/* Floating Skills Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 max-w-2xl mx-auto px-4"
          >
            {['React', 'Python', 'Next.js', 'TensorFlow', 'TypeScript', 'Machine Learning'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                className="neu-card px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-600 float-animation"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>      {/* Scroll Indicator with Neumorphism */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
          className="neu-button p-3 sm:p-4"
        >
          <ChevronDownIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
        </motion.button>
      </motion.div>
    </section>
  );
}
