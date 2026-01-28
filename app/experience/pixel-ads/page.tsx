'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Briefcase, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const ImageCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-lg bg-zinc-800">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`Project screenshot ${currentIndex + 1}`}
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/50'
                            }`}
                        aria-label={`Go to image ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default function PixelAdsPage() {
    const images = [
        '/images/experience/pixel-ads/pixel-1.png',
        '/images/experience/pixel-ads/pixel-2.png',
        '/images/experience/pixel-ads/pixel-3.png',
        '/images/experience/pixel-ads/pixel-4.png',
    ];
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
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">Founder (AI-driven Outdoor Advertising)</h1>
                            <p className="text-xl text-gray-300 font-medium mb-2">Pixel Ads</p>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Calendar size={16} />
                                <span>May 2024 – Dec 2024</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white">Project Showcase</h2>
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                                <ImageCarousel images={images} />
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white">Overview</h2>
                            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                                <p className="text-gray-400 leading-relaxed">
                                    Founded Pixel Ads, an AI-driven outdoor advertising platform. Conducted discovery with 30 advertisers and 10 agencies to define ICP, core pain points, and MVP scope.
                                    Authored backend PRDs and prioritised roadmap to capture street-level imagery and extract geographic and audience attributes for targeting intelligence.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6 text-white">Key Achievements & Impact</h2>
                            <div className="space-y-4">
                                {[
                                    'Conducted discovery with 30 advertisers and 10 agencies to define ICP, core pain points, and MVP scope',
                                    'Identified restricted in-market hardware as the core bottleneck to data availability; redesigned the system using modular hardware, reducing costs by 20% and enabling large-scale data collection and AI-driven analysis',
                                    'Authored backend PRDs and prioritised roadmap to capture street-level imagery and extract geographic and audience attributes for targeting intelligence, executing live pilots across 2 vehicles over 7 days',
                                    'Led regulatory and scalability assessment across cities; made the decision to shut down the venture due to fragmented policy risk despite technical validation',
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
                                {['User Discovery', 'ICP Definition', 'Backend PRDs', 'Roadmap Prioritisation', 'Hardware Design', 'AI-driven Analysis', 'Regulatory Assessment', 'Pilot Execution', 'Strategic Decision Making'].map((tag, i) => (
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


