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
    title: "Finance & Investment Banking Course | Magnate",
    description: "Master financial modeling, valuation, and investment banking with our comprehensive job-oriented course.",
};

// --- DATA DEFINITIONS ---

// 1. Overview Data
const overviewFeatures: OverviewFeature[] = [
    { icon: "📊", text: "100+ Financial Models" },
    { icon: "💼", text: "Live Deal Simulations" },
    { icon: "🎓", text: "CFA/FRM Aligned" },
    { icon: "🤝", text: "Placement with Top Banks" }
];

const overviewSkills: OverviewSkill[] = [
    { title: "Modeling", description: "DCF, LBO, M&A Models" },
    { title: "Analysis", description: "Financial Statement Analysis" },
    { title: "Valuation", description: "Relative & Intrinsic Valuation" },
    { title: "Tools", description: "Excel, PowerPoint, Bloomberg" }
];

// 2. Video Testimonials Data
const videoTestimonials: TestimonialVideo[] = [
    {
        id: 1,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop",
        name: "James Wilson",
        role: "Analyst @ Goldman Sachs"
    },
    {
        id: 2,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        poster: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
        name: "Priya Sharma",
        role: "Associate @ JP Morgan"
    },
    {
        id: 3,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        poster: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
        name: "Robert Chang",
        role: "Equity Research @ Morgan Stanley"
    }
];

// 3. Tools Data
const tools: Tool[] = [
    { name: "Excel", icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
    { name: "PowerPoint", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg" },
    { name: "Bloomberg", icon: "https://upload.wikimedia.org/wikipedia/commons/6/69/Bloomberg_Terminal_Logo.svg", darkModeInvert: true },
    { name: "Tableau", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
    { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
];

// 4. Guide Data
const guideSteps: GuideStep[] = [
    {
        number: 1,
        title: "Financial Foundations",
        description: "Master accounting principles, financial statements, and core finance concepts used in investment banking."
    },
    {
        number: 2,
        title: "Advanced Modeling",
        description: "Build complex financial models from scratch, including Discounted Cash Flow (DCF), LBOs, and M&A models."
    },
    {
        number: 3,
        title: "Deal Execution",
        description: "Learn the art of deal-making, pitch deck creation, and simulated transactions with industry experts."
    }
];

// 5. Roadmap Data
const roadmapData: RoadmapPhase[] = [
    {
        phase: "Phase 1",
        description: "Core Accounting & Excel",
        color: "#16A34A", // Greenish for money/finance
        icon: "📊",
        items: [
            { type: 'node', label: 'Advanced Excel', status: 'core' },
            { type: 'node', label: 'Financial Statement Analysis', status: 'core' },
            { type: 'node', label: 'Accounting Standards (GAAP/IFRS)', status: 'core' },
            { type: 'checkpoint', label: 'Project: 3-Statement Model', status: 'nav' }
        ]
    },
    {
        phase: "Phase 2",
        description: "Valuation & Modeling",
        color: "#EA580C",
        icon: "📈",
        items: [
            { type: 'node', label: 'DCF Valuation', status: 'core' },
            { type: 'node', label: 'Relative Valuation (Comps)', status: 'core' },
            { type: 'node', label: 'Sensitivity Analysis', status: 'tool' },
            { type: 'checkpoint', label: 'Project: Company Valuation', status: 'nav' }
        ]
    },
    {
        phase: "Phase 3",
        description: "Investment Banking",
        color: "#2563EB",
        icon: "🏦",
        items: [
            { type: 'node', label: 'Mergers & Acquisitions (M&A)', status: 'core' },
            { type: 'node', label: 'Leveraged Buyouts (LBO)', status: 'core' },
            { type: 'node', label: 'Pitch Books & Decks', status: 'tool' },
            { type: 'checkpoint', label: 'Project: M&A Pitch Deck', status: 'nav' }
        ]
    },
    {
        phase: "Phase 4",
        description: "Career Prep",
        color: "#9333EA",
        icon: "🎓",
        items: [
            { type: 'node', label: 'Resume & LinkedIn', status: 'core' },
            { type: 'node', label: 'Technical Interviews', status: 'core' },
            { type: 'node', label: 'Mock Interviews', status: 'tool' },
            { type: 'checkpoint', label: 'Final Placement Drive', status: 'nav' }
        ]
    }
];

// 6. Mentors Data
const mentors: Mentor[] = [
    {
        name: "Vikram Malhotra",
        role: "Vice President, Goldman Sachs",
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
        companyLogo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg",
        bio: "Over 10 years of experience in Investment Banking and M&A. Mentored 500+ students to break into top-tier banks."
    },
    {
        name: "Sarah Lee",
        role: "Associate, Blackstone",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        companyName: "Blackstone",
        bio: "Specializes in Private Equity and Real Estate investments. Expert in LBO modeling and deal structuring."
    },
    {
        name: "Rahul Mehta",
        role: "CFA, Portfolio Manager",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        companyName: "Fidelity",
        bio: "CFA Charterholder with deep expertise in Asset Management and Equity Research. Passionate about financial education."
    }
];

// 7. Career Paths Data
const careerPaths: Career[] = [
    {
        title: 'Investment Banker',
        salary: 120,
        growth: 22,
        demand: 'high',
        skills: ['Valuation', 'M&A', 'Modeling'],
        companies: [
            { name: 'J.P. Morgan', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/JPMorgan_Chase.svg/200px-JPMorgan_Chase.svg.png' },
            { name: 'Citi', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Citigroup_Logo.svg/200px-Citigroup_Logo.svg.png' }
        ],
        color: '#16A34A',
        featured: true
    },
    {
        title: 'Private Equity Analyst',
        salary: 140,
        growth: 18,
        demand: 'critical',
        skills: ['LBO', 'Due Diligence', 'Deal Sourcing'],
        companies: [
            { name: 'Blackstone', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/The_Blackstone_Group_logo.svg/200px-The_Blackstone_Group_logo.svg.png' },
            { name: 'KKR', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/KKR_logo.svg/200px-KKR_logo.svg.png' }
        ],
        color: '#EA580C',
        featured: true
    },
    {
        title: 'Equity Research Associate',
        salary: 100,
        growth: 15,
        demand: 'moderate',
        skills: ['Analysis', 'Forecasting', 'Writing'],
        companies: [
            { name: 'Morgan Stanley', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Morgan_Stanley_Logo_1.svg/200px-Morgan_Stanley_Logo_1.svg.png' }
        ],
        color: '#2563EB'
    }
];

const careerStats = {
    placementRate: "93%",
    avgSalary: "$105K"
};

// 8. Certificate Data
const certificateFeatures: CertificateFeature[] = [
    {
        title: "Industry Recognized",
        description: "Accepted by top investment banks and financial institutions globally."
    },
    {
        title: "Deal Experience",
        description: "Showcase a portfolio of live deal simulations and valuation models."
    },
    {
        title: "CFA Aligned",
        description: "Curriculum covers key topics from CFA Level 1 & 2."
    }
];

// 9. Text Testimonials Data
const textTestimonials: Testimonial[] = [
    {
        id: 1,
        name: "Amit Patel",
        role: "Associate @ Deutsche Bank",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "The financial modeling modules were practically identical to what I do on the job. Magnate gave me the edge I needed."
    },
    {
        id: 2,
        name: "Jessica Wong",
        role: "Analyst @ Deloitte",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "Transitioning from engineering to finance seemed impossible until I found this course. The mentorship was a game changer."
    }
];

// 10. FAQ Data
const faqs: FAQItem[] = [
    {
        question: "Do I need a finance degree to apply?",
        answer: "No, a finance degree is not mandatory. We start with the basics of accounting and finance. However, a strong interest in numbers and analytical thinking is recommended."
    },
    {
        question: "Is this course helpful for CFA preparation?",
        answer: "Yes! Our curriculum aligns with major portions of the CFA Level 1 and Level 2 exams, giving you a strong head start if you plan to pursue the charter."
    },
    {
        question: "What kind of jobs can I get after this course?",
        answer: "You can apply for roles like Investment Banking Analyst, Private Equity Analyst, Equity Research Associate, Financial Analyst, and Corporate Finance Manager."
    },
    {
        question: "Do you provide placement assistance?",
        answer: "Yes, we have a dedicated placement cell that helps with resume reviews, mock interviews, and connecting you with our network of hiring partners in the finance industry."
    }
];

export default function FinanceCoursePage() {
    return (
        <main className="w-full bg-[#1a1a1a] text-[#e4e7df] font-sans selection:bg-[#ffc22a] selection:text-black">

            {/* 1. Hero Section */}
            <CourseHero
                title="Investment Banking & Finance"
                description="Become a top 1% finance professional. Master financial modeling, valuation, and exam prep for CFA/FRM with industry experts."
                bannerText="Enroll now & get access to Bloomberg Terminal Training →"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Courses", href: "/courses" },
                    { label: "Financial Analyst", isActive: true }
                ]}
                ratingCount={850}
                learnerCount="1.5K +"
                courseType="Online / Hybrid"
                duration="6 Months"
                imageSrc="https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop"
                enquiryHref="/enroll"
                syllabusHref="/syllabus"
            />

            {/* 2. Overview Section */}
            <OverviewSection
                title="Launch Your Career on Wall Street"
                description="A comprehensive program designed to take you from a novice to a job-ready finance professional. Learn by doing with real-world case studies."
                features={overviewFeatures}
                skillsTitle="Core Competencies"
                skillsDescription="Gain the technical skills and practical knowledge required by top financial firms."
                skills={overviewSkills}
                ctaText="Download Syllabus"
            // ctaAction handled by link inside or default
            />

            {/* 3. Video Testimonials */}
            <VideoTestimonials testimonials={videoTestimonials} />

            {/* 4. Tools Section */}
            <ToolsSection
                title="Master Industry Tools"
                description="Gain proficiency in the essential software and platforms used by finance professionals."
                tools={tools}
            />

            {/* 5. Guide Section */}
            <GuideSection
                title="Your Journey to Success"
                steps={guideSteps}
                ctaTitle="Ready to build your future?"
                ctaButtonText="Apply Now"
                ctaHref="/enroll"
            />

            {/* 6. Roadmap Section */}
            <RoadmapSection
                title="Learning Roadmap"
                description="A structured curriculum designed to build your expertise step-by-step."
                roadmapData={roadmapData}
            />

            {/* 7. Mentors Section */}
            <MentorsSection
                title="Mentored by Industry Leaders"
                description="Learn from professionals who have worked at the world's leading financial institutions."
                mentors={mentors}
            />

            {/* 8. Career Paths Section */}
            <CareerPathsSection
                title="Career Opportunities"
                subtitle="WHERE YOU CAN GO"
                description="Explore the high-growth career paths available to you after completing this course."
                careers={careerPaths}
                stats={careerStats}
            />

            {/* 9. Certificate Section */}
            <CertificateSection
                title="Financial Analyst Certification"
                description="Earn a certification that proves your ability to perform rigorous financial analysis and modeling."
                features={certificateFeatures}
                roleName="Certified Investment Banker"
                backgroundColor="#eab308" // Yellow/Gold for Finance
            />

            {/* 10. Text Testimonials */}
            <TestimonialsSection
                title="Alumni Success"
                subtitle="Hear from our students who made it to the top."
                testimonials={textTestimonials}
            />

            {/* 11. FAQ Section */}
            <FAQSection
                title="Questions?"
                description="We have answers. Here's what you need to know."
                faqs={faqs}
            />

            <Footer />
        </main>
    );
}
