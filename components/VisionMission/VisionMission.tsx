"use client";
import React, { useRef } from "react";
import "./VisionMission.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCopy from "../AnimatedCopy"; // Reusing the animated text component

gsap.registerPlugin(ScrollTrigger);

const VisionMission = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        // Simple fade ups for labels and subtext
        const elements = containerRef.current.querySelectorAll(".vm-anim-up");

        elements.forEach(el => {
            gsap.fromTo(el,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

    }, { scope: containerRef });

    return (
        <section className="vm-section" ref={containerRef}>
            <div className="vm-container">
                {/* VISION */}
                <div className="vm-block vm-vision">
                    <div className="vm-label vm-anim-up">Vision</div>
                    <div className="vm-content">
                        {/* Using pure white accent for vision to keep it clean */}
                        <AnimatedCopy colorInitial="#333" colorAccent="#ffffff" colorFinal="#e5e5e5">
                            To make education a dependable path to career confidence, meaningful work, and upward life mobility.
                        </AnimatedCopy>
                    </div>
                </div>

                {/* MISSION */}
                <div className="vm-block vm-mission">
                    <div className="vm-label vm-anim-up">Mission</div>
                    <div className="vm-content">
                        {/* Using Magenta accent for Mission to highlight it */}
                        <AnimatedCopy colorInitial="#333" colorAccent="#fb01ff" colorFinal="#e5e5e5">
                            To design and deliver industry-aligned programs that build practical skill, professional confidence, and real-world readiness.
                        </AnimatedCopy>
                    </div>
                    <div className="vm-sub vm-anim-up">
                        Executed through disciplined training, experienced mentorship, and outcome-focused execution.
                    </div>
                </div>
            </div>

            {/* Background Ambient Glows */}
            <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-[#fb01ff] rounded-full blur-[200px] opacity-[0.03] pointer-events-none"></div>
            <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#20ecff] rounded-full blur-[200px] opacity-[0.03] pointer-events-none"></div>
        </section>
    );
};

export default VisionMission;
