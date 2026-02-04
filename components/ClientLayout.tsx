"use client";
import { useState, useEffect } from "react";
import Menu from "./Menu/Menu";
import { ReactLenis } from "lenis/react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const scrollSettings = isMobile
        ? {
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical" as const,
            gestureDirection: "vertical" as const,
            smooth: true,
            smoothTouch: true,
            touchMultiplier: 0.8, // Reduced from 1.5 for slower scroll
            infinite: false,
            lerp: 0.05,
            wheelMultiplier: 1,
            orientation: "vertical" as const,
            smoothWheel: true,
            syncTouch: true,
        }
        : {
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: "vertical" as const,
            gestureDirection: "vertical" as const,
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 1.2, // Reduced from 2 for less sensitive trackpad/mouse
            infinite: false,
            lerp: 0.1,
            wheelMultiplier: 1,
            orientation: "vertical" as const,
            smoothWheel: true,
            syncTouch: true,
        };

    return (
        <ReactLenis root options={scrollSettings}>
            <Menu />
            {children}
        </ReactLenis>
    );
}
