
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-tradition-gold/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2">
              <div className="text-tradition-maroon text-2xl font-bold">Nritya<span className="text-tradition-gold">AI</span></div>
            </a>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <a href="#home" className="px-3 py-2 text-tradition-darkbrown hover:text-tradition-gold transition-colors">Home</a>
            <a href="#about" className="px-3 py-2 text-tradition-darkbrown hover:text-tradition-gold transition-colors">About</a>
            <a href="#features" className="px-3 py-2 text-tradition-darkbrown hover:text-tradition-gold transition-colors">Features</a>
            <a href="#founders" className="px-3 py-2 text-tradition-darkbrown hover:text-tradition-gold transition-colors">Founders</a>
            <a href="#contact" className="px-3 py-2 text-tradition-darkbrown hover:text-tradition-gold transition-colors">Contact</a>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button 
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-tradition-maroon hover:text-tradition-gold focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={cn("sm:hidden", isOpen ? "block" : "hidden")}>
        <div className="pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <a href="#home" className="block px-3 py-2 text-tradition-darkbrown hover:bg-tradition-beige hover:text-tradition-gold transition-colors" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="block px-3 py-2 text-tradition-darkbrown hover:bg-tradition-beige hover:text-tradition-gold transition-colors" onClick={() => setIsOpen(false)}>About</a>
          <a href="#features" className="block px-3 py-2 text-tradition-darkbrown hover:bg-tradition-beige hover:text-tradition-gold transition-colors" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#founders" className="block px-3 py-2 text-tradition-darkbrown hover:bg-tradition-beige hover:text-tradition-gold transition-colors" onClick={() => setIsOpen(false)}>Founders</a>
          <a href="#contact" className="block px-3 py-2 text-tradition-darkbrown hover:bg-tradition-beige hover:text-tradition-gold transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
