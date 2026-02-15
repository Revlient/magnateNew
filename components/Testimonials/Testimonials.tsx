"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "The practical approach to learning at Magnate transformed my career. The industry mentorship is unmatched and truly prepares you for real-world challenges.",
    name: "Priya Sharma",
    designation: "Senior Financial Analyst",
  },
  {
    id: 2,
    text: "I went from having zero experience to landing a job at a top firm. The curriculum is designed to build authority and expertise from day one.",
    name: "Rahul Verma",
    designation: "Data Scientist",
  },
  {
    id: 3,
    text: "Magnate doesn't just teach you theory; they teach you how to lead. The impact on my professional growth has been exponential.",
    name: "Ananya Gupta",
    designation: "Marketing Director",
  },
  {
    id: 4,
    text: "The structured learning path and hands-on projects gave me the confidence to switch careers. Highly recommended for ambitious professionals.",
    name: "Vikram Singh",
    designation: "Full Stack Developer",
  },
  {
    id: 5,
    text: "Networking opportunities and career guidance here are exceptional. It’s more than a course; it’s a career accelerator.",
    name: "Sneha Patel",
    designation: "Product Manager",
  },
  {
    id: 6,
    text: "The instructors are industry veterans who bring real case studies to the table. Learning here feels like working on a real project.",
    name: "Arjun Nair",
    designation: "Investment Banker",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // Custom formatting (similar to easeOutQuart)
    },
  },
};

const Testimonials = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-[var(--background)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-heading)] font-bold text-white uppercase tracking-tight mb-6">
            What Our Learners Say
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-magenta)] mx-auto rounded-full" />
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 flex flex-col h-full"
            >
              <div className="absolute top-8 right-8 text-white/10 group-hover:text-[var(--secondary-cyan)] transition-colors duration-300">
                <Quote size={40} />
              </div>
              
              <div className="flex-1 mb-8 relative z-10">
                 <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-[family-name:var(--font-sans)]">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/10">
                <h4 className="text-white font-[family-name:var(--font-heading)] font-bold text-xl mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-[var(--text-muted)] text-sm font-medium uppercase tracking-wider">
                  {testimonial.designation}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
