import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sections = [
    {
        title: "The Current Challenge",
        content: [
            "Lack of clarity between Product, Program, and Project Management",
            "Inconsistent product practices across teams",
            "Need for a stronger product-thinking culture",
            "Stakeholders don’t always know what to expect from a Product Manager",
        ],
    },
    {
        title: "My Proven Track Record",
        content: [
            "Led Guardian One’s mobile app to zero CTF in 42 days",
            "Expanded product impact by bringing in the Space Force Portal",
            "Successfully transitioned Portal from Cloud One to Platform One",
            "Continuous enhancement based on direct Guardian feedback",
            "Strong relationships with Space Force stakeholders",
        ],
    },
    {
        title: "My Planned Framework",
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
            "Build a community of product thinkers at Clarity",
            "Support for a product-led organization",
        ],
    },
    {
        title: "Let's getBizzy!",
        content: [
            "Clarity has an opportunity to set the gold standard for product management.",
            "I bring the experience, frameworks, and leadership to make that happen",
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
            <h1 className="vision-header">Why Clarity Needs to Get Bizzy</h1>
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