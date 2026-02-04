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
    title: "German Language Course | Magnate",
    description: "Learn German from A1 to B2 level. Prepare for work, study, and life in Germany with native instructors.",
};

// --- DATA DEFINITIONS ---

// 1. Overview Data
const overviewFeatures: OverviewFeature[] = [
    { icon: "🇩🇪", text: "Native Instructors" },
    { icon: "🗣️", text: "Speaking Focus" },
    { icon: "📜", text: "Goethe Exam Prep" },
    { icon: "✈️", text: "Visa Support" }
];

const overviewSkills: OverviewSkill[] = [
    { title: "Speaking", description: "Fluent conversation & pronunciation" },
    { title: "Grammar", description: "Master German sentence structures (A1-B2)" },
    { title: "Vocabulary", description: "Business & daily life vocabulary" },
    { title: "Culture", description: "Understanding German work culture" }
];

// 2. Video Testimonials Data
const videoTestimonials: TestimonialVideo[] = [
    {
        id: 1,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?q=80&w=1000&auto=format&fit=crop",
        name: "Rahul Sharma",
        role: "Masters Student in Berlin"
    },
    {
        id: 2,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        poster: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1000&auto=format&fit=crop",
        name: "Anjali Gupta",
        role: "Nurse in Munich"
    },
    {
        id: 3,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        poster: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
        name: "John Doe",
        role: "Engineer at BMW" // Placeholder
    }
];

// 3. Tools Data
const tools: Tool[] = [
    { name: "Duolingo", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Duolingo_logo_2019.svg/200px-Duolingo_logo_2019.svg.png" },
    { name: "Zoom", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/200px-Zoom_Communications_Logo.svg.png" },
    { name: "Anki", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Anki_logo.svg" },
    { name: "Goethe", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Goethe-Institut-Logo.svg/200px-Goethe-Institut-Logo.svg.png", darkModeInvert: true },
    { name: "Quizlet", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Quizlet_Logo.png" },
];

// 4. Guide Data
const guideSteps: GuideStep[] = [
    {
        number: 1,
        title: "Foundation (A1-A2)",
        description: "Build basic vocabulary, grammar, and conversational skills for daily survival in Germany."
    },
    {
        number: 2,
        title: "Intermediate (B1-B2)",
        description: "Develop fluency, complex sentence structures, and professional communication abilities."
    },
    {
        number: 3,
        title: "Exam Preparation",
        description: "Intensive practice for Goethe-Zertifikat or Telc exams to secure your visa/job."
    }
];

// 5. Roadmap Data
const roadmapData: RoadmapPhase[] = [
    {
        phase: "Level A1",
        description: "Absolute Beginner",
        color: "#EF4444", // Red (German Flag color 1)
        icon: "🐣",
        items: [
            { type: 'node', label: 'Alphabet & Pronunciation', status: 'core' },
            { type: 'node', label: 'Basic Greetings', status: 'core' },
            { type: 'node', label: 'Present Tense', status: 'core' },
            { type: 'checkpoint', label: 'Mock A1 Exam', status: 'nav' }
        ]
    },
    {
        phase: "Level A2",
        description: "Elementary",
        color: "#F59E0B", // Gold (German Flag color 2)
        icon: "🌱",
        items: [
            { type: 'node', label: 'Daily Routine', status: 'core' },
            { type: 'node', label: 'Past Tense (Perfekt)', status: 'core' },
            { type: 'node', label: 'Adjective Endings', status: 'tool' },
            { type: 'checkpoint', label: 'Mock A2 Exam', status: 'nav' }
        ]
    },
    {
        phase: "Level B1",
        description: "Intermediate",
        color: "#000000", // Black (German Flag color 3 - represented as dark gray for UI)
        icon: "🌿",
        items: [
            { type: 'node', label: 'Complex Sentences', status: 'core' },
            { type: 'node', label: 'Passive Voice', status: 'core' },
            { type: 'node', label: 'Discussion & Debate', status: 'tool' },
            { type: 'checkpoint', label: 'Mock B1 Exam', status: 'nav' }
        ]
    },
    {
        phase: "Level B2",
        description: "Upper Intermediate",
        color: "#3B82F6", // Blue for professional
        icon: "🌳",
        items: [
            { type: 'node', label: 'Business German', status: 'core' },
            { type: 'node', label: 'Technical Vocabulary', status: 'core' },
            { type: 'node', label: 'Job Interview Prep', status: 'tool' },
            { type: 'checkpoint', label: 'Final Certification', status: 'nav' }
        ]
    }
];

// 6. Mentors Mentors Data
const mentors: Mentor[] = [
    {
        name: "Lisa Müller",
        role: "Senior Instructor (Native)",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
        companyName: "Goethe Institut",
        bio: "15+ years of teaching experience. Specialized in preparing students for C1/C2 exams."
    },
    {
        name: "Hans Weber",
        role: "Language Coach",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
        companyName: "University of Munich",
        bio: "Expert in phonetics and accent reduction. Helps students sound like natives."
    },
    {
        name: "Priya Singh",
        role: "C1 Certified Trainer",
        photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
        companyName: "TU Berlin Alumni",
        bio: "Understand the challenges of Indian students learning German. Provides targeted strategies."
    }
];

// 7. Career Paths Data
const careerPaths: Career[] = [
    {
        title: 'Work in Germany',
        salary: 60,
        growth: 20,
        demand: 'high',
        skills: ['German B2', 'Domain Skills'],
        companies: [
            { name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Siemens_AG_logo.svg/200px-Siemens_AG_logo.svg.png' },
            { name: 'BMW', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png' }
        ],
        color: '#EF4444',
        featured: true
    },
    {
        title: 'Study in Germany',
        salary: 0, // Not applicable directly mainly
        growth: 100, // Career growth potential
        demand: 'high',
        skills: ['German B1/C1', 'Academic Writing'],
        companies: [
            { name: 'TU Munich', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Technische_Universit%C3%A4t_M%C3%BCnchen_Logo.svg/200px-Technische_Universit%C3%A4t_M%C3%BCnchen_Logo.svg.png' },
            { name: 'RWTH Aachen', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/RWTH_Aachen_University_Logo.svg/200px-RWTH_Aachen_University_Logo.svg.png' }
        ],
        color: '#F59E0B',
        featured: true
    },
    {
        title: 'Language Specialist',
        salary: 50,
        growth: 15,
        demand: 'moderate',
        skills: ['Translation', 'Teaching', 'Interpreting'],
        companies: [
            { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' }
        ],
        color: '#3B82F6'
    }
];

const careerStats = {
    placementRate: "98%",
    avgSalary: "€55K" // Euro symbol since it's Germany
};

// 8. Certificate Data
const certificateFeatures: CertificateFeature[] = [
    {
        title: "CEFR Aligned",
        description: "Certificate mentions your proficiency level (A1-B2) according to European standards."
    },
    {
        title: "Visa Valid",
        description: "Accepted by many institutions as proof of language proficiency training."
    },
    {
        title: "Goethe Prep",
        description: "Our assessment pattern mirrors the official Goethe-Zertifikat exams."
    }
];

// 9. Text Testimonials Data
const textTestimonials: Testimonial[] = [
    {
        id: 1,
        name: "Aditya R.",
        role: "Student @ TU Berlin",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "I went from zero to B1 in 4 months. The teachers are amazing and very patient."
    },
    {
        id: 2,
        name: "Sneha P.",
        role: "Nurse @ Heidelberg",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "Learning medical German was tough, but Magnate's specialized modules helped me clear my licensing exam."
    }
];

// 10. FAQ Data
const faqs: FAQItem[] = [
    {
        question: "How long does it take to reach B2 level?",
        answer: "Typically, it takes about 6-8 months of intensive study to go from A1 to B2. Our course is designed to accelerate this process."
    },
    {
        question: "Is this course valid for a Student Visa?",
        answer: "While looking for a visa, embassies usually require a Goethe or Telc certificate. Our course prepares you specifically to pass these official exams with high scores."
    },
    {
        question: "Are classes online or offline?",
        answer: "We offer both. Online live interactive sessions and offline weekend batches are available."
    },
    {
        question: "Do you help with university applications?",
        answer: "Yes, we have a separate consultancy wing that assists with shortlisting universities and reviewing SOPs for Germany."
    }
];

export default function GermanPage() {
    return (
        <main className="w-full bg-[#1a1a1a] text-[#e4e7df] font-sans selection:bg-[#ffc22a] selection:text-black">

            {/* 1. Hero Section */}
            <CourseHero
                title="Learn German Language"
                description="Your passport to education and career in Germany. Comprehensive training from A1 to B2 with native experts."
                bannerText="Batches starting soon for Winter Semester 2026 intake →"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Courses", href: "/courses" },
                    { label: "German", isActive: true }
                ]}
                ratingCount={1200}
                learnerCount="3000 +"
                courseType="Online / Offline"
                duration="4-8 Months"
                imageSrc="https://images.unsplash.com/photo-1467269204594-9661b4dc4dce?q=80&w=2070&auto=format&fit=crop" // Brandenburg Gate or similar
                enquiryHref="/enroll"
                syllabusHref="/syllabus"
            />

            {/* 2. Overview Section */}
            <OverviewSection
                title="Willkommen to Your Future"
                description="Germany is the land of ideas and opportunities. Mastering the language is the key to unlocking free education and high-paying jobs."
                features={overviewFeatures}
                skillsTitle="Language Proficiency"
                skillsDescription="We follow the Common European Framework of Reference for Languages (CEFR)."
                skills={overviewSkills}
                ctaText="Check Batches"
            />

            {/* 3. Video Testimonials */}
            <VideoTestimonials testimonials={videoTestimonials} />

            {/* 4. Tools Section */}
            <ToolsSection
                title="Learning Resources"
                description="We provide access to premium interactive tools to make language learning fun and effective."
                tools={tools}
            />

            {/* 5. Guide Section */}
            <GuideSection
                title="Your Path to Germany"
                steps={guideSteps}
                ctaTitle="Start your journey today"
                ctaButtonText="Join Now"
                ctaHref="/enroll"
            />

            {/* 6. Roadmap Section */}
            <RoadmapSection
                title="CEFR Levels Roadmap"
                description="Structured progression from beginner to professional proficiency."
                roadmapData={roadmapData}
            />

            {/* 7. Mentors Section */}
            <MentorsSection
                title="Trained by the Best"
                description="Our faculty includes native German speakers and C2-certified Indian trainers."
                mentors={mentors}
            />

            {/* 8. Career Paths Section */}
            <CareerPathsSection
                title="Opportunities in Germany"
                subtitle="STUDY & WORK ABROAD"
                description="Germany faces a massive skilled labor shortage. Your skills + German language = Success."
                careers={careerPaths}
                stats={careerStats}
            />

            {/* 9. Certificate Section */}
            <CertificateSection
                title="Proficiency Certificate"
                description="Get a certificate upon completion of each level (A1, A2, B1, B2)."
                features={certificateFeatures}
                roleName="German Language Speaker"
                backgroundColor="#000000" // Black? Or maybe Red/Gold. Let's stick to black/dark for Germany theme or Gold.
            />

            {/* 10. Text Testimonials */}
            <TestimonialsSection
                title="Student Success"
                subtitle="From our classroom to Deutschland."
                testimonials={textTestimonials}
            />

            {/* 11. FAQ Section */}
            <FAQSection
                title="Common Questions"
                description="Everything you need to know about learning German."
                faqs={faqs}
            />

            <Footer />
        </main>
    );
}
