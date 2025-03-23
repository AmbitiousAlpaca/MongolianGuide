import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // adjust this value based on your navbar height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      closeMobileMenu();
    }
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className={`${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <button onClick={() => scrollToSection('home')} className="text-xl font-heading font-bold text-primary hover:opacity-90 transition">
                Mongolian<span className={`${isScrolled ? 'text-secondary' : 'text-white'}`}>.guide</span>
              </button>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`px-3 py-2 text-sm font-medium ${isScrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary/90'} transition`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('destinations')}
              className={`px-3 py-2 text-sm font-medium ${isScrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary/90'} transition`}
            >
              Destinations
            </button>
            <button 
              onClick={() => scrollToSection('activities')}
              className={`px-3 py-2 text-sm font-medium ${isScrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary/90'} transition`}
            >
              Activities
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className={`px-3 py-2 text-sm font-medium ${isScrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary/90'} transition`}
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`px-3 py-2 text-sm font-medium ${isScrolled ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary/90'} transition`}
            >
              About Me
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-3 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition`}
            >
              Plan Your Journey
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-secondary hover:text-primary hover:bg-neutral-light' : 'text-white hover:text-primary/90'} transition`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button 
            onClick={() => scrollToSection('home')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('destinations')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary"
          >
            Destinations
          </button>
          <button 
            onClick={() => scrollToSection('activities')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary"
          >
            Activities
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary"
          >
            About Me
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90"
          >
            Plan Your Journey
          </button>
        </div>
      </div>
    </nav>
  );
}
