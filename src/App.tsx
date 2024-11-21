import React from 'react';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatIDo } from './components/WhatIDo';  // Import WhatIDo component

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <WhatIDo />  {/* Add WhatIDo component here */}
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
