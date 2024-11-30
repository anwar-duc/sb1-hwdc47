export const WhatIDo = () => {
  return (
    <section id="what-i-do" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="text-6xl text-blue-600 mb-4">
            🔍 {/* Emoji color set to blue */}
          </div>
          <h3 className="text-xl font-semibold">Data Analysis</h3>
          <p className="mt-2">
            I analyze and process data using tools like Python, SSIS, and SQL. I create dashboards and reports to help businesses make informed decisions with Power BI.
          </p>
        </div>
        
        <div className="text-center">
          <div className="text-6xl text-blue-600 mb-4">
            💻 {/* Emoji color set to blue */}
          </div>
          <h3 className="text-xl font-semibold">Web Development</h3>
          <p className="mt-2">
            I work as a front-end developer using React, and on the back-end, I build applications with Django and Python, creating dynamic, scalable websites and web apps.
          </p>
        </div>
        
        <div className="text-center">
          <div className="text-6xl text-blue-600 mb-4">
            🧑‍💼 {/* Emoji color set to blue */}
          </div>
          <h3 className="text-xl font-semibold">Consulting</h3>
          <p className="mt-2">
            I provide business and technical consulting to help companies grow by analyzing their data, improving workflows, and recommending technology solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

