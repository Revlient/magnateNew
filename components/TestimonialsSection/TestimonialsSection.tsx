'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    quote: string;
}

interface TestimonialsSectionProps {
    title?: string;
    subtitle?: string;
    testimonials: Testimonial[];
}

const TestimonialsSection = ({
    title = "Success Stories",
    subtitle = "Hear from our alumni who have transformed their careers.",
    testimonials
}: TestimonialsSectionProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="py-24 bg-[var(--background)] relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-[var(--secondary-cyan)]/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-[var(--secondary-magenta)]/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--foreground)]">
                        {title}
                    </h2>
                    <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Quote Icon Background */}
                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-[var(--foreground)]/5 pointer-events-none">
                        <Quote size={120} fill="currentColor" />
                    </div>

                    <div className="bg-[var(--bg-card)] border border-[var(--border-color)] backdrop-blur-sm rounded-3xl p-8 md:p-12 grid grid-cols-1 items-center">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out flex flex-col items-center justify-center text-center w-full
                            ${index === activeIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-90 -z-10 pointer-events-none'}
                        `}
                            >
                                <div className="mb-6 md:mb-8 relative">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[var(--accent-primary)] p-1">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={80}
                                            height={80}
                                            className="rounded-full object-cover w-full h-full"
                                        />
                                    </div>
                                </div>

                                <blockquote className="text-lg md:text-2xl text-center text-[var(--foreground)] font-medium italic mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
                                    "{testimonial.quote}"
                                </blockquote>

                                <div className="text-center">
                                    <h4 className="text-base md:text-lg font-bold text-[var(--accent-primary)]">{testimonial.name}</h4>
                                    <p className="text-xs md:text-sm text-[var(--text-muted)] mt-1">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-[var(--accent-primary)] w-8' : 'bg-[var(--foreground)]/20 hover:bg-[var(--foreground)]/40'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
