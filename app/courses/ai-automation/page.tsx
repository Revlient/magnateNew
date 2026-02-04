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
    title: "AI Automation Course | Magnate",
    description: "Learn to build AI Agents, Automate Workflows, and scale businesses without coding. Master Zapier, Make, and LLMs.",
};

// --- DATA DEFINITIONS ---

// 1. Overview Data
const overviewFeatures: OverviewFeature[] = [
    { icon: "🤖", text: "Build AI Agents" },
    { icon: "⚡", text: "No-Code Autos" },
    { icon: "🔗", text: "Integrate APIs" },
    { icon: "💼", text: "Freelance Ready" }
];

const overviewSkills: OverviewSkill[] = [
    { title: "Workflow Automation", description: "Connect apps to work on autopilot" },
    { title: "LLM Engineering", description: "Prompt Engineering & RAG basics" },
    { title: "Chatbots", description: "Build custom AI assistants" },
    { title: "Business Logic", description: "Audit & optimize business processes" }
];

// 2. Video Testimonials Data
const videoTestimonials: TestimonialVideo[] = [
    {
        id: 1,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
        name: "Tom Harris",
        role: "AI Automation Agency Owner"
    },
    {
        id: 2,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        poster: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
        name: "Linda M.",
        role: "Operations Manager"
    },
    {
        id: 3,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        poster: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
        name: "Gary V.",
        role: "Freelance Automator"
    }
];

// 3. Tools Data
const tools: Tool[] = [
    { name: "Zapier", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/200px-Zapier_logo.svg.png", darkModeInvert: true }, // Orange logo
    { name: "Make.com", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Make_Logo.svg/1200px-Make_Logo.svg.png" }, // Make (formerly Integromat)
    { name: "OpenAI API", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/200px-OpenAI_Logo.svg.png", darkModeInvert: true },
    { name: "Voiceflow", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Voiceflow_Logo.png" }, // Placeholder for voiceflow/chatbot tool
    { name: "Airtable", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Airtable_Logo.svg/200px-Airtable_Logo.svg.png" },
    { name: "Slack", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/200px-Slack_icon_2019.svg.png" },
];

// 4. Guide Data
const guideSteps: GuideStep[] = [
    {
        number: 1,
        title: "Identify Bottlenecks",
        description: "Learn to spot repetitive tasks in any business that can be handed over to AI."
    },
    {
        number: 2,
        title: "Build Workflows",
        description: "Use visual builders like Make and Zapier to create complex logic without writing code."
    },
    {
        number: 3,
        title: "Deploy Agents",
        description: "Create autonomous AI agents that can read emails, update CRMs, and generate reports 24/7."
    }
];

// 5. Roadmap Data
const roadmapData: RoadmapPhase[] = [
    {
        phase: "Phase 1",
        description: "Automation Basics",
        color: "#F97316", // Orange
        icon: "⚡",
        items: [
            { type: 'node', label: 'Triggers & Actions', status: 'core' },
            { type: 'node', label: 'Zapier Fundamentals', status: 'core' },
            { type: 'node', label: 'Airtable Databases', status: 'tool' },
            { type: 'checkpoint', label: 'First Auto-Email Bot', status: 'nav' }
        ]
    },
    {
        phase: "Phase 2",
        description: "Advanced Logic (Make)",
        color: "#8B5CF6", // Violet
        icon: "🍇",
        items: [
            { type: 'node', label: 'Make.com Scenarios', status: 'core' },
            { type: 'node', label: 'JSON & Webhooks', status: 'core' },
            { type: 'node', label: 'Error Handling', status: 'tool' },
            { type: 'checkpoint', label: 'CRM Sync Automation', status: 'nav' }
        ]
    },
    {
        phase: "Phase 3",
        description: "AI Integration",
        color: "#10B981", // Emerald
        icon: "🤖",
        items: [
            { type: 'node', label: 'ChatGPT API Calls', status: 'core' },
            { type: 'node', label: 'Building Custom GPTs', status: 'core' },
            { type: 'node', label: 'Voiceflow Chatbots', status: 'tool' },
            { type: 'checkpoint', label: 'customer Support AI', status: 'nav' }
        ]
    },
    {
        phase: "Phase 4",
        description: "Business & Agency",
        color: "#3B82F6", // Blue
        icon: "💼",
        items: [
            { type: 'node', label: 'Pricing your Services', status: 'core' },
            { type: 'node', label: 'Cold Outreach', status: 'core' },
            { type: 'node', label: 'Client Onboarding', status: 'tool' },
            { type: 'checkpoint', label: 'Launch Your Agency', status: 'nav' }
        ]
    }
];

// 6. Mentors Data
const mentors: Mentor[] = [
    {
        name: "Brett Malinowski",
        role: "AI Agency Founder",
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
        companyName: "Godmode HQ",
        bio: "Scaled an AI automation agency to $50k/mo. Expert in replacing human labor with AI systems."
    },
    {
        name: "Sarah Connors",
        role: "No-Code Architect",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        companyName: "Freelance",
        bio: "Top Rated Plus Upwork freelancer specializing in complex Make.com integrations."
    },
    {
        name: "David Kim",
        role: "Prompt Engineer",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
        companyName: "OpenAI (Ex)",
        bio: "Teaches the art of crafting perfect prompts to get reliable outputs from LLMs."
    }
];

// 7. Career Paths Data
const careerPaths: Career[] = [
    {
        title: 'Automation Engineer',
        salary: 110,
        growth: 50,
        demand: 'critical',
        skills: ['Make', 'Python', 'APIs'],
        companies: [
            { name: 'Zapier', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zapier_logo.svg/200px-Zapier_logo.svg.png' },
            { name: 'ClickUp', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/ClickUp_Logo.svg/200px-ClickUp_Logo.svg.png' }
        ],
        color: '#F97316',
        featured: true
    },
    {
        title: 'AI Consultant',
        salary: 140,
        growth: 40,
        demand: 'high',
        skills: ['Strategy', 'Implementation', 'Audit'],
        companies: [
            { name: 'McKinsey', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/McKinsey_%26_Company_Logo.svg/200px-McKinsey_%26_Company_Logo.svg.png' }
        ],
        color: '#10B981',
        featured: true
    },
    {
        title: 'Freelance Automator',
        salary: 90,
        growth: 25,
        demand: 'high',
        skills: ['Sales', 'Delivery', 'Support'],
        companies: [
            { name: 'Upwork', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Upwork-logo.svg/200px-Upwork-logo.svg.png' }
        ],
        color: '#3B82F6',
        featured: true // Can also be featured
    }
];

const careerStats = {
    placementRate: "92%",
    avgSalary: "$100K"
};

// 8. Certificate Data
const certificateFeatures: CertificateFeature[] = [
    {
        title: "Automation Expert",
        description: "Certified proficiency in Zapier, Make.com, and AI Agent development."
    },
    {
        title: "Agency Ready",
        description: "Curriculum designed to help you start your own AI Automation Agency (AAA)."
    },
    {
        title: "Practical Projects",
        description: "Build a portfolio of real automated systems before you graduate."
    }
];

// 9. Text Testimonials Data
const textTestimonials: Testimonial[] = [
    {
        id: 1,
        name: "Jason Derulo (Not the singer)",
        role: "Agency Owner",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "I automated my entire lead gen process. This course paid for itself in the first week."
    },
    {
        id: 2,
        name: "Maria G.",
        role: "HR Manager",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "We reduced our manual data entry by 90%. My team now focuses on strategy instead of spreadsheets."
    }
];

// 10. FAQ Data
const faqs: FAQItem[] = [
    {
        question: "Do I need to know how to code?",
        answer: "No! 90% of the course relies on No-Code tools. We touch on very basic Python for advanced customizations, but it's not required."
    },
    {
        question: "Is this course relevant for business owners?",
        answer: "Extremely. Business owners take this course to save 20+ hours a week by automating their busy work."
    },
    {
        question: "What tools do I need to pay for?",
        answer: "Zapier and Make have free tiers which are enough for learning. For production, you might need paid plans (~$20/mo)."
    },
    {
        question: "Can I make money with this?",
        answer: "Yes, 'AI Automation Agency' is one of the hottest business models right now. Businesses are desperate for automation services."
    }
];

export default function AIAutomationPage() {
    return (
        <main className="w-full bg-[#1a1a1a] text-[#e4e7df] font-sans selection:bg-[#ffc22a] selection:text-black">

            {/* 1. Hero Section */}
            <CourseHero
                title="AI Automation & Agents"
                description="Work smarter, not harder. Learn to build AI workforces that run on autopilot using No-Code tools."
                bannerText="Start your AI Automation Agency today →"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Courses", href: "/courses" },
                    { label: "AI Automation", isActive: true }
                ]}
                ratingCount={650}
                learnerCount="1200 +"
                courseType="Online Live"
                duration="3 Months"
                imageSrc="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop"
                enquiryHref="/enroll"
                syllabusHref="/syllabus"
            />

            {/* 2. Overview Section */}
            <OverviewSection
                title="The No-Code AI Revolution"
                description="Why hire 10 people when 1 person with AI can do the same work? Master the tools that are reshaping the workforce."
                features={overviewFeatures}
                skillsTitle="What You'll Build"
                skillsDescription="Real-world automations that save time and money."
                skills={overviewSkills}
                ctaText="See Projects"
            />

            {/* 3. Video Testimonials */}
            <VideoTestimonials testimonials={videoTestimonials} />

            {/* 4. Tools Section */}
            <ToolsSection
                title="Automation Stack"
                description="Master the visual builders that connect the internet."
                tools={tools}
            />

            {/* 5. Guide Section */}
            <GuideSection
                title="Your Automation Journey"
                steps={guideSteps}
                ctaTitle="Stop doing busy work"
                ctaButtonText="Automate Now"
                ctaHref="/enroll"
            />

            {/* 6. Roadmap Section */}
            <RoadmapSection
                title="Learning Path"
                description="From simple Zaps to autonomous AI Agents."
                roadmapData={roadmapData}
            />

            {/* 7. Mentors Section */}
            <MentorsSection
                title="Taught by Builders"
                description="Learn from agency owners who are actively selling automation services."
                mentors={mentors}
            />

            {/* 8. Career Paths Section */}
            <CareerPathsSection
                title="New Age Careers"
                subtitle="BECOME UNREPLACEABLE"
                description="Prompt Engineering and Automation are the most valuable skills of this decade."
                careers={careerPaths}
                stats={careerStats}
            />

            {/* 9. Certificate Section */}
            <CertificateSection
                title="Automation Architect"
                description="Certification proving your ability to design and build complex AI systems."
                features={certificateFeatures}
                roleName="Automation Engineer"
                backgroundColor="#F97316" // Orange
            />

            {/* 10. Text Testimonials */}
            <TestimonialsSection
                title="Success Stories"
                subtitle="Businesses transformed by our students."
                testimonials={textTestimonials}
            />

            {/* 11. FAQ Section */}
            <FAQSection
                title="Common Questions"
                description="Answers about the AI Automation course."
                faqs={faqs}
            />

            <Footer />
        </main>
    );
}
