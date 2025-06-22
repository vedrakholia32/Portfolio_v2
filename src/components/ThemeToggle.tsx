'use client';

import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="neu-btn p-3 text-gray-700 dark:text-gray-300 relative overflow-hidden"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 180 : 0,
          scale: theme === 'dark' ? 0.8 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative w-6 h-6"
      >
        {theme === 'light' ? (
          <SunIcon className="w-6 h-6 text-yellow-500" />
        ) : (
          <MoonIcon className="w-6 h-6 text-blue-400" />
        )}
      </motion.div>
      
      {/* Animated background circle */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        initial={false}
        animate={{
          background: theme === 'light' 
            ? 'linear-gradient(135deg, #fbbf24, #f59e0b)' 
            : 'linear-gradient(135deg, #3b82f6, #1e40af)',
        }}
        transition={{ duration: 0.3 }}
        style={{ opacity: 0.1 }}
      />
    </motion.button>
  );
}
