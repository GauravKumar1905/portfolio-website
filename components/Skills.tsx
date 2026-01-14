'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'AI & LLM Systems',
      skills: [
        'LLM Fundamentals',
        'Agentic Systems',
        'Multi-Agent Orchestration',
        'RAG Pipelines',
        'Prompt Engineering',
        'Graph-based Workflows',
        'Human-in-the-Loop',
      ],
    },
    {
      title: 'Product & Architecture',
      skills: [
        'AI Product Design',
        'Node-based Workflows',
        'API Design',
        'System Data Flows',
        'Template-driven UI',
        'PRD Creation',
        'User Research',
      ],
    },
    {
      title: 'Tools & Frameworks',
      skills: [
        'Jira',
        'Figma',
        'Notion',
        'Linear',
        'Power BI',
        'Claude Code',
        'Cursor',
        'Google Colab',
      ],
    },
    {
      title: 'Data & Technical',
      skills: [
        'SQL',
        'MySQL',
        'Python',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Agile',
        'Scrum',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills
          </h2>
          <p className="text-gray-400">
            Deep technical knowledge across AI systems, product management, and engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 text-gray-400 text-sm rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
