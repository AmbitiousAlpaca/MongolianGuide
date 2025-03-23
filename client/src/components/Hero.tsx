import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'wouter';

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1513415277900-a62401e19be4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Mongolian landscape with traditional yurt"
  },
  {
    src: "https://images.unsplash.com/photo-1550805720-184ac3b959c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Mongolian horses running in the steppe"
  },
  {
    src: "https://images.unsplash.com/photo-1609932944753-cf351e9e6874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Scenic mountain landscape in Mongolia"
  },
  {
    src: "https://images.unsplash.com/photo-1531256491055-7d7c51789cc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    alt: "Traditional Mongolian nomadic lifestyle"
  },
  {
    src: "https://images.unsplash.com/photo-1499678465838-2c6215ca1e46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Eagle hunter in Mongolian mountains"
  }
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const resetSlideInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = setInterval(() => {
      // Start fade out
      setFadingOut(true);
      
      // After fade out completes, change image and fade in
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setFadingOut(false);
      }, 1000); // 1 second transition time
    }, 5000); // Change image every 5 seconds
  }, []);
  
  const goToSlide = useCallback((index: number) => {
    if (index === currentImageIndex) return;
    
    setFadingOut(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setFadingOut(false);
    }, 1000);
    
    resetSlideInterval();
  }, [currentImageIndex, resetSlideInterval]);
  
  useEffect(() => {
    resetSlideInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetSlideInterval]);
  
  return (
    <section id="home" className="relative bg-secondary min-h-[80vh] flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={heroImages[currentImageIndex].src}
          alt={heroImages[currentImageIndex].alt}
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${fadingOut ? 'opacity-0' : 'opacity-70'}`}
        />
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={() => goToSlide((currentImageIndex - 1 + heroImages.length) % heroImages.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/50 transition"
        aria-label="Previous image"
      >
        ←
      </button>
      <button 
        onClick={() => goToSlide((currentImageIndex + 1) % heroImages.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/50 transition"
        aria-label="Next image"
      >
        →
      </button>
      
      {/* Indicator dots */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
