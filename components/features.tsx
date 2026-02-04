"use client";

import { motion } from "framer-motion";
import { GraduationCap, FileCheck, Plane, FileText, HandCoins, Users } from "lucide-react";

const features = [
    {
        icon: GraduationCap,
        title: "University Shortlisting",
        description: "AI-driven and expert-curated lists of universities that match your profile and career goals.",
    },
    {
        icon: FileText,
        title: "Application Support",
        description: "End-to-end assistance with SOPs, LORs, and application forms to ensure a flawless submission.",
    },
    {
        icon: HandCoins,
        title: "Scholarship Guidance",
        description: "Identify and apply for scholarships to reduce your financial burden significantly.",
    },
    {
        icon: FileCheck,
        title: "Visa Assistance",
        description: "Expert guidance on documentation and mock interviews to maximize visa approval chances.",
    },
    {
        icon: Plane,
        title: "Pre-departure Briefing",
        description: "Get ready for your new life with our comprehensive travel and accommodation guides.",
    },
    {
        icon: Users,
        title: "Alumni Network",
        description: "Connect with our successful students already studying at your dream destination.",
    },
];

export default function Features() {
    return (
        <section id="services" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
                        Comprehensive Services for Aspiring Students
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        We don't just fill forms; we build careers. Our specialized services cover every step of your study abroad journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-shadow group"
                        >
                            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
