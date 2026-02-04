'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    title: string;
    description: string;
    faqs: FAQItem[];
}

const FAQSection = ({ title, description, faqs }: FAQSectionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-[var(--background)]">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
                        {title}
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)]">
                        {description}
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className={`rounded-xl border transition-all duration-300 ${isOpen
                                    ? 'bg-[var(--bg-card)] border-[var(--accent-primary)] shadow-lg shadow-[var(--accent-primary)]/5'
                                    : 'bg-[var(--bg-card)] border-[var(--border-color)] hover:border-[var(--text-secondary)]'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex items-center justify-between w-full p-6 text-left"
                                >
                                    <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[var(--text-primary)]' : 'text-[var(--text-primary)]'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <span className={`ml-4 p-2 rounded-full transition-all duration-300 ${isOpen
                                        ? 'bg-[var(--accent-primary)] text-[var(--bg-dark)] rotate-180'
                                        : 'bg-[var(--border-color)] text-[var(--text-secondary)] rotate-0'
                                        }`}>
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 text-[var(--text-secondary)] leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                {/* Optional Bottom CTA if needed, but keeping clean for now */}
            </div>
        </section>
    );
};

export default FAQSection;
