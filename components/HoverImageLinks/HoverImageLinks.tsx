"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import styles from "./HoverImageLinks.module.css";
import Image from "next/image";

interface HoverImageLinksProps {
    items: {
        label: string;
        img: string;
        href?: string;
    }[];
}

export default function HoverImageLinks({ items }: HoverImageLinksProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(CustomEase);

        // Create the "hop" ease
        CustomEase.create(
            "hop",
            "M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1"
        );

        const clientNames = itemsRef.current;
        const clientsPreview = previewRef.current;

        if (!clientNames.length || !clientsPreview) return;

        let activeClientIndex = -1;

        // Cleanup function to remove event listeners
        const cleanupMap = new Map();

        clientNames.forEach((client, index) => {
            if (!client) return;

            let activeClientImgWrapper: HTMLDivElement | null = null;
            let activeClientImg: HTMLImageElement | null = null;

            const handleMouseOver = () => {
                if (activeClientIndex === index) return;

                if (activeClientIndex !== -1) {
                    const previousClient = clientNames[activeClientIndex];
                    if (previousClient) {
                        // Create a custom event to trigger logic on the other element if needed
                        // But simpler is to dispatch mouseout
                        const mouseoutEvent = new Event("mouseout");
                        previousClient.dispatchEvent(mouseoutEvent);
                    }
                }

                activeClientIndex = index;

                const clientImgWrapper = document.createElement("div");
                clientImgWrapper.className = styles.clientImgWrapper; // Use the hashed class name

                const clientImg = document.createElement("img");
                clientImg.src = items[index].img;
                clientImg.alt = items[index].label;

                // Initial state
                gsap.set(clientImg, { scale: 1.25, opacity: 0 });

                clientImgWrapper.appendChild(clientImg);
                clientsPreview.appendChild(clientImgWrapper);

                activeClientImgWrapper = clientImgWrapper;
                activeClientImg = clientImg;

                // Animate Wrapper
                gsap.to(clientImgWrapper, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 0.5,
                    ease: "hop",
                });

                // Animate Image Opacity
                gsap.to(clientImg, {
                    opacity: 1,
                    duration: 0.25,
                    ease: "power2.out",
                });

                // Animate Image Scale
                gsap.to(clientImg, {
                    scale: 1,
                    duration: 1.25,
                    ease: "hop",
                });
            };

            const handleMouseOut = (event: Event) => {
                // Safe check for relatedTarget to avoid flickering if moving to child
                const mouseEvent = event as MouseEvent;
                if (mouseEvent.relatedTarget && client.contains(mouseEvent.relatedTarget as Node)) {
                    return;
                }

                if (activeClientIndex === index) {
                    activeClientIndex = -1;
                }

                if (activeClientImg && activeClientImgWrapper) {
                    const clientImgToRemove = activeClientImg;
                    const clientImgWrapperToRemove = activeClientImgWrapper;

                    // Clear references so we don't try to remove them again
                    activeClientImg = null;
                    activeClientImgWrapper = null;

                    gsap.to(clientImgToRemove, {
                        opacity: 0,
                        duration: 0.5,
                        ease: "power1.out",
                        onComplete: () => {
                            if (clientImgWrapperToRemove.parentNode === clientsPreview) {
                                clientsPreview.removeChild(clientImgWrapperToRemove);
                            } else {
                                clientImgWrapperToRemove.remove();
                            }
                        },
                    });
                }
            };

            client.addEventListener("mouseover", handleMouseOver);
            client.addEventListener("mouseout", handleMouseOut);

            cleanupMap.set(client, { mouseover: handleMouseOver, mouseout: handleMouseOut });
        });

        return () => {
            // Cleanup GSAP context? 
            // The animations above are fire-and-forget on DOM elements we created. 
            // We should ideally kill tweens on the preview container's children if component unmounts.
            // But standard cleanup of listeners is most important.

            cleanupMap.forEach((handlers, client) => {
                client.removeEventListener("mouseover", handlers.mouseover);
                client.removeEventListener("mouseout", handlers.mouseout);
            });

            // Also clear any remaining images in preview
            if (clientsPreview) {
                gsap.killTweensOf(clientsPreview.querySelectorAll("*"));
                clientsPreview.innerHTML = "";
            }
        };
    }, [items]);

    return (
        <div className={styles.clients} ref={containerRef}>
            <div className={styles.clientsPreview} ref={previewRef}>
                {/* Images will be injected here */}
            </div>

            <div className={styles.clientsHeader}>
                <p>Trusted Us</p>
            </div>

            <div className={styles.clientsList}>
                {items.map((item, index) => (
                    <React.Fragment key={index}>
                        <a
                            href={item.href || "#"}
                            className={styles.clientName}
                            ref={(el) => { itemsRef.current[index] = el; }}
                        >
                            {item.label}
                        </a>
                        {index < items.length - 1 && <span className={styles.clientComma}>,</span>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
