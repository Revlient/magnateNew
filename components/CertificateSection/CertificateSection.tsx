'use client';

import React from 'react';
import { Award, CheckCircle2, Zap } from 'lucide-react';
import Image from 'next/image';




export interface CertificateFeature {
    icon?: React.ReactNode; // Or text/component
    title: string;
    description: string;
}

interface CertificateSectionProps {
    title: string;
    description: string;
    features: CertificateFeature[];
    roleName: string;
    backgroundColor?: string;
    recipientName?: string;
    date?: string;
}

const CertificateSection = ({
    title,
    description,
    features,
    roleName,
    backgroundColor = 'var(--background)',
    recipientName = 'John Doe',
    date = 'Feb 14, 2026'
}: CertificateSectionProps) => {
    return (
        <section className="py-8 md:py-10 relative overflow-hidden" style={{ backgroundColor }}>
            {/* Background Pattern - Dot Grid Top Right */}
            <div
                className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, var(--secondary-magenta) 1px, transparent  1px)',
                    backgroundSize: '12px 12px'
                }}
            />

            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Column: Content */}
                <div>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[var(--foreground)] font-sans">
                        {title}
                    </h2>
                    <p className="text-base text-[var(--text-muted)] mb-8 max-w-lg leading-relaxed">
                        {description}
                    </p>

                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                {/* Icon */}
                                <div className="pt-0.5 text-[var(--secondary-magenta)]">
                                    {/* Default icon or passed icon if we had a way to pass SVGs easily from data */}
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M9 12l2 2 4-4" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-[var(--foreground)] mb-1">{feature.title}</h3>
                                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Certificate Mockup Container */}
                <div className="relative flex justify-center items-center">
                    {/* Dark Background Container with Grid */}
                    <div className="relative w-[90%] md:w-[80%] aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border-color)] rounded-sm p-4 md:p-8 flex items-center justify-center overflow-hidden shadow-2xl">
                        {/* Grid Pattern inside the dark container */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none"
                            style={{
                                backgroundImage: `linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)`,
                                backgroundSize: '20px 20px'
                            }}
                        />

                        {/* The Certificate Card - Scaled Down */}
                        <div className="relative bg-[var(--background)] border border-[var(--secondary-cyan)] w-[85%] max-w-sm aspect-[1.4/1] shadow-2xl p-4 md:p-6 flex flex-col justify-between transform scale-90"
                            style={{ fontFamily: "'Courier Prime', 'Courier New', monospace" }}
                        >
                            {/* Watermark Grid on Cert */}
                            <div className="absolute inset-x-0 bottom-0 h-16 opacity-10 pointer-events-none"
                                style={{
                                    backgroundImage: 'radial-gradient(var(--secondary-cyan) 1px, transparent 1px)',
                                    backgroundSize: '10px 10px'
                                }}
                            />

                            {/* Top Section */}
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="bg-[var(--secondary-magenta)] text-white text-[8px] font-bold px-1 py-0.5 inline-block mb-1">
                                        Magnate Academy
                                    </div>
                                    <div className="text-[8px] text-[var(--text-muted)] uppercase tracking-widest mb-0.5">Professional Certification</div>
                                    <div className="text-[10px] text-[var(--text-secondary)]">Date: {date}</div>
                                </div>
                                <div className="border border-[var(--secondary-cyan)] rounded-full w-6 h-6 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full border border-[var(--secondary-cyan)] bg-[var(--secondary-cyan)]/20"></div>
                                </div>
                            </div>

                            {/* Middle Section: Name */}
                            <div className="text-center my-2">
                                <h2 className="text-lg md:text-xl font-bold text-[var(--foreground)] mb-1 tracking-tight">{recipientName}</h2>
                                <div className="h-px w-full bg-[var(--border-color)] my-1"></div>
                                <h3 className="text-sm text-[var(--secondary-cyan)] font-bold uppercase tracking-wider">{roleName}</h3>
                            </div>

                            {/* Bottom Section: Footer/Details */}
                            <div className="flex justify-between items-end border-t border-[var(--border-color)] pt-2 mt-auto">
                                <div className="flex gap-2 items-center">
                                    {/* QR Code Placeholder */}
                                    <div className="w-6 h-6 bg-[var(--bg-card)] border border-[var(--border-color)] p-0.5">
                                        <div className="w-full h-full bg-[var(--foreground)] opacity-20"></div>
                                    </div>
                                    <div className="text-[6px] text-[var(--text-muted)] leading-tight">
                                        ID: MAG-2024-FSD <br />
                                        Verified Certificate
                                    </div>
                                </div>
                                <div>
                                    {/* Signature */}
                                    <div className="text-right">
                                        <div className="font-handwriting text-[var(--foreground)] text-sm italic" style={{ fontFamily: 'cursive' }}>Akhil U.</div>
                                        <div className="text-[6px] text-[var(--text-muted)] uppercase tracking-wider border-t border-[var(--border-color)] mt-0.5 pt-0.5 inline-block">Director Signature</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default CertificateSection;
