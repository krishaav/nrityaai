
import React from 'react';

const Founders = () => {
  const founders = [
    {
      name: "Krishaa Veeras",
      role: "Co-Founder & Technical Lead",
      bio: "With 10 years of classical dance training and a passion for AI and technology, Krishaa envisions a platform where traditional dance forms meet cutting-edge technology. Her expertise in both domains drives the technical direction of NrityaAI.",
      image: "/placeholder.svg" // Using placeholder, you can replace with actual images later
    },
    {
      name: "Jasmitha Madusu",
      role: "Co-Founder & Artistic Director",
      bio: "A dedicated dancer for over 10 years, Jasmitha brings her deep understanding of classical dance techniques and training methodologies to NrityaAI. Her vision is to preserve authentic dance forms while making learning more accessible through AI.",
      image: "/placeholder.svg" // Using placeholder, you can replace with actual images later
    }
  ];

  return (
    <section id="founders" className="tradition-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tradition-maroon">Meet Our Founders</h2>
          <div className="w-24 h-1 bg-tradition-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Passionate dancers and technology enthusiasts working to revolutionize dance education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="tradition-card overflow-hidden">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden bg-tradition-beige/60">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-tradition-gold/10"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="text-2xl font-bold text-tradition-maroon">{founder.name}</h3>
                <p className="text-tradition-gold font-medium mb-4">{founder.role}</p>
                <p className="text-gray-700">{founder.bio}</p>
                
                <div className="mt-6 pt-6 border-t border-tradition-gold/30">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">10+ years in dance</span>
                    <div className="flex space-x-4">
                      <a href="#" className="text-tradition-maroon hover:text-tradition-gold">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="#" className="text-tradition-maroon hover:text-tradition-gold">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-tradition-beige/30 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-tradition-maroon text-center">Our Story</h3>
          <p className="text-gray-700 mb-4">
            Krishaa and Jasmitha met during a classical dance performance where they discovered their shared passion for both dance and technology. Having trained in classical dance for over a decade, they recognized the challenges faced by dance students in receiving accurate, timely feedback on their techniques.
          </p>
          <p className="text-gray-700 mb-4">
            Both founders were pursuing degrees in computer science and shared a vision of how artificial intelligence could transform dance education. They saw an opportunity to combine their expertise in dance with their knowledge of AI to create a platform that would help dancers perfect their craft.
          </p>
          <p className="text-gray-700">
            NrityaAI was born from this vision - a platform that would preserve the authenticity and cultural richness of traditional dance forms while leveraging modern technology to make learning more effective and accessible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founders;
