"use client";
import "./About.css";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedCopy from "../AnimatedCopy";
import BlockCopy from "../BlockCopy/BlockCopy";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const quote =
        `Most people don’t struggle because they lack education. They struggle because what they learn doesn’t translate into real work. We exist to change that. Our programs are built around practical skills, industry expectations, and hands-on execution. Learners don’t simply complete a course; they move forward with clarity, confidence, and the ability to step into meaningful professional roles.`;

    useGSAP(
        () => {
            if (!containerRef.current) return;

            const signature = containerRef.current.querySelector(".about-signature");
            const label = containerRef.current.querySelector(".about-label");

            gsap.set(signature, { opacity: 0, y: 20 });
            gsap.set(label, { opacity: 0, y: 20 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    end: "bottom bottom",
                    toggleActions: "play none none reverse",
                },
            });

            tl.to(label, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
            }).to(
                signature,
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                },
                "-=0.5"
            );
        },
        { scope: containerRef }
    );

    return (
        <section className="about-section" ref={containerRef}>
            <div className="about-label">
                <p>Who We Are</p>
            </div>

            <div className="about-quote">
                <h2>
                    <AnimatedCopy colorInitial="#2b1d08ff" colorAccent="#8d7219ff" colorFinal="#e8d8d8ff">
                        {quote}
                    </AnimatedCopy>
                    {/* <BlockCopy>
                        <p>
                            {quote}

                        </p>
                    </BlockCopy> */}
                </h2>
            </div>


        </section>
    );
};

export default About;
