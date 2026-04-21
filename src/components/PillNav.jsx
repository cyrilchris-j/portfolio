import { useState } from 'react';
import { motion } from 'framer-motion';
import './PillNav.css';

const PillNav = () => {
    const [hovered, setHovered] = useState(null);

    const items = [
        {
            id: 'cv',
            label: 'Download CV',
            href: '/resume.pdf',
            download: true,
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
            )
        },
        {
            id: 'email',
            label: 'Email Me',
            href: 'mailto:cyrilchrisj@gmail.com',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
            )
        }
    ];

    return (
        <div className="pill-nav-wrapper">
            <nav className="pill-nav">
                {items.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        download={item.download}
                        className="pill-link"
                        onMouseEnter={() => setHovered(item.id)}
                        onMouseLeave={() => setHovered(null)}
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
