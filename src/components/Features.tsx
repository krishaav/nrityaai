
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "✓",
      title: "Real-time Feedback",
      description: "Get instant feedback on your dance movements and postures as you perform."
    },
    {
      icon: "✓",
      title: "Movement Comparison",
      description: "Compare your movements with those of expert dancers to identify areas for improvement."
    },
    {
      icon: "✓",
      title: "Progress Tracking",
      description: "Track your progress over time with detailed analytics and performance metrics."
    },
    {
      icon: "✓",
      title: "Personalized Suggestions",
      description: "Receive customized suggestions for improving specific aspects of your dance."
    },
    {
      icon: "✓",
      title: "Video Library",
      description: "Access a comprehensive library of dance movements and techniques."
    },
    {
      icon: "✓",
      title: "Cultural Context",
      description: "Learn about the cultural and historical context of traditional dance forms."
    }
  ];

  return (
    <section id="features" className="tradition-section bg-tradition-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tradition-maroon">Features & Capabilities</h2>
          <div className="w-24 h-1 bg-tradition-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our AI-powered platform offers a range of features designed to enhance your dance learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="tradition-card hover:translate-y-[-5px] transition-transform duration-300">
              <div className="p-6">
                <div className="w-12 h-12 bg-tradition-gold/20 rounded-full flex items-center justify-center text-tradition-maroon text-xl font-bold mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-tradition-darkbrown">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 text-tradition-maroon">Coming Soon</h3>
          <div className="bg-white/70 backdrop-blur-sm border border-tradition-gold/30 rounded-lg p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-3 text-tradition-darkbrown">AI Movement Detection</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-tradition-gold mr-2">•</span>
                    <span>Body posture analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tradition-gold mr-2">•</span>
                    <span>Gesture recognition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tradition-gold mr-2">•</span>
                    <span>Rhythm matching</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-left">
                <h4 className="text-xl font-semibold mb-3 text-tradition-darkbrown">Learning Platform</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-tradition-gold mr-2">•</span>
                    <span>Virtual classroom</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tradition-gold mr-2">•</span>
                    <span>Dance curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-tradition-gold mr-2">•</span>
                    <span>Expert guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
