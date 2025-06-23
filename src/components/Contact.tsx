'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);      // Show success message (you can implement a toast notification here)
    alert('Thank you for your message! I&apos;ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 neu-gradient-text">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">            I&apos;m always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to connect, I&apos;d love to hear from you.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="neu-card-white p-8"
            >
              <h3 className="text-2xl font-bold mb-8 text-gray-800">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="neu-btn-sm w-12 h-12 flex items-center justify-center text-indigo-600">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a href="mailto:john@example.com" className="text-indigo-600 hover:text-indigo-700">
                      john@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="neu-btn-sm w-12 h-12 flex items-center justify-center text-indigo-600">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <a href="tel:+1234567890" className="text-indigo-600 hover:text-indigo-700">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="neu-btn-sm w-12 h-12 flex items-center justify-center text-indigo-600">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <span className="text-gray-600">San Francisco, CA</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-gray-800">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-social-icon w-12 h-12 flex items-center justify-center text-gray-700 transition-colors duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-social-icon w-12 h-12 flex items-center justify-center text-gray-700 transition-colors duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-social-icon w-12 h-12 flex items-center justify-center text-gray-700 transition-colors duration-300"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="neu-card-white p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="neu-input w-full px-4 py-3 text-gray-700 placeholder-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="neu-input w-full px-4 py-3 text-gray-700 placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="neu-input w-full px-4 py-3 text-gray-700 placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                    Message *
                  </label>                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="neu-input w-full px-4 py-3 text-gray-700 placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="neu-btn w-full py-4 font-semibold text-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-indigo-300 border-t-indigo-600 rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16 pt-8 border-t border-gray-200"
          >
            <p className="text-gray-600">
              © 2025 John Smith. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Available for full-time opportunities and freelance projects.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
