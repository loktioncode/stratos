import Image from 'next/image';
import Link from 'next/link';
import { FiCheck, FiTarget, FiUsers, FiAward, FiGlobe } from 'react-icons/fi';
import ContactForm from '@/components/ContactForm';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[var(--primary-dark-blue)] to-[var(--primary-blue)] text-white py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/about-pattern.svg')] opacity-10"></div>
        </div>

        <div className="container-wide relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About Stratos
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                We are a team of experienced consultants dedicated to helping businesses achieve their full potential through strategic consultancy and cyber security services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#our-story" 
                  className="btn-primary bg-white text-[var(--primary-blue)] hover:bg-gray-100"
                >
                  Our Story
                </Link>
                <Link 
                  href="#our-team" 
                  className="btn-primary border border-white hover:bg-white hover:text-[var(--primary-blue)]"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/about-team.jpg"
                  alt="Stratos team"
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

      {/* Our Story Section */}
      <section id="our-story" className="py-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px]">
              <Image
                src="/images/about-story.jpg"
                alt="Stratos history"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Stratos began with a vision to transform how businesses approach strategic challenges and cyber security risks. What started as a small team of passionate consultants has grown into a leading consultancy firm serving clients across multiple industries.
              </p>
              <p className="text-gray-600 mb-8">
                Our journey has been marked by continuous innovation, a commitment to excellence, and a deep understanding of the evolving business landscape. Today, we are proud to be trusted advisors to organizations of all sizes, helping them navigate complex challenges and capitalize on emerging opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[var(--primary-light-blue)] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <FiTarget className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Our Mission</h3>
                    <p className="text-gray-600">To empower organizations to achieve sustainable growth through strategic guidance and robust security solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--primary-light-blue)] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <FiGlobe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Our Vision</h3>
                    <p className="text-gray-600">To be the most trusted partner for organizations seeking to thrive in an increasingly complex and digitally-driven world.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These principles guide everything we do and define how we work with our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Integrity</h3>
              <p className="text-gray-600">
                We operate with the highest ethical standards, ensuring transparency and honesty in all our interactions.
              </p>
            </div>

            <div className="card text-center hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, consistently delivering the highest quality results for our clients.
              </p>
            </div>

            <div className="card text-center hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients, fostering partnerships built on mutual respect, trust, and shared goals.
              </p>
            </div>

            <div className="card text-center hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and creative thinking to solve complex challenges and drive continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="py-20">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Our experienced leadership team brings together diverse expertise across business strategy, technology, and cyber security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="card hover:shadow-xl transition-shadow">
              <div className="relative h-80 mb-4 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/team-member-1.jpg"
                  alt="Sarah Johnson"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">Sarah Johnson</h3>
                <p className="text-[var(--primary-blue)] font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600 mb-4">
                  With over 20 years of experience in business strategy and transformation, Sarah leads our company vision and growth.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="card hover:shadow-xl transition-shadow">
              <div className="relative h-80 mb-4 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/team-member-2.jpg"
                  alt="David Chen"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">David Chen</h3>
                <p className="text-[var(--primary-blue)] font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 mb-4">
                  David brings extensive expertise in technology strategy, digital transformation, and IT infrastructure.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="card hover:shadow-xl transition-shadow">
              <div className="relative h-80 mb-4 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/team-member-3.jpg"
                  alt="Michael Rodriguez"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">Michael Rodriguez</h3>
                <p className="text-[var(--primary-blue)] font-medium mb-3">Chief Security Officer</p>
                <p className="text-gray-600 mb-4">
                  Michael leads our cyber security practice, bringing expertise in security strategy and risk management.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="card hover:shadow-xl transition-shadow">
              <div className="relative h-80 mb-4 overflow-hidden rounded-t-lg">
                <Image
                  src="/images/team-member-4.jpg"
                  alt="Lisa Patel"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">Lisa Patel</h3>
                <p className="text-[var(--primary-blue)] font-medium mb-3">Head of Consulting</p>
                <p className="text-gray-600 mb-4">
                  Lisa oversees our consulting operations, ensuring we deliver exceptional value and results to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Approach</h2>
              <p className="text-gray-600 mb-6">
                At Stratos, we take a collaborative, client-centered approach to every engagement. We believe that effective solutions come from truly understanding your business, your challenges, and your goals.
              </p>
              <p className="text-gray-600 mb-8">
                Our approach combines proven methodologies with innovative thinking to deliver tailored solutions that address your specific needs and drive tangible results.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-3 mt-1" />
                  <p><span className="font-bold">Understand:</span> We start by deeply understanding your business context, challenges, and objectives.</p>
                </div>
                <div className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-3 mt-1" />
                  <p><span className="font-bold">Analyze:</span> We analyze your current state, identify gaps, and explore opportunities for improvement.</p>
                </div>
                <div className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-3 mt-1" />
                  <p><span className="font-bold">Design:</span> We design tailored solutions that address your unique needs and align with your goals.</p>
                </div>
                <div className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-3 mt-1" />
                  <p><span className="font-bold">Implement:</span> We work alongside your team to implement solutions that drive meaningful change.</p>
                </div>
                <div className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-3 mt-1" />
                  <p><span className="font-bold">Measure & Optimize:</span> We continuously measure results and optimize solutions for maximum impact.</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px]">
              <Image
                src="/images/diverse-approach.jpg"
                alt="Our collaborative approach"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Start Your Journey With Us</h2>
            <p className="text-lg text-gray-600">
              Ready to transform your business? Get in touch to learn how Stratos can help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[var(--primary-blue)] text-white p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
              <p className="mb-8">
                Partner with Stratos and benefit from our proven track record of helping organizations overcome challenges and achieve sustainable growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-white text-[var(--primary-blue)] p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <FiUsers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Experienced Team</h4>
                    <p>Access to our team of experienced consultants with deep industry expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white text-[var(--primary-blue)] p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <FiTarget className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Tailored Solutions</h4>
                    <p>Customized approaches designed to address your specific challenges</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white text-[var(--primary-blue)] p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <FiAward className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Proven Results</h4>
                    <p>Track record of delivering measurable outcomes and sustainable results</p>
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