
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-tradition-beige/70 to-tradition-beige/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="tradition-gradient-text">Nritya</span>
              <span className="text-tradition-maroon">AI</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-tradition-darkbrown mb-6">
              Perfecting Dance Through
              <span className="text-tradition-maroon"> Artificial Intelligence</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-lg mx-auto md:mx-0">
              Enhance your dance performance with real-time feedback and precise movement analysis. Preserving tradition while embracing technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="tradition-button bg-tradition-maroon">
                Get Started
              </button>
              <button className="tradition-button bg-white text-tradition-maroon border border-tradition-maroon">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-tradition-gold/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-tradition-terracotta/20 rounded-full animate-pulse"></div>
            <div className="relative z-10 rounded-lg bg-white/50 backdrop-blur-sm p-4 border border-tradition-gold/30 shadow-xl">
              <div className="aspect-video bg-tradition-beige rounded-lg overflow-hidden">
                <div className="h-full w-full flex items-center justify-center bg-tradition-gold/10">
                  <div className="text-center p-8">
                    <div className="text-5xl text-tradition-maroon mb-4">✨</div>
                    <h3 className="text-xl font-semibold text-tradition-darkbrown">AI-powered dance analysis</h3>
                    <p className="text-sm text-gray-600 mt-2">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="tradition-card p-6 text-center">
            <div className="text-3xl text-tradition-gold mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-tradition-darkbrown mb-2">Precision Feedback</h3>
            <p className="text-gray-600 text-sm">Get detailed analysis on your dance movements</p>
          </div>
          
          <div className="tradition-card p-6 text-center">
            <div className="text-3xl text-tradition-gold mb-3">🎭</div>
            <h3 className="text-lg font-semibold text-tradition-darkbrown mb-2">Cultural Preservation</h3>
            <p className="text-gray-600 text-sm">Ensuring classical forms are maintained with accuracy</p>
          </div>
          
          <div className="tradition-card p-6 text-center">
            <div className="text-3xl text-tradition-gold mb-3">📊</div>
            <h3 className="text-lg font-semibold text-tradition-darkbrown mb-2">Progress Tracking</h3>
            <p className="text-gray-600 text-sm">Monitor your improvement over time</p>
          </div>
          
          <div className="tradition-card p-6 text-center">
            <div className="text-3xl text-tradition-gold mb-3">🤖</div>
            <h3 className="text-lg font-semibold text-tradition-darkbrown mb-2">AI Technology</h3>
            <p className="text-gray-600 text-sm">Leveraging computer vision for movement analysis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
