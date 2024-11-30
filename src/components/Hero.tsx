import React from 'react';
import { Linkedin, Mail, Download } from 'lucide-react';
import profilePic from '../assets/profile.jpg'; // Keep your updated profile pic
import cvFile from '../assets/cv.pdf'; // Ensure this points to your actual CV

export const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Adem Bouteraa
          </h1>
          <h2 className="text-xl md:text-2xl mb-6">Business Intelligence Professional</h2>
          <p className="text-lg mb-8">
            Data-driven professional passionate about leveraging business intelligence to solve complex problems and drive growth.
          </p>
          {/* Action Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="mailto:adem.bouteraa@esen.tn"
              className="flex items-center bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-all"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/bouteraa-adem-9448781bb"
              className="flex items-center bg-transparent border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a
              href={cvFile}
              download="Adem_Bouteraa_CV.pdf"
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="md:w-1/3">
          <img
            src={profilePic}
            alt="Adem Bouteraa"
            className="rounded-full w-52 h-52 object-cover shadow-xl border-4 border-white"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black opacity-25"></div>
    </div>
  );
};



