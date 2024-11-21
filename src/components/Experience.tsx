import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Experience = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: 'Institut El Amouri',
            role: 'Field Supervisor / Banking Control | 2021 - 2022',
            points: [
              'Independent supervision of banking operations to ensure compliance and efficiency',
              'Managed team conducting street surveys for precise data collection',
            ],
          },
          {
            title: 'ISIE',
            role: 'Administrative Team Lead & Data Analyst | 2023',
            points: [
              'Led 3-person team in administrative strategy and task management',
              'Developed Power BI dashboards to streamline operations',
            ],
          },
        ].map((experience, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            variants={cardVariants}
          >
            <h3 className="text-xl font-bold mb-4">{experience.title}</h3>
            <p className="text-gray-600 mb-4">{experience.role}</p>
            <ul className="space-y-2 text-gray-700">
              {experience.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
