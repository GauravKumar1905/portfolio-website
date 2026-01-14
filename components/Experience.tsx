'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    company: 'KiwiQ AI',
    role: 'Founder\'s Office (AI Product & Platform)',
    period: 'Jan 2025 – Present',
    description: 'Leading product design of LLM-powered content intelligence platform. Defining static, graph-based, and agentic workflows with RAG human-in-the-loop controls.',
    slug: 'kiwiq'
  },
  {
    company: 'Pixel Ads',
    role: 'Founder (AI-driven Outdoor Advertising)',
    period: 'May 2024 – Dec 2024',
    description: 'Defined backend and frontend architecture for hyper-personalized advertising platform. Designed microcontroller-based taxi-top display prototype.',
    slug: 'pixel-ads'
  },
  {
    company: 'Chick-fil-A',
    role: 'Automation Project',
    period: '2024',
    description: 'Designed end-to-end workflow reducing manual effort from 50 hours to 10 minutes per outlet. Created structured project plan covering all functional requirements.',
    slug: 'chick-fil-a'
  },
  {
    company: 'Nation with Namo',
    role: 'Associate Consultant',
    period: 'Jul 2023 – May 2024',
    description: 'Conducted ground visits contributing to winning strategy securing 4 of 5 seats. Implemented action plans impacting 12+ lakh people.',
    slug: 'nation-with-namo'
  },
  {
    company: 'SIMAI Management Consulting',
    role: 'Business Analyst Intern',
    period: 'May 2022 – Jul 2022',
    description: 'Applied text mining, feature engineering, and TF-IDF on financial datasets (75k+ records), improving revenue by 20% and profit by 12%.',
    slug: 'simai'
  },
  {
    company: 'Gaana, Times Group',
    role: 'Product Management Intern',
    period: 'May 2021 – Jul 2021',
    description: 'Analyzed user journeys across 5M+ DAUs, improving TTFP from 12s to 9s. Increased play-within-30s metric from 72% to 80%.',
    slug: 'gaana'
  },
  {
    company: 'UiT – The Arctic University of Norway',
    role: 'Research Intern',
    period: 'Oct 2020 – Jan 2021',
    description: 'Built and optimized machine learning models to analyze biological samples. Worked with GAN-based architectures to improve model performance.',
    slug: 'uit-norway'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-400">
            Building AI products and driving impact across industries
          </p>
        </motion.div>

        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <Link key={exp.slug} href={`/experience/${exp.slug}`} className="block group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 group-hover:border-zinc-700 transition-all relative"
          >
            <div className="absolute top-8 right-8 text-gray-500 group-hover:text-white transition-colors">
              <ArrowUpRight size={24} />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {exp.role}
                </h3>
                    <p className="text-lg text-gray-300 font-medium mb-1">{exp.company}</p>
                    <p className="text-gray-400">{exp.period}</p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-purple-400 font-medium">
                      <span>View details</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </motion.div>
        </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
