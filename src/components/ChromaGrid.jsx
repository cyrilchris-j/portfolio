import React, { useRef, useEffect } from 'react';
import './ChromaGrid.css';

const ChromaGrid = ({ children, className = '' }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            container.style.setProperty('--mouse-x', `${x}px`);
            container.style.setProperty('--mouse-y', `${y}px`);
        };

        container.addEventListener('mousemove', handleMouseMove);
        return () => container.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className={`chroma-grid-container ${className}`}>
            <div className="chroma-grid-overlay"></div>
            <div className="chroma-grid-content">
                {children}
            </div>
        </div>
    );
};

export default ChromaGrid;
