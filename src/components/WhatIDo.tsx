import React from 'react';

export const WhatIDo = () => {
  return (
    <div className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold mb-12">What I Do</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <i className="fas fa-database text-4xl text-blue-600 mb-4 mx-auto"></i>
          <h3 className="font-semibold mb-4">ETL & Data Cleaning</h3>
          <p className="text-gray-600">I work on ETL processes, cleaning and transforming data using tools like SSIS, Python, and SQL to ensure data quality and consistency.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <i className="fas fa-database text-4xl text-orange-600 mb-4 mx-auto"></i>
          <h3 className="font-semibold mb-4">Data Analysis</h3>
          <p className="text-gray-600">Analyzing data to derive actionable insights using tools like Excel, Python, and Power BI.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <i className="fas fa-chart-line text-4xl text-green-600 mb-4 mx-auto"></i>
          <h3 className="font-semibold mb-4">Business Intelligence</h3>
          <p className="text-gray-600">Utilizing BI tools to create reports and dashboards that help organizations make informed decisions.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
          <i className="fas fa-code text-4xl text-purple-600 mb-4 mx-auto"></i>
          <h3 className="font-semibold mb-4">Software Development</h3>
          <p className="text-gray-600">Writing clean, efficient code for web applications and APIs, ensuring a smooth user experience.</p>
        </div>
      </div>
    </div>
  );
};

