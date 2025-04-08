
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold tradition-gradient-text">
                NrityaAI
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-foreground hover:border-tradition-gold transition-colors">
                Home
              </Link>
              <Link to="/dashboard" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-foreground hover:border-tradition-gold transition-colors">
                Dashboard
              </Link>
              <Link to="/practice" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-foreground hover:border-tradition-gold transition-colors">
                Practice
              </Link>
              <Link to="/feedback" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-foreground hover:border-tradition-gold transition-colors">
                Feedback
              </Link>
              <a href="#about" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-foreground hover:border-tradition-gold transition-colors">
                About
              </a>
              <a href="#contact" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-foreground hover:border-tradition-gold transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="px-4 py-2 rounded-md bg-tradition-maroon text-white font-medium hover:bg-tradition-maroon/90 transition-colors">
              Sign In
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tradition-gold"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block pl-3 pr-4 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/dashboard" className="block pl-3 pr-4 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link to="/practice" className="block pl-3 pr-4 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-foreground transition-colors">
              Practice
            </Link>
            <Link to="/feedback" className="block pl-3 pr-4 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-foreground transition-colors">
              Feedback
            </Link>
            <a href="#about" className="block pl-3 pr-4 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="block pl-3 pr-4 py-2 text-base font-medium text-foreground hover:bg-muted hover:text-foreground transition-colors">
              Contact
            </a>
            <div className="mt-4 pl-3 pr-4">
              <button className="w-full px-4 py-2 rounded-md bg-tradition-maroon text-white font-medium hover:bg-tradition-maroon/90 transition-colors">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
