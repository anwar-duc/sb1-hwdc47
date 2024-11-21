import React from 'react';

export const Experience = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in-slide-up">
          <h3 className="text-xl font-bold mb-4">Institut El Amouri</h3>
          <p className="text-gray-600 mb-4">Field Supervisor / Banking Control | 2021 - 2022</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Independent supervision of banking operations to ensure compliance and efficiency</li>
            <li>• Managed team conducting street surveys for precise data collection</li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in-slide-up">
          <h3 className="text-xl font-bold mb-4">ISIE</h3>
          <p className="text-gray-600 mb-4">Administrative Team Lead & Data Analyst | 2023</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Led 3-person team in administrative strategy and task management</li>
            <li>• Developed Power BI dashboards to streamline operations</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in-slide-up">
          <h3 className="text-xl font-bold mb-4">DecliTech</h3>
          <p className="text-gray-600 mb-4">Trainer (Hard/Soft Skills) | 2024</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Trained young learners (ages 7 to 17) in developing both soft skills and technical skills like Python and AI</li>
            <li>• Designed and delivered interactive lessons that enhanced communication, problem-solving, and technical proficiency</li>
            <li>• Mentored students to prepare them for future careers in technology through hands-on learning experiences</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

