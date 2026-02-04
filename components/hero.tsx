"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import AnimatedCopy from "@/components/ui/AnimatedCopy";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center overflow-hidden bg-zinc-50 dark:bg-black">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-200/20 dark:bg-indigo-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 h-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 h-full gap-8 lg:gap-12 items-center">

                    {/* Left Column: Typography & Content */}
                    <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-20 lg:pt-0">

                        {/* Watermark Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="hidden xl:block absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[120px] font-bold text-zinc-100 dark:text-zinc-900/50 pointer-events-none select-none tracking-widest whitespace-nowrap"
                        >
                            M A G N A T E
                        </motion.div>

                        <div className="relative pl-0 xl:pl-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mb-6 inline-flex items-center gap-2"
                            >
                                <div className="h-[1px] w-12 bg-blue-600"></div>
                                <span className="text-sm font-medium tracking-wider uppercase text-blue-600 dark:text-blue-400">
                                    The Future of Education
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 dark:text-white mb-8 leading-[0.9]"
                            >
                                Global <br />
                                <span className="italic font-serif font-light text-zinc-500 dark:text-zinc-400">Vision.</span>
                            </motion.h1>

                            <AnimatedCopy colorInitial="#666666" colorFinal="#e4e7df" colorAccent="#ffc22a">
                                <p className="text-lg mb-10 max-w-md leading-relaxed">
                                    Crafting pathways to elite universities worldwide. We blend architectural precision with educational strategy.
                                </p>
                            </AnimatedCopy>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                            >
                                <Button className="h-14 px-8 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-zinc-800 dark:hover:bg-zinc-200 text-lg group transition-all duration-300 transform hover:scale-105">
                                    Begin Journey
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>

                                <button className="h-14 w-14 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors group">
                                    <Play className="w-5 h-5 fill-zinc-900 dark:fill-white text-zinc-900 dark:text-white" />
                                </button>
                                <span className="text-sm font-medium text-zinc-500 underline decoration-zinc-300 decoration-1 underline-offset-4 cursor-pointer hover:text-zinc-800 dark:hover:text-white transition-colors">
                                    Watch Showreel
                                </span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Surreal Image */}
                    <div className="lg:col-span-7 h-full relative order-1 lg:order-2 min-h-[50vh] lg:min-h-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 lg:my-8 lg:mr-8 overflow-hidden rounded-[2rem] lg:rounded-l-[3rem] lg:rounded-r-none"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                            <Image
                                src="/hero-library.png"
                                alt="Surreal Futuristic Library"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                className="absolute bottom-12 left-12 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-xs"
                            >
                                <div className="text-4xl font-bold text-white mb-1">98%</div>
                                <div className="text-sm text-zinc-200 font-medium tracking-wide upppercase">Admission Success Rate</div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
