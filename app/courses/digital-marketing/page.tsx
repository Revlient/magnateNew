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
    title: "3D Digital Marketing Course | Magnate",
    description: "Future-proof your marketing career. Learn SEO, Social Media, plus 3D Content Creation and AR Advertising.",
};

// --- DATA DEFINITIONS ---

// 1. Overview Data
const overviewFeatures: OverviewFeature[] = [
    { icon: "🚀", text: "3D Ad Creatives" },
    { icon: "📈", text: "Performance Mktg" },
    { icon: "🕶️", text: "AR/VR Campaigns" },
    { icon: "🔍", text: "Advanced SEO" }
];

const overviewSkills: OverviewSkill[] = [
    { title: "Digital Strategy", description: "Integrated marketing funnels" },
    { title: "Content Creation", description: "3D product renders & animation" },
    { title: "Paid Ads", description: "Google, Meta & LinkedIn Ads" },
    { title: "Analytics", description: "Data-driven decision making" }
];

// 2. Video Testimonials Data
const videoTestimonials: TestimonialVideo[] = [
    {
        id: 1,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
        name: "Kevin D.",
        role: "Marketing Manager @ Nike"
    },
    {
        id: 2,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        poster: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
        name: "Anita R.",
        role: "Freelance 3D Marketer"
    },
    {
        id: 3,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        poster: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop",
        name: "Jason S.",
        role: "Growth Hacker @ TechStartup"
    }
];

// 3. Tools Data
const tools: Tool[] = [
    { name: "Google Ads", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/200px-Google_Ads_logo.svg.png", darkModeInvert: true },
    { name: "Meta Ads", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png", darkModeInvert: true },
    { name: "Blender", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/200px-Blender_logo_no_text.svg.png" },
    { name: "Canva", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/200px-Canva_icon_2021.svg.png" },
    { name: "Semrush", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Semrush_logo.svg/200px-Semrush_logo.svg.png", darkModeInvert: true },
    { name: "Spline", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Spline_logo.png/200px-Spline_logo.png" }, // Placeholder for Spline/3D web tool
];

// 4. Guide Data
const guideSteps: GuideStep[] = [
    {
        number: 1,
        title: "Marketing Foundation",
        description: "Understand the core principles of digital marketing, consumer psychology, and brand building."
    },
    {
        number: 2,
        title: "3D & Interactive Content",
        description: "Learn to create stunning 3D assets and AR filters that drive higher engagement than traditional images."
    },
    {
        number: 3,
        title: "Campaign Mastery",
        description: "Launch, optimize, and scale profitable ad campaigns across Google, Social Media, and the Metaverse."
    }
];

// 5. Roadmap Data
const roadmapData: RoadmapPhase[] = [
    {
        phase: "Phase 1",
        description: "Digital Foundations",
        color: "#EC4899", // Pink
        icon: "📣",
        items: [
            { type: 'node', label: 'SEO & Content Marketing', status: 'core' },
            { type: 'node', label: 'Social Media Strategy', status: 'core' },
            { type: 'node', label: 'Graphic Design (Canva/Ps)', status: 'tool' },
            { type: 'checkpoint', label: 'Live Blog/Page Launch', status: 'nav' }
        ]
    },
    {
        phase: "Phase 2",
        description: "3D Content Creation",
        color: "#8B5CF6", // Violet
        icon: "🧊",
        items: [
            { type: 'node', label: 'Blender Basics', status: 'core' },
            { type: 'node', label: 'Product Rendering', status: 'core' },
            { type: 'node', label: 'Web 3D (Spline/Three.js concept)', status: 'tool' },
            { type: 'checkpoint', label: '3D Ad Creative Project', status: 'nav' }
        ]
    },
    {
        phase: "Phase 3",
        description: "Performance Marketing",
        color: "#3B82F6", // Blue
        icon: "🚀",
        items: [
            { type: 'node', label: 'Google Ads (Search/Shopping)', status: 'core' },
            { type: 'node', label: 'Fb/Insta Ads Manager', status: 'core' },
            { type: 'node', label: 'Analytics & Attribution', status: 'tool' },
            { type: 'checkpoint', label: 'Live Campaign (Budget Provided)', status: 'nav' }
        ]
    },
    {
        phase: "Phase 4",
        description: "Future Tech",
        color: "#10B981", // Emerald
        icon: "🕶️",
        items: [
            { type: 'node', label: 'AR Filters (Spark AR)', status: 'core' },
            { type: 'node', label: 'Metaverse Marketing', status: 'tool' },
            { type: 'node', label: 'AI Copywriting', status: 'core' },
            { type: 'checkpoint', label: 'Final Portfolio Review', status: 'nav' }
        ]
    }
];

// 6. Mentors Data
const mentors: Mentor[] = [
    {
        name: "Jessica Miller",
        role: "Creative Director",
        photo: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1000&auto=format&fit=crop",
        companyName: "Ogilvy",
        bio: "Award-winning creative director specializing in immersive brand experiences and AR campaigns."
    },
    {
        name: "David Chen",
        role: "Growth Lead",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
        companyName: "Shopify",
        bio: "Expert in E-commerce growth hacking and performance marketing scale-up."
    },
    {
        name: "Sarah T.",
        role: "3D Artist & Marketer",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
        companyName: "Freelance",
        bio: "Teaches the workflow of creating viral 3D product animations for social media ads."
    }
];

// 7. Career Paths Data
const careerPaths: Career[] = [
    {
        title: 'Digital Marketing Mgr',
        salary: 90,
        growth: 20,
        demand: 'high',
        skills: ['Strategy', 'Analytics', 'Budgeting'],
        companies: [
            { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png' },
            { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/200px-Spotify_logo_without_text.svg.png' }
        ],
        color: '#EC4899',
        featured: true
    },
    {
        title: 'Creative Technologist',
        salary: 110,
        growth: 40,
        demand: 'high',
        skills: ['3D Design', 'AR/VR', 'Marketing'],
        companies: [
            { name: 'Snapchat', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Snapchat_logo.svg/200px-Snapchat_logo.svg.png' },
            { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png' }
        ],
        color: '#8B5CF6',
        featured: true
    },
    {
        title: 'SEO Specialist',
        salary: 75,
        growth: 15,
        demand: 'moderate',
        skills: ['Technical SEO', 'Content', 'Link Building'],
        companies: [
            { name: 'HubSpot', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/HubSpot_Logo.svg/200px-HubSpot_Logo.svg.png' }
        ],
        color: '#3B82F6'
    }
];

const careerStats = {
    placementRate: "94%",
    avgSalary: "$85K"
};

// 8. Certificate Data
const certificateFeatures: CertificateFeature[] = [
    {
        title: "3D Marketing Expert",
        description: "Certified in both traditional digital marketing and 3D/AR content creation."
    },
    {
        title: "Platform Certified",
        description: "Preparation for Google Ads and Meta Blueprint certifications."
    },
    {
        title: "Portfolio Ready",
        description: "Graduate with a stunning portfolio of live campaigns and 3D assets."
    }
];

// 9. Text Testimonials Data
const textTestimonials: Testimonial[] = [
    {
        id: 1,
        name: "Tara W.",
        role: "Brand Manager @ Dior",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "The 3D modules set this course apart. I learned to create product visualizations that increased our ad CTR by 200%."
    },
    {
        id: 2,
        name: "Mike L.",
        role: "Agency Owner",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "Comprehensive and futuristic. If you want to stay ahead of the curve in marketing, this is the course."
    }
];

// 10. FAQ Data
const faqs: FAQItem[] = [
    {
        question: "Why 3D Digital Marketing?",
        answer: "The industry is moving towards immersive content. 3D and AR ads perform significantly better than static images. This course future-proofs your skills."
    },
    {
        question: "Is this course hard for non-designers?",
        answer: "No. We teach Blender and design tools from scratch, focusing on what's needed for marketing, not complex character modeling."
    },
    {
        question: "Do you cover traditional marketing too?",
        answer: "Absolutely. 70% of the course covers core digital marketing (SEO, Ads, Strategy), and 30% focuses on next-gen content creation (3D, AR)."
    },
    {
        question: "What software will I learn?",
        answer: "You will master Google Ads, Meta Ads Manager, Google Analytics, Blender (for 3D), Canva, and Spark AR."
    }
];

export default function DigitalMarketingPage() {
    return (
        <main className="w-full bg-[#1a1a1a] text-[#e4e7df] font-sans selection:bg-[#ffc22a] selection:text-black">

            {/* 1. Hero Section */}
            <CourseHero
                title="3D Digital Marketing"
                description="Don't just run ads—create immersive experiences. Master SEO, Performance Marketing, and 3D Content Creation."
                bannerText="Learn to create Viral 3D Ads →"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Courses", href: "/courses" },
                    { label: "Digital Marketing", isActive: true }
                ]}
                ratingCount={950}
                learnerCount="2000 +"
                courseType="Online Live"
                duration="6 Months"
                imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                enquiryHref="/enroll"
                syllabusHref="/syllabus"
            />

            {/* 2. Overview Section */}
            <OverviewSection
                title="Marketing in the Metaverse Era"
                description="Traditional marketing is saturated. Stand out by combining data-driven strategies with cutting-edge 3D visuals."
                features={overviewFeatures}
                skillsTitle="Hybrid Skillset"
                skillsDescription="Merge the analytical (Data/SEO) with the creative (3D/Design)."
                skills={overviewSkills}
                ctaText="View Syllabus"
            />

            {/* 3. Video Testimonials */}
            <VideoTestimonials testimonials={videoTestimonials} />

            {/* 4. Tools Section */}
            <ToolsSection
                title="Marketer's Toolkit"
                description="Master the platforms that drive traffic and the tools that create engagement."
                tools={tools}
            />

            {/* 5. Guide Section */}
            <GuideSection
                title="From Click to Customer"
                steps={guideSteps}
                ctaTitle="Future-proof your career"
                ctaButtonText="Get Started"
                ctaHref="/enroll"
            />

            {/* 6. Roadmap Section */}
            <RoadmapSection
                title="Course Timeline"
                description="A step-by-step journey to becoming a full-stack digital marketer."
                roadmapData={roadmapData}
            />

            {/* 7. Mentors Section */}
            <MentorsSection
                title="Industry Mentors"
                description="Learn from experts running campaigns for the world's biggest brands."
                mentors={mentors}
            />

            {/* 8. Career Paths Section */}
            <CareerPathsSection
                title="Creative & Tech Careers"
                subtitle="HIGH DEMAND ROLES"
                description="The industry is desperate for marketers who understand 3D and immersive tech."
                careers={careerPaths}
                stats={careerStats}
            />

            {/* 9. Certificate Section */}
            <CertificateSection
                title="Dual Certification"
                description="Get certified in Digital Marketing and 3D Content Strategies."
                features={certificateFeatures}
                roleName="Future Marketer"
                backgroundColor="#EC4899" // Pink
            />

            {/* 10. Text Testimonials */}
            <TestimonialsSection
                title="Alumni Reviews"
                subtitle="See how our students are changing the industry."
                testimonials={textTestimonials}
            />

            {/* 11. FAQ Section */}
            <FAQSection
                title="Got Questions?"
                description="Answers to common queries about 3D Digital Marketing."
                faqs={faqs}
            />

            <Footer />
        </main>
    );
}
