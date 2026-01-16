'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            About
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              AI Product Manager with hands-on experience building and scaling LLM-powered platforms from 0→1.
              Skilled in designing agentic workflows, multi-agent orchestration, and human-in-the-loop systems in close collaboration with engineering.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Proven ability to translate complex AI capabilities into scalable product experiences, driving 75% reduction in time-to-publish and $10K MRR.
              Deep expertise in prompt engineering, RAG pipelines, and backend-driven UI architecture.
            </p>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 hover:border-zinc-700 transition-all relative group cursor-pointer"
          onClick={() => window.location.href = '/education'}
        >
          <div className="absolute top-8 right-8 text-gray-500 group-hover:text-white transition-colors">
            <ArrowUpRight size={24} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">B.Tech, IIT Kharagpur</h3>
              <p className="text-gray-400">Jul 2019 – Apr 2023 • CGPA: 7.89/10</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm mb-3">Leadership Highlights:</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <span>General Secretary, Technology (Budget: INR 19.1M) — <span 
                    onClick={(e) => { e.stopPropagation(); window.open('https://gymkhana.iitkgp.ac.in/', '_blank'); }} 
                    className="text-white hover:text-blue-400 transition-colors cursor-pointer underline decoration-dotted">Gymkhana</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <span>Executive Head, <span 
                    onClick={(e) => { e.stopPropagation(); window.open('https://www.ktj.in/', '_blank'); }} 
                    className="text-white hover:text-blue-400 transition-colors cursor-pointer underline decoration-dotted">Kshitij</span> (Asia&apos;s Largest Tech Fest)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600">•</span>
                  <span>Overall Coordinator, <span 
                    onClick={(e) => { e.stopPropagation(); window.open('https://www.interiit-tech.com/', '_blank'); }} 
                    className="text-white hover:text-blue-400 transition-colors cursor-pointer underline decoration-dotted">Inter IIT Tech Meet</span></span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
