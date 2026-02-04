import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import "./ScrollTextReveal.css";
const ScrollTextReveal = () => {
    const containerRef = useRef(null);
    const indicatorRef = useRef(null);
    const marqueeTrackRef = useRef(null);
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);
        const lenis = new Lenis();
        let targetVelocity = 0;
        const updateScroll = (e) => {
            targetVelocity = Math.abs(e.velocity) * 0.02;
        };
        lenis.on("scroll", updateScroll);
        lenis.on("scroll", ScrollTrigger.update);
        const tickerFunc = (time) => lenis.raf(time * 1000);
        gsap.ticker.add(tickerFunc);
        gsap.ticker.lagSmoothing(0);
        let marqueeTicker;
        const ctx = gsap.context(() => {
            const textBlocks = gsap.utils.toArray(".copy-block p");
            const splitInstances = textBlocks.map((block) =>
                SplitText.create(block, { type: "words", mask: "words" })
            );
            // Initial set
            if (splitInstances.length > 2) {
                gsap.set(splitInstances[1].words, { yPercent: 100 });
                gsap.set(splitInstances[2].words, { yPercent: 100 });
            }
            const overlapCount = 3;
            const getWordProgress = (phaseProgress, wordIndex, totalWords) => {
                const totalLength = 1 + overlapCount / totalWords;
                const scale =
                    1 /
                    Math.min(
                        totalLength,
                        1 + (totalWords - 1) / totalWords + overlapCount / totalWords
                    );
                const startTime = (wordIndex / totalWords) * scale;
                const endTime = startTime + (overlapCount / totalWords) * scale;
                const duration = endTime - startTime;
                if (phaseProgress <= startTime) return 0;
                if (phaseProgress >= endTime) return 1;
                return (phaseProgress - startTime) / duration;
            };
            const animateBlock = (outBlock, inBlock, phaseProgress) => {
                outBlock.words.forEach((word, i) => {
                    const progress = getWordProgress(
                        phaseProgress,
                        i,
                        outBlock.words.length
                    );
                    gsap.set(word, { yPercent: progress * 100 });
                });
                inBlock.words.forEach((word, i) => {
                    const progress = getWordProgress(
                        phaseProgress,
                        i,
                        inBlock.words.length
                    );
                    gsap.set(word, { yPercent: 100 - progress * 100 });
                });
            };
            // Marquee Logic
            const marqueeTrack = marqueeTrackRef.current;
            const items = gsap.utils.toArray(".marquee-item");
            if (marqueeTrack && items.length > 0) {
                // Clone items for seamless loop
                items.forEach((item) => marqueeTrack.appendChild(item.cloneNode(true)));
                let marqueePosition = 0;
                let smoothVelocity = 0;
                marqueeTicker = () => {
                    smoothVelocity += (targetVelocity - smoothVelocity) * 0.5;
                    const baseSpeed = 0.45;
                    const speed = baseSpeed + smoothVelocity * 9;
                    marqueePosition -= speed;
                    const trackWidth = marqueeTrack.scrollWidth / 2;
                    if (marqueePosition <= -trackWidth) {
                        marqueePosition = 0;
                    }
                    gsap.set(marqueeTrack, { x: marqueePosition });
                    targetVelocity *= 0.9;
                };
                gsap.ticker.add(marqueeTicker);
            }
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                onUpdate: (self) => {
                    const scrollProgress = self.progress;
                    if (indicatorRef.current) {
                        gsap.set(indicatorRef.current, { "--progress": scrollProgress });
                    }
                    if (splitInstances.length >= 3) {
                        if (scrollProgress <= 0.5) {
                            const phase1 = scrollProgress / 0.5;
                            animateBlock(splitInstances[0], splitInstances[1], phase1);
                        } else {
                            const phase2 = (scrollProgress - 0.5) / 0.5;
                            gsap.set(splitInstances[0].words, { yPercent: 100 });
                            animateBlock(splitInstances[1], splitInstances[2], phase2);
                        }
                    }
                },
            });
        }, containerRef);
        return () => {
            ctx.revert();
            lenis.destroy();
            gsap.ticker.remove(tickerFunc);
            if (marqueeTicker) {
                gsap.ticker.remove(marqueeTicker);
            }
        };
    }, []);
    return (
        <div className="scroll-reveal-wrapper">
            <nav className="scroll-reveal-nav">
                <p>/ CG191125</p>
                <p>Experiment_507</p>
            </nav>
            <div className="container" ref={containerRef}>
                <section className="hero">
                    <div className="about-copy">
                        <div className="copy-block">
                            <p>
                                I work in portrait photography with a focus on light, tone, and
                                quiet expression. My approach is patient and intentional.
                            </p>
                        </div>
                        <div className="copy-block">
                            <p>
                                I try to build images that feel honest, with enough breathing room
                                for personality to settle into the frame.
                            </p>
                        </div>
                        <div className="copy-block">
                            <p>
                                The final images aim to capture the shift between who they are and
                                become the moment the shutter falls still.
                            </p>
                        </div>
                    </div>
                    <div className="marquee">
                        <div className="marquee-track" ref={marqueeTrackRef}>
                            <div className="marquee-item">
                                <img src="/img_1.jpg" alt="1" />
                            </div>
                            <div className="marquee-item">
                                <img src="/img_2.jpg" alt="2" />
                            </div>
                            <div className="marquee-item">
                                <img src="/img_3.jpg" alt="3" />
                            </div>
                            <div className="marquee-item">
                                <img src="/img_4.jpg" alt="4" />
                            </div>
                            <div className="marquee-item">
                                <img src="/img_5.jpg" alt="5" />
                            </div>
                            <div className="marquee-item">
                                <img src="/img_6.jpg" alt="6" />
                            </div>
                            <div className="marquee-item">
                                <img src="/img_7.jpg" alt="7" />
                            </div>
                            <div className="marquee-item">
                                <img src="/img_8.jpg" alt="8" />
                            </div>
                            <div className="marquee-item">
                                <img src="/img_9.jpg" alt="9" />
                            </div>
                            <div className="marquee-item">
                                <img src="/img_10.jpg" alt="10" />
                            </div>
                        </div>
                    </div>
                    <div className="scroll-indicator" ref={indicatorRef}></div>
                </section>
            </div>
        </div>
    );
};
export default ScrollTextReveal;