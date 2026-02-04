'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Code, Database, Server, Layout, GitBranch, Terminal } from 'lucide-react';

// For props interface, we need to know what 'icon' can be
// Since we pass <Layout /> directly in data, it is React.ReactNode.

export interface RoadmapItem {
    type: 'node' | 'checkpoint';
    label: string;
    status?: 'core' | 'tool' | 'db' | 'nav';
}

export interface RoadmapPhase {
    phase: string;
    description: string;
    color: string;
    icon: React.ReactNode;
    items: RoadmapItem[];
}

interface RoadmapSectionProps {
    title: string;
    description: string;
    roadmapData: RoadmapPhase[];
}

const RoadmapSection = ({ title, description, roadmapData }: RoadmapSectionProps) => {
    return (
        <section className="py-24 bg-[var(--background)] overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--foreground)]">
                        {title}
                    </h2>
                    <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border-color)] transform md:-translate-x-1/2" />

                    {roadmapData.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[var(--bg-dark)] border-4 border-[var(--accent-primary)] transform -translate-x-1/2 flex items-center justify-center z-10 mt-1">
                                {/* Inner dot handled by border */}
                            </div>

                            {/* Content Card */}
                            <div className="ml-12 md:ml-0 md:w-1/2 pl-4 md:px-4">
                                <div className={`
                            p-5 md:p-6 rounded-2xl bg-[var(--bg-dark)] border border-white/10 hover:border-[var(--accent-primary)] transition-colors
                            ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}
                        `}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 rounded-lg bg-white/5">
                                            {phase.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[var(--foreground)]">{phase.phase}</h3>
                                            <p className="text-sm text-[var(--text-muted)]">{phase.description}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        {phase.items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className={`
                                            px-4 py-2 rounded-lg text-sm font-medium border
                                            ${item.type === 'checkpoint'
                                                        ? 'w-full border-dashed border-[var(--text-muted)] text-[var(--text-muted)] flex items-center gap-2 justify-center mt-2'
                                                        : 'bg-white/5 border-white/10 text-[var(--foreground)] shadow-sm'
                                                    }
                                            ${item.label === 'PostgreSQL' || item.label === 'Redis' ? 'bg-yellow-900/20 text-yellow-500 border-yellow-500/30' : ''}
                                        `}
                                            >
                                                {item.type === 'checkpoint' && <CheckCircle className="w-4 h-4" />}
                                                {item.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Empty space for the other side */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default RoadmapSection;
