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
    title: "AI Augmented Finance Course | Magnate",
    description: "Master the intersection of Finance and AI. Learn Algorithmic Trading, FinTech, and AI-driven Financial Analysis.",
};

// --- DATA DEFINITIONS ---

// 1. Overview Data
const overviewFeatures: OverviewFeature[] = [
    { icon: "🤖", text: "AI in Finance" },
    { icon: "📈", text: "Algo Trading" },
    { icon: "🐍", text: "Python for Finance" },
    { icon: "💳", text: "FinTech Innovation" }
];

const overviewSkills: OverviewSkill[] = [
    { title: "AI/ML", description: "Machine Learning models for stock prediction" },
    { title: "Trading", description: "Automated & High-Frequency Trading" },
    { title: "Big Data", description: "Financial Data Analysis & Visualization" },
    { title: "Blockchain", description: "DeFi & Smart Contracts basics" }
];

// 2. Video Testimonials Data (Placeholder/Generic for now)
const videoTestimonials: TestimonialVideo[] = [
    {
        id: 1,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
        name: "Alex Chen",
        role: "Quant Analyst @ Citadel"
    },
    {
        id: 2,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        poster: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        name: "Sarah Jones",
        role: "FinTech Product Mgr @ Stripe"
    },
    {
        id: 3,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        poster: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
        name: "David Kim",
        role: "Data Scientist @ JP Morgan"
    }
];

// 3. Tools Data
const tools: Tool[] = [
    { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "TensorFlow", icon: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg" },
    { name: "Tableau", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
    { name: "TradingView", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/TradingView_Logo_Block.svg/200px-TradingView_Logo_Block.svg.png", darkModeInvert: true },
    { name: "Jupyter", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" },
    { name: "SQL", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
];

// 4. Guide Data
const guideSteps: GuideStep[] = [
    {
        number: 1,
        title: "Programming Foundation",
        description: "Learn Python specifically tailored for financial data analysis and manipulation."
    },
    {
        number: 2,
        title: "AI & ML Models",
        description: "Build predictive models for stock prices, credit risk scoring, and fraud detection."
    },
    {
        number: 3,
        title: "Algorithmic Trading",
        description: "Design, backtest, and deploy automated trading strategies using real market data."
    }
];

// 5. Roadmap Data
const roadmapData: RoadmapPhase[] = [
    {
        phase: "Phase 1",
        description: "Financial Data Science",
        color: "#3B82F6", // Blue for tech/data
        icon: "📊",
        items: [
            { type: 'node', label: 'Python for Finance', status: 'core' },
            { type: 'node', label: 'Pandas & NumPy', status: 'core' },
            { type: 'node', label: 'Data Visualization', status: 'tool' },
            { type: 'checkpoint', label: 'Project: Portfolio Analysis', status: 'nav' }
        ]
    },
    {
        phase: "Phase 2",
        description: "Machine Learning in Finance",
        color: "#8B5CF6", // Purple for AI
        icon: "🧠",
        items: [
            { type: 'node', label: 'Regression & Classification', status: 'core' },
            { type: 'node', label: 'Time Series Forecasting', status: 'core' },
            { type: 'node', label: 'Sentiment Analysis (NLP)', status: 'tool' },
            { type: 'checkpoint', label: 'Project: Stock Price Predictor', status: 'nav' }
        ]
    },
    {
        phase: "Phase 3",
        description: "Algorithmic Trading",
        color: "#10B981", // Green for trading
        icon: "💹",
        items: [
            { type: 'node', label: 'Backtesting Strategies', status: 'core' },
            { type: 'node', label: 'API Integration (Binance/Alpaca)', status: 'core' },
            { type: 'node', label: 'Risk Management', status: 'tool' },
            { type: 'checkpoint', label: 'Project: Live Trading Bot', status: 'nav' }
        ]
    },
    {
        phase: "Phase 4",
        description: "FinTech & Blockchain",
        color: "#F59E0B",
        icon: "🔗",
        items: [
            { type: 'node', label: 'DeFi Overview', status: 'core' },
            { type: 'node', label: 'Smart Contracts (Solidity)', status: 'tool' },
            { type: 'node', label: 'Robo-Advisors', status: 'core' },
            { type: 'checkpoint', label: 'Final Capstone Project', status: 'nav' }
        ]
    }
];

// 6. Mentors Data
const mentors: Mentor[] = [
    {
        name: "Dr. Arrya Simpson",
        role: "Head of AI, FinTech Startup",
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        companyName: "Stripe",
        bio: "PhD in Computational Finance. Expert in applying Deep Learning to financial markets."
    },
    {
        name: "Mark T.",
        role: "Quant Trader",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        companyName: "Jane Street",
        bio: "Specializes in high-frequency trading algorithms and market microstructure."
    },
    {
        name: "Elena R.",
        role: "Data Science Manager",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
        companyName: "Visa",
        bio: "Leads fraud detection teams using advanced ML techniques."
    }
];

// 7. Career Paths Data
const careerPaths: Career[] = [
    {
        title: 'Quantitative Analyst',
        salary: 150,
        growth: 25,
        demand: 'high',
        skills: ['Math', 'Python', 'Modeling'],
        companies: [
            { name: 'Two Sigma', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Two_Sigma_Logo.svg/200px-Two_Sigma_Logo.svg.png' },
            { name: 'D. E. Shaw', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/D._E._Shaw_%26_Co._logo.svg/200px-D._E._Shaw_%26_Co._logo.svg.png' }
        ],
        color: '#3B82F6',
        featured: true
    },
    {
        title: 'FinTech Engineer',
        salary: 130,
        growth: 30,
        demand: 'critical',
        skills: ['Blockchain', 'APIs', 'Security'],
        companies: [
            { name: 'Coinbase', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coinbase_Logo_2013-2016.svg/200px-Coinbase_Logo_2013-2016.svg.png' },
            { name: 'Robinhood', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Robinhood_Logo.svg' }
        ],
        color: '#10B981',
        featured: true
    },
    {
        title: 'Financial Data Scientist',
        salary: 120,
        growth: 20,
        demand: 'moderate',
        skills: ['SQL', 'Tableau', 'Big Data'],
        companies: [
            { name: 'Bloomberg', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Bloomberg_Terminal_Logo.svg' }
        ],
        color: '#8B5CF6'
    }
];

const careerStats = {
    placementRate: "95%",
    avgSalary: "$120K"
};

// 8. Certificate Data
const certificateFeatures: CertificateFeature[] = [
    {
        title: "AI Finance Specialist",
        description: "Validate your expertise in merging financial theory with modern AI practices."
    },
    {
        title: "Hands-on Projects",
        description: "Portfolio including a live trading bot and a risk assessment model."
    },
    {
        title: "Global Recognition",
        description: "Recognized by top FinTech companies and quantitative funds."
    }
];

// 9. Text Testimonials Data
const textTestimonials: Testimonial[] = [
    {
        id: 1,
        name: "Carlos M.",
        role: "Dev at Revolut",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "Magnate's course bridged the gap between my finance degree and the coding skills I needed for FinTech."
    },
    {
        id: 2,
        name: "Sophia L.",
        role: "Analyst at Citadel",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "The algorithmic trading module is top-notch. I deployed my first bot within weeks of finishing the section."
    }
];

// 10. FAQ Data
const faqs: FAQItem[] = [
    {
        question: "Do I need coding experience?",
        answer: "Basic knowledge is helpful, but we start Python from scratch with a focus on financial applications."
    },
    {
        question: "What is the difference between this and the standard Finance course?",
        answer: "This course focuses on the TECHNOLOGY side of finance (AI, ML, Algo Trading, Blockchain), whereas the standard Finance course focuses on traditional Investment Banking, Accounting, and Valuation."
    },
    {
        question: "Is there math involved?",
        answer: "Yes, Quantitative Finance involves statistics and calculus, but we teach the practical application of these concepts."
    },
    {
        question: "What hardware do I need?",
        answer: "A standard laptop (Windows/Mac) is sufficient. For deep learning models, we use cloud-based notebooks like Google Colab."
    }
];

export default function AIAugmentedFinancePage() {
    return (
        <main className="w-full bg-[#1a1a1a] text-[#e4e7df] font-sans selection:bg-[#ffc22a] selection:text-black">

            {/* 1. Hero Section */}
            <CourseHero
                title="AI Augmented Finance"
                description="The future of finance is here. Master AI, Machine Learning, and Algorithmic Trading to revolutionize the financial industry."
                bannerText="Join the FinTech Revolution →"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Courses", href: "/courses" },
                    { label: "AI Finance", isActive: true }
                ]}
                ratingCount={450}
                learnerCount="800 +"
                courseType="Online Live"
                duration="5 Months"
                imageSrc="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2232&auto=format&fit=crop"
                enquiryHref="/enroll"
                syllabusHref="/syllabus"
            />

            {/* 2. Overview Section */}
            <OverviewSection
                title="Finance Meets Future Tech"
                description="Learn the skills that are redefining Wall Street. From robo-advisors to high-frequency trading, master the tech behind the money."
                features={overviewFeatures}
                skillsTitle="Tech Stack"
                skillsDescription="A robust curriculum covering the modern financial technology stack."
                skills={overviewSkills}
                ctaText="View Curriculum"
            />

            {/* 3. Video Testimonials */}
            <VideoTestimonials testimonials={videoTestimonials} />

            {/* 4. Tools Section */}
            <ToolsSection
                title="FinTech Toolkit"
                description="Hands-on experience with the most powerful tools in quantitative finance and data science."
                tools={tools}
            />

            {/* 5. Guide Section */}
            <GuideSection
                title="Become a Quant"
                steps={guideSteps}
                ctaTitle="Ready to innovate?"
                ctaButtonText="Start Learning"
                ctaHref="/enroll"
            />

            {/* 6. Roadmap Section */}
            <RoadmapSection
                title="Course Roadmap"
                description="From Python basics to deploying AI trading bots."
                roadmapData={roadmapData}
            />

            {/* 7. Mentors Section */}
            <MentorsSection
                title="Learn from Quants & Tech Leads"
                description="Our mentors come from the intersection of major technology firms and top investment banks."
                mentors={mentors}
            />

            {/* 8. Career Paths Section */}
            <CareerPathsSection
                title="High-Tech Financial Careers"
                subtitle="FUTURE PROOF YOUR CAREER"
                description="The highest paying roles in finance require these exact skills."
                careers={careerPaths}
                stats={careerStats}
            />

            {/* 9. Certificate Section */}
            <CertificateSection
                title="AI Finance Certification"
                description="Prove your dual-competency in Finance and Artificial Intelligence."
                features={certificateFeatures}
                roleName="AI Financial Specialist"
                backgroundColor="#3B82F6" // Blue for AI/Tech
            />

            {/* 10. Text Testimonials */}
            <TestimonialsSection
                title="Student Stories"
                subtitle="See what our graduates are building."
                testimonials={textTestimonials}
            />

            {/* 11. FAQ Section */}
            <FAQSection
                title="FAQs"
                description="Common questions about our AI Augmented Finance program."
                faqs={faqs}
            />

            <Footer />
        </main>
    );
}
