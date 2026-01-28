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
              AI Product Manager with 0→1 experience building and scaling AI-first products. Currently owning core workflow systems at a B2B AI startup serving Series A/B SaaS teams. Strong background in user discovery, PRDs, MVP scoping, and cross-functional execution across engineering and customer success.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              Proven record of shipping LLM-powered products driving 75% reduction in content creation time and scaling to $10K MRR. Founder experience building and validating AI-driven platforms across backend systems, automation, and applied ML.
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
