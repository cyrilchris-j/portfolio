import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Certificates.css";
import iitKanpur from "../assets/iitkanpurhackathon.jpeg";
import iitDataScience from "../assets/iitdatascienceworkshop.jpeg";
import gfg from "../assets/gfgpython.jpeg";
import kpr from "../assets/kprprompteng.jpeg";
import nptel from "../assets/npteliot.jpeg";
import uiuxcert from "../assets/uiuxcert.jpeg";

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        { title: "IIT Kanpur Hackathon", issuer: "IIT Kanpur", date: "2024", image: iitKanpur, description: "National Level Hackathon organized by IIT Kanpur." },
        { title: "Data Science Workshop", issuer: "IIT Madras", date: "2023", image: iitDataScience, description: "Comprehensive workshop on Data Science and Machine Learning at IIT Madras." },
        { title: "Python Programming", issuer: "GeeksforGeeks", date: "2023", image: gfg, description: "Advanced Python programming certification from GeeksforGeeks." },
        { title: "Internet of Things", issuer: "NPTEL", date: "2023", image: nptel, description: "NPTEL Online Certification on Internet of Things (IoT)." },
        { title: "Prompt Engineering", issuer: "KPR Institute", date: "2024", image: kpr, description: "Specialized course on Prompt Engineering for AI models." },
        { title: "UI/UX Design Webinar", issuer: "Brand Monk Academy", date: "2026", image: uiuxcert, description: "Professional webinar on UI/UX design principles and practices hosted by Brand Monk Academy." }
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
                            <button className="close-modal" onClick={() => setSelectedCert(null)}>&times;</button>
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
