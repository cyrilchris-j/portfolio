import { motion } from "framer-motion";
import "./About.css";

const About = () => {
    return (
        <div className="page-container about-page">
            <div className="content-wrapper">
                <h1 className="section-title">About</h1>
                <div className="about-split-view">
                    <motion.div 
                        className="about-container glass-card"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="about-layout centered">
                            <div className="about-right">
                                <div className="bento-content">
                                    <div className="info-header">
                                        <h2 className="info-name">Cyril Christopher J</h2>
                                        <p className="prof-summary">
                                            AI/ML-driven UI/UX Designer focused on building intelligent, scalable digital products. I combine user research, frontend engineering, and data-driven insights to solve real-world problems.
                                        </p>
                                    </div>

                                    <div className="info-section">
                                        <h3 className="info-section-title">Core Expertise</h3>
                                        <ul className="expertise-list">
                                            <li><strong>UI/UX Design</strong> (Figma, User Research, Prototyping)</li>
                                            <li><strong>Frontend Development</strong> (React, HTML, CSS, JS)</li>
                                            <li><strong>AI/ML Integration</strong> (Python, Firebase, APIs)</li>
                                        </ul>
                                    </div>

                                    <div className="info-split-grid">
                                        <div className="info-section">
                                            <h3 className="info-section-title">Key Strengths</h3>
                                            <ul className="capsule-list">
                                                <li>Problem Solving</li>
                                                <li>Modern UI Systems</li>
                                                <li>Fast Learner</li>
                                                <li>Strong Collaborator</li>
                                            </ul>
                                        </div>
                                        <div className="info-section">
                                            <h3 className="info-section-title">Highlights</h3>
                                            <ul className="capsule-list">
                                                <li>Hackathon Participant</li>
                                                <li>Real-world UI/UX Projects</li>
                                                <li>Emerging Tech Trends</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="journey-section"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="journey-title-v2">Journey So Far</h3>
                        <div className="journey-grid-v2">
                            <motion.div
                                className="journey-card-wrapper-v2"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                whileHover={{ scale: 1.03, x: 5 }}
                            >
                                <div className="journey-card-premium glass-card">
                                    <div className="journey-badge">Engineering</div>
                                    <span className="journey-year">2024 - Present</span>
                                    <h4 className="journey-school">B.E - CSE</h4>
                                    <p className="journey-institution">KSR College Of Engineering</p>
                                    <p className="journey-desc">Focused on UX design and AI technologies.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="journey-card-wrapper-v2"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.03, x: 5 }}
                            >
                                <div className="journey-card-premium glass-card">
                                    <div className="journey-badge">Higher Sec</div>
                                    <span className="journey-year">2022 - 2024</span>
                                    <h4 className="journey-school">HSC</h4>
                                    <p className="journey-institution">Infant Jesus Matric Hr Sec School</p>
                                    <p className="journey-desc">Strengthened analytical skills with a interest in technology.</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="journey-card-wrapper-v2"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                whileHover={{ scale: 1.03, x: 5 }}
                            >
                                <div className="journey-card-premium glass-card">
                                    <div className="journey-badge">Schooling</div>
                                    <span className="journey-year">2020 - 2022</span>
                                    <h4 className="journey-school">SSLC</h4>
                                    <p className="journey-institution">Infant Jesus Matric Hr Sec School</p>
                                    <p className="journey-desc">Developed a strong academic foundation with emphasis on discipline.</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
