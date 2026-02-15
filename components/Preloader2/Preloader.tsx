'use client';

import React, { useRef } from 'react';
import Image from "next/image";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Preloader.module.css';

interface PreloaderProps {
    onComplete?: () => void;
    onEnrollClick?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({
    onEnrollClick
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        
        // Simple entrance animation
        tl.fromTo(".hero-bg", 
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
        )
        .fromTo(".hero-content span.inline-block",
            { y: "100%", opacity: 0, rotateX: -10 },
            { y: "0%", opacity: 1, rotateX: 0, duration: 1, stagger: 0.1, ease: "power3.out" },
            "-=1"
        )
        .fromTo(".hero-content h2, .hero-content a", 
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
            "-=0.5"
        );

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[var(--background)]">
            <div className="relative w-full h-full flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-full h-full z-0 hero-bg">
                     <Image 
                        src="/images/studio/hero.jpeg" 
                        alt="Hero Background" 
                        fill 
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50 z-10" />
                </div>

                <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-8 hero-content">
                    <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
                        {/* Main Heading */}
                        <div className="flex flex-col items-center leading-none">
                            <h1 className="text-[12vw] md:text-[7vw] font-extrabold uppercase text-white tracking-tighter leading-[0.9] overflow-hidden">
                                <span className="inline-block origin-bottom">India&rsquo;s Top</span>
                            </h1>
                            <h1 className="text-[12vw] md:text-[7vw] font-extrabold uppercase text-white tracking-tighter leading-[0.9] overflow-hidden">
                                <span className="inline-block origin-bottom">Career-Focused</span>
                            </h1>
                            <h1 className="text-[12vw] md:text-[7vw] font-extrabold uppercase text-white tracking-tighter leading-[0.9] overflow-hidden">
                                <span className="inline-block origin-bottom">Learning Platform</span>
                            </h1>
                        </div>

                        {/* Subtext and CTA */}
                        <div className="flex flex-col items-center gap-8 mt-4 md:mt-8">
                            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8">
                                <h2 className="text-white/90 font-[family-name:var(--font-manrope)] font-bold text-sm md:text-lg tracking-[0.2em] uppercase drop-shadow-md">
                                    Think Bigger.
                                </h2>
                                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/50" />
                                <h2 className="text-white/90 font-[family-name:var(--font-manrope)] font-bold text-sm md:text-lg tracking-[0.2em] uppercase drop-shadow-md">
                                    Move Smarter.
                                </h2>
                                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/50" />
                                <h2 className="text-white/90 font-[family-name:var(--font-manrope)] font-bold text-sm md:text-lg tracking-[0.2em] uppercase drop-shadow-md">
                                    Become a Magnate.
                                </h2>
                            </div>

                            <a
                                href="#"
                                className="group relative px-8 py-3 md:px-10 md:py-4 rounded-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/30 transition-all duration-500 hover:bg-white hover:scale-105 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (onEnrollClick) onEnrollClick();
                                }}
                            >
                                <span className="relative z-10 font-[family-name:var(--font-manrope)] text-white text-sm md:text-base font-bold tracking-widest uppercase transition-colors duration-500 group-hover:text-black">
                                    Enroll Now
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
