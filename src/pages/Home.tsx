import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
            <h2 className="home-headline">Elizabeth "Bizzy" Koch for Chief Product Manager</h2>
            <p className="home-subhead">
                The product practice this role will scale is the one I built.
                Here's the case, the track record, and the plan.
            </p>
            <Link to="/vision" className="home-cta">
                See the Vision <ArrowRight size={18} />
            </Link>
        </div>
    );
};

export default Home;
