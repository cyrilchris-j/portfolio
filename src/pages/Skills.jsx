import { motion } from "framer-motion";
import "./Skills.css";
const Skills = () => {
    const skillGroups = [
        {
            title: "Frontend & Backend",
            skills: ["React", "Next.js", "Tailwind", "Node.js", "Express"]
        },
        {
            title: "Programming & Database",
            skills: ["Java", "Python", "C", "Firebase", "MongoDB", "Supabase"]
        },
        {
            title: "Tools",
            skills: ["Git", "GitHub", "Figma", "Stitch", "Antigravity", "Netlify"]
        }
    ];

    return (
        <div className="page-container skills-page">
            <div className="content-wrapper">
                <h1 className="section-title">Skills</h1>
                <h2 style={{
                    marginTop: '15px',
                    marginBottom: '40px',
                    fontSize: '1.8rem',
                    textAlign: 'center',
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--text-primary)'
                }}>Technical Expertise</h2>

                <div className="skills-grid">
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            className="skill-card-wrapper"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            whileHover={{ scale: 1.03, y: -8 }}
                        >
                            <div className="skill-card">
                                <h3>{group.title}</h3>
                                <div className="skill-list">
                                    {group.skills.map((skill, sIdx) => (
                                        <span key={sIdx} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
