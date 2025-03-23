import React from 'react';
import { Link } from 'wouter';

export default function Hero() {
  return (
    <section id="home" className="relative bg-secondary min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Mongolian landscape with traditional yurt" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Experience Mongolia Your Way</h1>
          <p className="text-lg md:text-xl mb-8">Tailor-made tours for adventurous travelers who seek authentic experiences with comfortable accommodations.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/destinations">
              <a className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition duration-300">
                Explore Destinations
              </a>
            </Link>
            <Link href="/how-it-works">
              <a className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/30 transition duration-300">
                How It Works
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
