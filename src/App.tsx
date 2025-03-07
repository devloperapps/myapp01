import React from 'react';
import { ArrowRight, Shield, Lock, Cpu, ExternalLink } from 'lucide-react';
import CryptoTicker from './components/CryptoTicker';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <CryptoTicker />
      
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 animate-gradient" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            Trezor.io/Start<sup>®</sup>
          </h1>
          <p className="text-xl mb-8 animate-slide-up">
            Your Gateway to Secure Cryptocurrency Management
          </p>
          <a
            href="#guide"
            className="inline-flex items-center px-8 py-3 bg-white text-black rounded-full hover:bg-purple-100 transition-all duration-300 animate-bounce"
          >
            Get Started <ArrowRight className="ml-2" />
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Trezor.io/Start</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Maximum Security",
                description: "Industry-leading security features protect your digital assets"
              },
              {
                icon: <Lock className="w-12 h-12" />,
                title: "Easy Setup",
                description: "Quick and intuitive device initialization process"
              },
              {
                icon: <Cpu className="w-12 h-12" />,
                title: "Advanced Features",
                description: "Access to the full suite of Trezor capabilities"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section id="guide" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Getting Started with Trezor.io/Start</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Initial Setup Process</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-purple-500 rounded-full p-1 mr-4 mt-1"></span>
                  <p>Visit Trezor.io/Start to begin your secure journey into cryptocurrency management</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-500 rounded-full p-1 mr-4 mt-1"></span>
                  <p>Connect your Trezor device to your computer using the provided USB cable</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-500 rounded-full p-1 mr-4 mt-1"></span>
                  <p>Follow the on-screen instructions to initialize your device</p>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Security Best Practices</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-purple-500 rounded-full p-1 mr-4 mt-1"></span>
                  <p>Store your recovery seed in a secure, offline location</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-500 rounded-full p-1 mr-4 mt-1"></span>
                  <p>Never share your PIN or recovery seed with anyone</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-500 rounded-full p-1 mr-4 mt-1"></span>
                  <p>Regularly update your Trezor firmware through Trezor.io/Start</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-to-t from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a
              href="https://trezor.io/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <span className="flex-1">Trezor Learning Hub</span>
              <ExternalLink className="w-6 h-6" />
            </a>
            <a
              href="https://trezor.io/support"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-white/5 rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              <span className="flex-1">Support Center</span>
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Trezor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;