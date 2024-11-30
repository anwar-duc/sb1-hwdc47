import React from 'react';
import { Linkedin, Mail, Download } from 'lucide-react';
import profilePic from '../assets/profile.jpg'; // Update with your profile pic path
import cvFile from '../assets/cv.pdf'; // Ensure CV file path is correct

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
      <div className="container mx-auto px-6 py-28 flex flex-col md:flex-row items-center justify-between">
        {/* Left Column (Text and Actions) */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Adem Bouteraa</h1>
          <h2 className="text-xl md:text-2xl mb-4">Business Intelligence Professional</h2>
          <p className="text-lg md:text-xl mb-8">
            Data-driven professional with expertise in using business intelligence tools like Python, Power BI, and SQL to drive insights and growth.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="mailto:adem.bouteraa@esen.tn"
              className="flex items-center bg-white text-teal-600 px-6 py-3 rounded-full hover:bg-teal-50 transition-all"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/bouteraa-adem-9448781bb"
              className="flex items-center bg-transparent border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-teal-600 transition-all"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a
              href={cvFile}
              download="Adem_Bouteraa_CV.pdf"
              className="flex items-center bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right Column (Profile Image) */}
        <div className="md:w-1/3">
          <img
            src={profilePic}
            alt="Adem Bouteraa"
            className="rounded-full w-72 h-72 object-cover shadow-xl border-8 border-white"
          />
        </div>
      </div>
    </div>
  );
};




