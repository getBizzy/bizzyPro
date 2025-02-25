import React from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
      <div className="text-lg text-gray-700">
        <p className="flex items-center gap-2 mb-4">
          <Mail className="text-blue-500" /> bizzy@getbizzy.pro
        </p>
        <p className="flex items-center gap-2">
          <Phone className="text-blue-500" /> (954) 554-6993
        </p>
      </div>
    </div>
  );
};

export default Contact;
