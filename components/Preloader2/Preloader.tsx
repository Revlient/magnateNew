'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import CustomEase from 'gsap/dist/CustomEase';
import styles from './Preloader.module.css';

// Register plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(CustomEase);
}

interface PreloaderProps {
    videoSrc?: string;
    onComplete?: () => void;
    onEnrollClick?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({
    videoSrc = "/video.mp4",
    onComplete,
    onEnrollClick
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        // Lock scroll on mount
        document.body.style.overflow = 'hidden';
        document.body.style.cursor = 'wait';

        // Cleanup function in case component unmounts prematurely
        return () => {
            document.body.style.overflow = '';
            document.body.style.cursor = '';
        };
    }, []);



    // Re-implementing the exact logic structure inside useGSAP since converting to a single timeline might alter overlapping timings unintentionally.
    useGSAP(() => {
        const customEase = CustomEase.create("custom", ".87,0,.13,1");

        // Initial set
        gsap.set(".video-container", {
            scale: 0,
            rotation: -20,
        });

        // 1. Hero clip path partial
        gsap.to(".hero", {
            clipPath: "polygon(0% 45%, 25% 45%, 25% 55%, 0% 55%)",
            duration: 1.5,
            ease: customEase,
            delay: 1,
        });

        // 2. Hero clip path widen + Progress Bar + Counter
        gsap.to(".hero", {
            clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
            duration: 2,
            ease: customEase,
            delay: 3,
            onStart: () => {
                gsap.to(".progress-bar", {
                    width: "100vw",
                    duration: 2,
                    ease: customEase,
                });

                if (counterRef.current) {
                    gsap.to(counterRef.current, {
                        innerHTML: 100,
                        duration: 2,
                        ease: customEase,
                        snap: { innerHTML: 1 },
                    });
                }
            },
        });

        // 3. Full Reveal + Video Scale + Logo + Header
        gsap.to(".hero", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            ease: customEase,
            delay: 5,
            onStart: () => {
                gsap.to(".video-container", {
                    scale: 1,
                    rotation: 0,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 1.25,
                    ease: customEase,
                });

                gsap.to(".progress-bar", {
                    opacity: 0,
                    duration: 0.3,
                });

                gsap.to(".logo", {
                    // "left" is often problematic in React if not positioned absolutely yet, 
                    // but CSS has it absolute.
                    left: "0%",
                    transform: "translateX(0%)", // Clear the translateX(-50%)
                    duration: 1.25,
                    ease: customEase,
                    onStart: () => {
                        gsap.to(".char.anim-out h1", {
                            y: "100%",
                            duration: 1,
                            stagger: -0.075,
                            ease: customEase,
                        });

                        gsap.to(".char.anim-in h1", {
                            x: "-1200%", // Copied from original
                            duration: 1,
                            ease: customEase,
                            delay: 0.25,
                        });
                    },
                });
            },
        });

        // 4. Text Reveal
        gsap.to([".header span", ".coordinates span"], {
            y: "0%",
            duration: 1,
            stagger: 0.125,
            ease: "power3.out",
            delay: 5.75,
            onComplete: () => {
                gsap.to(".logo", {
                    opacity: 0,
                    duration: 1,
                    delay: 1,
                    onComplete: () => {
                        document.body.style.overflow = '';
                        document.body.style.cursor = '';
                        if (onComplete) onComplete();
                    }
                });
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={styles.container}>
            <div className={`${styles.hero} hero`}>
                <div className={`${styles.progressBar} progress-bar`}>
                    <p className={styles.text}>loading</p>
                    <p className={styles.text}>/<span ref={counterRef}>0</span></p>
                </div>

                <div className={`${styles.videoContainer} video-container`}>
                    <video autoPlay loop muted playsInline>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>



                <footer className={styles.footer}>
                    {/* Footer content can be updated or kept as purely decorative/info if not specified. 
                         Request didn't explicitly say to remove footer items, but "Subtext" was requested.
                         I'll place Subtext in the header area or footer depending on layout. 
                         The design has a big central header. The "Subtext" Practical skills... seems better suited 
                         near the main headline or at the bottom.
                         Let's put the subtext in the footer area for a clean look or under the main title.
                         Given the layout, putting subtext under the title in .header seems standard for "Hero".
                     */}
                </footer>

                <div className={`${styles.header} header`}>
                    <h1><span>India&rsquo;s Top</span></h1>
                    <h1><span>Career-Focused</span></h1>
                    <h1><span>Learning Platform</span></h1>
                    <div style={{ marginTop: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em' }}>
                        <p className={`${styles.text} ${styles.subText}`}>
                            <span>Practical skills. Industry mentorship. Career outcomes.</span>
                        </p>
                        <a
                            href="#"
                            className={styles.text}
                            style={{ marginTop: '1em', padding: '1em 2em', border: '1px solid currentColor', borderRadius: '50px', cursor: 'pointer' }}
                            onClick={(e) => {
                                e.preventDefault();
                                if (onEnrollClick) onEnrollClick();
                            }}
                        >
                            <span>Enroll to become a Magnate</span>
                        </a>
                    </div>
                </div>

                <div className={`${styles.coordinates} coordinates`}>
                    {/* Keeping coordinates or removing if they clash? 
                         User didn't ask to remove, but they might be distracting. 
                         I will keep them as part of the "Magnate" aesthetic unless told otherwise, 
                         or maybe update to something relevant like "Since 2025" etc.
                         For now, I'll leave them to maintain the visual balance.
                     */}
                    <p className={styles.text}><span>37.6934° N</span></p>
                    <p className={styles.text}><span>97.3382° W</span></p>
                </div>
            </div>

            <div className={`${styles.logo} logo`}>
                <div className={`${styles.char} char`}><h1>M</h1></div>
                <div className={`${styles.char} char anim-out`}><h1>a</h1></div>
                <div className={`${styles.char} char anim-out`}><h1>g</h1></div>
                <div className={`${styles.char} char anim-out`}><h1>n</h1></div>
                <div className={`${styles.char} char anim-out`}><h1>a</h1></div>
                <div className={`${styles.char} char anim-out`}><h1>t</h1></div>
                <div className={`${styles.char} char anim-out`}><h1>e</h1></div>
                <div className={`${styles.char} char anim-in`}><h1>.</h1></div>
            </div>
        </div>
    );
};

export default Preloader;
