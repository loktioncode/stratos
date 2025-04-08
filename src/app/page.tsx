import Image from "next/image";
import Link from 'next/link';
import { FiCheck, FiBarChart2, FiTrendingUp, FiUsers, FiTarget, FiActivity, FiGrid, FiClock, FiShield, FiGlobe } from 'react-icons/fi';
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
                Leading IT Consulting Services for Your Success
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Stratos is a leading IT consulting services provider renowned for delivering tailor-made solutions to businesses of all sizes. Get 2X faster delivery and save up to 40% on cost!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#services" 
                  className="btn-primary bg-white text-[var(--primary-blue)] hover:bg-gray-100"
                >
                  Explore Services
                </Link>
                <Link 
                  href="#contact" 
                  className="btn-primary border border-white hover:bg-white hover:text-[var(--primary-blue)]"
                >
                  Start Free Trial
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

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <FiClock className="w-8 h-8 text-[var(--primary-blue)]" />
              <div>
                <h3 className="font-bold">24x7 Technical Support</h3>
                <p className="text-gray-600">Round-the-clock assistance</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <FiCheck className="w-8 h-8 text-[var(--primary-blue)]" />
              <div>
                <h3 className="font-bold">15 Days Risk-Free Trial</h3>
                <p className="text-gray-600">Try our services risk-free</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-lg">
              <FiTarget className="w-8 h-8 text-[var(--primary-blue)]" />
              <div>
                <h3 className="font-bold">On-Time Delivery</h3>
                <p className="text-gray-600">Guaranteed timely delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">PROFESSIONAL CONSULTANTS</h2>
            <p className="text-lg text-gray-600">
              Our IT consulting experts ensure your business excels in today&apos;s digital world. We optimize systems, enhance cybersecurity, and streamline IT processes for exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiBarChart2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">IT Strategy & Planning</h3>
              <p className="text-gray-600 mb-6">
                Align your IT assets with business goals through comprehensive assessment and strategic planning.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>IT governance assessment</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Strategic roadmap development</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Investment planning</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiTrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Digital Transformation</h3>
              <p className="text-gray-600 mb-6">
                Transform your business with cutting-edge digital solutions and strategies.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Customer experience enhancement</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Process automation</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Digital workflow optimization</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiShield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">IT Security & Compliance</h3>
              <p className="text-gray-600 mb-6">
                Protect your business with comprehensive security solutions and compliance measures.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Security assessments</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Compliance management</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Risk mitigation</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiUsers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">IT Staff Augmentation</h3>
              <p className="text-gray-600 mb-6">
                Access skilled IT professionals to enhance your team&apos;s capabilities.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Skilled resource allocation</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Project-based staffing</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Flexible team scaling</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiActivity className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Application Services</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive application development, modernization, and management solutions.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Custom development</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Application modernization</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Maintenance & support</span>
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="card hover:border-[var(--primary-blue)] hover:border transition-all">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiGrid className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Infrastructure Management</h3>
              <p className="text-gray-600 mb-6">
                End-to-end infrastructure solutions for optimal performance and reliability.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Cloud solutions</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>Network management</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-[var(--primary-blue)] w-5 h-5 mr-2 mt-1" />
                  <span>24/7 monitoring</span>
                </li>
              </ul>
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
                We stand as a prominent industry frontrunner in technology consulting, delivering exceptional value through our comprehensive solutions and expertise.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[var(--primary-light-blue)] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Driven to Innovate</h3>
                    <p className="text-gray-600">We constantly evolve and adapt to deliver cutting-edge solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--primary-light-blue)] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Proven Expertise</h3>
                    <p className="text-gray-600">Our team brings deep industry knowledge and technical excellence.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--primary-light-blue)] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Client Success Focus</h3>
                    <p className="text-gray-600">We measure our success through our clients&apos; achievements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--primary-light-blue)] text-white p-2 rounded-full w-10 h-10 flex items-center justify-center mr-4">
                    <FiCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Global Reach</h3>
                    <p className="text-gray-600">Supporting clients worldwide with local expertise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Support Services Section */}
      <section className="py-20 relative bg-gradient-to-r from-[var(--primary-dark-blue)] to-[var(--primary-blue)] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        </div>

        <div className="container-wide relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title text-white">Maximizing Business Efficiency</h2>
            <p className="text-lg text-white/90">
              In today&apos;s fast-paced business world, swift and responsive IT support is crucial. Our dedicated team of IT professionals understands the pivotal role of timely problem-solving in ensuring your operations run seamlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiUsers className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Tier 1 Support</h3>
              <p className="text-gray-600 mb-4">
                Your first line of defense for common IT issues, including password resets, software installations, and general troubleshooting.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiActivity className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Tier 2 Support</h3>
              <p className="text-gray-600 mb-4">
                Specialized solutions for complex technical challenges, with in-depth knowledge of your IT systems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-[var(--primary-light-blue)] text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FiShield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Tier 3 Support</h3>
              <p className="text-gray-600 mb-4">
                Advanced problem-solving for complex and critical IT issues, with collaboration from our expert team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <section className="py-20">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Comprehensive IT Solutions</h2>
            <p className="text-lg text-gray-600">
              We provide comprehensive, strategically aligned IT services to foster synergy within your business environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--primary-blue)] text-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-white text-[var(--primary-blue)] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <FiGrid className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fully Managed IT</h3>
              <p className="text-white/90">
                Enhance your business operations with our top-tier IT management services, backed by cutting-edge tools and expert guidance.
              </p>
            </div>

            <div className="bg-[var(--primary-blue)] text-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-white text-[var(--primary-blue)] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <FiShield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cybersecurity Solutions</h3>
              <p className="text-white/90">
                Protect your business from cyber threats with our comprehensive security solutions and advanced protection measures.
              </p>
            </div>

            <div className="bg-[var(--primary-blue)] text-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-white text-[var(--primary-blue)] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <FiGlobe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Cloud Services</h3>
              <p className="text-white/90">
                Leverage the power of cloud computing with our migration, management, and optimization services.
              </p>
            </div>

            <div className="bg-[var(--primary-blue)] text-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-white text-[var(--primary-blue)] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <FiClock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Remote IT Support</h3>
              <p className="text-white/90">
                Get instant support anywhere with our remote IT assistance, ensuring quick resolution of technology issues.
              </p>
            </div>

            <div className="bg-[var(--primary-blue)] text-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-white text-[var(--primary-blue)] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <FiTarget className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">IT Strategy & Planning</h3>
              <p className="text-white/90">
                Build a strong technology foundation with comprehensive IT strategies aligned with your business goals.
              </p>
            </div>

            <div className="bg-[var(--primary-blue)] text-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-white text-[var(--primary-blue)] p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <FiCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Business Continuity</h3>
              <p className="text-white/90">
                Prepare your business for any disruption with our comprehensive continuity planning services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Commented out for now
      <section className="py-20 bg-gray-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Technologies We Excel In</h2>
            <p className="text-lg text-gray-600">
              We leverage cutting-edge technologies and tools to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/tech-logos/aws.svg"
                alt="AWS"
                width={80}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <span className="text-sm font-medium text-gray-700">AWS</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/tech-logos/azure.svg"
                alt="Azure"
                width={80}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <span className="text-sm font-medium text-gray-700">Azure</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/tech-logos/kubernetes.svg"
                alt="Kubernetes"
                width={80}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <span className="text-sm font-medium text-gray-700">Kubernetes</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/tech-logos/docker.svg"
                alt="Docker"
                width={80}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <span className="text-sm font-medium text-gray-700">Docker</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/tech-logos/react.svg"
                alt="React"
                width={80}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <span className="text-sm font-medium text-gray-700">React</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/tech-logos/nodejs.svg"
                alt="Node.js"
                width={80}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <span className="text-sm font-medium text-gray-700">Node.js</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Cyber Security Tools</h2>
            <p className="text-lg text-gray-600">
              Our security experts utilize industry-leading tools to protect your digital assets.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/tech-logos/nessus.svg"
                alt="Nessus"
                width={80}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <span className="text-sm font-medium text-gray-700">Nessus</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/tech-logos/metasploit.svg"
                alt="Metasploit"
                width={80}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <span className="text-sm font-medium text-gray-700">Metasploit</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/tech-logos/wireshark.svg"
                alt="Wireshark"
                width={80}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <span className="text-sm font-medium text-gray-700">Wireshark</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/tech-logos/burp.svg"
                alt="Burp Suite"
                width={80}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <span className="text-sm font-medium text-gray-700">Burp Suite</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/tech-logos/nmap.svg"
                alt="Nmap"
                width={80}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <span className="text-sm font-medium text-gray-700">Nmap</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="/images/tech-logos/splunk.svg"
                alt="Splunk"
                width={80}
                height={80}
                className="h-12 w-auto mb-4"
              />
              <span className="text-sm font-medium text-gray-700">Splunk</span>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Start Your Digital Journey</h2>
            <p className="text-lg text-gray-600">
              Ready to transform your business? Get in touch for a free consultation and discover how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[var(--primary-blue)] text-white p-10 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Why Partner With Us?</h3>
              <p className="mb-8">
                Experience the difference of working with a leading IT consulting partner committed to your success.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <FiCheck className="w-5 h-5 mr-3" />
                  <p>Certified IT consultants</p>
                </div>
                <div className="flex items-center">
                  <FiCheck className="w-5 h-5 mr-3" />
                  <p>Flexible engagement models</p>
                </div>
                <div className="flex items-center">
                  <FiCheck className="w-5 h-5 mr-3" />
                  <p>Transparent communication</p>
                </div>
                <div className="flex items-center">
                  <FiCheck className="w-5 h-5 mr-3" />
                  <p>Guaranteed satisfaction</p>
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
