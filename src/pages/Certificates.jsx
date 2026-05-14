import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Certificates.css";
import iitKanpur from "../assets/iitkanpurhackathon.jpeg";
import iitDataScience from "../assets/iitdatascienceworkshop.jpeg";
import gfg from "../assets/gfgpython.jpeg";
import kpr from "../assets/kprprompteng.jpeg";
import nptel from "../assets/npteliot.jpeg";
import uiuxcert from "../assets/uiuxcert.jpeg";
import guviworkshop from "../assets/guviworkshop.jpeg";

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            title: "CredTech Hackathon — Certificate of Excellence",
            issuer: "IIT Kanpur",
            date: "2024",
            image: iitKanpur,
            description: "Awarded Certificate of Excellence to Cyril Christopher J from KSR College of Engineering, Tamil Nadu, as Team Napalgo, for participating in Round 1 — Problem Solving Round of the CredTech Hackathon organized by IIT Kanpur."
        },
        {
            title: "Data Science Workshop — Certificate of Participation",
            issuer: "IIT Madras · Techgyan Technologies",
            date: "April 13, 2025",
            image: iitDataScience,
            description: "Recognized for participation in the Data Science Workshop held at IIT Madras, organized by Techgyan Technologies. Certificate No: T-IITM-087."
        },
        {
            title: "Free Python Course — Certificate of Completion",
            issuer: "GeeksforGeeks",
            date: "2025",
            image: gfg,
            description: "Successfully completed the 3-week Free Python Course with Certificate (Updated 2025) on GeeksforGeeks, certified by Sandeep Jain, Founder & CEO."
        },
        {
            title: "Introduction to Internet of Things — Elite Certification",
            issuer: "NPTEL · IIT Kharagpur",
            date: "Jan – Apr 2025",
            image: nptel,
            description: "NPTEL Online Certification (Elite) for successfully completing the 12-week course on Introduction to Internet of Things, with a consolidated score of 75% — Online Assignments: 25/25, Proctored Exam: 49.5/75. Funded by MoE, Govt. of India. Roll No: NPTEL25CS44S458600158."
        },
        {
            title: "Prompt It Right — Certificate of Participation",
            issuer: "KPR Institute of Engineering & Technology",
            date: "October 13, 2025",
            image: kpr,
            description: "Participated in the 'Prompt It Right' competition conducted by the Department of Mechatronics Engineering as part of Chakravyuha 2025 — National Level Tech Fest, at KPR Institute of Engineering and Technology."
        },
        {
            title: "UI/UX Webinar — Certificate of Participation",
            issuer: "Brand Monk Academy · NSDC",
            date: "April 1, 2026",
            image: uiuxcert,
            description: "Awarded Certificate of Participation for attending the UI/UX Webinar held on 1st April 2026, organized by Brand Monk Academy in association with NSDC (National Skill Development Corporation). Certificate ID: SMAPARMQ07612396."
        },
        {
            title: "Design Smarter with FigJam — Certificate of Participation",
            issuer: "GUVI · HCL",
            date: "July 20, 2025",
            image: guviworkshop,
            description: "Recognized for participation in GUVI's workshop — 'Design Smarter with FigJam: A Workshop for Future UX Designers', held on 20 July 2025. Organized by GUVI Geek Networks in partnership with HCL."
        }
    ];

    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
            document.body.classList.add("certificates-view-active");
        } else {
            document.body.style.overflow = "unset";
            document.documentElement.style.overflow = "unset";
            document.body.classList.remove("certificates-view-active");
        }
        return () => {
            document.body.style.overflow = "unset";
            document.documentElement.style.overflow = "unset";
            document.body.classList.remove("certificates-view-active");
        };
    }, [selectedCert]);

    return (
        <div className="page-container certificates-page">
            <div className="content-wrapper">
                <motion.h1
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Academic & Professional Certificates
                </motion.h1>

                <div className="certificates-grid">
                    {certificates.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            className="cert-card-classical"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => setSelectedCert(cert)}
                        >
                            <div className="cert-card-inner">
                                <div className="cert-frame">
                                    <div className="cert-image-box">
                                        <img src={cert.image} alt={cert.title} className="cert-img" />
                                        <div className="cert-overlay">
                                            <span>View Certificate</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cert-info">
                                    <span className="cert-issuer-tag">{cert.issuer}</span>
                                    <h3 className="cert-title-text">{cert.title}</h3>
                                    <div className="cert-meta">
                                        <span className="cert-year">{cert.date}</span>
                                        <div className="cert-divider"></div>
                                        <span className="cert-view-link">Details</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        className="cert-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            className="cert-modal-content"
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="modal-header">
                                <button className="close-modal" onClick={() => setSelectedCert(null)}>×</button>
                            </div>

                            <div className="modal-body">
                                <div className="modal-image-container">
                                    <img src={selectedCert.image} alt={selectedCert.title} />
                                </div>
                                <div className="modal-info">
                                    <h2>{selectedCert.title}</h2>
                                    <div className="modal-meta">
                                        <span className="issuer">{selectedCert.issuer}</span>
                                        <span className="date">{selectedCert.date}</span>
                                    </div>
                                    <p>{selectedCert.description}</p>
                                    <div className="modal-actions">
                                        <a href={selectedCert.image} download className="download-btn">Download Certificate</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Certificates;
