'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href?: string;
    isActive?: boolean;
}

interface CourseHeroProps {
    title: string;
    description: string;
    bannerText: string;
    breadcrumbs: BreadcrumbItem[];
    ratingCount: number;
    learnerCount: string; // e.g., "1K +"
    courseType: string;
    duration: string;
    imageSrc: string;
    enquiryHref?: string;
    syllabusHref?: string;
}

const CourseHero = ({
    title,
    description,
    bannerText,
    breadcrumbs,
    ratingCount,
    learnerCount,
    courseType,
    duration,
    imageSrc,
    enquiryHref,
    syllabusHref
}: CourseHeroProps) => {
    return (
        <section className="min-h-screen pt-15" style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-primary)' }}>
            {/* Scrolling Banner */}
            <div className="w-full py-2 overflow-hidden" style={{ backgroundColor: 'var(--accent-primary)' }}>
                <div className="flex animate-scroll-left whitespace-nowrap">
                    {/* Doubling the array to ensure smooth seamless loop if needed, though simple translateX(-100%) needs specific content setup */}
                    {[...Array(20)].map((_, i) => (
                        <span
                            key={i}
                            className="mx-8 text-sm font-medium"
                            style={{ color: 'var(--bg-dark)' }}
                        >
                            🔥 {bannerText}
                        </span>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <ol className="flex items-center gap-2 text-sm">
                        {breadcrumbs.map((item, idx) => (
                            <React.Fragment key={idx}>
                                {idx > 0 && <li style={{ color: 'var(--text-secondary)' }}>&gt;</li>}
                                <li style={{ color: item.isActive || idx === breadcrumbs.length - 1 ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                                    {item.label}
                                </li>
                            </React.Fragment>
                        ))}
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        {/* Certified Program Badge */}
                        <div className="flex items-center gap-4 flex-wrap">
                            <span
                                className="text-sm font-medium"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Certified Program
                            </span>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4"
                                        fill={i < 4 ? 'var(--accent-primary)' : 'var(--text-muted)'}
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span
                                    className="ml-2 text-sm"
                                    style={{ color: 'var(--accent-primary)' }}
                                >
                                    {ratingCount} ratings
                                </span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            {title}
                        </h1>

                        {/* Description */}
                        <p
                            className="text-lg leading-relaxed"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                            {description}
                        </p>

                        {/* Course Info */}
                        <div className="flex gap-12">
                            <div>
                                <p
                                    className="text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    Course Type
                                </p>
                                <p
                                    className="text-lg font-semibold"
                                    style={{ color: 'var(--accent-primary)' }}
                                >
                                    {courseType}
                                </p>
                            </div>
                            <div>
                                <p
                                    className="text-sm"
                                    style={{ color: 'var(--text-secondary)' }}
                                >
                                    Course Duration
                                </p>
                                <p
                                    className="text-lg font-semibold"
                                    style={{ color: 'var(--accent-primary)' }}
                                >
                                    {duration}
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            {enquiryHref ? (
                                <Link
                                    href={enquiryHref}
                                    className="px-6 py-3 rounded-full font-semibold transition-all hover:opacity-90 flex items-center gap-2 cursor-pointer"
                                    style={{
                                        backgroundColor: 'var(--accent-primary)',
                                        color: 'var(--bg-dark)'
                                    }}
                                >
                                    Talk To A Program Advisor Now
                                    <span>🎉</span>
                                </Link>
                            ) : (
                                <button
                                    className="px-6 py-3 rounded-full font-semibold transition-all hover:opacity-90 flex items-center gap-2 cursor-pointer"
                                    style={{
                                        backgroundColor: 'var(--accent-primary)',
                                        color: 'var(--bg-dark)'
                                    }}
                                >
                                    Talk To A Program Advisor Now
                                    <span>🎉</span>
                                </button>
                            )}

                            {syllabusHref ? (
                                <Link
                                    href={syllabusHref}
                                    className="px-6 py-3 rounded-full font-semibold transition-all hover:opacity-80 cursor-pointer"
                                    style={{
                                        backgroundColor: 'transparent',
                                        color: 'var(--text-primary)',
                                        border: '2px solid var(--border-light)'
                                    }}
                                >
                                    View Syllabus
                                </Link>
                            ) : (
                                <button
                                    className="px-6 py-3 rounded-full font-semibold transition-all hover:opacity-80 cursor-pointer"
                                    style={{
                                        backgroundColor: 'transparent',
                                        color: 'var(--text-primary)',
                                        border: '2px solid var(--border-light)'
                                    }}
                                >
                                    View Syllabus
                                </button>
                            )}
                        </div>

                        {/* Learners */}
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[
                                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
                                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
                                ].map((src, i) => (
                                    <div key={i} className="relative w-10 h-10 rounded-full overflow-hidden" style={{ border: '2px solid var(--bg-dark)' }}>
                                        <Image
                                            src={src}
                                            alt={`Learner ${i + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <span style={{ color: 'var(--text-primary)' }}>
                                <strong>{learnerCount}</strong> Learners
                            </span>
                        </div>

                        {/* Recognized By */}
                        <div className="pt-4">
                            <p
                                className="text-sm mb-4"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                Courses Recognized by
                            </p>
                            <div className="flex items-center gap-6">
                                {/* Illinois Tech Badge */}
                                <div
                                    className="px-4 py-2 rounded"
                                    style={{ backgroundColor: '#c62828' }}
                                >
                                    <div className="text-white text-xs font-bold text-center">
                                        <div>ILLINOIS</div>
                                        <div>TECH</div>
                                    </div>
                                    <div
                                        className="text-xs mt-1 px-2 py-0.5 rounded text-center"
                                        style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--bg-dark)' }}
                                    >
                                        CERTIFIED
                                    </div>
                                </div>

                                {/* NSDC Badge */}
                                <div
                                    className="px-4 py-3 rounded flex items-center gap-2"
                                    style={{ backgroundColor: 'var(--text-primary)' }}
                                >
                                    <span className="text-2xl text-black">✦</span>
                                    <div>
                                        <div
                                            className="text-xs font-bold tracking-wider"
                                            style={{ color: 'var(--bg-dark)' }}
                                        >
                                            N·S·D·C
                                        </div>
                                        <div
                                            className="text-[8px]"
                                            style={{ color: '#666' }}
                                        >
                                            National Skill Development<br />Corporation
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md aspect-[4/5]">
                            {/* Main Image */}
                            <Image
                                src={imageSrc}
                                alt="Course Hero"
                                fill
                                className="rounded-lg object-cover"
                                style={{
                                    filter: 'grayscale(0%)',
                                    mixBlendMode: 'normal'
                                }}
                            />

                            {/* Play Button Overlay */}
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110 cursor-pointer z-10"
                                style={{ backgroundColor: 'var(--text-primary)' }}
                            >
                                <svg
                                    className="w-6 h-6 ml-1"
                                    fill="var(--bg-dark)"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>

                            {/* Decorative gradient overlay */}
                            <div
                                className="absolute inset-0 rounded-lg pointer-events-none"
                                style={{
                                    background: 'linear-gradient(to bottom, transparent 60%, var(--bg-dark) 100%)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseHero;
