import Image from "next/image";
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiBarChart2, FiTrendingUp, FiUsers, FiTarget, FiActivity, FiGrid } from 'react-icons/fi';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[var(--primary-dark-blue)] to-[var(--primary-blue)] text-white py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        </div>

        <div className="container-wide relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Strategic Business Solutions For Your Success
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Stratos provides expert business consultancy services to transform your organization and drive exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/#services" 
                  className="btn-primary bg-white text-[var(--primary-blue)] hover:bg-gray-100"
                >
                  Our Services
                </Link>
                <Link 
                  href="/#contact" 
                  className="btn-primary border border-white hover:bg-white hover:text-[var(--primary-blue)]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/diverse-business-team.jpg"
                  alt="Diverse business team"
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

      {/* Services Overview Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Business Consultancy Services</h2>
            <p className="text-lg text-gray-600">
              We offer comprehensive business consultancy services to help your organization navigate challenges and achieve sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div id="strategic-consulting" className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiBarChart2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Strategic Consulting</h3>
              <p className="text-gray-600 mb-6">
                We help organizations develop robust strategies aligned with their vision and objectives, providing a clear roadmap for future growth.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Market analysis and competitive positioning</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Strategic planning and roadmap development</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Performance measurement and KPI frameworks</span>
                </li>
              </ul>
              <Link href="/about" className="inline-flex items-center text-[var(--primary-blue)] font-medium hover:underline">
                Learn More <FiArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Service 2 */}
            <div id="business-transformation" className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiTrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Business Transformation</h3>
              <p className="text-gray-600 mb-6">
                We guide organizations through complex change initiatives, ensuring smooth transitions and sustainable business transformation.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Digital transformation strategies</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Process optimization and efficiency</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Change management and organizational alignment</span>
                </li>
              </ul>
              <Link href="/about" className="inline-flex items-center text-[var(--primary-blue)] font-medium hover:underline">
                Learn More <FiArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiUsers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Operational Excellence</h3>
              <p className="text-gray-600 mb-6">
                We enhance operational efficiency and effectiveness to drive performance improvements and competitive advantage.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Process mapping and optimization</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Cost reduction and efficiency improvements</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Performance management systems</span>
                </li>
              </ul>
              <Link href="/about" className="inline-flex items-center text-[var(--primary-blue)] font-medium hover:underline">
                Learn More <FiArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Service 4 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiTarget className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Technology Strategy</h3>
              <p className="text-gray-600 mb-6">
                We help organizations leverage emerging technologies to drive innovation and gain competitive advantage.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Technology roadmap development</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Digital strategy and transformation</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>IT architecture and systems integration</span>
                </li>
              </ul>
              <Link href="/about" className="inline-flex items-center text-[var(--primary-blue)] font-medium hover:underline">
                Learn More <FiArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Service 5 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiActivity className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Financial Advisory</h3>
              <p className="text-gray-600 mb-6">
                We provide financial insights and strategies to optimize financial performance and support strategic decision-making.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Financial analysis and modeling</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Cost optimization strategies</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Investment and funding strategies</span>
                </li>
              </ul>
              <Link href="/about" className="inline-flex items-center text-[var(--primary-blue)] font-medium hover:underline">
                Learn More <FiArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Service 6 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiGrid className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Cyber Security</h3>
              <p className="text-gray-600 mb-6">
                We help organizations protect their critical assets and information through comprehensive cyber security solutions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Security assessments and risk management</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Security strategy and roadmap development</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Security awareness and training programs</span>
                </li>
              </ul>
              <Link href="/cyber-security" className="inline-flex items-center text-[var(--primary-blue)] font-medium hover:underline">
                Learn More <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/images/diverse-meeting.jpg"
                alt="Diverse business meeting"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="section-title">Why Choose Stratos?</h2>
              <p className="text-gray-600 mb-8">
                With years of industry experience and a team of seasoned consultants, we deliver exceptional results for our clients across various sectors.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[var(--primary-light-blue)] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our consultants bring decades of experience across multiple industries and disciplines.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--primary-light-blue)] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Tailored Approach</h3>
                    <p className="text-gray-600">We develop customized solutions that address your unique challenges and opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--primary-light-blue)] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Proven Results</h3>
                    <p className="text-gray-600">Our track record speaks for itself, with measurable outcomes and satisfied clients.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--primary-light-blue)] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Holistic Perspective</h3>
                    <p className="text-gray-600">We consider all aspects of your business to deliver integrated, sustainable solutions.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Ready to transform your business? Contact us today to discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[var(--primary-blue)] text-white p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8">
                Our team of consultants is ready to help you. Reach out to us using the contact form or the information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Address</h4>
                    <p>123 Business Avenue, Suite 500<br />London, UK EC1A 1BB</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Phone</h4>
                    <p>+44 20 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <p>info@stratos.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Office Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 5:30 PM</p>
                  </div>
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
