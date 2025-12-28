import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-screen opacity-20 filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen opacity-10 filter blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container-main text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          🚀 Ready to Make Your Mark?
        </h2>
        
        <p className="text-2xl text-green-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Join hundreds of writers and producers already using OneAct to safely share and discover scripts.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a 
            href="https://dashboard.oneact.com/signup?role=writer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-xl bg-white text-green-600 font-bold text-lg hover:bg-green-50 hover:shadow-2xl transform hover:scale-105 transition duration-200 inline-block"
          >
            ✍️ Get Started as Writer
          </a>
          <a 
            href="https://dashboard.oneact.com/signup?role=producer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-10 py-5 rounded-xl border-3 border-white text-white font-bold text-lg hover:bg-white/10 hover:shadow-2xl transform hover:scale-105 transition duration-200 inline-block backdrop-blur-sm"
          >
            🎬 Sign Up as Producer
          </a>
        </div>

        <p className="text-green-100 text-lg">
          💚 No credit card required • Free beta access for early users
        </p>
      </div>
    </section>
  );
};
