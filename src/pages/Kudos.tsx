import React, { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient"; // Import Supabase client

type KudosItem = {
    id: number;
    text: string;
    author: string;
};

const Kudos = () => {
    const [kudosList, setKudosList] = useState<KudosItem[]>([]);
    const [newKudos, setNewKudos] = useState("");
    const [newAuthor, setNewAuthor] = useState("");

    // Fetch kudos from Supabase when component mounts
    useEffect(() => {
        const fetchKudos = async () => {
            const { data, error } = await supabase.from("kudos").select("*").order("created_at", { ascending: false });
            if (!error) {
                setKudosList(data);
            }
        };
        fetchKudos();
    }, []);

    const handleAddKudos = async () => {
        if (newKudos.trim() !== "" && newAuthor.trim() !== "") {
            const newEntry = { text: newKudos, author: newAuthor };

            const { data, error } = await supabase.from("kudos").insert([newEntry]).select();
            if (!error && data) {
                setKudosList([data[0], ...kudosList]); // Add new kudos at the top
                setNewKudos("");
                setNewAuthor("");
            }
        }
    };

    return (
        <div className="kudos-container">
            <h1 className="text-4xl font-bold mb-6">Kudos & Recommendations</h1>

            {/* Scrollable Kudos List */}
            <div className="kudos-scroll-container">
                {kudosList.length === 0 ? (
                    <p className="text-gray-500 mb-6">No kudos yet. Be the first to add one!</p>
                ) : (
                    <div className="kudos-list">
                        {kudosList.map((kudos) => (
                            <div key={kudos.id} className="kudos-item">
                                <p>"{kudos.text}"</p>
                                <span> - {kudos.author}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Kudos Input Form */}
            <div className="kudos-form">
                <h2 className="text-xl font-semibold mb-4">Add a Kudos</h2>
                <input
                    type="text"
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Enter your kudos"
                    value={newKudos}
                    onChange={(e) => setNewKudos(e.target.value)}
                />
                <input
                    type="text"
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Your name"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition"
                    onClick={handleAddKudos}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Kudos;