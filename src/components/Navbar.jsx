import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = ({ isMobile }) => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Home", path: isMobile ? "#home" : "/" },
        { name: "About", path: isMobile ? "#about" : "/about" },
        { name: "Skills", path: isMobile ? "#skills" : "/skills" },
        { name: "Projects", path: isMobile ? "#projects" : "/projects" },
        { name: "Certificates", path: isMobile ? "#certificates" : "/certificates" },
        { name: "Contact", path: isMobile ? "#contact" : "/contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (e, path) => {
        if (isMobile) {
            e.preventDefault();
            setIsOpen(false);
            const elementId = path.replace('#', '');
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Default Link behavior handles it
        }
    };

    return (
        <nav className="navbar-container">
            <div className="navbar-name">Cyril Christopher J</div>

            {/* Desktop Menu */}
            <div className="navbar-menu desktop-menu">
                {menuItems.map((item) => (
                    <motion.div
                        key={item.path}
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="navbar-bubble-wrapper"
                    >
                        <Link
                            to={item.path}
                            className={`navbar-bubble ${location.pathname === item.path ? 'active' : ''}`}
                        >
                            {item.name}
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-btn" onClick={toggleMenu}>
                <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
                <div className="mobile-menu-links">
                    {menuItems.map((item, index) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="mobile-link"
                            onClick={(e) => handleNavClick(e, item.path)}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
