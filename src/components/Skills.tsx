import React from 'react';

export const Skills = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold mb-4">Data Analysis</h3>
            <ul className="space-y-2">
              <li>• Excel</li>
              <li>• Power BI</li>
              <li>• Python</li>
              <li>• MySQL</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold mb-4">Web Development</h3>
            <ul className="space-y-2">
              <li>• React JS</li>
              <li>• HTML</li>
              <li>• CSS</li>
              <li>• JavaScript</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold mb-4">Soft Skills</h3>
            <ul className="space-y-2">
              <li>• Leadership</li>
              <li>• Team Management</li>
              <li>• Strategic Planning</li>
              <li>• Data Analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};