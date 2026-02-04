'use client';

import React from 'react';
import Image from 'next/image';

export interface Mentor {
    name: string;
    role: string;
    photo: string;
    companyLogo?: string;
    companyName?: string;
    bio: string;
}

interface MentorsSectionProps {
    title: string;
    description: string;
    mentors: Mentor[];
}

const MentorsSection = ({ title, description, mentors }: MentorsSectionProps) => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const width = scrollRef.current.offsetWidth;
            const index = Math.round(scrollLeft / width);
            setActiveIndex(Math.min(Math.max(index, 0), mentors.length - 1));
        }
    };

    return (
        <section className="py-24 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--foreground)]">
                        {title}
                    </h2>
                    <p className="text-lg text-[var(--text-muted)] max-w-3xl">
                        {description}
                    </p>
                </div>

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-4 md:gap-8 pb-8 md:pb-0 scrollbar-none -mx-6 px-6 md:mx-0 md:px-0"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {mentors.map((mentor, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-[85vw] md:w-auto md:min-w-0 snap-center bg-[var(--bg-dark)] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-300 shadow-xl"
                        >
                            {/* Profile Photo */}
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-[var(--background)] shadow-lg relative">
                                <Image
                                    src={mentor.photo}
                                    alt={mentor.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Name & Role */}
                            <h3 className="text-xl font-bold text-[var(--accent-primary)] mb-1">
                                {mentor.name}
                            </h3>
                            <p className="text-[var(--text-primary)] font-medium mb-6">
                                {mentor.role}
                            </p>

                            {/* Company Logo/Name */}
                            <div className="h-8 mb-6 flex items-center justify-center relative w-full">
                                {mentor.companyLogo ? (
                                    <div className="relative w-32 h-full">
                                        <Image
                                            src={mentor.companyLogo}
                                            alt="Company Logo"
                                            fill
                                            className="object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                                        />
                                    </div>
                                ) : (
                                    <span className="text-2xl font-bold text-[var(--text-muted)] tracking-widest uppercase">
                                        {mentor.companyName}
                                    </span>
                                )}
                            </div>

                            {/* Bio */}
                            <p className="text-sm text-[var(--text-muted)] leading-relaxed text-left">
                                {mentor.bio}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile Pagination Dots */}
                <div className="flex justify-center gap-3 mt-4 md:hidden">
                    {mentors.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === activeIndex ? 'bg-[var(--accent-primary)]' : 'bg-white/20'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MentorsSection;
