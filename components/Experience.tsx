'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    company: 'KiwiQ AI',
    role: 'Founder\'s Office (AI Product & Platform)',
    period: 'Jan 2025 – Present',
    description: 'Led product design and execution of an LLM-powered content intelligence platform, delivering 6 core user journeys. Reduced content time-to-publish by 75% through continuous workflow optimization informed by 350+ user feedback points.',
    slug: 'kiwiq'
  },
  {
    company: 'Chick-fil-A (US-based QSR Chain)',
    role: 'Automation Project',
    period: '2025',
    description: 'Identified manual overtime reporting bottleneck (50 hrs/month); built automated labor law–compliant system, reducing effort to <10 minutes per outlet. Recognized approval delays for 100+ employees; developed rule-based flagging system, cutting turnaround by 95%.',
    slug: 'chick-fil-a'
  },
  {
    company: 'Pixel Ads',
    role: 'Founder (AI-driven Outdoor Advertising)',
    period: 'May 2024 – Dec 2024',
    description: 'Identified critical product gap in ad placement workflows, driving strategy toward automated customer-to-location mapping. Led cross-functional architecture decisions for hyper-personalized outdoor advertising, aligning engineering with product.',
    slug: 'pixel-ads'
  },
  {
    company: 'Nation with Namo',
    role: 'Associate Consultant',
    period: 'Jul 2023 – May 2024',
    description: 'Conducted 4 ground visits to assess public sentiment, contributing to winning election strategy securing 4 of 5 seats. Implemented action plans impacting 12+ lakh people, driving swing from trailing to leading in contested constituency.',
    slug: 'nation-with-namo'
  },
  {
    company: 'UiT – The Arctic University of Norway',
    role: 'Research Intern',
    period: 'Oct 2020 – Jan 2021',
    description: 'Built and optimized ML models to analyze biological imaging samples and detect irregularities across experimental datasets. Optimized GAN model for analysis of the microscopic images to get a better view when compared to the real image.',
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
