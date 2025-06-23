'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/johnsmith/ecommerce-platform',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team workspaces, and advanced filtering. Built with React, Socket.io, and MongoDB.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Socket.io', 'MongoDB', 'Express', 'Material-UI'],
    liveUrl: 'https://taskmaster-app.netlify.app',
    githubUrl: 'https://github.com/johnsmith/task-management',
    featured: true,
  },
  {
    title: 'Weather Analytics Dashboard',
    description: 'A data visualization dashboard that displays weather patterns and analytics using Chart.js and OpenWeatherMap API. Features interactive charts and location-based forecasts.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue.js', 'Chart.js', 'Express', 'OpenWeatherMap API'],
    liveUrl: 'https://weather-analytics.herokuapp.com',
    githubUrl: 'https://github.com/johnsmith/weather-dashboard',
    featured: false,
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that creates blog posts, social media content, and marketing copy using OpenAI API. Includes content templates and SEO optimization.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL', 'Chakra UI'],
    liveUrl: 'https://ai-content-gen.vercel.app',
    githubUrl: 'https://github.com/johnsmith/ai-content-generator',
    featured: false,
  },
  {
    title: 'Crypto Portfolio Tracker',
    description: 'A cryptocurrency portfolio tracking application with real-time price updates, profit/loss calculations, and portfolio analytics. Integrated with CoinGecko API.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Redux', 'Node.js', 'CoinGecko API', 'Styled Components'],
    liveUrl: 'https://crypto-tracker-pro.netlify.app',
    githubUrl: 'https://github.com/johnsmith/crypto-portfolio',
    featured: false,
  },
  {
    title: 'Social Media Scheduler',
    description: 'A social media scheduling and management tool for businesses. Supports multiple platforms, content calendar, analytics, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['Next.js', 'MongoDB', 'Redis', 'Social APIs', 'Ant Design'],
    liveUrl: 'https://social-scheduler.vercel.app',
    githubUrl: 'https://github.com/johnsmith/social-scheduler',
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Featured Projects
          </h2>

          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="neu-card-white p-4 group overflow-hidden">                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={256}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 rounded-xl"
                    />
                    <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </div>
                </div>                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <div className="neu-card-white p-6">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="neu-tag px-3 py-1 text-indigo-600 text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neu-button flex items-center gap-2 px-6 py-3 text-indigo-600 font-medium hover:scale-105 transition-transform duration-300"
                      >
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="neu-button-inset flex items-center gap-2 px-6 py-3 text-gray-600 font-medium hover:scale-105 transition-transform duration-300"
                      >
                        <CodeBracketIcon className="w-4 h-4" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div>            <h3 className="text-3xl font-bold text-center mb-12" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Other Notable Projects
            </h3><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="neu-card-white p-6 hover:scale-105 transition-transform duration-300"
                >                  <div className="neu-inset p-2 mb-4 overflow-hidden">                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={160}
                      className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
                    />
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="neu-tag-small px-2 py-1 text-indigo-600 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="neu-tag-small px-2 py-1 text-gray-600 text-xs"
                      >
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm font-medium"
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
