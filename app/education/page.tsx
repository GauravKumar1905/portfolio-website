'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Trophy, Users, Award } from 'lucide-react';
import Link from 'next/link';

export default function EducationPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <Navigation />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                <Link
                    href="/#about"
                    className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group"
                >
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mb-16 border-b border-zinc-800 pb-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Indian Institute of Technology, Kharagpur</h1>
                            <p className="text-xl text-gray-400">Bachelor of Technology (B.Tech)</p>
                            <p className="text-gray-500 mt-2">Jul 2019 – Apr 2023</p>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 px-6 py-4 rounded-lg">
                            <span className="text-gray-400 text-sm block mb-1">Cumulative GPA</span>
                            <span className="text-3xl font-bold text-white">7.89<span className="text-lg text-gray-500">/10.0</span></span>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Sidebar / Table of Contents */}
                        <div className="md:col-span-1 space-y-8">
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
                                <h3 className="font-semibold mb-4 text-white flex items-center gap-2">
                                    <BookOpen size={18} /> Focus Areas
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Structures', 'Algorithms', 'Distributed Systems'].map((opt) => (
                                        <span key={opt} className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 rounded-full">
                                            {opt}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-16">

                            {/* Thesis Section */}
                            <section>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                        <Award size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold">Research & Thesis</h2>
                                </div>
                                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                                    <h3 className="text-xl font-semibold mb-3">Bachelor&apos;s Thesis</h3>
                                    <p className="text-gray-400 leading-relaxed mb-4">
                                        Focused on advanced computer vision techniques for irregularity detection in biological samples.
                                        Explored the application of Generative Adversarial Networks (GANs) to augment training data
                                        and improve classification accuracy in low-data regimes.
                                    </p>
                                    <div className="text-sm text-gray-500">
                                        Advisor: Prof. [Name of Professor]
                                    </div>
                                </div>
                            </section>

                            {/* Leadership Section */}
                            <section>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                                        <Users size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold">Leadership & Reliability</h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="group">
                                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                            <a href="https://gymkhana.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer">
                                                General Secretary, Technology Students&apos; Gymkhana
                                            </a>
                                        </h3>
                                        <p className="text-gray-400 mb-2">Elected Student Representative</p>
                                        <ul className="list-disc list-outside ml-4 text-gray-400 space-y-2">
                                            <li>Led institute-wide technology initiatives, coordinated 6 societies and championship events</li>
                                            <li>Managed a budget of <strong>INR 19.1M</strong> for technological activities and student welfare</li>
                                        </ul>
                                    </div>

                                    <hr className="border-zinc-800" />

                                    <div className="group">
                                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                            <a href="https://www.ktj.in/" target="_blank" rel="noopener noreferrer">
                                                Executive Head, Kshitij
                                            </a>
                                        </h3>
                                        <p className="text-gray-400 mb-2">Asia&apos;s Largest Techno Management Fest</p>
                                        <ul className="list-disc list-outside ml-4 text-gray-400 space-y-2">
                                            <li>Headed a 70+ member team, executed 50 technology events</li>
                                            <li>Managed a fest budget of <strong>INR 11.2M</strong></li>
                                        </ul>
                                    </div>

                                    <hr className="border-zinc-800" />

                                    <div className="group">
                                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                            <a href="https://www.interiit-tech.com/" target="_blank" rel="noopener noreferrer">
                                                Overall Coordinator, Inter IIT Tech Meet
                                            </a>
                                        </h3>
                                        <p className="text-gray-400 mb-2">Pan-IIT Technical Competition</p>
                                        <ul className="list-disc list-outside ml-4 text-gray-400 space-y-2">
                                            <li>Initiated and hosted the Inter-IIT Tech Meet at IIT Kharagpur</li>
                                            <li>Organized 16+ events with participation from 22 IITs</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* Achievements Section */}
                            <section>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400">
                                        <Trophy size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold">Awards & Competitions</h2>
                                </div>
                                <div className="grid gap-4">
                                    {[
                                        "Secured Gold Medal in Inter-Hall Technology General Championship",
                                        "Finalist in [Competition Name] for AI-driven Product Innovation",
                                        "Published research paper in [Journal/Conference] (if applicable)"
                                    ].map((award, i) => (
                                        <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg flex items-center gap-3">
                                            <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                                            <span className="text-gray-300">{award}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
