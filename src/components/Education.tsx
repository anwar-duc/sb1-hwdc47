import React from 'react';

// Import ESEN logo
import esenLogo from '../assets/esen.png';

export const Education = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-teal-600">Education</h2> {/* Updated title color */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* First Education: Higher School of Digital Economy (Master's) */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            {/* ESEN Logo */}
            <div className="mr-4">
              <img src={esenLogo} alt="ESEN Logo" className="w-16 h-16 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Higher School of Digital Economy, University of Manouba</h3>
              <p className="text-gray-600">Master's Degree in Monitoring and Competitive Intelligence | 2024 - Current</p>
            </div>
          </div>
          <p className="text-gray-700">
            Specializing in competitive intelligence systems, auditing, and implementing strategies for both public and private sectors. Trained in managing information strategies and analyzing data using BI tools.
          </p>
        </div>
        
        {/* Second Education: Higher School of Digital Economy (Bachelor's) */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            {/* ESEN Logo */}
            <div className="mr-4">
              <img src={esenLogo} alt="ESEN Logo" className="w-16 h-16 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Higher School of Digital Economy, University of Manouba</h3>
              <p className="text-gray-600">Bachelor’s Degree in E-Business | 2020 - 2024</p>
            </div>
          </div>
          <p className="text-gray-700">
            Completed a program in Business Computing, focusing on digital transformation and managing E-Business projects. Gained advanced knowledge in IT and management, with experience in both web front and back-end development.
          </p>
        </div>
      </div>
    </div>
  );
};

