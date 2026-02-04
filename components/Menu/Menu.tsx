"use client";
import "./Menu.css";
import React, { useRef, useState, useEffect } from "react";

import { useTransitionRouter } from "next-view-transitions";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(CustomEase);
try {
    CustomEase.create("hop", ".15, 1, .25, 1");
} catch (e) {
    console.warn("CustomEase already registered", e);
}

interface MenuProps {
    onMenuStateChange?: (isOpen: boolean) => void;
}

const Menu = ({ onMenuStateChange }: MenuProps) => {
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentPath, setCurrentPath] = useState("/");
    const [currentTime, setCurrentTime] = useState("");
    const router = useTransitionRouter();

    const menuRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLDivElement>(null);
    const menuOverlayRef = useRef<HTMLDivElement>(null);

    const navLogoRef = useRef<HTMLAnchorElement>(null);
    const menuBtnRef = useRef<HTMLParagraphElement>(null);

    const closeBtnRef = useRef<HTMLParagraphElement>(null);

    const menuItemsRef = useRef<HTMLDivElement>(null);
    const menuFooterColsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now
                .toLocaleTimeString("en-US", {
                    hour12: true,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })
                .replace(/:/g, ":")
                .toUpperCase();
            setCurrentTime(timeString);
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleRouteChange = () => {
            if (typeof window !== "undefined") {
                setCurrentPath(window.location.pathname);
            }
        };

        window.addEventListener("popstate", handleRouteChange);

        // next-view-transitions router doesn't expose 'events' in the same way next/router does
        // for now we rely on popstate and manual updates in navigateTo
        // or we can attach a listener if available.
        // The source code used router.events?.on?.("routeChangeComplete", handleRouteChange);
        // which might be from standard next/router mixed with useTransitionRouter?
        // useTransitionRouter returns an instance that mimics next/router but might not have events.
        // Let's assume standard behavior for now.

        return () => {
            window.removeEventListener("popstate", handleRouteChange);
        };
    }, [router]);

    useGSAP(
        () => {
            if (!menuOverlayRef.current || !closeBtnRef.current) return;

            gsap.set(menuOverlayRef.current, {
                opacity: 0,
                pointerEvents: "none",
            });

            gsap.set(closeBtnRef.current, {
                y: "100%",
            });

            gsap.set(".menu-overlay-items .revealer a", {
                y: "100%",
            });

            gsap.set(".menu-footer .revealer p, .menu-footer .revealer a", {
                y: "100%",
            });
        },
        { scope: menuRef }
    );

    function slideInOut() {
        document.documentElement.animate(
            [
                {
                    opacity: 1,
                    transform: "translateY(0) scale(1)",
                },
                {
                    opacity: 0.2,
                    transform: "translateY(-30%) scale(0.90)",
                },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-old(root)",
            }
        );

        document.documentElement.animate(
            [
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
                },
            ],
            {
                duration: 1500,
                easing: "cubic-bezier(0.87, 0, 0.13, 1)",
                fill: "forwards",
                pseudoElement: "::view-transition-new(root)",
            }
        );
    }

    const getExactPath = () => {
        if (typeof window !== "undefined") {
            return window.location.pathname;
        }
        return currentPath;
    };

    const isExactPath = (path: string) => {
        const exactCurrentPath = getExactPath();
        return exactCurrentPath === path;
    };

    const navigateTo = (path: string) => {
        if (isAnimating) return;

        if (isExactPath(path)) {
            closeMenu();
            return;
        }

        closeMenu();

        setTimeout(() => {
            router.push(path, {
                onTransitionReady: slideInOut,
            });
        }, 0);
    };

    const openMenu = () => {
        if (isAnimating || !menuBtnRef.current || !menuOverlayRef.current || !navRef.current) return;

        onMenuStateChange?.(true);

        setIsAnimating(true);
        const tl = gsap.timeline({
            onComplete: () => setIsAnimating(false),
        });

        tl.to(menuBtnRef.current, {
            y: "-100%",
            duration: 0.5,
            ease: "power3.out",
            onComplete: () => {
                if (navRef.current) navRef.current.style.pointerEvents = "none";
                gsap.set(menuBtnRef.current!, { y: "100%" });
            },
        });

        tl.to(
            menuOverlayRef.current,
            {
                opacity: 1,
                duration: 0.5,
                ease: "power3.out",
                onStart: () => {
                    if (menuOverlayRef.current) menuOverlayRef.current.style.pointerEvents = "all";
                },
            },
            "-=0.45"
        );

        tl.to(
            closeBtnRef.current,
            {
                y: "0%",
                duration: 1,
                ease: "power3.out",
            },
            "-=0.5"
        );

        tl.to(
            ".menu-overlay-items .revealer a",
            {
                y: "0%",
                duration: 1,
                stagger: 0.075,
                ease: "power3.out",
            },
            "<"
        );

        tl.to(
            ".menu-footer .revealer p, .menu-footer .revealer a",
            {
                y: "0%",
                duration: 1,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.5,
            },
            "<"
        );
    };

    const closeMenu = () => {
        if (isAnimating || !menuOverlayRef.current) return;

        onMenuStateChange?.(false);

        setIsAnimating(true);
        const tl = gsap.timeline({
            onComplete: () => setIsAnimating(false),
        });

        tl.to(closeBtnRef.current, {
            y: "-100%",
            duration: 0.5,
            ease: "power3.out",
        });

        tl.to(
            ".menu-overlay-items .revealer a",
            {
                y: "-100%",
                duration: 0.5,
                stagger: 0.05,
                ease: "power3.in",
            },
            "<"
        );

        tl.to(
            ".menu-footer .revealer p, .menu-footer .revealer a",
            {
                y: "-100%",
                duration: 0.5,
                stagger: 0.05,
                ease: "power3.in",
            },
            "<"
        );

        tl.to(
            menuOverlayRef.current,
            {
                opacity: 0,
                duration: 0.5,
                ease: "power3.out",
                onComplete: () => {
                    if (menuOverlayRef.current) menuOverlayRef.current.style.pointerEvents = "none";

                    gsap.set(closeBtnRef.current!, {
                        y: "100%",
                    });

                    gsap.set(".menu-overlay-items .revealer a", {
                        y: "100%",
                    });

                    gsap.set(".menu-footer .revealer p, .menu-footer .revealer a", {
                        y: "100%",
                    });
                },
            },
            "+=0.1"
        );

        tl.to(
            menuBtnRef.current,
            {
                y: "0%",
                duration: 0.5,
                ease: "power3.out",
                onStart: () => {
                    if (navRef.current) navRef.current.style.pointerEvents = "all";
                },
            },
            "-=0.45"
        );
    };

    return (
        <>
            <div className="nav-container">

                <div className="nav" ref={navRef}>
                    <div className="dummy"></div>
                    <div className="nav-items">

                        <div className="nav-menu-time">
                            <div className="revealer">
                                <p className="sm caps mono">{currentTime}</p>
                            </div>
                        </div>



                        <div className="nav-menu-toggle-open">
                            <div className="nav-menu-demo">
                                <div className="revealer">
                                    <a href="/demo" className="sm caps mono">Get Free Demo</a>
                                </div>
                            </div>
                            <div className="revealer" onClick={openMenu}>
                                <p className="sm caps mono" ref={menuBtnRef}>
                                    Menu
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="nav-logo">
                <div className="revealer">
                    <a
                        href="/"
                        ref={navLogoRef}
                        onClick={(e) => {
                            e.preventDefault();
                            router.push("/", {
                                onTransitionReady: slideInOut,
                            });
                        }}
                    >
                        <img
                            className="logo-img"
                            src="/logo.svg"
                            alt=""
                        />
                    </a>
                </div>
            </div>
            <div className="menu" ref={menuRef}>
                <div className="menu-overlay" ref={menuOverlayRef}>
                    <div className="menu-overlay-nav">
                        <div className="menu-overlay-nav-toggle-close">
                            <div className="revealer" onClick={closeMenu}>
                                <p className="sm caps mono" ref={closeBtnRef}>
                                    Close
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="menu-overlay-items" ref={menuItemsRef}>
                        {[
                            { path: "/", label: "index," },
                            // { path: "/courses", label: "courses," },
                            { path: "/aboutus", label: "about us," },
                            { path: "/studio", label: "studio," },
                            { path: "/archive", label: "archive," },
                            { path: "/contact", label: "contact" },

                        ].map((item) => (
                            <div className="revealer" key={item.path}>
                                <a
                                    href={item.path}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigateTo(item.path);
                                    }}
                                >
                                    <h1>{item.label}</h1>
                                </a>
                            </div>
                        ))}
                        <div className="free-demo-menu">
                            <a href="/get-free-demo" onClick={(e) => {
                                e.preventDefault();
                                navigateTo("/get-free-demo");
                            }}>
                                <h1>Get Free Demo</h1>
                            </a>
                        </div>
                    </div>
                    <div className="menu-footer" ref={menuFooterColsRef}>
                        <div className="menu-footer-col">
                            <div className="revealer">
                                <p className="sm caps mono">&copy; 2025 All Rights Reserved</p>
                            </div>
                        </div>
                        <div className="menu-footer-col">
                            <div className="socials">
                                <div className="revealer">
                                    <a
                                        className="sm caps mono"
                                        href="https://www.youtube.com/@codegrid"
                                    >
                                        YouTube
                                    </a>
                                </div>
                                <div className="revealer">
                                    <a
                                        className="sm caps mono"
                                        href="https://www.instagram.com/codegridweb/"
                                    >
                                        Instagram
                                    </a>
                                </div>
                                <div className="revealer">
                                    <a className="sm caps mono" href="https://x.com/codegridweb">
                                        X
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;
