"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-wide py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[var(--primary-blue)]">STRATOS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[var(--primary-blue)] font-medium transition-colors">
              Home
            </Link>
            <Link href="/cyber-security" className="text-gray-700 hover:text-[var(--primary-blue)] font-medium transition-colors">
              Cyber Security
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[var(--primary-blue)] font-medium transition-colors">
              About Us
            </Link>
            <Link href="/#contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
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
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[var(--primary-blue)] font-medium transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                href="/cyber-security" 
                className="text-gray-700 hover:text-[var(--primary-blue)] font-medium transition-colors"
                onClick={toggleMenu}
              >
                Cyber Security
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-[var(--primary-blue)] font-medium transition-colors"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link 
                href="/#contact" 
                className="btn-primary inline-block text-center"
                onClick={toggleMenu}
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