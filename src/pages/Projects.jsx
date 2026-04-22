import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
                            className="project-btn-v2"
                            onClick={(e) => { if (project.link === "#") e.preventDefault(); }}
                        >
                            {project.link === "#" ? "Coming Soon" : "View Project"}
                            <span className="btn-arrow">→</span>
                        </a>
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
            highlightType: "startup"
        },
        {
            title: "One Stop Alumni",
            desc: "Smart India Hackathon solution connecting college, alumni, and students for streamlined mentorship and networking.",
            tag: "SIH Solution / Web",
            link: "https://cyrilchris-j.github.io/onestopalumni/",
            highlightType: "hackathon"
        },
        {
            title: "Credit Score",
            desc: "IIT Kanpur Hackathon solution for real-time corporate credit assessment using automated sentiment and news analysis.",
            tag: "FinTech / Hackathon",
            link: "https://cyrilchris-j.github.io/stocknew/",
            highlightType: "fintech"
        },
        {
            title: "CGPA Calculator",
            desc: "Streamlined engineering utility for tracking academic progress with semester-wise performance analytics.",
            tag: "Utility / Tool",
            link: "https://cyrilchris-j.github.io/cgpa/",
            highlightType: "utility"
        },
        {
            title: "Logi Voice Assistant",
            desc: "Advanced AI-powered voice interface developed for TN Impact Solution, featuring real-time speech processing and intelligent task automation.",
            tag: "AI/ML / Voice",
            link: "https://logi-voice-assistant.vercel.app/",
            highlightType: "aiml"
        },
        {
            title: "AI Roadmap Gen",
            desc: "Logi is a voice-enabled AI assistant that interprets user commands and performs tasks seamlessly through natural interaction in real-time.",
            tag: "AI / EdTech",
            link: "https://ai-roadmap-generator-ten.vercel.app/",
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
