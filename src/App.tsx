export default App;
import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatIDo } from './components/WhatIDo';
import { Education } from './components/Education';  // Import Education component
import { toggleDarkMode, loadDarkModePreference, saveDarkModePreference } from './darkModeToggle'; // Import dark mode functions

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load the saved dark mode preference
    loadDarkModePreference();
    setIsDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const handleDarkModeToggle = () => {
    toggleDarkMode();
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    saveDarkModePreference(newDarkModeState);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      {/* Dark Mode Toggle Button */}
      <header className="absolute top-6 right-6 z-10">
        <button
          onClick={handleDarkModeToggle}
          className="bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition-all"
        >
          Toggle Dark Mode
        </button>
      </header>
      
      {/* Page Components */}
      <Hero />
      <WhatIDo />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

