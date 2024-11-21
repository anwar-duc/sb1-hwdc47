import React from 'react';

// Import logos
import esenLogo from '../assets/esen.png'; // Your new logo
import isieLogo from '../assets/isie.png'; // Existing logo
import dclitechLogo from '../assets/dclitech.png'; // Existing logo

export const Education = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Education: ESEN */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            {/* Logo */}
            <div className="mr-4">
              <img src={esenLogo} alt="ESEN Logo" className="w-16 h-16 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Higher School of Digital Economy (ESEN)</h3>
              <p className="text-gray-600">Bachelor's Degree in E-Business | 2021 - 2024</p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Specialized in business intelligence and digital transformation.</li>
            <li>• Gained experience in data management, analytics, and web development.</li>
          </ul>
        </div>

        {/* Education: ISIE */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            {/* Logo */}
            <div className="mr-4">
              <img src={isieLogo} alt="ISIE Logo" className="w-16 h-16 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">ISIE</h3>
              <p className="text-gray-600">Certificate in Data Analysis | 2023</p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Acquired skills in data visualization and analysis using tools like Power BI.</li>
            <li>• Focused on providing insights to improve organizational performance.</li>
          </ul>
        </div>

        {/* Education: Declitech */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            {/* Logo */}
            <div className="mr-4">
              <img src={dclitechLogo} alt="DecliTech Logo" className="w-16 h-16 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">DecliTech</h3>
              <p className="text-gray-600">Training in Python and AI | 2023</p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Learned Python programming, AI fundamentals, and machine learning concepts.</li>
            <li>• Gained hands-on experience through workshops and live projects.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
