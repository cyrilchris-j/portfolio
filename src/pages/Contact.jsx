import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Code, Award, Instagram, Mail } from "lucide-react";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const socials = [
        { icon: <Linkedin size={24} />, name: "LinkedIn", link: "https://www.linkedin.com/in/cyrilchristopherj28?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { icon: <Github size={24} />, name: "GitHub", link: "https://github.com/cyrilchris-j" },
        { icon: <Instagram size={24} />, name: "Instagram", link: "https://www.instagram.com/chris_the_smart_?igsh=MWpoc3RoMDc2dXhzaA==" },
        { icon: <Mail size={24} />, name: "Email", link: "mailto:cyrilchrisj@gmail.com" },
        { icon: <Code size={24} />, name: "HackerRank", link: "https://www.hackerrank.com/profile/cyrilchris28" },
        { icon: <Award size={24} />, name: "CodeChef", link: "https://www.codechef.com/users/cyrilchris28" },
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // EmailJS configuration
        const serviceId = 'service_j179lio';
        const templateId = 'template_2l4gkil';
        const publicKey = 'vFaRiF9oM1beIIgjX';

        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);

                // Clear success message after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            }, (error) => {
                console.error('Email send failed:', error.text);
                setSubmitStatus('error');
                setIsSubmitting(false);

                // Clear error message after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    return (
        <div className="page-container contact-page">
            <div className="content-wrapper">
                <motion.h1
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Contact
                </motion.h1>

                <div className="contact-layout-classical">
                    <motion.div
                        className="contact-info-section"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="subsection-title">Find me on</h2>
                        <div className="social-links-grid-classical">
                            {socials.map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.link}
                                    target={social.link.startsWith('mailto:') ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                    className="social-item-classical glass-card"
                                    whileHover={{ y: -5, borderColor: "var(--accent-secondary)" }}
                                    title={social.name}
                                >
                                    <span className="social-icon">{social.icon}</span>
                                    <span className="social-name">{social.name}</span>
                                </motion.a>
                            ))}
                        </div>
                        <motion.p
                            className="collaboration-quote"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            "Let's collaborate on your next big idea and build something revolutionary together."
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="contact-form-section"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="subsection-title">Let's Connect</h2>
                        <div className="contact-form-container-classical glass-card">
                            <form
                                ref={formRef}
                                className="contact-form"
                                onSubmit={handleSubmit}
                            >
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>

                                {submitStatus === 'success' && (
                                    <div className="status-msg success">
                                        ✓ Message sent successfully!
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="status-msg error">
                                        ✗ Failed to send message.
                                    </div>
                                )}

                                <motion.button
                                    type="submit"
                                    className="submit-btn-classical"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div >
    );
};

export default Contact;
