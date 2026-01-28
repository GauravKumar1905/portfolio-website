'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    company: 'KiwiQ AI',
    role: 'Founder\'s Office — Product (AI Platform)',
    period: 'Jan 2025 – Present',
    description: 'Led product design and end-to-end execution of an LLM-powered content intelligence platform, owning PM operations across teams. Scaled V1 product to $10K MRR (30 customer teams), reducing content time-to-publish by 75% using 350+ user feedback inputs.',
    slug: 'kiwiq'
  },
  {
    company: 'Chick-fil-A (US-based QSR Chain)',
    role: 'Automation Project',
    period: '2025',
    description: 'Automated overtime and compliance reporting for 100+ employees, cutting effort from 50 hours/month to <10 minutes per outlet and reducing approval turnaround by 95%. Owned end-to-end delivery from problem discovery to deployment.',
    slug: 'chick-fil-a'
  },
  {
    company: 'Pixel Ads',
    role: 'Founder — AI-driven Outdoor Advertising',
    period: 'May 2024 – Dec 2024',
    description: 'Conducted discovery with 30 advertisers and 10 agencies to define ICP, core pain points, and MVP scope. Redesigned system using modular hardware, reducing costs by 20% and enabling large-scale data collection and AI-driven analysis.',
    slug: 'pixel-ads'
  },
  {
    company: 'Nation with NaMo',
    role: 'Associate Consultant',
    period: 'Jul 2023 – May 2024',
    description: 'Led constituency-level analysis through ground research, surveys, and dashboards. Handled 26 constituencies across 3 states; contributed to winning 19, including completely turning around four seats. Impacted programs reaching 12+ lakh people.',
    slug: 'nation-with-namo'
  },
  {
    company: 'UiT – The Arctic University of Norway',
    role: 'Research Intern',
    period: 'Oct 2020 – Jan 2021',
    description: 'Built and optimized ML models to analyze biological imaging samples and detect irregularities across experimental datasets. Optimized GAN model for analysis of the microscopic images to get a better view when compared to the real image.',
    slug: 'uit-norway'
  },
  {
    company: 'SIMAI Management Consulting',
    role: 'Business Analyst Intern',
    period: 'May 2022 – Jul 2022',
    description: 'Analyzed quarterly financial reports for 30+ companies using text mining, feature engineering, and TF-IDF to extract key insights. Examined 75k+ customer data points, recommending discount pricing strategies that boosted revenue by 20% and profit by 12%.',
    slug: 'simai'
  },
  {
    company: 'Gaana, Times Group',
    role: 'Product Management Intern',
    period: 'May 2021 – Jul 2021',
    description: 'Quantitatively estimated the real-time user retention for 5 million+ daily active users by writing SQL queries on the dataset. Devised strategies to enhance daily user retention rates by 4.7% for Gaana and Mirchi Radio.',
    slug: 'gaana'
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
