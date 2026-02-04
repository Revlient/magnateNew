"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        university: "Stanford University",
        quote: "Magnate made my dream of studying at Stanford a reality. Their guidance on the essay was invaluable.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
        name: "Michael Chen",
        university: "Imperial College London",
        quote: "The visa process was so daunting, but the team handled everything. I got my visa in record time!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
    },
    {
        name: "Aisha Patel",
        university: "University of Toronto",
        quote: "From shortlisting universities to finding accommodation, Magnate was there every step of the way.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
                        Success Stories
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400">
                        Join thousands of students who have found their path with Magnate.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl relative"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            <p className="text-zinc-700 dark:text-zinc-300 mb-6 italic">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-bold text-zinc-900 dark:text-white">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                                        {testimonial.university}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
