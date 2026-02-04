'use client';

import React from 'react';
import Image from 'next/image';

export interface Tool {
    name: string;
    icon: string;
    darkModeInvert?: boolean;
}

interface ToolsSectionProps {
    title: string;
    description: string;
    tools: Tool[];
}

const ToolsSection = ({ title, description, tools }: ToolsSectionProps) => {
    return (
        <section className="py-24 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[var(--foreground)]">
                        {title}
                    </h2>
                    <p className="text-lg text-[var(--text-muted)]">
                        {description}
                    </p>
                </div>

                <div className="flex overflow-x-auto md:flex-wrap gap-4 items-center md:justify-start pb-6 md:pb-0 scrollbar-none">
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="shrink-0 min-w-[100px] group flex flex-col items-center justify-center p-4 transition-transform hover:scale-110 duration-300"
                        >
                            <div className={`relative w-10 h-10 md:w-15 md:h-15 mb-3 ${tool.darkModeInvert ? 'dark:invert' : ''}`}>
                                <Image
                                    src={tool.icon}
                                    alt={`${tool.name} logo`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-sm font-medium text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity">
                                {tool.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
