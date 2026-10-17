import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

const Home = () => {
    const [greeting, setGreeting] = useState("Welcome");

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting("Good Morning");
        else if (hour < 18) setGreeting("Good Afternoon");
        else setGreeting("Good Evening");
    }, []);

    return (
        <div className="home-hero">
            <h1 className="home-greeting">{greeting}</h1>
            <h2 className="home-headline">Elizabeth "Bizzy" Koch for <span className="headline-accent">Chief Product Manager</span></h2>
            <p className="home-subhead">
                The product practice this role will scale is the one I built.
                Here's the case, the track record, and the plan.
            </p>
            <Link to="/vision" className="home-cta">
                See the Vision <ArrowRight size={18} />
            </Link>

            <section className="proof-section">
                <h3 className="proof-header">Built, not promised</h3>
                <div className="proof-grid">
                    <a
                        className="proof-card"
                        href="https://docs.google.com/presentation/d/e/2PACX-1vRDt8HsshNIL9wqxaUhktS1X-djuoOJODCzOiU2NU7VHEVDdcEVL16ScUg0XpCE8Wxf3oTDG08-MhHD/pub?start=true&loop=false&delayms=3000"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/proof/deck-cover.png`}
                            alt="AI Confidence vs. AI Competence deck cover"
                            className="proof-img"
                        />
                        <div className="proof-caption">
                            <strong>AI Confidence vs. AI Competence</strong>
                            <span>Responsible AI use, presented to the product practice. View the deck.</span>
                        </div>
                    </a>

                    <div className="proof-card proof-terminal-card">
                        <div className="proof-terminal">
                            <div className="proof-terminal-bar">
                                <i /><i /><i />
                                <em>bizzyPM</em>
                            </div>
                            <pre className="proof-terminal-body">
{`$ /prd-generator      spec drafted
$ /roadmap-builder    tied to OKRs
$ /devils-advocate    5 blind spots
$ /stakeholder-sim    CTO, UX, Sales
$ /launch-checklist   42 items ready`}
                            </pre>
                        </div>
                        <div className="proof-caption">
                            <strong>bizzyPM</strong>
                            <span>An AI product operating system on Claude: agentic skills and review agents for every PM artifact.</span>
                        </div>
                    </div>

                    <a
                        className="proof-card"
                        href="https://sites.google.com/clarityinnovates.com/product-thinking/home"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="proof-playbooks">
                            <BookOpen size={44} strokeWidth={1.5} />
                            <span>Product Thinking</span>
                        </div>
                        <div className="proof-caption">
                            <strong>The Playbooks</strong>
                            <span>Standards and playbooks the practice runs on. Opens with your Clarity sign-in.</span>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
