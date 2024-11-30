import React from 'react';

// Import logos
import elamouriLogo from '../assets/elamouri.png';
import isieLogo from '../assets/isie.png';
import dclitechLogo from '../assets/dclitech.png';
import lacroixLogo from '../assets/lacroix.png'; // Imported Lacroix logo

export const Experience = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center text-teal-600">Professional Experience</h2> {/* Updated color to match the hero section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Lacroix Group - Data Analyst */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <img src={lacroixLogo} alt="Lacroix Group Logo" className="w-16 h-16 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Lacroix Group</h3>
              <p className="text-gray-600">Data Analyst | January 2024 – June 2024</p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Designed and developed monitoring tools using Power BI and Python.</li>
            <li>• Built a React JS interface for real-time dashboard integration.</li>
          </ul>
        </div>

        {/* Institut El Amouri */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <img src={elamouriLogo} alt="Institut El Amouri Logo" className="w-16 h-16 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Institut El Amouri</h3>
              <p className="text-gray-600">Field Supervisor / Banking Control | 2021 - 2022</p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Independent supervision of banking operations to ensure compliance and efficiency.</li>
            <li>• Managed team conducting street surveys for precise data collection.</li>
          </ul>
        </div>

        {/* ISIE */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <img src={isieLogo} alt="ISIE Logo" className="w-16 h-16 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">ISIE</h3>
              <p className="text-gray-600">Administrative Team Lead & Data Analyst | 2023</p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Led 3-person team in administrative strategy and task management.</li>
            <li>• Developed Power BI dashboards to streamline operations.</li>
          </ul>
        </div>

        {/* DecliTech */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <img src={dclitechLogo} alt="DecliTech Logo" className="w-16 h-16 object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">DecliTech</h3>
              <p className="text-gray-600">Trainer - Hard & Soft Skills | 2024</p>
            </div>
          </div>
          <ul className="space-y-2 text-gray-700">
            <li>• Trained youth aged 7 to 17 on soft and hard skills like Python, AI, etc.</li>
            <li>• Conducted workshops and hands-on sessions to develop technical and life skills.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};



