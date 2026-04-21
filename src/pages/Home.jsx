import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PillNav from "../components/PillNav";
import cyrilImg from "../assets/cyrilhome.jpg";

import "./Home.css";

const Home = () => {
    const roleText = "AI/ML and UI/UX Designer";
    const [decryptedText, setDecryptedText] = useState("");
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";

    const greetingText = "Hello, my name is";
    const nameText = "Cyril Christopher J";

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDecryptedText(
                roleText.split("").map((char, index) => {
                    if (index < iteration) {
                        return roleText[index];
                    }
                    return characters[Math.floor(Math.random() * characters.length)];
                }).join("")
            );

            if (iteration >= roleText.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03
            }
        }
    };

    const charVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div className="page-container home-page">
            <div className="content-wrapper home-layout">
                <motion.div
                    className="home-text"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="greeting"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {greetingText.split("").map((char, index) => (
                            <motion.span key={index} variants={charVariants} className="split-char">
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h2>
                    <motion.h1
                        className="name-title"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {nameText.split("").map((char, index) => (
                            <motion.span key={index} variants={charVariants} className="split-char">
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.div
                        className="home-visual-mobile"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="hero-portrait-wrapper">
                            <div className="hero-portrait-card">
                                <img src={cyrilImg} alt="Cyril Christopher J" className="profile-photo" />
                            </div>
                        </div>
                    </motion.div>

                    <h3 className="role-title">{decryptedText}</h3>
                    <p className="description">
                        Passionate about building intelligent systems and crafting seamless digital experiences.
                        Blending the power of Artificial Intelligence with the elegance of modern design to solve complex problems.
                    </p>

                    <PillNav />
                </motion.div>

                <motion.div
                    className="home-visual"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="hero-portrait-wrapper">
                        <div className="hero-portrait-card">
                            <img src={cyrilImg} alt="Cyril Christopher J" className="profile-photo" />
                        </div>
                    </div>
                </motion.div>


            </div>
        </div>
    );
};

export default Home;
