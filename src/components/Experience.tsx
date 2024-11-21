import React from 'react';
import elamouriLogo from '../assets/elamouri.png';  // Import logos from assets
import isieLogo from '../assets/isie.png';
import dclitechLogo from '../assets/dclitech.png';

export const Experience = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <img src={elamouriLogo} alt="El Amouri Logo" className="w-16 h-16 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-4">Institut El Amouri</h3>
          <p className="text-gray-600 mb-4">Field Supervisor / Banking Control | 2021 - 2022</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Independent supervision of banking operations to ensure compliance and efficiency</li>
            <li>• Managed team conducting street surveys for precise data collection</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <img src={isieLogo} alt="ISIE Logo" className="w-16 h-16 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-4">ISIE</h3>
          <p className="text-gray-600 mb-4">Administrative Team Lead & Data Analyst | 2023</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Led 3-person team in administrative strategy and task management</li>
            <li>• Developed Power BI dashboards to streamline operations</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <img src={dclitechLogo} alt="DecliTech Logo" className="w-16 h-16 object-contain" />
          </div>
          <h3 className="text-xl font-bold mb-4">DecliTech</h3>
          <p className="text-gray-600 mb-4">Trainer | 2024</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Trained youth (ages 7 to 17) in soft and hard skills like Python and AI</li>
            <li>• Guided students in personal development and skill-building workshops</li>
          </ul>
        </div>

      </div>
    </div>
  );
};




