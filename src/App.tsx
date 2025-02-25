import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Kudos from "./pages/Kudos";
import Vision from "./pages/Vision";
import bizzyHeadshot from "./assets/bizzy.png";
import "./assets/index.css";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <Router>
            <div className={darkMode ? "dark" : "light"}>
                <nav className="nav-bar">
                    <Link to="/" className="home-button">
                        <img src={bizzyHeadshot} alt="Home" className="home-img" />
                    </Link>
                    <div className="nav-links-center">
                        <Link to="/vision" className="nav-link">Vision</Link>
                        <Link to="/resume" className="nav-link">Resume</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                        <Link to="/kudos" className="nav-link">Kudos</Link>
                    </div>
                    <button onClick={() => setDarkMode(!darkMode)} className="mode-toggle">
                        {darkMode ? " ☀️" : " 🌙"}
                    </button>
                </nav>
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/vision" element={<Vision />} />
                        <Route path="/resume" element={<iframe src="https://getbizzy.github.io/bizzyPro/resume.pdf" className="resume-iframe" title="Resume"></iframe>} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/kudos" element={<Kudos />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
