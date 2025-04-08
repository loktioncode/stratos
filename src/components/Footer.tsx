import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[var(--primary-dark-blue)] text-white pt-12 pb-6">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">STRATOS</h3>
            <p className="mb-4">Providing expert business consultancy and cyber security services to help organizations navigate the complexities of modern business.</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-light-blue)] transition-colors">
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-light-blue)] transition-colors">
                <FiTwitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-light-blue)] transition-colors">
                <FiFacebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-light-blue)] transition-colors">
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[var(--primary-light-blue)] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/cyber-security" className="hover:text-[var(--primary-light-blue)] transition-colors">Cyber Security</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--primary-light-blue)] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[var(--primary-light-blue)] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[var(--primary-light-blue)] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#strategic-consulting" className="hover:text-[var(--primary-light-blue)] transition-colors">Strategic Consulting</Link>
              </li>
              <li>
                <Link href="/#business-transformation" className="hover:text-[var(--primary-light-blue)] transition-colors">Business Transformation</Link>
              </li>
              <li>
                <Link href="/cyber-security#risk-assessment" className="hover:text-[var(--primary-light-blue)] transition-colors">Cyber Risk Assessment</Link>
              </li>
              <li>
                <Link href="/cyber-security#security-solutions" className="hover:text-[var(--primary-light-blue)] transition-colors">Security Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="w-5 h-5 mr-2 mt-1" />
                <span>123 Business Avenue, Suite 500<br />London, UK EC1A 1BB</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="w-5 h-5 mr-2" />
                <span>+44 20 1234 5678</span>
              </li>
              <li className="flex items-center">
                <FiMail className="w-5 h-5 mr-2" />
                <span>info@stratos.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Stratos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 