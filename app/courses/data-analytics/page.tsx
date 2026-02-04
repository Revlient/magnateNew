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
    title: "Data Analytics (ML & AI) Course | Magnate",
    description: "From SQL to Deep Learning. Master Data Science with Python, Machine Learning, and AI.",
};

// --- DATA DEFINITIONS ---

// 1. Overview Data
const overviewFeatures: OverviewFeature[] = [
    { icon: "🔢", text: "Big Data Processing" },
    { icon: "🤖", text: "Machine Learning" },
    { icon: "📉", text: "Predictive Analytics" },
    { icon: "🧠", text: "Deep Learning" }
];

const overviewSkills: OverviewSkill[] = [
    { title: "Python Programming", description: "Pandas, NumPy, Scikit-learn" },
    { title: "Data Visualization", description: "Tableau, PowerBI & Matplotlib" },
    { title: "Database Mgmt", description: "SQL (MySQL/PostgreSQL) & NoSQL" },
    { title: "AI Models", description: "Building & Deploying ML models" }
];

// 2. Video Testimonials Data
const videoTestimonials: TestimonialVideo[] = [
    {
        id: 1,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        poster: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        name: "Priya K.",
        role: "Data Scientist @ Microsoft"
    },
    {
        id: 2,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        poster: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
        name: "Arjun Singh",
        role: "ML Engineer @ Amazon"
    },
    {
        id: 3,
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        poster: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
        name: "Emily R.",
        role: "Data Analyst @ Fractal"
    }
];

// 3. Tools Data
const tools: Tool[] = [
    { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "SQL", icon: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
    { name: "Tableau", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
    { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "Jupyter", icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg" },
    { name: "Scikit-Learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
];

// 4. Guide Data
const guideSteps: GuideStep[] = [
    {
        number: 1,
        title: "Data Handling",
        description: "Learn to collect, clean, and manipulate massive datasets using Python and SQL."
    },
    {
        number: 2,
        title: "Visual Storytelling",
        description: "Create compelling dashboards that convert raw numbers into actionable business insights."
    },
    {
        number: 3,
        title: "Predictive AI",
        description: "Develop algorithms that can predict future trends, customer behavior, and market shifts."
    }
];

// 5. Roadmap Data
const roadmapData: RoadmapPhase[] = [
    {
        phase: "Phase 1",
        description: "Data Analysis Core",
        color: "#EAB308", // Yellow
        icon: "📊",
        items: [
            { type: 'node', label: 'Advanced Excel', status: 'core' },
            { type: 'node', label: 'SQL for Data Science', status: 'core' },
            { type: 'node', label: 'PowerBI/Tableau', status: 'tool' },
            { type: 'checkpoint', label: 'Sales Dashboard Project', status: 'nav' }
        ]
    },
    {
        phase: "Phase 2",
        description: "Python & Statistics",
        color: "#3B82F6", // Blue
        icon: "🐍",
        items: [
            { type: 'node', label: 'Python (Pandas/NumPy)', status: 'core' },
            { type: 'node', label: 'Exploratory Data Analysis', status: 'core' },
            { type: 'node', label: 'Statistical Inference', status: 'core' },
            { type: 'checkpoint', label: 'EDA Case Study', status: 'nav' }
        ]
    },
    {
        phase: "Phase 3",
        description: "Machine Learning (ML)",
        color: "#10B981", // Green
        icon: "🤖",
        items: [
            { type: 'node', label: 'Supervised Learning', status: 'core' },
            { type: 'node', label: 'Unsupervised Learning', status: 'core' },
            { type: 'node', label: 'Model Evaluation', status: 'tool' },
            { type: 'checkpoint', label: 'Churn Prediction Model', status: 'nav' }
        ]
    },
    {
        phase: "Phase 4",
        description: "Deep Learning & AI",
        color: "#A855F7", // Purple
        icon: "🧠",
        items: [
            { type: 'node', label: 'Neural Networks (Keras)', status: 'core' },
            { type: 'node', label: 'Computer Vision Basics', status: 'tool' },
            { type: 'node', label: 'NLP (Text Mining)', status: 'core' },
            { type: 'checkpoint', label: 'AI Capstone Project', status: 'nav' }
        ]
    }
];

// 6. Mentors Data
const mentors: Mentor[] = [
    {
        name: "Dr. Sameer Khan",
        role: "Principal Data Scientist",
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        companyName: "Google",
        bio: "10+ years in AI research. Published author on deep learning optimization."
    },
    {
        name: "Ananya Gupta",
        role: "Analytics Lead",
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
        companyName: "Walmart",
        bio: "Expert in retail analytics and supply chain optimization using Big Data."
    },
    {
        name: "Chris Evans",
        role: "ML Engineer",
        photo: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1000&auto=format&fit=crop",
        companyName: "Spotify",
        bio: "Specializes in recommendation systems and audio analysis algorithms."
    }
];

// 7. Career Paths Data
const careerPaths: Career[] = [
    {
        title: 'Data Scientist',
        salary: 130,
        growth: 30,
        demand: 'high',
        skills: ['Python', 'Stats', 'ML'],
        companies: [
            { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png' },
            { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png' }
        ],
        color: '#3B82F6',
        featured: true
    },
    {
        title: 'Data Analyst',
        salary: 85,
        growth: 20,
        demand: 'critical',
        skills: ['SQL', 'Tableau', 'Excel'],
        companies: [
            { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/200px-Deloitte.svg.png' },
            { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/200px-Accenture.svg.png' }
        ],
        color: '#EAB308',
        featured: true
    },
    {
        title: 'ML Engineer',
        salary: 150,
        growth: 40,
        demand: 'critical',
        skills: ['Deep Learning', 'Cloud', 'DevOps'],
        companies: [
            { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/200px-Tesla_Motors.svg.png' }
        ],
        color: '#A855F7'
    }
];

const careerStats = {
    placementRate: "96%",
    avgSalary: "$95K"
};

// 8. Certificate Data
const certificateFeatures: CertificateFeature[] = [
    {
        title: "Certified Data Scientist",
        description: "Industry-recognized certification valid for DS and Analyst roles."
    },
    {
        title: "Project Portfolio",
        description: "Graduate with a GitHub portfolio of 5+ end-to-end ML projects."
    },
    {
        title: "Hackathon Ready",
        description: "Skills to compete and win in global data science competitions like Kaggle."
    }
];

// 9. Text Testimonials Data
const textTestimonials: Testimonial[] = [
    {
        id: 1,
        name: "Vikram S.",
        role: "Analyst @ MuSigma",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "I didn't know how to code. This course took me from Excel basics to building Neural Networks in 6 months."
    },
    {
        id: 2,
        name: "Samantha J.",
        role: "Business Analyst @ Amex",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
        quote: "The Tableau and PowerBI modules are fantastic. They helped me automate my reporting at work."
    }
];

// 10. FAQ Data
const faqs: FAQItem[] = [
    {
        question: "Is math important for this course?",
        answer: "You need a basic understanding of high school math. We teach the specific Statistics and Probability concepts needed for Data Science."
    },
    {
        question: "Python or R? What do you teach?",
        answer: "We focus on Python as it is the industry standard for Machine Learning and AI. However, the concepts apply to R as well."
    },
    {
        question: "What if I miss a live class?",
        answer: "All classes are recorded and available on your dashboard for lifetime access."
    },
    {
        question: "Do you help with GitHub profiles?",
        answer: "Yes, a dedicated module covers version control with Git and building a professional GitHub portfolio to showcase to recruiters."
    }
];

export default function DataAnalyticsPage() {
    return (
        <main className="w-full bg-[#1a1a1a] text-[#e4e7df] font-sans selection:bg-[#ffc22a] selection:text-black">

            {/* 1. Hero Section */}
            <CourseHero
                title="Data Analytics & AI"
                description="The sexiest job of the 21st century. Learn to derive insights from data and build intelligent systems to solve complex problems."
                bannerText="Join the Data Revolution →"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Our Courses", href: "/courses" },
                    { label: "Data Science", isActive: true }
                ]}
                ratingCount={1800}
                learnerCount="4000 +"
                courseType="Online Live"
                duration="8 Months"
                imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                enquiryHref="/enroll"
                syllabusHref="/syllabus"
            />

            {/* 2. Overview Section */}
            <OverviewSection
                title="Decode the Future"
                description="Data is the new oil. Companies are hiring aggressively for professionals who can clean, analyze, and interpret data."
                features={overviewFeatures}
                skillsTitle="Full Stack Data Science"
                skillsDescription="From Data Engineering to Model Deployment, we cover the entire pipeline."
                skills={overviewSkills}
                ctaText="Download Curriculum"
            />

            {/* 3. Video Testimonials */}
            <VideoTestimonials testimonials={videoTestimonials} />

            {/* 4. Tools Section */}
            <ToolsSection
                title="Industry Standard Tools"
                description="Get hands-on with the exact tools used by Data Scientists at FAANG companies."
                tools={tools}
            />

            {/* 5. Guide Section */}
            <GuideSection
                title="Path to Data Science"
                steps={guideSteps}
                ctaTitle="Start analyzing today"
                ctaButtonText="Enroll Now"
                ctaHref="/enroll"
            />

            {/* 6. Roadmap Section */}
            <RoadmapSection
                title="Learning Path"
                description="A rigorous curriculum designed to turn you into a Data Scientist."
                roadmapData={roadmapData}
            />

            {/* 7. Mentors Section */}
            <MentorsSection
                title="Learn from Practitioners"
                description="Our mentors are working Data Scientists solving real-world problems daily."
                mentors={mentors}
            />

            {/* 8. Career Paths Section */}
            <CareerPathsSection
                title="Data Careers"
                subtitle="EXPLOSIVE GROWTH"
                description="Demand for data professionals is outstripping supply. Secure a high-paying future."
                careers={careerPaths}
                stats={careerStats}
            />

            {/* 9. Certificate Section */}
            <CertificateSection
                title="Data Science Certification"
                description="Validate your skills in Python, SQL, and Machine Learning."
                features={certificateFeatures}
                roleName="Certified Data Scientist"
                backgroundColor="#3B82F6" // Blue
            />

            {/* 10. Text Testimonials */}
            <TestimonialsSection
                title="Learner Reviews"
                subtitle="Stories of transformation through Data Science."
                testimonials={textTestimonials}
            />

            {/* 11. FAQ Section */}
            <FAQSection
                title="Questions?"
                description="Everything you need to know about the Data Analytics course."
                faqs={faqs}
            />

            <Footer />
        </main>
    );
}
