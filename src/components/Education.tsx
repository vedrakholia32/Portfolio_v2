'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CalendarIcon, AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Stanford University',
    location: 'Stanford, CA',
    duration: '2018 - 2020',
    gpa: '3.9/4.0',
    description: 'Specialized in Machine Learning and Artificial Intelligence with focus on deep learning algorithms and neural networks.',
    courses: [
      'Advanced Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Distributed Systems',
      'Algorithm Design and Analysis'
    ],
    achievements: [
      'Dean\'s List for academic excellence',
      'Published research paper on neural network optimization',
      'Graduate Teaching Assistant for CS229 Machine Learning',
      'Winner of Stanford AI Hackathon 2019'
    ],
    type: 'graduate'
  },
  {
    degree: 'Bachelor of Science in Computer Engineering',
    school: 'University of California, Berkeley',
    location: 'Berkeley, CA',
    duration: '2014 - 2018',
    gpa: '3.8/4.0',
    description: 'Comprehensive foundation in computer science principles, software engineering, and system design.',
    courses: [
      'Data Structures and Algorithms',
      'Operating Systems',
      'Database Systems',
      'Software Engineering',
      'Computer Networks',
      'Web Development'
    ],
    achievements: [
      'Magna Cum Laude graduate',
      'President of Computer Science Society',
      'Intern at Google Summer of Code 2017',
      'First place in UC Berkeley Coding Competition'
    ],
    type: 'undergraduate'
  }
];

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-ASA-2023-001',
    icon: '☁️'
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2022',
    credentialId: 'GCP-PD-2022-045',
    icon: '🌐'
  },
  {
    name: 'Meta React Developer Certificate',
    issuer: 'Meta (Facebook)',
    date: '2021',
    credentialId: 'META-RD-2021-178',
    icon: '⚛️'
  },
  {
    name: 'MongoDB Certified Developer',
    issuer: 'MongoDB Inc.',
    date: '2021',
    credentialId: 'MDB-CD-2021-092',
    icon: '🍃'
  }
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neu-gradient-text">
            Education & Certifications
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            My academic journey and professional certifications that have shaped my expertise in software development and technology.
          </p>

          {/* Education Timeline */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">Academic Background</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-400"></div>

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative flex items-start"
                  >                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10"
                      style={{
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff, 0 0 20px rgba(102, 126, 234, 0.3)'
                      }}
                    >
                      <AcademicCapIcon className="w-8 h-8" />
                    </div>                    {/* Content */}
                    <div className="neu-card-white ml-8 p-8 hover:scale-105 transition-transform duration-300 w-full">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h4>
                          <h5 className="text-lg font-semibold text-indigo-600 mb-2">{edu.school}</h5>
                          <p className="text-gray-600 mb-4 leading-relaxed">{edu.description}</p>
                        </div>
                        <div className="lg:ml-8 flex flex-col lg:items-end text-sm text-gray-500">
                          <div className="flex items-center gap-1 mb-1">
                            <CalendarIcon className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-1 mb-1">
                            <span>📍</span>
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrophyIcon className="w-4 h-4" />
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Relevant Coursework */}
                        <div>
                          <h6 className="font-semibold text-gray-800 mb-3">Relevant Coursework</h6>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, i) => (                              <span
                                key={i}
                                className="neu-tag px-3 py-1 text-sm text-indigo-600"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h6 className="font-semibold text-gray-800 mb-3">Key Achievements</h6>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-600 text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center mb-12 text-gray-800">Professional Certifications</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="neu-card-white p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">{cert.name}</h4>
                  <p className="text-indigo-600 font-medium text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs mb-3">{cert.date}</p>                  <div className="neu-tag-small px-3 py-1 text-xs text-gray-600"
                  >
                    ID: {cert.credentialId}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Education Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16 text-center"
          >            <div className="neu-card-white p-8 max-w-4xl mx-auto">
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Continuous Learning</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I believe in lifelong learning and staying current with technology trends. I regularly participate in 
                online courses, attend tech conferences, and contribute to open-source projects to expand my knowledge 
                and skills in emerging technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Online Courses', 'Tech Conferences', 'Open Source', 'Research Papers', 
                  'Workshops', 'Hackathons', 'Mentoring', 'Tech Blogs'
                ].map((activity, index) => (                    <motion.span
                      key={activity}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                      className="neu-tag px-4 py-2 text-sm text-purple-600"
                    >
                    {activity}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
