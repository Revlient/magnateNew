'use client';

import React, { useState } from 'react';

export interface OverviewFeature {
    icon: string;
    text: string;
}

export interface OverviewSkill {
    title: string;
    description: string;
}

interface OverviewSectionProps {
    title: string;
    description: string;
    features: OverviewFeature[];
    skillsTitle: string;
    skillsDescription: string;
    skills: OverviewSkill[];
    ctaText?: string;
    ctaAction?: () => void;
}

const OverviewSection = ({
    title,
    description,
    features,
    skillsTitle,
    skillsDescription,
    skills,
    ctaText = "Get Hired",
    ctaAction
}: OverviewSectionProps) => {
    const cardWidth = 240;
    const gap = 24;

    const containerRef = React.useRef<HTMLDivElement>(null);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    // Calculate pages on mount and resize
    React.useEffect(() => {
        const updatePages = () => {
            if (containerRef.current) {
                const { clientWidth, scrollWidth } = containerRef.current;
                // If content fits entirely, 1 page (or 0 dots if we want to hide them)
                if (scrollWidth <= clientWidth) {
                    setPageCount(1);
                } else {
                    // Calculate how many full "views" we have
                    const count = Math.ceil(scrollWidth / clientWidth);
                    setPageCount(count);
                }
            }
        };

        updatePages();
        window.addEventListener('resize', updatePages);
        return () => window.removeEventListener('resize', updatePages);
    }, [skills]);

    const scrollToPage = (params: { page?: number; direction?: 'left' | 'right' }) => {
        if (containerRef.current) {
            const { clientWidth } = containerRef.current;
            let targetPage = currentPage;

            if (params.page !== undefined) {
                targetPage = params.page;
            } else if (params.direction === 'left') {
                targetPage = Math.max(0, currentPage - 1);
            } else if (params.direction === 'right') {
                targetPage = Math.min(pageCount - 1, currentPage + 1);
            }

            containerRef.current.scrollTo({
                left: targetPage * clientWidth,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, clientWidth } = containerRef.current;
            const newPage = Math.round(scrollLeft / clientWidth);
            if (newPage !== currentPage) {
                setCurrentPage(newPage);
            }
        }
    };

    return (
        <section>
            {/* Overview Part */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Section Title */}
                <h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                >
                    {title}
                </h2>

                {/* Description */}
                <p
                    className="text-lg mb-10 max-w-5xl"
                    style={{ color: 'var(--text-muted)' }}
                >
                    {description}
                </p>

                {/* Feature Badges */}
                <div className="flex flex-wrap gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 px-5 py-3 rounded-lg border transition-all hover:shadow-md"
                            style={{
                                backgroundColor: 'var(--bg-dark)',
                                borderColor: 'var(--border-color)'
                            }}
                        >
                            <span className="text-2xl">{feature.icon}</span>
                            <span
                                className="text-sm font-medium"
                                style={{ color: 'var(--text-primary)' }}
                            >
                                {feature.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills Covered Part */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Section Title */}
                <h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    style={{ color: 'var(--text-primary)' }}
                >
                    {skillsTitle}
                </h2>

                {/* Description */}
                <p
                    className="text-lg mb-10 max-w-5xl"
                    style={{ color: 'var(--text-muted)' }}
                >
                    {skillsDescription}
                </p>

                {/* Skills Slider */}
                <div className="relative w-full group">
                    <div
                        ref={containerRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 scrollbar-none"
                        style={{
                            gap: `${gap}px`,
                            scrollBehavior: 'smooth'
                        }}
                    >
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 p-5 rounded-lg border-b-4 snap-start transition-all duration-300 hover:-translate-y-1"
                                style={{
                                    width: `${cardWidth}px`,
                                    backgroundColor: 'var(--bg-dark)',
                                    borderBottomColor: 'var(--accent-primary)',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                }}
                            >
                                <h3
                                    className="text-base font-bold mb-2"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {skill.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: 'var(--text-muted)' }}
                                >
                                    {skill.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows - Only show if multiple pages */}
                    {pageCount > 1 && (
                        <>
                            <button
                                onClick={() => scrollToPage({ direction: 'left' })}
                                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80 -ml-4 z-10 shadow-lg disabled:opacity-0"
                                style={{
                                    backgroundColor: 'var(--accent-primary)',
                                    color: 'var(--bg-dark)'
                                }}
                                disabled={currentPage === 0}
                                aria-label="Previous page"
                            >
                                ←
                            </button>
                            <button
                                onClick={() => scrollToPage({ direction: 'right' })}
                                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80 -mr-4 z-10 shadow-lg disabled:opacity-0"
                                style={{
                                    backgroundColor: 'var(--accent-primary)',
                                    color: 'var(--bg-dark)'
                                }}
                                disabled={currentPage === pageCount - 1}
                                aria-label="Next page"
                            >
                                →
                            </button>
                        </>
                    )}
                </div>

                {/* Pagination Dots - Only show if multiple pages */}
                {pageCount > 1 && (
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: pageCount }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToPage({ page: index })}
                                className="w-3 h-3 rounded-full transition-all"
                                style={{
                                    backgroundColor: currentPage === index
                                        ? 'var(--accent-primary)'
                                        : 'var(--border-color)'
                                }}
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* CTA Button */}
                <div className="flex justify-center mt-10">
                    <button
                        onClick={ctaAction}
                        className="px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
                        style={{
                            backgroundColor: 'var(--accent-primary)',
                            color: 'var(--bg-dark)'
                        }}
                    >
                        {ctaText}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OverviewSection;
