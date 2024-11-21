import React from 'react';

export const Education = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in-slide-up">
          <h3 className="text-xl font-bold mb-4">Higher School of Digital Economy, University of Manouba</h3>
          <p className="text-gray-600 mb-4">Master's Degree in Monitoring and Competitive Intelligence | 2024 - Current</p>
          <p className="text-gray-700">
            Specializing in competitive intelligence systems, auditing, and implementing strategies for both public and private sectors. Trained in managing information strategies and analyzing data using BI tools.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md animate-fade-in-slide-up">
          <h3 className="text-xl font-bold mb-4">Higher School of Digital Economy, University of Manouba</h3>
          <p className="text-gray-600 mb-4">Bachelor’s Degree in E-Business | 2020 - 2024</p>
          <p className="text-gray-700">
            Completed a program in Business Computing, focusing on digital transformation and managing E-Business projects. Gained advanced knowledge in IT and management, with experience in both web front and back-end development.
          </p>
        </div>
      </div>
    </div>
  );
};