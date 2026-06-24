import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './PillNav.css';

const PillNav = () => {
    const [hovered, setHovered] = useState(null);
    const navigate = useNavigate();

    const items = [
        {
            id: 'cv',
            label: 'Download Resume',
            href: '/Cyril Christopher J -- Resume .pdf',
            download: true
        },
        {
            id: 'projects',
            label: 'View Projects',
            action: (e) => {
                e.preventDefault();
                if (window.innerWidth <= 968) {
                    const element = document.getElementById('projects');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    navigate('/projects');
                }
            }
        },
        {
            id: 'contact',
            label: 'Contact Me',
            action: (e) => {
                e.preventDefault();
                if (window.innerWidth <= 968) {
                    const element = document.getElementById('contact');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    navigate('/contact');
                }
            }
        }
    ];

    return (
        <div className="pill-nav-wrapper">
            <nav className="pill-nav">
                {items.map((item) => (
                    <a
                        key={item.id}
                        href={item.href || '#'}
                        download={item.download}
                        className="pill-link"
                        onMouseEnter={() => setHovered(item.id)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={item.action ? item.action : undefined}
                    >
                        {hovered === item.id && (
                            <motion.div
                                layoutId="pill-nav-hover"
                                className="pill-nav-background"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="pill-content">
                            {item.icon}
                            {item.label}
                        </span>
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default PillNav;
