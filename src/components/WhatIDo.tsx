import React from 'react';

export const WhatIDo = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold mb-4">Business Intelligence</h3>
          <p>Transforming raw data into actionable insights to support decision-making.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold mb-4">Web Development</h3>
          <p>Building responsive, interactive web apps with modern frameworks.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold mb-4">Leadership</h3>
          <p>Guiding teams and fostering collaboration to achieve collective goals.</p>
        </div>
      </div>
    </div>
  );
};

