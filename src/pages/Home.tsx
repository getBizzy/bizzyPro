import React, { useState, useEffect } from "react";

const Home = () => {
    const [greeting, setGreeting] = useState("Welcome");

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting("Good Morning ☀️");
        else if (hour < 18) setGreeting("Good Afternoon 🌤️");
        else setGreeting("Good Evening 🌙");
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-4xl font-bold mb-4">{greeting}</h1>
        </div>
    );
};

export default Home;
