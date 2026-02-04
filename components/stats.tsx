"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "5000+", label: "Students Placed" },
    { value: "98%", label: "Visa Success Rate" },
    { value: "200+", label: "University Partners" },
    { value: "$10M+", label: "Scholarships Secured" },
];

export default function Stats() {
    return (
        <section className="py-20 border-y border-zinc-100 dark:border-zinc-800 bg-white dark:bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-500 mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
