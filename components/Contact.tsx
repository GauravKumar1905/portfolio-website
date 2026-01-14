'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Download, FileText, Github } from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email',
      value: 'gauravkr.contact@gmail.com',
      href: 'mailto:gauravkr.contact@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Phone',
      value: '+91-9350031637',
      href: 'tel:+919350031637',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: 'LinkedIn',
      value: 'gaurav-kumar-1616981a1',
      href: 'https://www.linkedin.com/in/gaurav-kumar-1616981a1/',
    },
    {
      icon: <Github className="w-5 h-5" />,
      title: 'GitHub',
      value: 'GauravKumar1905',
      href: 'https://github.com/GauravKumar1905',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Contact
          </h2>
          <p className="text-gray-400">
            Interested in discussing AI products, LLM systems, or potential opportunities?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <div className="p-3 bg-zinc-800 rounded-lg text-gray-400">
                {method.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{method.title}</p>
                <p className="text-white">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-zinc-900 border border-zinc-800 rounded-lg p-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-zinc-800 rounded-lg text-gray-400">
              <FileText className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-white mb-2">
                Resume
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                Download my latest resume with detailed experience and achievements
              </p>
              <a
                href="/documents/Gaurav_Kumar_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
