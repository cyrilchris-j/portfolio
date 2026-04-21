import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-classical">
            <div className="footer-content">
                <p className="footer-text">
                    © {currentYear} Cyril Chris | Designed and Developed by Cyril Chris
                </p>
            </div>
        </footer>
    );
};

export default Footer;
