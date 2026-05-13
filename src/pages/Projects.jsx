import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./Projects.css";

const ProjectCard = ({ project, idx }) => {
    // Mouse tracking for 3D tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["18deg", "-18deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-18deg", "18deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div 
            className="spring-card-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className={`project-card-v2 ${project.highlightType ? `highlight-${project.highlightType}` : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Background stack layers */}
                <div className="card-stack-bg layer-1"></div>
                <div className="card-stack-bg layer-2"></div>
                
                {/* Main floating content */}
                <motion.div 
                    className="project-card-content glass-card"
                    style={{
                        transformStyle: "preserve-3d",
                        translateZ: "60px", // Bulge effect
                    }}
                    whileHover={{ 
                        scale: 1.08,
                        translateZ: "80px",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 15 
                    }}
                >
                    <div className="project-header" style={{ transform: "translateZ(40px)" }}>
                        <span className="project-tag-v2">{project.tag}</span>
                        {project.highlightType === 'startup' && <div className="status-badge cyan">Featured</div>}
                        {project.highlightType === 'hackathon' && <div className="status-badge gold">SIH Solution</div>}
                        {project.highlightType === 'fintech' && <div className="status-badge purple">Prototype</div>}
                    </div>
                    
                    <h3 className="project-title-v2" style={{ transform: "translateZ(30px)" }}>{project.title}</h3>
                    <p className="project-desc-v2" style={{ transform: "translateZ(20px)" }}>{project.desc}</p>
                    
                    <div className="project-footer" style={{ transform: "translateZ(50px)" }}>
                        <a
                            href={project.link || "#"}
                            target={project.link === "#" ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            className="project-btn-v2 primary-btn"
                            onClick={(e) => { if (project.link === "#") e.preventDefault(); }}
                        >
                            <span className="btn-text">
                                {project.link === "#" ? "Coming Soon" : "Live Demo"}
                            </span>
                            <ExternalLink size={18} className="btn-icon" />
                        </a>
                        
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-btn-v2 github-btn"
                                title="Source Code"
                            >
                                <Github size={20} />
                            </a>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Napalgo",
            desc: "Next-gen student-driven IT initiative focused on real-world innovation and solutions.",
            tag: "Startup / IT",
            link: "https://napalgo.github.io/web/",
            github: "https://github.com/napalgo/web",
            highlightType: "startup"
        },
        {
            title: "One Stop Alumni",
            desc: "Smart India Hackathon solution connecting college, alumni, and students for streamlined mentorship and networking.",
            tag: "SIH Solution / Web",
            link: "https://cyrilchris-j.github.io/onestopalumni/",
            github: "https://github.com/cyrilchris-j/onestopalumni",
            highlightType: "hackathon"
        },
       
        {
            title: "QuizSnap",
            desc: "Developed QuizSnap using React.js and modern frontend technologies to create an interactive real-time quiz platform with responsive design and smooth user experience.",
            tag: "Utility / Tool",
            link: "https://quiz-snap.vercel.app/",
            github: "https://github.com/cyrilchris-j/cgpa",
            highlightType: "utility"
        },
         {
            title: "ExpenseTracker",
            desc: "Developed ExpenseTracker for real-time income and expense management with budgeting insights and transaction tracking.",
            tag: "FinTech / Hackathon",
            link: "https://cyrilchris-j.github.io/expensetracker/",
            github: "https://github.com/cyrilchris-j/expensetracker",
            highlightType: "fintech"
        },
        {
            title: "Logi Voice Assistant",
            desc: "Advanced AI-powered voice interface developed for TN Impact Solution, featuring real-time speech processing and intelligent task automation.",
            tag: "AI/ML / Voice",
            link: "https://logi-voice-assistant.vercel.app/",
            github: "https://github.com/cyrilchris-j/LogiVoice-Assistant",
            highlightType: "aiml"
        },
        {
            title: "AI Roadmap Gen",
            desc: "Logi is a voice-enabled AI assistant that interprets user commands and performs tasks seamlessly through natural interaction in real-time.",
            tag: "AI / EdTech",
            link: "https://reminder-1-notes.web.app/",
            github: "https://github.com/cyrilchris-j/reminder",
            highlightType: "startup"
        }
    ];

    return (
        <div className="page-container projects-page">
            <div className="content-wrapper">
                <motion.h1 
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Innovative Projects
                </motion.h1>

                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} idx={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
