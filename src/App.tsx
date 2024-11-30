import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatIDo } from './components/WhatIDo';
import { Education } from './components/Education';  // Import Education component

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // This effect runs on component mount and checks for the saved dark mode preference
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setIsDarkMode(savedDarkMode);
  }, []);

  // Handle dark mode toggle
  const handleDarkModeToggle = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);

    if (newDarkModeState) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'disabled');
    }
  };

  return (
    <div className="min-h-screen">
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

