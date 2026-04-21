import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './BounceCard.css';

const BounceCard = ({ className = '', children, animationDelay = 0.5, amplitude = 15, period = 2 }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        // Bouncing animation using GSAP
        // A simple up-and-down Y movement with ease
        gsap.to(card, {
            y: -amplitude,
            duration: period / 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: animationDelay,
        });

        return () => {
            gsap.killTweensOf(card);
        };
    }, [animationDelay, amplitude, period]);

    return (
        <div ref={cardRef} className={`bounce-card-wrapper ${className}`}>
            {children}
        </div>
    );
};

export default BounceCard;
