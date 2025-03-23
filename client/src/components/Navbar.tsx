import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a className="text-xl font-heading font-bold text-primary">
                  Mongolian<span className="text-secondary">.guide</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <Link href="/">
              <a className={`px-3 py-2 text-sm font-medium ${isActive('/') ? 'text-primary' : 'text-secondary hover:text-primary'}`}>
                Home
              </a>
            </Link>
            <Link href="/destinations">
              <a className={`px-3 py-2 text-sm font-medium ${isActive('/destinations') ? 'text-primary' : 'text-secondary hover:text-primary'}`}>
                Destinations
              </a>
            </Link>
            <Link href="/how-it-works">
              <a className={`px-3 py-2 text-sm font-medium ${isActive('/how-it-works') ? 'text-primary' : 'text-secondary hover:text-primary'}`}>
                How It Works
              </a>
            </Link>
            <Link href="/about">
              <a className={`px-3 py-2 text-sm font-medium ${isActive('/about') ? 'text-primary' : 'text-secondary hover:text-primary'}`}>
                About Me
              </a>
            </Link>
            <Link href="/contact">
              <a className="px-3 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90">
                Plan Your Journey
              </a>
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary hover:bg-neutral-light"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/">
            <a 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-primary' : 'text-secondary hover:text-primary'}`}
              onClick={closeMobileMenu}
            >
              Home
            </a>
          </Link>
          <Link href="/destinations">
            <a 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/destinations') ? 'text-primary' : 'text-secondary hover:text-primary'}`}
              onClick={closeMobileMenu}
            >
              Destinations
            </a>
          </Link>
          <Link href="/how-it-works">
            <a 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/how-it-works') ? 'text-primary' : 'text-secondary hover:text-primary'}`}
              onClick={closeMobileMenu}
            >
              How It Works
            </a>
          </Link>
          <Link href="/about">
            <a 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-primary' : 'text-secondary hover:text-primary'}`}
              onClick={closeMobileMenu}
            >
              About Me
            </a>
          </Link>
          <Link href="/contact">
            <a 
              className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90"
              onClick={closeMobileMenu}
            >
              Plan Your Journey
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
