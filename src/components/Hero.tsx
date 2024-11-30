import React from 'react';
import { Linkedin, Mail, Download } from 'lucide-react';
import profilePic from '../assets/profile.jpg'; // Update with your profile pic path
import cvFile from '../assets/cv.pdf'; // Ensure CV file path is correct

export const Hero = () => {
  return (
    <div className="relative bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between">
        {/* Left Column (Text and Actions) */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-teal-600 dark:text-teal-400">
            Adem Bouteraa
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-600 dark:text-gray-300">
            Business Intelligence Professional
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-400">
            Data-driven professional with expertise in using business intelligence tools like Python, Power BI, and SQL to drive insights and growth.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="mailto:adem.bouteraa@esen.tn"
              className="flex items-center bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-all dark:bg-teal-700 dark:hover:bg-teal-600"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/bouteraa-adem-9448781bb"
              className="flex items-center bg-transparent border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-full hover:bg-teal-600 hover:text-white transition-all dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-600 dark:hover:text-white"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a
              href={cvFile}
              download="Adem_Bouteraa_CV.pdf"
              className="flex items-center bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition-all dark:bg-teal-700 dark:hover:bg-teal-600"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right Column (Profile Image) */}
        <div className="md:w-1/3 sm:w-2/3">
          <img
            src={profilePic}
            alt="Adem Bouteraa"
            className="rounded-full w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover shadow-xl border-8 border-white dark:border-gray-700"
          />
        </div>
      </div>
    </div>
  );
};


