import Image from 'next/image';
import Link from 'next/link';
import { FiShield, FiLock, FiEye, FiAlertTriangle, FiGlobe } from 'react-icons/fi';
import ContactForm from '@/components/ContactForm';

export default function CyberSecurity() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[var(--primary-dark-blue)] to-[var(--primary-blue)] text-white py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/cyber-pattern.svg')] opacity-10"></div>
        </div>

        <div className="container-wide relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Comprehensive Cyber Security Solutions
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Protect your organization&apos;s critical assets with our advanced cyber security services. We help you identify, prevent, and respond to cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#security-services" 
                  className="btn-primary bg-white text-[var(--primary-blue)] hover:bg-gray-100"
                >
                  Our Services
                </Link>
                <Link 
                  href="#contact" 
                  className="btn-primary border border-white hover:bg-white hover:text-[var(--primary-blue)]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/cyber-security-team.jpg"
                  alt="Cyber security specialists team"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Security Overview */}
      <section className="pt-20 pb-10">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[500px]">
              <Image
                src="/images/cyber-diverse-team.jpg"
                alt="Cyber security diverse team"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="section-title">Proactive Cyber Security for Modern Businesses</h2>
              <p className="text-gray-600 mb-6">
                In today&apos;s digital landscape, cyber threats are constantly evolving. Stratos helps organizations stay ahead of threats with comprehensive cyber security solutions designed to protect your most valuable assets.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of certified security professionals uses industry-leading methodologies and tools to assess, implement, and manage security controls that safeguard your organization from cyber threats.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-3 mt-1" />
                  <p>Advanced threat detection and prevention</p>
                </div>
                <div className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-3 mt-1" />
                  <p>Compliance with industry regulations and standards</p>
                </div>
                <div className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-3 mt-1" />
                  <p>24/7 security monitoring and incident response</p>
                </div>
                <div className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-3 mt-1" />
                  <p>Security awareness training and education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Why Choose Us Section */}
       <section className="py-20">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Why Choose Stratos for Cyber Security?</h2>
            <p className="text-lg text-gray-600">
              Our approach to cyber security combines deep technical expertise with a thorough understanding of business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center bg-[var(--primary-blue)] text-white hover:border-white hover:border transition-all">
              <div className="bg-white text-[var(--primary-blue)] p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Certified Experts</h3>
              <p>
                Our team of security professionals holds leading industry certifications and stays current with emerging threats.
              </p>
            </div>

            <div className="card text-center bg-[var(--primary-blue)] text-white hover:border-white hover:border transition-all">
              <div className="bg-white text-[var(--primary-blue)] p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Proven Methodology</h3>
              <p>
                We apply industry-standard frameworks and methodologies tailored to your specific business needs.
              </p>
            </div>

            <div className="card text-center bg-[var(--primary-blue)] text-white hover:border-white hover:border transition-all">
              <div className="bg-white text-[var(--primary-blue)] p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Rapid Response</h3>
              <p>
                Our 24/7 security operations center provides immediate response to security incidents when they occur.
              </p>
            </div>

            <div className="card text-center bg-[var(--primary-blue)] text-white hover:border-white hover:border transition-all">
              <div className="bg-white text-[var(--primary-blue)] p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Comprehensive Reporting</h3>
              <p>
                We provide detailed security reports with actionable insights to help you make informed security decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="security-services" className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Cyber Security Services</h2>
            <p className="text-lg text-gray-600">
              We offer a comprehensive range of cyber security services to protect your organization from evolving cyber threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div id="risk-assessment" className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiAlertTriangle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Security Risk Assessment</h3>
              <p className="text-gray-600 mb-6">
                Identify and evaluate potential security threats and vulnerabilities within your organization&apos;s environment.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Vulnerability scanning and assessment</span>
                </li>
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Security gap analysis</span>
                </li>
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Risk prioritization and remediation planning</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiShield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Security Strategy & Planning</h3>
              <p className="text-gray-600 mb-6">
                Develop a comprehensive security strategy aligned with your business objectives and risk tolerance.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Security roadmap development</span>
                </li>
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Security architecture design</span>
                </li>
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Security policies and procedures</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiGlobe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Security Monitoring & Response</h3>
              <p className="text-gray-600 mb-6">
                Continuous monitoring and rapid response to security incidents to minimize potential impact.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>24/7 security operations center (SOC)</span>
                </li>
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Threat detection and analysis</span>
                </li>
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Incident response and remediation</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiLock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Identity & Access Management</h3>
              <p className="text-gray-600 mb-6">
                Implement robust identity and access management solutions to control and secure access to your systems.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Identity governance and administration</span>
                </li>
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Multi-factor authentication</span>
                </li>
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Privileged access management</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiGlobe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Cloud Security</h3>
              <p className="text-gray-600 mb-6">
                Secure your cloud environments with specialized cloud security solutions and best practices.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Cloud security architecture and design</span>
                </li>
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Cloud configuration security</span>
                </li>
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Cloud data protection</span>
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiGlobe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Security Awareness Training</h3>
              <p className="text-gray-600 mb-6">
                Educate your employees about cyber security best practices to reduce human-related security risks.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Security awareness programs</span>
                </li>
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Phishing simulation exercises</span>
                </li>
                <li className="flex items-start">
                  <FiEye className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Security culture development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Secure Your Business Today</h2>
            <p className="text-lg text-gray-600">
              Contact us to learn how our cyber security services can protect your organization from evolving threats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[var(--primary-blue)] text-white p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Get Started with a Security Assessment</h3>
              <p className="mb-8">
                Our security experts are ready to help you identify and address your organization&apos;s security challenges. Contact us today to schedule a consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <FiEye className="w-5 h-5 mr-3" />
                  <p>Comprehensive security assessment</p>
                </div>
                <div className="flex items-center">
                  <FiEye className="w-5 h-5 mr-3" />
                  <p>Tailored security recommendations</p>
                </div>
                <div className="flex items-center">
                  <FiEye className="w-5 h-5 mr-3" />
                  <p>Actionable security roadmap</p>
                </div>
                <div className="flex items-center">
                  <FiEye className="w-5 h-5 mr-3" />
                  <p>Expert security guidance</p>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
} 