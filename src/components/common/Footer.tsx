import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-600 rounded-full mix-blend-screen opacity-5 filter blur-3xl"></div>
      
      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-2 flex items-center gap-2">🎬 OneAct</h3>
            <p className="text-sm text-gray-400">Secure marketplace for writers and producers</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition">📱</a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition">🐦</a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition">💼</a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">✨ Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-green-400 transition duration-200">Features</a></li>
              <li><a href="#security" className="hover:text-green-400 transition duration-200">Security</a></li>
              <li><a href="#pricing" className="hover:text-green-400 transition duration-200">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">🚀 Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-green-400 transition duration-200">About</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition duration-200">Contact</a></li>
              <li><a href="#" className="hover:text-green-400 transition duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 flex items-center gap-2">⚖️ Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#privacy" className="hover:text-green-400 transition duration-200">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-green-400 transition duration-200">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-400 transition duration-200">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">&copy; {currentYear} OneAct. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
