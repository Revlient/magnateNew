"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Lenis from "lenis";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["900"] });

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "VP of Operations",
        quote: "Magnate's corporate training structure completely overhauled our leadership pipeline. The mentorship is real, practical, and immediately applicable.",
        gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)"
    },
    {
        id: 2,
        name: "David Ross",
        role: "Director, FinCorp",
        quote: "We've tried multiple platforms, but none offered the depth of industry expertise that Magnate does. It's built for serious professionals.",
        gradient: "linear-gradient(135deg, #a855f7, #ec4899)"
    },
    {
        id: 3,
        name: "Emily Chen",
        role: "Head of Product",
        quote: "The career outcomes speak for themselves. Our team's efficiency and strategic thinking improved within weeks of enrollment.",
        gradient: "linear-gradient(135deg, #f97316, #ef4444)"
    },
    {
        id: 4,
        name: "Michael Scott",
        role: "Regional Manager",
        quote: "Exceptional quality. The 'Build Authority' track helped me pivot my career into a senior executive role seamlessly.",
        gradient: "linear-gradient(135deg, #10b981, #0d9488)"
    },
    {
        id: 5,
        name: "Jessica Pearson",
        role: "Managing Partner",
        quote: "A masterclass in modern corporate education. No fluff, just hard skills and high-level strategy.",
        gradient: "linear-gradient(135deg, #6366f1, #3b82f6)"
    },
    {
        id: 6,
        name: "James Wilson",
        role: "CTO, TechWave",
        quote: "The technical depth and strategic oversight provided by Magnate are unmatched. It accelerated our digital transformation.",
        gradient: "linear-gradient(135deg, #22c55e, #14b8a6)"
    },
     {
        id: 7,
        name: "Anna Sergey",
        role: "Lead Designer",
        quote: "I found my creative voice through the specialized tracks. The community feedback loop is invaluable for rapid growth.",
        gradient: "linear-gradient(135deg, #e11d48, #be123c)"
    },
    {
        id: 8,
        name: "Robert Fox",
        role: "Investment Analyst",
        quote: "The financial modeling modules are world-class. Better than what I learned during my MBA.",
        gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)"
    }
];

const Testimonials = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const wordRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const lenisRef = useRef<Lenis | null>(null);
    const [gap, setGap] = useState(120);

    // Calculate Gap Logic
    useEffect(() => {
        const updateGap = () => {
            const calculatedGap = Math.max(120, window.innerWidth / (testimonials.length + 1));
            setGap(calculatedGap);
        };
        updateGap();
        window.addEventListener("resize", updateGap);
        return () => window.removeEventListener("resize", updateGap);
    }, []);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });
        lenisRef.current = lenis;

        // Sync Lenis with ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        // GSAP Setup
        const ctx = gsap.context(() => {
            const word = wordRef.current;
            const cards = cardsRef.current;
            const section = sectionRef.current;

            if (word && cards && section) {
                // Initial padding calculation for cards to start well-positioned
                const startPadding = window.innerWidth * 0.1; // 10vw padding start

                // Scroll Distances
                const wordWidth = word.scrollWidth;
                const cardsWidth = cards.scrollWidth + startPadding;
                const viewportWidth = window.innerWidth;

                const wordScrollDistance = wordWidth - viewportWidth;
                const cardsScrollDistance = cardsWidth - viewportWidth;

                // Determine total scroll distance based on the longer element
                // Or if we want to ensure cards finish scrolling, use cardsScrollDistance if it's larger
                const totalScrollDistance = Math.max(wordScrollDistance, cardsScrollDistance);

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: `+=${totalScrollDistance}`,
                        scrub: true,
                        pin: true,
                        invalidateOnRefresh: true,
                        anticipatePin: 1,
                    }
                });

                // Phase 1 & 2 combined using durations:
                // If word stops earlier, its duration should be proportional to its distance relative to total
                
                if (wordScrollDistance > 0) {
                    tl.to(word, {
                        x: -wordScrollDistance,
                        ease: "none",
                        duration: wordScrollDistance 
                    }, 0);
                }

                if (cardsScrollDistance > 0) {
                    tl.to(cards, {
                        x: -cardsScrollDistance,
                        ease: "none",
                        duration: cardsScrollDistance
                    }, 0);
                }
            }
        }, sectionRef);

        return () => {
            ctx.revert();
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, [gap]); // Re-run when gap changes

    return (
        <section 
            ref={sectionRef} 
            className="relative w-screen h-screen overflow-hidden bg-[#0c0026]"
        >
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            
            <div ref={containerRef} className="relative h-full w-full">
                
                {/* Background Word Layer */}
                <div 
                    ref={wordRef}
                    className={`${playfair.className} absolute top-1/2 left-0 -translate-y-1/2 text-[100vh] leading-none font-black text-white/5 whitespace-nowrap z-0 pointer-events-none select-none will-change-transform`}
                >
                    TESTIMONIALS
                </div>

                {/* Cards Layer */}
                <div 
                    ref={cardsRef}
                    className="absolute top-0 left-0 h-full flex items-center z-10 pl-[15vw] pr-[10vw] will-change-transform"
                    style={{ gap: `${gap}px` }}
                >
                    {testimonials.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
                            className={`
                                flex-shrink-0 w-[340px] h-[240px] 
                                rounded-3xl p-8
                                bg-white/5 backdrop-blur-md border border-white/10
                                shadow-[0_25px_80px_rgba(0,0,0,0.6)] 
                                flex flex-col justify-between
                                relative group hover:bg-white/10 transition-colors duration-500
                                ${index % 2 === 0 ? '-translate-y-16' : 'translate-y-16'}
                            `}
                        >
                            <div className="relative z-10">
                                <p className="text-white/90 text-sm font-light leading-relaxed line-clamp-4">
                                    "{card.quote}"
                                </p>
                            </div>

                            <div className="flex items-center gap-3 mt-4 border-t border-white/10 pt-4">
                                <div 
                                    className="w-10 h-10 rounded-full shadow-lg flex-shrink-0"
                                    style={{ background: card.gradient }}
                                />
                                <div>
                                    <h4 className="text-white font-bold text-sm">{card.name}</h4>
                                    <p className="text-white/40 text-[11px] font-medium tracking-wide uppercase">{card.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;