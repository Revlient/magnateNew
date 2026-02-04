"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Copy.css";

gsap.registerPlugin(ScrollTrigger);

interface CopyProps {
    children: React.ReactNode;
    animateOnScroll?: boolean;
    delay?: number;
}

export default function Copy({
    children,
    animateOnScroll = true,
    delay = 0,
}: CopyProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            // Simple fade up animation instead of SplitText
            const elements = Array.from(containerRef.current.children);

            gsap.set(elements, { y: 20, opacity: 0 });

            const animationProps = {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: "power4.out",
                delay: delay,
            };

            if (animateOnScroll) {
                gsap.to(elements, {
                    ...animationProps,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        once: true,
                    },
                });
            } else {
                gsap.to(elements, animationProps);
            }
        },
        { scope: containerRef, dependencies: [animateOnScroll, delay] }
    );

    return (
        <div ref={containerRef} className="copy-wrapper">
            {children}
        </div>
    );
}
