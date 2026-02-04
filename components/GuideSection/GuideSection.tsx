'use client';

import React from 'react';
import Link from 'next/link';

export interface GuideStep {
    number: number;
    title: string;
    description: string;
}

interface GuideSectionProps {
    title: string;
    steps: GuideStep[];
    ctaTitle: string;
    ctaButtonText: string;
    ctaHref?: string;
}

const GuideSection = ({
    title,
    steps,
    ctaTitle,
    ctaButtonText,
    ctaHref = "/enroll"
}: GuideSectionProps) => {
    return (
        <section className="bg-[var(--background)]">
            {/* Steps Container */}
            <div className="max-w-7xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <p className="font-mono text-sm tracking-widest text-[var(--accent-primary)] mb-4 uppercase">
                        How it works
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
                        {title}
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col items-start gap-4">
                            <div className="w-10 h-10 rounded-full border-2 border-[var(--accent-primary)] flex items-center justify-center text-[var(--accent-primary)] font-bold text-lg shrink-0">
                                {step.number}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
                                    {step.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Banner */}
            <div className="bg-[var(--accent-primary)] py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--bg-dark)] mb-8">
                        {ctaTitle}
                    </h2>
                    <Link
                        href={ctaHref}
                        className="inline-block px-8 py-4 bg-[var(--bg-dark)] text-white font-bold rounded hover:opacity-90 transition-opacity"
                    >
                        {ctaButtonText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GuideSection;
