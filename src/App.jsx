import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import WatercolorBackground from "./components/WatercolorBackground";
import SocialIcons from "./components/SocialIcons";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Contact from "./pages/Contact";

import "./App.css";

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/certificates" element={<PageTransition><Certificates /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98, Filter: "blur(10px)" }}
    animate={{ opacity: 1, scale: 1, Filter: "blur(0px)" }}
    exit={{ opacity: 0, scale: 1.02, Filter: "blur(10px)" }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 968);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 968);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        <WatercolorBackground />
        <Navbar isMobile={isMobile} />

        <main className="main-content">
          {isMobile ? (
            <div className="mobile-scroll-layout">
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="skills"><Skills /></section>
              <section id="projects"><Projects /></section>
              <section id="certificates"><Certificates /></section>
              <section id="contact"><Contact /></section>
            </div>
          ) : (
            <AnimatedRoutes />
          )}
        </main>

        <SocialIcons />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
