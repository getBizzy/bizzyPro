import React from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            <div className="text-lg text-gray-700">
                {/* Clickable Email */}
                <p className="flex items-center gap-2 mb-4">
                    <Mail className="text-[var(--text-color)]" />
                    <a
                        href="mailto:bizzy@getbizzy.pro"
                        className="text-[var(--text-color)] no-underline hover:text-[var(--text-color)] transition-colors duration-200"
                        style={{ textDecoration: "none", color: "var(--text-color)" }}
                    >
                        bizzy@getbizzy.pro
                    </a>
                </p>

                {/* Clickable Phone */}
                <p className="flex items-center gap-2">
                    <Phone className="text-[var(--text-color)]" />
                    <a
                        href="tel:+19545546993"
                        className="text-[var(--text-color)] no-underline hover:text-[var(--text-color)] transition-colors duration-200"
                        style={{ textDecoration: "none", color: "var(--text-color)" }}
                    >
                        (954) 554-6993
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contact;