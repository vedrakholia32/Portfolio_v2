'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 78 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    category: 'Tools & Cloud',
    technologies: [
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Git', level: 90 },
      { name: 'Vercel', level: 88 },
      { name: 'Jenkins', level: 70 },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}                transition={{ duration: 0.6, delay: groupIndex * 0.2 }}                className="neu-card-white p-8 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-semibold mb-8 text-center" style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {skillGroup.category}
                </h3>
                
                <div className="space-y-6">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div key={tech.name}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-700 font-medium text-lg">{tech.name}</span>
                        <span className="text-gray-500 text-sm font-semibold">{tech.level}%</span>
                      </div>                      <div className="neu-progress-track w-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${tech.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: groupIndex * 0.2 + techIndex * 0.1 + 0.5,
                            ease: "easeOut"
                          }}
                          className="neu-progress-fill bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">
              Other Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Redis', 'Elasticsearch', 'Kubernetes', 'Firebase', 'Stripe',
                'Figma', 'Jest', 'Cypress', 'Webpack', 'Vite'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="neu-tag px-6 py-3 text-sm font-medium text-indigo-600"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
