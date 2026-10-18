import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sections = [
    {
        title: "The Role",
        content: [
            "Chief Product Manager owns product execution across the Rapid Capabilities portfolio",
            "Turns the VP & CTO's vision into roadmaps, priorities, and shipped outcomes",
            "Builds the product processes Clarity needs to scale",
            "Recruits, coaches, and grows product talent",
        ],
    },
    {
        title: "Track Record: Delivery",
        content: [
            "Guardian One: an unprecedented zero to Certificate to Field in 42 days",
            "Brought the Space Force Portal into the portfolio and moved it from Cloud One to Gravity",
            "Today: directing product for Cloud One DSOT, the DAF's application modernization program",
        ],
    },
    {
        title: "Track Record: The Practice",
        content: [
            "Built the product practice: 14 product managers delivering on programs",
            "Standards, playbooks, coaching, and career development",
            "Presented Guardian One at DAFITC 2024",
        ],
    },
    {
        title: "The AI Advantage",
        content: [
            "Built an AI-driven product operating system on Claude",
            "Custom agentic skills, review agents, and automated workflows for every PM artifact",
            "Presented \"AI Confidence vs. AI Competence\" to set the bar for responsible AI adoption",
            "A practice that ships faster because its tooling thinks with it",
        ],
    },
    {
        title: "First 90 Days",
        content: [
            "Baseline the portfolio: one outcome-based roadmap, every initiative tied to a KPI",
            "Measure delivery speed and reliability (DORA metrics) across all programs",
            "Codify the playbook: discovery, framing, prioritization, release",
            "Talent plan: a career ladder and hiring profile for product",
        ],
    },
    {
        title: "Why Internal",
        content: [
            "Day one for me is month six for an outside hire",
            "Active Secret clearance, TS/SCI sponsorship eligible",
            "The practice this role inherits is the one I built",
            "No ramp, no inheritance risk, no lost momentum",
        ],
    },
    {
        title: "Let's getBizzy!",
        content: [
            "Clarity set the standard for its product practice. Now let's scale it.",
            "I bring the track record, the frameworks, and the AI-powered tooling to make it happen",
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
            <h1 className="vision-header">Why Clarity's Next Chief Product Manager Should Get Bizzy</h1>
            <div className={`vision-card ${fade ? "fade-out" : "fade-in"}`}>
                <h2 className="vision-title">{sections[currentIndex].title}</h2>
                <ul className="vision-list">
                    {sections[currentIndex].content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <div className="vision-nav-buttons">
                    <button onClick={prevSlide} className="vision-button" aria-label="Previous slide">
                        <ChevronLeft size={28} />
                    </button>
                    <div className="vision-progress" role="tablist" aria-label="Slides">
                        {sections.map((section, index) => (
                            <button
                                key={section.title}
                                className={`vision-dot ${index === currentIndex ? "active" : ""}`}
                                aria-label={section.title}
                                onClick={() => {
                                    setFade(true);
                                    setTimeout(() => {
                                        setCurrentIndex(index);
                                        setFade(false);
                                    }, 200);
                                }}
                            />
                        ))}
                    </div>
                    <button onClick={nextSlide} className="vision-button" aria-label="Next slide">
                        <ChevronRight size={28} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Vision;
