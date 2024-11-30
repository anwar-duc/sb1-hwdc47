import React from 'react';
import { Linkedin, Mail, Download } from 'lucide-react';
import profilePic from '../assets/profile.jpg';
import cvFile from '../assets/cv.pdf';

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-800 to-purple-700 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Adem Bouteraa</h1>
          <h2 className="text-2xl font-semibold mb-6 animate-fade-in-delay">Business Intelligence Specialist</h2>
          <p className="text-lg mb-8">
            Turning data into decisions. Passionate about analytics, innovation, and teamwork.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="mailto:adem.bouteraa@esen.tn"
              className="flex items-center bg-white text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-50 transition"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/bouteraa-adem-9448781bb"
              className="flex items-center border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-indigo-700 transition"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a
              href={cvFile}
              download="Adem_Bouteraa_CV.pdf"
              className="flex items-center bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-800 transition"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={profilePic}
            alt="Adem Bouteraa"
            className="w-64 h-64 object-cover rounded-full shadow-2xl animate-scale-up"
          />
        </div>
      </div>
    </div>
  );
};



