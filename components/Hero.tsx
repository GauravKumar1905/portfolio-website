'use client';

import Image from 'next/image';
import { Download, Linkedin, Mail, MessageSquare, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const handleChatClick = () => {
    // This will trigger the ElevenLabs chatbot
    const chatEvent = new CustomEvent('openChat');
    window.dispatchEvent(chatEvent);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Building intelligent systems that transform research into production.
            </h1>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Specialized in Machine Learning, Deep Learning, and Generative AI.
              Architecting scalable AI solutions with PyTorch, TensorFlow, and cloud infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/GauravKumar1905"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-sm font-medium transition-all border border-white/20"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/gaurav-kumar-1616981a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-sm font-medium transition-all border border-white/20"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a
                href="mailto:gauravkr.contact@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-md text-sm font-medium transition-all border border-white/20"
              >
                <Mail size={16} />
                Email
              </a>

              <a
                href="/documents/Gaurav_Kumar_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-md text-sm font-medium transition-all hover:bg-gray-200"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src="/images/profile.jpeg"
                  alt="Gaurav Kumar"
                  width={80}
                  height={80}
                  className="rounded-lg"
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  priority
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold">AI Product Manager</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">Motivated AI Product Manager with a strong background in developing intelligent systems.</p>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span>Currently at Persistent Systems building AI-powered credit scoring</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span>Previous: Technical Content Writer at GeeksForGeeks</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-gray-500">•</span>
                  <span>Certifications: AWS Cloud Practitioner, Oracle Cloud AI Professional</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
