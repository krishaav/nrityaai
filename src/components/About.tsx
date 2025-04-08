
import React from 'react';

const About = () => {
  return (
    <section id="about" className="tradition-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tradition-maroon">About NrityaAI</h2>
          <div className="w-24 h-1 bg-tradition-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Bridging the gap between traditional dance forms and modern technology
            to make learning more effective and accessible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="tradition-border">
                <h3 className="text-xl font-semibold mb-3 text-tradition-maroon">Our Mission</h3>
                <p className="text-gray-700">
                  To preserve and enhance the learning of classical dance forms through AI-powered movement 
                  analysis, making high-quality dance education accessible to students everywhere.
                </p>
              </div>
              
              <div className="tradition-border">
                <h3 className="text-xl font-semibold mb-3 text-tradition-maroon">Our Vision</h3>
                <p className="text-gray-700">
                  A world where technology helps preserve traditional art forms, where dancers can perfect their 
                  craft with the help of AI, and where cultural heritage is maintained for generations to come.
                </p>
              </div>
              
              <div className="tradition-border">
                <h3 className="text-xl font-semibold mb-3 text-tradition-maroon">Our Approach</h3>
                <p className="text-gray-700">
                  We combine computer vision technology with expert knowledge of traditional dance techniques to 
                  create a platform that provides accurate, real-time feedback on dance movements.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-tradition-gold/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-tradition-terracotta/20 rounded-full animate-pulse"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden border-4 border-tradition-gold/30 shadow-xl bg-white">
                <div className="aspect-square bg-tradition-beige flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-6xl mb-6">💃</div>
                    <h3 className="text-2xl font-bold text-tradition-maroon mb-3">The Power of Dance & AI</h3>
                    <p className="text-gray-700">
                      NrityaAI captures the essence of traditional dance while empowering students 
                      with modern technology for better learning outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
