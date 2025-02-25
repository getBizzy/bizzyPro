import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sections = [
    {
        title: "Track Record",
        content: [
            "Led Guardian One’s mobile app to zero CTF in 42 days",
            "Expanded product impact by bringing in the Space Force Portal",
            "Successfully transitioned Portal from Cloud One to Platform One",
            "Continuous enhancement based on direct Guardian feedback",
            "Strong relationships with Space Force stakeholders",
        ],
    },
    {
        title: "Framework",
        content: [
            "Product Excellence – Establishing clear standards and best practices",
            "Stakeholder Alignment – Ensuring cross-team collaboration and communication",
            "Rapid Delivery – Agile execution with security and compliance in mind",
            "Continuous Learning – Mentorship, training, and knowledge-sharing",
            "Measurable Impact – Data-driven decision-making for product success",
        ],
    },
    {
        title: "Vision for Clarity’s Product Practice",
        content: [
            "Clarity PMs should be recognized as best-in-class product leaders",
            "Develop a playbook for success—formulas, templates, and best practices",
            "Drive a culture of ownership where PMs are empowered and accountable",
            "Elevate product management as a strategic function",
        ],
    },
    {
        title: "What I Need to Succeed",
        content: [
            "Investment in Product Leadership Development",
            "Standardization of best practices and methodologies",
            "Support for a product-led organization",
        ],
    },
    {
        title: "Final Pitch",
        content: [
            "Clarity has a unique opportunity to set the gold standard for product management.",
            "With my experience leading high-impact initiatives, mentoring teams, and building scalable frameworks, I am confident I can make that happen.",
        ],
    },
];

const Vision = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(false);

    const nextSlide = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
            setFade(false);
        }, 200);
    };

    const prevSlide = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
            setFade(false);
        }, 200);
    };

    return (
        <div className="vision-container">
            <div className={`vision-card ${fade ? "fade-out" : "fade-in"}`}>
                <h2 className="vision-title">{sections[currentIndex].title}</h2>
                <ul className="vision-list">
                    {sections[currentIndex].content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <div className="vision-nav-buttons">
                    <button onClick={prevSlide} className="vision-button">
                        <ChevronLeft size={28} />
                    </button>
                    <span className="vision-slide-counter">
                        {currentIndex + 1} / {sections.length}
                    </span>
                    <button onClick={nextSlide} className="vision-button">
                        <ChevronRight size={28} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Vision;