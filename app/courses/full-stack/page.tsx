import React from 'react';
import Footer from '@/components/Footer/Footer';
import CourseHero from '@/components/CourseHero/CourseHero';
import OverviewSection, { OverviewFeature, OverviewSkill } from '@/components/OverviewSection/OverviewSection';
import VideoTestimonials, { TestimonialVideo } from '@/components/VideoTestimonials/VideoTestimonials';
import ToolsSection, { Tool } from '@/components/ToolsSection/ToolsSection';
import GuideSection, { GuideStep } from '@/components/GuideSection/GuideSection';
import RoadmapSection, { RoadmapPhase } from '@/components/RoadmapSection/RoadmapSection';
import MentorsSection, { Mentor } from '@/components/MentorsSection/MentorsSection';
import CareerPathsSection, { Career } from '@/components/CareerPathsSection/CareerPathsSection';
import CertificateSection, { CertificateFeature } from '@/components/CertificateSection/CertificateSection';
import TestimonialsSection, { Testimonial } from '@/components/TestimonialsSection/TestimonialsSection';
import FAQSection, { FAQItem } from '@/components/FAQSection/FAQSection';

export const metadata = {
    title: "Full Stack Development Course | Magnate",
    description: "Launch your career in tech with our comprehensive job-oriented Full Stack Development course.",
};

// --- DATA DEFINITIONS ---

// 1. Overview Data
const overviewFeatures: OverviewFeature[] = [
    { icon: "💻", text: "200+ Hours of Live Coding" },
    { icon: "🚀", text: "15+ Real World Projects" },
    { icon: "👨‍🏫", text: "1:1 Mentorship" },
    { icon: "💼", text: "100% Placement Support" }
];

const overviewSkills: OverviewSkill[] = [
    { title: "Frontend", description: "React, Next.js, Tailwind CSS" },
    { title: "Backend", description: "Node.js, Express, Python" },
    { title: "Database", description: "MongoDB, PostgreSQL, Redis" },
    { title: "DevOps", description: "Docker, AWS, CI/CD" }
];

// 2. Video Testimonials Data
const videoTestimonials: TestimonialVideo[] = [
    {
        id: 1,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop",
        name: "Sarah Johnson",
        role: "Software Engineer @ Adobe"
    },
    {
        id: 2,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        poster: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
        name: "Michael Chen",
        role: "Full Stack Developer @ Uber"
    },
    {
        id: 3,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        poster: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop",
        name: "Emily Davis",
        role: "Frontend Engineer @ Vercel"
    }
];

// 3. Tools Data
const tools: Tool[] = [
    { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
    { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "MongoDB", icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" },
    { name: "Next.js", icon: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png", darkModeInvert: true },
    { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" },
    { name: "Docker", icon: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png", darkModeInvert: true },
    { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", darkModeInvert: true },
    { name: "Git", icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" }
];

// 4. Guide Data
const guideSteps: GuideStep[] = [
    {
        number: 1,
        title: "Foundation & Fundamentals",
        description: "Start with the building blocks of the web: HTML, CSS, and JavaScript. Learn how to structure pages, style them beautifully, and add interactivity."
    },
    {
        number: 2,
        title: "Frontend Mastery",
        description: "Deep dive into React.js ecosystem. Learn state management, hooks, and component patterns. Build single-page applications that are fast and responsive."
    },
    {
        number: 3,
        title: "Backend & System Design",
        description: "Master Node.js and Express. Understand APIs, authentication, database modeling with MongoDB/SQL, and scalable architecture principles."
    }
];

// 5. Roadmap Data
// Note: RoadmapItem structure needs to match what RoadmapSection expects.
// Assuming 'status' is optional or derived, and 'type' is 'node' | 'checkpoint'
const roadmapData: RoadmapPhase[] = [
    {
        phase: "Phase 1",
        description: "Web Fundamentals & Logic",
        color: "#3B82F6",
        icon: "🏗️",
        items: [
            { type: 'node', label: 'HTML5 & Semantic Markup', status: 'core' },
            { type: 'node', label: 'CSS3, Flexbox & Grid', status: 'core' },
            { type: 'node', label: 'JavaScript (ES6+)', status: 'core' },
            { type: 'checkpoint', label: 'Project: Personal Portfolio', status: 'nav' }
        ]
    },
    {
        phase: "Phase 2",
        description: "Frontend Development",
        color: "#10B981",
        icon: "🎨",
        items: [
            { type: 'node', label: 'React.js & Hooks', status: 'core' },
            { type: 'node', label: 'State Management (Redux/Zustand)', status: 'tool' },
            { type: 'node', label: 'Tailwind CSS', status: 'tool' },
            { type: 'checkpoint', label: 'Project: E-commerce Dashboard', status: 'nav' }
        ]
    },
    {
        phase: "Phase 3",
        description: "Backend & Database",
        color: "#F59E0B",
        icon: "⚙️",
        items: [
            { type: 'node', label: 'Node.js & Express', status: 'core' },
            { type: 'node', label: 'MongoDB & Mongoose', status: 'db' },
            { type: 'node', label: 'Authentication (JWT/OAuth)', status: 'core' },
            { type: 'checkpoint', label: 'Project: Social Media API', status: 'nav' }
        ]
    },
    {
        phase: "Phase 4",
        description: "Full Stack & DevOps",
        color: "#8B5CF6",
        icon: "🚀",
        items: [
            { type: 'node', label: 'Next.js (App Router)', status: 'core' },
            { type: 'node', label: 'Docker & CI/CD', status: 'tool' },
            { type: 'node', label: 'Deployment (AWS/Vercel)', status: 'tool' },
            { type: 'checkpoint', label: 'Final Capstone Project', status: 'nav' }
        ]
    }
];

// 6. Mentors Data
const mentors: Mentor[] = [
    {
        name: "Akhil Unnikrishnan",
        role: "Senior Engineer, STAR Labs Samsung",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1024px-Samsung_Logo.svg.png",
        bio: "Founding member of Samsung's Technology and Advanced Research (STAR) Lab. Specializes in scalable architecture and distributed systems."
    },
    {
        name: "Narayana Babu",
        role: "VP of Engineering, Zeta",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        companyName: "Zeta",
        bio: "Creator of multiple successful AI startups. Leads product and engineering at Zeta, bringing extensive experience in fintech and high-scale systems."
    },
    {
        name: "Dinesh Raveendran",
        role: "Data Engineer, Tesla",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
        bio: "Expert in building optimized, scalable data pipelines. Brings deep insights into big data, cloud infrastructure, and performance optimization."
    }
];

// 7. Career Paths Data
const careerPaths: Career[] = [
    {
        title: 'Full Stack Developer',
        salary: 95,
        growth: 25,
        demand: 'critical',
        skills: ['React', 'Node.js', 'MongoDB'],
        companies: [
            { name: 'Google', logo: 'https://img.icons8.com/?size=100&id=17949&format=png' },
            { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo_%28cropped%29.svg/288px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png' }
        ],
        color: '#F5A623',
        featured: true
    },
    {
        title: 'DevOps Engineer',
        salary: 110,
        growth: 30,
        demand: 'critical',
        skills: ['AWS', 'Docker', 'Kubernetes'],
        companies: [
            { name: 'AWS', logo: 'https://seeklogo.com/images/A/amazon-web-services-aws-logo-3CEFE22863-seeklogo.com.png' },
            { name: 'GitLab', logo: 'https://logo.svgcdn.com/logos/gitlab.png' }
        ],
        color: '#E09000',
        featured: true
    },
    {
        title: 'Frontend Developer',
        salary: 85,
        growth: 20,
        demand: 'high',
        skills: ['React', 'Vue.js', 'CSS'],
        companies: [
            { name: 'Airbnb', logo: 'https://seeklogo.com/images/A/airbnb-logo-6B95A1A9CB-seeklogo.com.png' }
        ],
        color: '#FFD54F'
    }
];

const careerStats = {
    placementRate: "95%",
    avgSalary: "$94K"
};

// 8. Certificate Data
const certificateFeatures: CertificateFeature[] = [
    {
        title: "Industry Recognized",
        description: "Validates your expertise in Full Stack Development for top tech employers."
    },
    {
        title: "Project Portfolio",
        description: "Prove your skills with a verified portfolio of production-grade applications."
    },
    {
        title: "Shareable Credential",
        description: "Add to your LinkedIn and resume to stand out to recruiters."
    }
];

// 9. Text Testimonials Data
const textTestimonials: Testimonial[] = [
    {
        id: 1,
        name: "Elena Rodriguez",
        role: "Full Stack Developer @ Google",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "The MERN stack curriculum was comprehensive and up-to-date. Building real-world projects gave me the confidence to crack the technical interviews at Google."
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Frontend Engineer @ Amazon",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "Coming from a non-tech background, the structured learning path and mentorship helped me transition smoothly into software engineering. Highly recommended!"
    }
];

// 10. FAQ Data
const faqs: FAQItem[] = [
    {
        question: "Do I need any prior coding experience to join?",
        answer: "Not necessarily! While basic computer literacy is required, our Full Stack Development course starts with the fundamentals of HTML, CSS, and JavaScript before moving into advanced topics. If you're a complete beginner, be prepared for a steep learning curve, but our mentors are here to support you every step of the way."
    },
    {
        question: "What specific technologies will I learn?",
        answer: "You will master the MERN stack (MongoDB, Express.js, React, Node.js), along with Next.js for server-side rendering, TypeScript for type safety, and PostgreSQL for relational database management. We also cover version control with Git, containerization with Docker, and cloud deployment on AWS."
    },
    {
        question: "Is this course live or pre-recorded?",
        answer: "It's a hybrid model designed for maximum effectiveness. You'll have access to high-quality pre-recorded lectures for conceptual learning at your own pace, supplemented by live mentorship sessions, code reviews, and Q&A webinars to resolve doubts and work on real-world projects."
    }
];

export default function FullStackCoursePage() {
    return (
        <main className="w-full bg-[#1a1a1a] text-[#e4e7df] font-sans selection:bg-[#ffc22a] selection:text-black">

            {/* 1. Hero Section */}
            <CourseHero
                title="Master Full Stack Development"
                description="A comprehensive program designed to transform beginners into expert developers. Master the MERN stack, Next.js, and cloud deployment from industry leaders."
                bannerText="Enroll now with No-Cost EMI options at Zero Interest →"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Courses", href: "/courses" },
                    { label: "Full Stack Development", isActive: true }
                ]}
                ratingCount={1250}
                learnerCount="2K +"
                courseType="Online"
                duration="8 Months"
                imageSrc="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop"
                enquiryHref="/enroll"
                syllabusHref="/syllabus"
            />

            {/* 2. Overview Section */}
            <OverviewSection
                title="Your Gateway to High-Paying Tech Careers"
                description="Master the end-to-end software development lifecycle. From designing intuitive user interfaces to architecting robust backend systems, this course equips you with the skills top tech companies demand."
                features={overviewFeatures}
                skillsTitle="What You'll Master"
                skillsDescription="A curated curriculum covering the most in-demand technologies in the industry."
                skills={overviewSkills}
                ctaText="Start Learning Today"
            // ctaAction handled by link inside or default
            />

            {/* 3. Video Testimonials */}
            <VideoTestimonials testimonials={videoTestimonials} />

            {/* 4. Tools Section */}
            <ToolsSection
                title="Industry Standard Tools"
                description="Get hands-on experience with the tools used by top engineering teams worldwide."
                tools={tools}
            />

            {/* 5. Guide Section */}
            <GuideSection
                title="How It Works"
                steps={guideSteps}
                ctaTitle="Ready to start your journey?"
                ctaButtonText="Apply Now"
                ctaHref="/enroll"
            />

            {/* 6. Roadmap Section */}
            <RoadmapSection
                title="Your Learning Path"
                description="A structured, step-by-step roadmap to guide you from basics to advanced concepts."
                roadmapData={roadmapData}
            />

            {/* 7. Mentors Section */}
            <MentorsSection
                title="Learn from the Best"
                description="Our mentors are industry veterans from top product companies who bring real-world experience to your learning."
                mentors={mentors}
            />

            {/* 8. Career Paths Section */}
            <CareerPathsSection
                title="Where You Can Go"
                subtitle="CAREER OUTCOMES"
                description="Unlock diverse high-impact career opportunities in the tech industry."
                careers={careerPaths}
                stats={careerStats}
            />

            {/* 9. Certificate Section */}
            <CertificateSection
                title="Get Certified"
                description="Earn a recognized certification that validates your skills and enhances your resume."
                features={certificateFeatures}
                roleName="Certified Full Stack Engineer"
            />

            {/* 10. Text Testimonials */}
            <TestimonialsSection
                title="Student Success"
                subtitle="See what our students are achieving."
                testimonials={textTestimonials}
            />

            {/* 11. FAQ Section */}
            <FAQSection
                title="Frequently Asked Questions"
                description="Common questions about the course, curriculum, and career support."
                faqs={faqs}
            />

            <Footer />
        </main>
    );
}
