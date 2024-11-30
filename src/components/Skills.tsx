import React from 'react';

export const Skills = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-teal-600">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
            <h3 className="font-bold mb-4 text-gray-700">Data Analysis</h3>
            <ul className="space-y-2 text-left text-gray-600">
              <li>• Excel</li>
              <li>• Python</li>
              <li>• SSIS</li>
              <li>• SQL</li>
              <li>• Dashboards with Power BI</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
            <h3 className="font-bold mb-4 text-gray-700">Web Development</h3>
            <ul className="space-y-2 text-left text-gray-600">
              <li>• Frontend: React JS</li>
              <li>• Backend: Django, Python</li>
              <li>• HTML, CSS, JavaScript</li>
              <li>• REST APIs</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
            <h3 className="font-bold mb-4 text-gray-700">Soft Skills</h3>
            <ul className="space-y-2 text-left text-gray-600">
              <li>• Leadership</li>
              <li>• Team Management</li>
              <li>• Strategic Planning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

