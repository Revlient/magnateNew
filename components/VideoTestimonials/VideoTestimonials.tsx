'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';

export interface TestimonialVideo {
    id: number;
    video: string;
    poster: string;
    name: string;
    role: string;
}

interface VideoTestimonialsProps {
    testimonials: TestimonialVideo[];
}

const VideoTestimonials = ({ testimonials }: VideoTestimonialsProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Handle video playback
    useEffect(() => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === currentIndex) {
                    // Try to play current video
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch((error) => {
                            console.log("Auto-play prevented:", error);
                        });
                    }
                } else {
                    // Pause others and reset
                    video.pause();
                    video.currentTime = 0;
                }
            }
        });
    }, [currentIndex]);

    // Calculate which items to show
    // We want to show: prev, current, next
    // But for a cleaner carousel effect with AnimatePresence or localized positioning,
    // let's just render all and position them based on their distance from current.

    const getPosition = (index: number) => {
        const diff = (index - currentIndex + testimonials.length) % testimonials.length;

        // If diff is 0 -> Center
        // If diff is 1 or length-1 -> Right or Left sibling
        // Else -> Hidden or far away

        if (diff === 0) return 'center';
        if (diff === 1 || diff === -(testimonials.length - 1)) return 'right';
        if (diff === testimonials.length - 1 || diff === -1) return 'left';
        return 'hidden';
    };

    return (
        <section className="py-24 bg-[var(--bg-dark)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative">
                <h2 className="text-3xl md:text-5xl font-medium text-center mb-16 text-[var(--text-primary)] font-[family-name:var(--font-humane)]">
                    Here what our learners have to say
                </h2>

                <div className="relative h-[600px] flex items-center justify-center">
                    {testimonials.map((testimonial, index) => {
                        const position = getPosition(index);
                        const isCenter = position === 'center';

                        // Calculate visual properties based on position
                        let x = 0;
                        let scale = 0.8;
                        let zIndex = 0;
                        let opacity = 0.5;
                        let rotateY = 0;

                        if (position === 'center') {
                            x = 0;
                            scale = 1.1; // Make center larger
                            zIndex = 10;
                            opacity = 1;
                            rotateY = 0;
                        } else if (position === 'left') {
                            x = -250; // Adjust spacing as needed
                            scale = 0.85;
                            zIndex = 5;
                            opacity = 0.6;
                            rotateY = 15;
                        } else if (position === 'right') {
                            x = 250;
                            scale = 0.85;
                            zIndex = 5;
                            opacity = 0.6;
                            rotateY = -15;
                        } else {
                            // Hidden items
                            x = 0;
                            scale = 0;
                            opacity = 0;
                            zIndex = -1;
                        }

                        // Hide entirely if "hidden" state to avoid clutter/performance hits
                        // But keep them in DOM for smooth transitions if using standard CSS/Framer
                        const isVisible = position !== 'hidden';

                        return (
                            <motion.div
                                key={testimonial.id}
                                className="absolute rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                                initial={false}
                                animate={{
                                    x,
                                    scale: isVisible ? scale : 0.5,
                                    opacity: isVisible ? opacity : 0,
                                    zIndex,
                                    rotateY
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 25,
                                    duration: 0.5
                                }}
                                style={{
                                    width: '300px',
                                    height: '500px',
                                    perspective: '1000px',
                                    pointerEvents: isCenter ? 'auto' : 'none' // Only center is interactive
                                }}
                            >
                                <div className="relative w-full h-full bg-black">
                                    <video
                                        ref={(el) => {
                                            videoRefs.current[index] = el;
                                        }}
                                        src={testimonial.video}
                                        poster={testimonial.poster}
                                        className="w-full h-full object-cover"
                                        loop
                                        muted={!isCenter} // Mute non-center videos just in case
                                        playsInline
                                    // Controls only on center? Or maybe custom UI.
                                    // doodle shows clean UI. Let's stick to clean.
                                    />

                                    {/* Overlay Gradient for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />

                                    {/* Learner Info */}
                                    <div className="absolute bottom-6 left-6 right-6 text-center">
                                        <h3 className="text-xl font-bold text-white mb-1">{testimonial.name}</h3>
                                        <p className="text-md text-[var(--accent-primary)]">{testimonial.role}</p>
                                    </div>

                                    {/* Play Button Overlay (Optional - visible if paused or before playing) */}
                                    {/* For now, auto-play logic handles it. */}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Navigation Buttons */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 z-20">
                    <button
                        onClick={prevSlide}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--accent-primary)] hover:text-black transition-all border border-white/20"
                        aria-label="Previous Testimonial"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-12 z-20">
                    <button
                        onClick={nextSlide}
                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--accent-primary)] hover:text-black transition-all border border-white/20"
                        aria-label="Next Testimonial"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonials;
