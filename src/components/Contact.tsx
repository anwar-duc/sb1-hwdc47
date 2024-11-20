import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
      <div className="max-w-2xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <a href="mailto:adem.bouteraa@esen.tn" className="flex items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <Mail className="w-6 h-6 mr-3 text-blue-600" />
            <span>adem.bouteraa@esen.tn</span>
          </a>
          
          <a href="tel:+21652406466" className="flex items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <Phone className="w-6 h-6 mr-3 text-blue-600" />
            <span>+216 52406466</span>
          </a>
        </div>
      </div>
    </div>
  );
};