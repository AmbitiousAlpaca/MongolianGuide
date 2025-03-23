import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  // Function to smoothly scroll to a section when clicked
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl font-heading font-bold text-white mb-4 inline-block hover:text-accent transition-colors"
            >
              Mongolian<span className="text-accent">.guide</span>
            </button>
            <p className="mb-6 text-white/80">Tailor-made tours for adventurous travelers seeking authentic Mongolian experiences with comfortable accommodations.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.136.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.208 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.136.882.3 1.857.344 1.055.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.208 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.136-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.208-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm6.82 6.12c.022.165.032.331.032.5 0 5.12-3.902 11.03-11.032 11.03-2.193 0-4.228-.642-5.945-1.744.304.036.611.054.92.054 1.81 0 3.475-.618 4.798-1.655-1.69-.032-3.114-1.147-3.604-2.681.236.045.48.07.732.07.354 0 .697-.046 1.023-.136-1.766-.355-3.096-1.915-3.096-3.783v-.048c.52.289 1.115.463 1.748.484-1.036-.693-1.717-1.874-1.717-3.214 0-.708.19-1.37.522-1.942 1.897 2.332 4.739 3.865 7.944 4.026-.066-.283-.1-.578-.1-.88 0-2.13 1.728-3.857 3.859-3.857 1.11 0 2.113.47 2.816 1.22.878-.172 1.704-.493 2.45-.935-.288.9-.898 1.655-1.693 2.13.78-.094 1.525-.303 2.217-.615-.517.772-1.17 1.45-1.923 1.992z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('destinations')}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('activities')}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Activities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex">
                <span className="text-accent mr-2">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="text-white/80">info@mongolian.guide</span>
              </li>
              <li className="flex">
                <span className="text-accent mr-2">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="text-white/80">+976 9911 2233</span>
              </li>
              <li className="flex">
                <span className="text-accent mr-2">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="text-white/80">Ulaanbaatar, Mongolia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Mongolian.guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
