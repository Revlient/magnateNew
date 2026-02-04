'use client';

import React, { useState } from 'react';

export interface Company {
    name: string;
    logo: string;
}

export interface Career {
    title: string;
    salary: number;
    growth: number;
    demand: 'critical' | 'high' | 'moderate';
    skills: string[];
    companies: Company[];
    color: string;
    featured?: boolean;
}

interface CareerStats {
    placementRate: string;
    avgSalary: string;
}

interface CareerPathsSectionProps {
    title: string;
    subtitle: string;
    description: string;
    careers: Career[];
    stats: CareerStats;
}

const CareerPathsSection = ({ title, subtitle, description, careers, stats }: CareerPathsSectionProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section
            className="py-32 relative overflow-hidden"
            style={{ backgroundColor: 'var(--bg-dark)' }}
        >
            {/* Decorative Background Elements */}
            <div
                className="absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
                style={{ backgroundColor: 'var(--accent-primary)' }}
            />
            <div
                className="absolute bottom-40 left-0 w-80 h-80 rounded-full blur-3xl opacity-10"
                style={{ backgroundColor: 'var(--accent-secondary)' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="mb-24">
                    <div className="flex items-start justify-between mb-12 flex-col md:flex-row gap-8 md:gap-0">
                        <div className="max-w-2xl">
                            <span
                                className="text-sm font-bold tracking-[0.3em] mb-4 block"
                                style={{ color: 'var(--accent-primary)' }}
                            >
                                {subtitle}
                            </span>
                            <h2
                                className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                {title}
                            </h2>
                            <p
                                className="text-xl leading-relaxed"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                {description}
                            </p>
                        </div>

                        {/* Floating Stats */}
                        <div className="hidden lg:block space-y-4">
                            <div
                                className="p-6 rounded-2xl backdrop-blur-sm"
                                style={{
                                    backgroundColor: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)'
                                }}
                            >
                                <div
                                    className="text-5xl font-bold mb-1"
                                    style={{ color: 'var(--accent-primary)' }}
                                >
                                    {stats.placementRate}
                                </div>
                                <div
                                    className="text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    placement rate
                                </div>
                            </div>
                            <div
                                className="p-6 rounded-2xl backdrop-blur-sm"
                                style={{
                                    backgroundColor: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)'
                                }}
                            >
                                <div
                                    className="text-5xl font-bold mb-1"
                                    style={{ color: 'var(--accent-primary)' }}
                                >
                                    {stats.avgSalary}
                                </div>
                                <div
                                    className="text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    avg. starting
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Career Grid - Masonry Style */}
                <div className="grid md:grid-cols-12 gap-6">
                    {careers.map((career, index) => {
                        const isLarge = career.featured;
                        const colSpan = isLarge ? 'md:col-span-6' : 'md:col-span-4';

                        return (
                            <div
                                key={index}
                                className={`${colSpan} group cursor-pointer`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
                                    transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                                }}
                            >
                                <div
                                    className="relative h-full p-8 rounded-3xl overflow-hidden"
                                    style={{
                                        backgroundColor: 'var(--bg-card)',
                                        border: hoveredIndex === index
                                            ? `2px solid ${career.color}`
                                            : '2px solid var(--border-color)',
                                        transition: 'all 0.4s ease'
                                    }}
                                >
                                    {/* Background Glow on Hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: `radial-gradient(circle at 50% 0%, ${career.color}15 0%, transparent 70%)`
                                        }}
                                    />

                                    <div className="relative z-10">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div>
                                                <h3
                                                    className={`font-bold mb-2 ${isLarge ? 'text-3xl' : 'text-2xl'}`}
                                                    style={{ color: 'var(--text-primary)' }}
                                                >
                                                    {career.title}
                                                </h3>
                                                <div className="flex items-center gap-2">
                                                    <div
                                                        className="w-2 h-2 rounded-full"
                                                        style={{ backgroundColor: career.demand === 'critical' ? '#ff6b6b' : career.color }}
                                                    />
                                                    <span
                                                        className="text-xs font-medium uppercase tracking-wider"
                                                        style={{ color: 'var(--text-secondary)' }}
                                                    >
                                                        {career.demand} demand
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Growth Badge */}
                                            <div
                                                className="px-3 py-1 rounded-full text-xs font-bold"
                                                style={{
                                                    backgroundColor: '#4ade8020',
                                                    color: '#4ade80'
                                                }}
                                            >
                                                +{career.growth}%
                                            </div>
                                        </div>

                                        {/* Salary */}
                                        <div className="mb-6">
                                            <div
                                                className={`font-bold mb-1 ${isLarge ? 'text-6xl' : 'text-5xl'}`}
                                                style={{ color: career.color }}
                                            >
                                                ${career.salary}K
                                            </div>
                                            <div
                                                className="text-sm"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                average annual salary
                                            </div>
                                        </div>

                                        {/* Skills */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {career.skills.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-sm"
                                                    style={{
                                                        backgroundColor: career.color + '20',
                                                        color: 'var(--text-primary)',
                                                        border: `1px solid ${career.color}30`
                                                    }}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Companies */}
                                        <div className="pt-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
                                            <div
                                                className="text-xs font-semibold mb-3 tracking-wider"
                                                style={{ color: 'var(--text-secondary)' }}
                                            >
                                                HIRED BY
                                            </div>
                                            <div className="flex items-center gap-3">
                                                {career.companies.map((company, companyIndex) => (
                                                    <div
                                                        key={companyIndex}
                                                        className="relative group/logo"
                                                        title={company.name}
                                                    >
                                                        <img
                                                            src={company.logo}
                                                            alt={company.name}
                                                            className="w-8 h-8 rounded-lg object-contain transition-all duration-300 group-hover/logo:scale-110"
                                                            style={{
                                                                backgroundColor: 'var(--text-primary)',
                                                                padding: '6px',
                                                                filter: 'grayscale(100%) brightness(0) invert(1)',
                                                                opacity: 0.6
                                                            }}
                                                            onMouseEnter={(e) => {
                                                                e.currentTarget.style.filter = 'none';
                                                                e.currentTarget.style.opacity = '1';
                                                            }}
                                                            onMouseLeave={(e) => {
                                                                e.currentTarget.style.filter = 'grayscale(100%) brightness(0) invert(1)';
                                                                e.currentTarget.style.opacity = '0.6';
                                                            }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Hover Arrow */}
                                        <div
                                            className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
                                            style={{
                                                transform: hoveredIndex === index ? 'translate(0, 0)' : 'translate(-10px, 10px)'
                                            }}
                                        >
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                style={{ color: career.color }}
                                            >
                                                <path
                                                    d="M7 17L17 7M17 7H7M17 7V17"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 text-center">
                    <div
                        className="inline-block p-12 rounded-[3rem] relative overflow-hidden"
                        style={{ backgroundColor: 'var(--bg-card)' }}
                    >
                        {/* Accent Border */}
                        <div
                            className="absolute inset-0 rounded-[3rem] p-[2px]"
                            style={{
                                background: `linear-gradient(135deg, ${careers[0]?.color}, ${careers[1]?.color || careers[0]?.color})`,
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'xor',
                                maskComposite: 'exclude'
                            }}
                        />

                        <div className="relative z-10">
                            <h3
                                className="text-4xl font-bold mb-4"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                Ready to start your journey?
                            </h3>
                            <p
                                className="text-lg mb-8 max-w-xl mx-auto"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Join 500+ companies actively hiring our graduates
                            </p>
                            <button
                                className="group px-10 py-5 rounded-full font-bold text-lg relative overflow-hidden"
                                style={{
                                    backgroundColor: 'var(--accent-primary)',
                                    color: 'var(--bg-dark)'
                                }}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Explore All Opportunities
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="group-hover:translate-x-1 transition-transform"
                                    >
                                        <path
                                            d="M5 12H19M19 12L12 5M19 12L12 19"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <div
                                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{
                                        background: `linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))`
                                    }}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerPathsSection;
