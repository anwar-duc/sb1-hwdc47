import React from 'react';
import { Linkedin, Mail, Download } from 'lucide-react';
import profilePic from '../assets/profile.jpg';
import cvFile from '../assets/cv.pdf';

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-700 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Adem Bouteraa
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              Business Intelligence Professional
            </h2>
            <p className="text-lg mb-8">
              Motivated and experienced professional driving growth through
              data intelligence and innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:adem.bouteraa@esen.tn"
                className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/bouteraa-adem-9448781bb"
                className="flex items-center bg-transparent border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a
                href={cvFile}
                download="Adem_Bouteraa_CV.pdf"
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>
          </div>
          <div className="md:w-1/3 relative">
            <img
              src={profilePic}
              alt="Adem Bouteraa"
              className="rounded-full w-64 h-64 object-cover shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};


