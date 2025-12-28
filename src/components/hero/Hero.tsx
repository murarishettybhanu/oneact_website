import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-green-700 bg-clip-text text-transparent">
                Connect Scripts with Decision Makers
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              🎬 A secure, verified marketplace for screenwriters to connect with producers and studios. Share your work with confidence.
            </p>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-3 gap-4 py-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-green-100 hover:border-green-300 transition">
              <div className="text-3xl font-bold text-green-600">1K+</div>
              <p className="text-sm text-gray-600">Writers</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-blue-100 hover:border-blue-300 transition">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <p className="text-sm text-gray-600">Producers</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-green-100 hover:border-green-300 transition">
              <div className="text-3xl font-bold text-green-600">5K+</div>
              <p className="text-sm text-gray-600">Scripts</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-200">
              📝 Get Started as Writer
            </button>
            <button className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-200">
              🎯 Producer Access
            </button>
          </div>
        </div>

        {/* Visual Illustration */}
        <div className="relative h-96 md:h-full hidden md:flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-blue-100/20 rounded-3xl blur-2xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=600&fit=crop" 
            alt="Secure Script Marketplace"
            className="relative w-full h-full object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300 border-2 border-white/20"
          />
        </div>
      </div>
    </section>
  );
};
