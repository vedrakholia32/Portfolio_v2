'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    duration: '2022 - Present',
    type: 'Full-time',
    description: 'Lead development of scalable web applications serving 100K+ users. Architect microservices infrastructure and mentor junior developers.',
    achievements: [
      'Reduced application load time by 60% through optimization',
      'Led a team of 5 developers on multiple projects',
      'Implemented CI/CD pipeline reducing deployment time by 80%',
      'Migrated legacy systems to modern tech stack'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    location: 'Remote',
    duration: '2020 - 2022',
    type: 'Full-time',
    description: 'Built the core platform from scratch for a fintech startup. Developed both frontend and backend systems handling financial transactions.',
    achievements: [
      'Built MVP from 0 to 10K active users in 6 months',
      'Implemented secure payment processing with Stripe',
      'Designed and developed RESTful APIs',
      'Set up monitoring and alerting systems'
    ],
    technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Stripe API', 'Firebase']
  },
  {
    title: 'Frontend Developer',
    company: 'DigitalAgency Inc',
    location: 'New York, NY',
    duration: '2019 - 2020',
    type: 'Full-time',
    description: 'Developed responsive websites and web applications for various clients. Collaborated with designers to create pixel-perfect implementations.',
    achievements: [
      'Delivered 15+ client projects on time and budget',
      'Improved website performance scores by average 40%',
      'Established frontend development best practices',
      'Mentored 2 junior developers'
    ],
    technologies: ['React', 'SASS', 'WordPress', 'jQuery', 'Bootstrap']
  },
  {
    title: 'Junior Web Developer',
    company: 'WebStudio Co',
    location: 'Los Angeles, CA',
    duration: '2018 - 2019',
    type: 'Full-time',
    description: 'Started my professional journey building websites and learning modern web development practices. Worked on both frontend and basic backend tasks.',
    achievements: [
      'Converted 20+ PSD designs to responsive websites',
      'Learned React and modern JavaScript frameworks',
      'Implemented basic CMS functionality',
      'Maintained and updated existing client websites'
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'WordPress']
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 neu-gradient-text">
            Work Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-400"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start"                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10 neu-glow">
                    {index + 1}
                  </div>                  {/* Content */}
                  <div className="ml-8 neu-card-white p-6 hover:scale-105 transition-transform duration-300 w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                        <h4 className="text-lg font-semibold text-indigo-600 mb-2">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-500">
                        <div className="flex items-center gap-1 mb-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="neu-tag px-3 py-1 text-indigo-600 text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
        </motion.div>
      </div>
    </section>
  );
}
