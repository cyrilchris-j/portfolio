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
                                            Driven by curiosity and a passion for technology, I enjoy creating meaningful digital experiences through Full Stack Development, UI/UX Design, and Artificial Intelligence. I continuously learn, build projects, and explore emerging technologies to solve real-world problems and improve my technical expertise.
                                        </p>
                                    </div>

                                    <div className="info-section">
                                        <h3 className="info-section-title">Core Expertise</h3>
                                        <ul className="expertise-list">
                                            <li><strong>Full Stack Web Development</strong> (React.js, JavaScript, Firebase, MongoDB)</li>
                                            <li><strong>UI/UX Design</strong> (Figma, Wireframing, Prototyping, User-Centered Design)</li>
                                            <li><strong>AI/ML Integration</strong> (Python, APIs, AI Tools, Intelligent Applications)</li>
                                        </ul>
                                    </div>

                                    <div className="info-split-grid">
                                        <div className="info-section">
                                            <h3 className="info-section-title">Key Strengths</h3>
                                            <ul className="capsule-list">
                                                <li>Problem Solving & Critical Thinking</li>
                                                <li>Fast Learner with Growth Mindset</li>
                                                <li>Team Collaboration & Comm.</li>
                                                <li>Attention to UX</li>
                                            </ul>
                                        </div>
                                        <div className="info-section">
                                            <h3 className="info-section-title">Highlights</h3>
                                            <ul className="capsule-list">
                                                <li>Active Hackathon Participant</li>
                                                <li>AI-Powered Apps</li>
                                                <li>Full Stack Dev Experience</li>
                                                <li>Modern UI/UX Projects</li>
                                                <li>Continuous Learning in AI</li>
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
