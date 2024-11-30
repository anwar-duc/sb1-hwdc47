export const WhatIDo = () => {
  return (
    <section id="what-i-do" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-6xl text-blue-600 mb-4">
            🔍 {/* Make this emoji blue */}
          </div>
          <h3 className="text-xl font-semibold">Data Analysis</h3>
          <p className="mt-2">I analyze data to help businesses make informed decisions.</p>
        </div>
        
        <div className="text-center">
          <div className="text-6xl text-blue-600 mb-4">
            💻 {/* Make this emoji blue */}
          </div>
          <h3 className="text-xl font-semibold">Web Development</h3>
          <p className="mt-2">I build websites and web apps that are fast and responsive.</p>
        </div>
        
        <div className="text-center">
          <div className="text-6xl text-blue-600 mb-4">
            🧑‍💼 {/* Make this emoji blue */}
          </div>
          <h3 className="text-xl font-semibold">Consulting</h3>
          <p className="mt-2">I provide business and technical consulting to help companies grow.</p>
        </div>
      </div>
    </section>
  );
};
