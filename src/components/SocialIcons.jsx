import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import "./SocialIcons.css";

const SocialIcons = () => {
    const socialLinks = [
        { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/cyrilchristopherj28?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
        { icon: <Github size={20} />, url: "https://github.com/cyrilchris-j", label: "GitHub" },
    ];

    return (
        <div className="social-icons-wrapper">
            {socialLinks.map((link, index) => (
                <motion.a
                    key={index}
                    href={link.url}
                    target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="social-icon-bubble"
                    title={link.label}
                >
                    {link.icon}
                </motion.a>
            ))}
        </div>
    );
};

export default SocialIcons;
