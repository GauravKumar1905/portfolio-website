'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function KiwiQPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navigation />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <Link
                    href="/#experience"
                    className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
                >
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Experience
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-12 border-b border-zinc-800 pb-8">
                        <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                            <Briefcase size={32} />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">Founder&apos;s Office (AI Product & Platform)</h1>
                            <p className="text-xl text-gray-300 font-medium mb-2">KiwiQ AI</p>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Calendar size={16} />
                                <span>Jan 2025 – Present</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white">Overview</h2>
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                                <p className="text-gray-400 leading-relaxed">
                                    Leading product design of LLM-powered content intelligence platform at KiwiQ AI. 
                                    Defining static, graph-based, and agentic workflows with RAG and human-in-the-loop controls. 
                                    Working directly with the founding team to shape the product vision and architecture.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white">Key Achievements & Impact</h2>
                            <div className="space-y-4">
                                {[
                                    'Led product design of LLM-powered content intelligence platform, reducing time-to-publish by 75%',
                                    'Defined static, graph-based, and agentic workflows with RAG and human-in-the-loop controls',
                                    'Owned node-based workflow logic and API requirements with backend engineers',
                                    'Translated 350+ user feedback points into PRDs and shipped 4 core user journeys',
                                ].map((achievement, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg flex items-start gap-3"
                                    >
                                        <span className="text-purple-500 mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                                        <span className="text-gray-300 leading-relaxed">{achievement}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white">Technologies & Skills</h2>
                            <div className="flex flex-wrap gap-3">
                                {['LLM', 'RAG', 'Agentic Systems', 'Product Design', 'Workflow Architecture', 'API Design', 'PRD Writing'].map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-zinc-800 border border-zinc-700 text-gray-300 rounded-lg hover:border-purple-500/50 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}


