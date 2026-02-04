"use client";
import "./Footer.css";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <div className="logo-icon">
                            <Image src="/logo.svg" alt="Magnate Logo" width={40} height={40} className="w-full h-full object-contain" />
                        </div>
                        <h1>Magnate</h1>
                    </div>
                    <p className="footer-desc">
                        Magnate is India&apos;s rapidly growing e-learning platform with 10M+ users. Magnate offers courses for govt test prep, coding, digital marketing, spoken english, finance & more in 6 regional languages.
                    </p>
                    <div className="footer-address">
                        <p><strong>Magnate Study Abroad</strong></p>
                        <p>1st Floor, Jairaj Building,</p>
                        <p>Kochi, India - 682024</p>
                    </div>
                    {/* <p className="footer-cin">CIN: U74999KL2017PTC050363</p> */}
                    <div className="footer-contact">
                        <p>Ph: +91 9207995577</p>
                        <p>Email: info@magnatestudyabroad.com</p>
                    </div>
                </div>
                <div className="footer-trusted">
                    <p>Trusted by Over 1 Crore Learners</p>
                </div>
            </div>

            <div className="footer-divider"></div>

            <div className="footer-bottom">
                <div className="footer-column">
                    <h3>Finance & Economics</h3>
                    <ul>
                        <li><a href="/courses/finance">Diploma in Finance</a></li>
                        <li><a href="/courses/ai-augmented-finance">AI Augmented Finance</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Technology & Data Science</h3>
                    <ul>
                        <li><a href="/courses/data-analytics">Data Analytics – ML & AI</a></li>
                        <li><a href="/courses/ai-automation">AI Automation</a></li>
                        <li><a href="/courses/full-stack">Full Stack (Software Development)</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Marketing & Digital Media</h3>
                    <ul>
                        <li><a href="/courses/digital-marketing">3D Digital Marketing</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Languages & Communication</h3>
                    <ul>
                        <li><a href="/courses/german">German</a></li>
                        <li><a href="/courses/ielts-pte">IELTS & PTE (English Proficiency)</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
