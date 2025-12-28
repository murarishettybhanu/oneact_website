import React from 'react';

const features = [
  {
    icon: '🔒',
    color: 'from-red-500 to-red-600',
    title: 'Secure Storage',
    description: 'Scripts stored in private AWS S3 with encrypted access and zero public exposure',
  },
  {
    icon: '📄',
    color: 'from-blue-500 to-blue-600',
    title: 'Dynamic Watermarking',
    description: 'Every page watermarked with viewer name, email, timestamp, and script ID for tracking',
  },
  {
    icon: '✍️',
    color: 'from-purple-500 to-purple-600',
    title: 'Legal Clarity',
    description: 'NDA enforcement, timestamped submission records, and secure disclosure as IP evidence',
  },
  {
    icon: '👁️',
    color: 'from-yellow-500 to-yellow-600',
    title: 'Secure Viewer',
    description: 'Read-only PDF viewer with no copy, paste, download, or right-click allowed',
  },
  {
    icon: '📊',
    color: 'from-green-500 to-green-600',
    title: 'Access Logs',
    description: 'Complete audit trail of every view, unlock, and interaction with your script',
  },
  {
    icon: '🎬',
    color: 'from-indigo-500 to-indigo-600',
    title: 'Smart Discovery',
    description: 'Filter scripts by genre, budget, language, and format for perfect matches',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-main">
        <div className="text-center mb-16">
          <h2 className="section-title">✨ Why OneAct?</h2>
          <p className="section-subtitle">Everything you need to safely pitch and discover scripts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white rounded-xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition duration-300 overflow-hidden hover:-translate-y-1">
              {/* Gradient background overlay */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-full transition duration-300 -mr-12 -mt-12`}></div>
              
              <div className={`bg-gradient-to-br ${feature.color} text-white w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:shadow-lg transform group-hover:scale-110 transition duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
