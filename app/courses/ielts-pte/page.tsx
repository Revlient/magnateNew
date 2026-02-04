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
    title: "IELTS & PTE Coaching | Magnate",
    description: "Achieve your target score (8777 or 79+) in IELTS and PTE. Expert coaching for study abroad and PR visa.",
};

// --- DATA DEFINITIONS ---

// 1. Overview Data
const overviewFeatures: OverviewFeature[] = [
    { icon: "🎯", text: "Target Band 8+" },
    { icon: "📝", text: "Mock Tests" },
    { icon: "🗣️", text: "1:1 Speaking" },
    { icon: "🌏", text: "Visa Guidance" }
];

const overviewSkills: OverviewSkill[] = [
    { title: "Listening", description: "Master various accents (British, Australian, American)" },
    { title: "Reading", description: "Speed reading & skimming techniques" },
    { title: "Writing", description: "Essay structuring & vocabulary enhancement" },
    { title: "Speaking", description: "Fluency, pronunciation & coherence" }
];

// 2. Video Testimonials Data
const videoTestimonials: TestimonialVideo[] = [
    {
        id: 1,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
        name: "Priya P.",
        role: "Scored IELTS 8.5"
    },
    {
        id: 2,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        poster: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop",
        name: "Ahmed K.",
        role: "PTE 90/90 Scorer"
    },
    {
        id: 3,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        poster: "https://images.unsplash.com/photo-1517256673644-544c81294329?q=80&w=1000&auto=format&fit=crop",
        name: "Sarah L.",
        role: "Study Permit - Canada"
    }
];

// 3. Tools Data
const tools: Tool[] = [
    { name: "Cambridge", icon: "https://upload.wikimedia.org/wikipedia/commons/4/42/Cambridge_University_Press_logo.svg", darkModeInvert: true },
    { name: "British Council", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/British_Council_Logo.svg/200px-British_Council_Logo.svg.png", darkModeInvert: true },
    { name: "Pearson", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Pearson_logo.svg/200px-Pearson_logo.svg.png", darkModeInvert: true },
    { name: "Grammarly", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Grammarly_logo.svg/200px-Grammarly_logo.svg.png" },
    { name: "Zoom", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/200px-Zoom_Communications_Logo.svg.png" },
];

// 4. Guide Data
const guideSteps: GuideStep[] = [
    {
        number: 1,
        title: "Assessment",
        description: "Take a diagnostic test to identify your current band score and weak areas."
    },
    {
        number: 2,
        title: "Skill Building",
        description: "Intensive practice on Reading, Writing, Listening, and Speaking modules with expert feedback."
    },
    {
        number: 3,
        title: "Mock Drills",
        description: "Full-length simulated tests under exam conditions to boost speed and accuracy."
    }
];

// 5. Roadmap Data
const roadmapData: RoadmapPhase[] = [
    {
        phase: "Week 1-2",
        description: "Foundation & Strategies",
        color: "#F43F5E", // Rose
        icon: "🏗️",
        items: [
            { type: 'node', label: 'Test Format Overview', status: 'core' },
            { type: 'node', label: 'Grammar Refresher', status: 'core' },
            { type: 'node', label: 'Vocabulary Builder', status: 'tool' },
            { type: 'checkpoint', label: 'Diagnostic Test', status: 'nav' }
        ]
    },
    {
        phase: "Week 3-4",
        description: "Receptive Skills (R & L)",
        color: "#14B8A6", // Teal
        icon: "🎧",
        items: [
            { type: 'node', label: 'Skimming & Scanning', status: 'core' },
            { type: 'node', label: 'Listening for Details', status: 'core' },
            { type: 'node', label: 'Accent Training', status: 'tool' },
            { type: 'checkpoint', label: 'Sectional Mocks', status: 'nav' }
        ]
    },
    {
        phase: "Week 5-6",
        description: "Productive Skills (W & S)",
        color: "#3B82F6", // Blue
        icon: "✍️",
        items: [
            { type: 'node', label: 'Essay Structure (Task 2)', status: 'core' },
            { type: 'node', label: 'Data Interpretation (Task 1)', status: 'core' },
            { type: 'node', label: 'Speaking Cues', status: 'tool' },
            { type: 'checkpoint', label: '1:1 Speaking Mock', status: 'nav' }
        ]
    },
    {
        phase: "Week 7-8",
        description: "Review & Final Mocks",
        color: "#8B5CF6", // Purple
        icon: "🏆",
        items: [
            { type: 'node', label: 'Full Length Mocks', status: 'core' },
            { type: 'node', label: 'Performance Analysis', status: 'core' },
            { type: 'node', label: 'Time Management', status: 'tool' },
            { type: 'checkpoint', label: 'Exam Readiness Check', status: 'nav' }
        ]
    }
];

// 6. Mentors Data
const mentors: Mentor[] = [
    {
        name: "Sharon D'Souza",
        role: "Certified IELTS Trainer",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
        companyName: "British Council",
        bio: "Train the Trainer certified. 8+ years of experience helping students achieve Band 8.0+."
    },
    {
        name: "Robert Keane",
        role: "PTE Expert",
        photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1000&auto=format&fit=crop",
        companyName: "Pearson",
        bio: "Expert in PTE tricks and strategies. Former examiner knowing exactly what software looks for."
    },
];

// 7. Career Paths Data
const careerPaths: Career[] = [
    {
        title: 'Study Abroad',
        salary: 0,
        growth: 100,
        demand: 'high',
        skills: ['Academic English', 'Critical Thinking'],
        companies: [
            { name: 'Canada', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/200px-Flag_of_Canada.svg.png' },
            { name: 'UK', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_Kingdom.svg/200px-Flag_of_the_United_Kingdom.svg.png' },
            { name: 'Australia', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/200px-Flag_of_Australia.svg.png' }
        ],
        color: '#F43F5E',
        featured: true
    },
    {
        title: 'PR / Immigration',
        salary: 80, // Avg salary range abroad
        growth: 50,
        demand: 'high',
        skills: ['General Training IELTS', 'Communication'],
        companies: [
            { name: 'Canada Express Entry', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/200px-Flag_of_Canada.svg.png' },
            { name: 'Australia PR', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/200px-Flag_of_Australia.svg.png' }
        ],
        color: '#14B8A6'
    }
];

const careerStats = {
    placementRate: "99%",
    avgSalary: "N/A" // Since it's a test prep
};

// 8. Certificate Data
const certificateFeatures: CertificateFeature[] = [
    {
        title: "Mock Test Analysis",
        description: "Detailed breakdown of your performance in each section."
    },
    {
        title: "Course Completion",
        description: "Certificate of training completion from Magnate Academy."
    },
    {
        title: "Score Guarantee",
        description: "We prepare you until you hit your target score (T&C apply)."
    }
];

// 9. Text Testimonials Data
const textTestimonials: Testimonial[] = [
    {
        id: 1,
        name: "Rohan M.",
        role: "Student @ Univ of Toronto",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "I was stuck at 6.5 in writing. Magnate's feedback sessions helped me jump to 7.5 in just 3 weeks."
    },
    {
        id: 2,
        name: "Kavita S.",
        role: "Nurse in UK",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "The listening strategies were a lifesaver. I scored a perfect 9.0 in listening!"
    }
];

// 10. FAQ Data
const faqs: FAQItem[] = [
    {
        question: "What is the difference between IELTS Academic and General?",
        answer: "Academic is for students planning to study abroad, while General Training is for immigration (PR) and work visas."
    },
    {
        question: "How long is the coaching?",
        answer: "Our crash course is 4 weeks, while the comprehensive program is 8 weeks. We offer flexible batches."
    },
    {
        question: "Do you provide study material?",
        answer: "Yes, you get access to the official Cambridge guides, 50+ mock tests, and our proprietary vocabulary lists."
    },
    {
        question: "Can I switch between IELTS and PTE?",
        answer: "Yes, our trainers are proficient in both. If you find one test difficult, we can assess and recommend the other based on your strengths."
    }
];

export default function IeltsPtePage() {
    return (
        <main className="w-full bg-[#1a1a1a] text-[#e4e7df] font-sans selection:bg-[#ffc22a] selection:text-black">

            {/* 1. Hero Section */}
            <CourseHero
                title="IELTS & PTE Coaching"
                description="Your gateway to global opportunities. Personalized coaching to help you smash your target scores in the first attempt."
                bannerText="New Weekend Batch Starting Soon →"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Courses", href: "/courses" },
                    { label: "Study Abroad", isActive: true }
                ]}
                ratingCount={2500}
                learnerCount="5000 +"
                courseType="Online / Offline"
                duration="4-8 Weeks"
                imageSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
                enquiryHref="/enroll"
                syllabusHref="/syllabus"
            />

            {/* 2. Overview Section */}
            <OverviewSection
                title="Ace Your English Test"
                description="Whether for study abroad or PR, our proven strategies make complex test tasks simple and manageable."
                features={overviewFeatures}
                skillsTitle="What We Cover"
                skillsDescription="Comprehensive coverage of all 4 language modules."
                skills={overviewSkills}
                ctaText="Book Free Demo"
            />

            {/* 3. Video Testimonials */}
            <VideoTestimonials testimonials={videoTestimonials} />

            {/* 4. Tools Section */}
            <ToolsSection
                title="Preparation Tools"
                description="Use the best resources to track your progress and improve daily."
                tools={tools}
            />

            {/* 5. Guide Section */}
            <GuideSection
                title="How We Prepare You"
                steps={guideSteps}
                ctaTitle="Get your dream score"
                ctaButtonText="Join Now"
                ctaHref="/enroll"
            />

            {/* 6. Roadmap Section */}
            <RoadmapSection
                title="Prep Strategy"
                description="A week-by-week plan to ensure you are exam-ready."
                roadmapData={roadmapData}
            />

            {/* 7. Mentors Section */}
            <MentorsSection
                title="Expert Trainers"
                description="Learn from certified trainers who have helped thousands achieve their dreams."
                mentors={mentors}
            />

            {/* 8. Career Paths Section */}
            <CareerPathsSection
                title="Where This Takes You"
                subtitle="GLOBAL OPPORTUNITIES"
                description="A high score opens doors to top universities and immigration pathways."
                careers={careerPaths}
                stats={careerStats}
            />

            {/* 9. Certificate Section */}
            <CertificateSection
                title="Course Completion"
                description="Receive a certificate validating your preparation and readiness for the official exam."
                features={certificateFeatures}
                roleName="English Pro"
                backgroundColor="#14B8A6" // Teal
            />

            {/* 10. Text Testimonials */}
            <TestimonialsSection
                title="Success Stories"
                subtitle="From our classrooms to the world."
                testimonials={textTestimonials}
            />

            {/* 11. FAQ Section */}
            <FAQSection
                title="Common Queries"
                description="Answers to your questions about IELTS and PTE."
                faqs={faqs}
            />

            <Footer />
        </main>
    );
}
