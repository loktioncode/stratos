"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const services = [
  { name: 'Strategic Consulting', href: '/#services' },
  { name: 'Business Transformation', href: '/#services' },
  { name: 'Cyber Security Services', href: '/cyber-security#security-services' },
  { name: 'Security Assessment', href: '/cyber-security#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-[var(--primary-blue)] text-white shadow-lg py-3'
      : 'bg-white text-gray-700 shadow-md py-4'
      }`}>
      <div className="container-wide">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Stratos Digital Logo"
              width={80}
              height={100}
              className="object-contain"
            />
            <span className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-[var(--primary-blue)]'
              }`}>STRATOS DIGITAL</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors focus:font-bold focus:text-[var(--primary-blue)] ${isScrolled
                ? `text-white/90 hover:text-white focus:text-white ${isActive('/') ? 'text-white font-bold' : ''}`
                : `text-gray-700 hover:text-[var(--primary-blue)] ${isActive('/') ? 'text-[var(--primary-blue)] font-bold' : ''}`
                }`}
            >
              Home
            </Link>
            <Link
              href="/cyber-security"
              className={`font-medium transition-colors focus:font-bold focus:text-[var(--primary-blue)] ${isScrolled
                ? `text-white/90 hover:text-white focus:text-white ${isActive('/cyber-security') ? 'text-white font-bold' : ''}`
                : `text-gray-700 hover:text-[var(--primary-blue)] ${isActive('/cyber-security') ? 'text-[var(--primary-blue)] font-bold' : ''}`
                }`}
            >
              Cyber Security
            </Link>

            {/* Our Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onBlur={() => setTimeout(() => setIsServicesOpen(false), 200)}
                className={`flex items-center gap-1 font-medium transition-colors focus:outline-none ${isScrolled
                  ? `text-white/90 hover:text-white ${isServicesOpen ? 'text-white' : ''}`
                  : `text-gray-700 hover:text-[var(--primary-blue)] ${isServicesOpen ? 'text-[var(--primary-blue)]' : ''}`
                  }`}
              >
                Our Services
                <FiChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : 'group-hover:rotate-180'}`} />
              </button>

              <div className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-xl transition-all duration-300 z-50 border border-gray-100 ${isServicesOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
                }`}>
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--primary-blue)] transition-colors border-b border-gray-50 last:border-0"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className={`font-medium transition-colors focus:font-bold focus:text-[var(--primary-blue)] ${isScrolled
                ? `text-white/90 hover:text-white focus:text-white ${isActive('/about') ? 'text-white font-bold' : ''}`
                : `text-gray-700 hover:text-[var(--primary-blue)] ${isActive('/about') ? 'text-[var(--primary-blue)] font-bold' : ''}`
                }`}
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className={`btn-primary font-bold ${isScrolled
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
          <div className={`md:hidden py-4 ${isScrolled ? 'bg-[var(--primary-blue)]' : 'bg-white'
            }`}>
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`font-medium transition-colors ${isScrolled
                  ? 'text-white/90 hover:text-white'
                  : 'text-gray-700 hover:text-[var(--primary-blue)]'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/cyber-security"
                className={`font-medium transition-colors ${isScrolled
                  ? 'text-white/90 hover:text-white'
                  : 'text-gray-700 hover:text-[var(--primary-blue)]'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Cyber Security
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex justify-between items-center font-medium transition-colors ${isScrolled
                    ? 'text-white/90 hover:text-white'
                    : 'text-gray-700 hover:text-[var(--primary-blue)]'
                    }`}
                >
                  Our Services
                  {isServicesOpen ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                {isServicesOpen && (
                  <div className={`mt-2 ml-4 flex flex-col space-y-3 border-l-2 pl-4 ${isScrolled ? 'border-white/20' : 'border-gray-200'
                    }`}>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className={`text-sm transition-colors ${isScrolled
                          ? 'text-white/80 hover:text-white'
                          : 'text-gray-600 hover:text-[var(--primary-blue)]'
                          }`}
                        onClick={() => {
                          setIsOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className={`font-medium transition-colors ${isScrolled
                  ? 'text-white/90 hover:text-white'
                  : 'text-gray-700 hover:text-[var(--primary-blue)]'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="https://calendly.com/"
                target="_blank"
                className={`btn-primary inline-block text-center ${isScrolled
                  ? 'bg-white text-[var(--primary-blue)] hover:bg-gray-100'
                  : 'bg-[var(--primary-blue)] text-white hover:bg-[var(--primary-dark-blue)]'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 