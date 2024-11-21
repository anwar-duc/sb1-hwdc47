import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import profilePic from '../assets/profile.jpg';

export const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Adem Boutera</h1>
            <p className="text-lg mb-6">Welcome to my portfolio! Explore my journey and accomplishments.</p>
            <div className="flex gap-4">
              <a
                href="/assets/cv.pdf" 
                download="Adem_Boutera_CV.pdf"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
              >
                Download CV
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={profilePic} alt="Adem Boutera" className="rounded-full shadow-lg w-64 h-64 mx-auto md:mx-0" />
          </div>
        </div>
      </div>
    </div>
  );
};
