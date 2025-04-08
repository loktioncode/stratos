"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 50px
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[var(--primary-blue)] text-white shadow-lg py-3' 
        : 'bg-white text-gray-700 shadow-md py-4'
    }`}>
      <div className="container-wide">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-bold ${
              isScrolled ? 'text-white' : 'text-[var(--primary-blue)]'
            }`}>STRATOS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`font-medium transition-colors focus:font-bold focus:text-[var(--primary-blue)] ${
                isScrolled 
                  ? `text-white/90 hover:text-white focus:text-white ${isActive('/') ? 'text-white font-bold' : ''}` 
                  : `text-gray-700 hover:text-[var(--primary-blue)] ${isActive('/') ? 'text-[var(--primary-blue)] font-bold' : ''}`
              }`}
            >
              Home
            </Link>
            <Link 
              href="/cyber-security" 
              className={`font-medium transition-colors focus:font-bold focus:text-[var(--primary-blue)] ${
                isScrolled 
                  ? `text-white/90 hover:text-white focus:text-white ${isActive('/cyber-security') ? 'text-white font-bold' : ''}` 
                  : `text-gray-700 hover:text-[var(--primary-blue)] ${isActive('/cyber-security') ? 'text-[var(--primary-blue)] font-bold' : ''}`
              }`}
            >
              Cyber Security
            </Link>
            <Link 
              href="/about" 
              className={`font-medium transition-colors focus:font-bold focus:text-[var(--primary-blue)] ${
                isScrolled 
                  ? `text-white/90 hover:text-white focus:text-white ${isActive('/about') ? 'text-white font-bold' : ''}` 
                  : `text-gray-700 hover:text-[var(--primary-blue)] ${isActive('/about') ? 'text-[var(--primary-blue)] font-bold' : ''}`
              }`}
            >
              About Us
            </Link>
            <Link 
              href="/#contact" 
              className={`btn-primary font-bold ${
                isScrolled 
                  ? 'bg-white text-[var(--primary-blue)] hover:bg-gray-100 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--primary-blue)]' 
                  : 'bg-[var(--primary-blue)] text-white hover:bg-[var(--primary-dark-blue)] focus:ring-2 focus:ring-[var(--primary-blue)] focus:ring-offset-2 focus:ring-offset-white'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none ${isScrolled ? 'text-white' : 'text-gray-700'}`}
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden py-4 ${
            isScrolled ? 'bg-[var(--primary-blue)]' : 'bg-white'
          }`}>
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-700 hover:text-[var(--primary-blue)]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/cyber-security" 
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-700 hover:text-[var(--primary-blue)]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Cyber Security
              </Link>
              <Link 
                href="/about" 
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-white/90 hover:text-white' 
                    : 'text-gray-700 hover:text-[var(--primary-blue)]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/#contact" 
                className={`btn-primary inline-block text-center ${
                  isScrolled 
                    ? 'bg-white text-[var(--primary-blue)] hover:bg-gray-100' 
                    : 'bg-[var(--primary-blue)] text-white hover:bg-[var(--primary-dark-blue)]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 