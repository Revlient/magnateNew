"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function AnimatedCopy({
    children,
    colorInitial = "#dddddd",
    colorAccent = "#abff02",
    colorFinal = "#000000",
}: {
    children: React.ReactNode;
    colorInitial?: string;
    colorAccent?: string;
    colorFinal?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const splitRefs = useRef<{ wordSplit: SplitText; charSplit: SplitText }[]>([]);
    const lastScrollProgress = useRef(0);
    const colorTransitionTimers = useRef(new Map<number, NodeJS.Timeout>());
    const completedChars = useRef(new Set<number>());

    useGSAP(
        () => {
            if (!containerRef.current) return;

            // ... (Cleanup previous state)
            splitRefs.current = [];
            lastScrollProgress.current = 0;
            colorTransitionTimers.current.clear();
            completedChars.current.clear();

            // Handle single vs multiple children
            let elements: Element[] = [];
            if (containerRef.current.hasAttribute("data-copy-wrapper")) {
                const childElements = Array.from(containerRef.current.children);
                if (childElements.length > 0) {
                    elements = childElements;
                } else {
                    elements = [containerRef.current];
                }
            } else {
                elements = [containerRef.current];
            }

            // Initialize SplitText
            elements.forEach((element) => {
                const wordSplit = SplitText.create(element, {
                    type: "words",
                    wordsClass: "word",
                });
                const charSplit = SplitText.create(wordSplit.words, {
                    type: "chars",
                    charsClass: "char",
                });
                splitRefs.current.push({ wordSplit, charSplit });
            });

            const allChars = splitRefs.current.flatMap(({ charSplit }) => charSplit.chars);
            gsap.set(allChars, { color: colorInitial });

            // Helper for delayed transition
            const scheduleFinalTransition = (char: Element, index: number) => {
                // Logic to setTimeout and gsap.to(char, { color: colorFinal })
                // Store timer in colorTransitionTimers
                if (colorTransitionTimers.current.has(index)) {
                    clearTimeout(colorTransitionTimers.current.get(index));
                }

                const timer = setTimeout(() => {
                    if (!completedChars.current.has(index)) {
                        gsap.to(char, {
                            duration: 0.1,
                            ease: "none",
                            color: colorFinal,
                            onComplete: () => {
                                completedChars.current.add(index);
                            }
                        });
                    }
                    colorTransitionTimers.current.delete(index);
                }, 100);

                colorTransitionTimers.current.set(index, timer);
            };

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 90%",
                end: "top 20%",
                scrub: 1,
                onUpdate: (self) => {
                    // Logic to compare self.progress with lastScrollProgress
                    // Determine current char index
                    // Update colors based on index & scroll direction
                    // Call scheduleFinalTransition for passed chars

                    const progress = self.progress;
                    const totalChars = allChars.length;
                    const isScrollingDown = progress >= lastScrollProgress.current;
                    // Calculate scan index
                    const currentCharIndex = Math.floor(progress * totalChars);

                    allChars.forEach((char, index) => {
                        if (isScrollingDown) {
                            // Scrolling DOWN
                            if (index === currentCharIndex) {
                                // Current scan head -> Accent color
                                // Clear any pending final transition so it stays accent
                                if (colorTransitionTimers.current.has(index)) {
                                    clearTimeout(colorTransitionTimers.current.get(index)!);
                                    colorTransitionTimers.current.delete(index);
                                }
                                gsap.set(char, { color: colorAccent });
                            } else if (index < currentCharIndex) {
                                // Passed by scanner -> Schedule final color
                                if (!completedChars.current.has(index) && !colorTransitionTimers.current.has(index)) {
                                    scheduleFinalTransition(char, index);
                                } else if (completedChars.current.has(index)) {
                                    // Already done, ensure it stays final
                                    gsap.set(char, { color: colorFinal });
                                }
                            } else {
                                // Ahead of scanner -> Initial color
                                gsap.set(char, { color: colorInitial });
                            }
                        } else {
                            // Scrolling UP
                            if (index >= currentCharIndex) {
                                // Receding scanner -> Reset to Initial
                                if (colorTransitionTimers.current.has(index)) {
                                    clearTimeout(colorTransitionTimers.current.get(index)!);
                                    colorTransitionTimers.current.delete(index);
                                }
                                completedChars.current.delete(index);
                                gsap.set(char, { color: colorInitial }); // Immediate reset
                            } else {
                                // Remaining passed chars -> Should be Final or transitioning
                                // If we scroll up but not past this char, its state generally stays
                                // But to be safe, if completed, ensure Final.
                                if (completedChars.current.has(index)) {
                                    gsap.set(char, { color: colorFinal });
                                }
                            }
                        }
                    });

                    lastScrollProgress.current = progress;
                }
            });
        },
        { scope: containerRef, dependencies: [colorInitial, colorAccent, colorFinal] }
    );

    // Render logic
    if (React.Children.count(children) === 1 && React.isValidElement(children)) {
        return React.cloneElement(children as React.ReactElement<any>, { ref: containerRef });
    }
    return <div ref={containerRef} data-copy-wrapper="true">{children}</div>;
}
