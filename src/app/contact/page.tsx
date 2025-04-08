import { FiMail, FiPhone, FiMapPin, FiClock, FiGlobe } from 'react-icons/fi';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[var(--primary-dark-blue)] to-[var(--primary-blue)] text-white py-20 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/contact-pattern.svg')] opacity-10"></div>
        </div>

        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Have a question or want to learn more about our services? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FiMail className="text-[var(--primary-blue)] w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p>info@stratos-consulting.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiPhone className="text-[var(--primary-blue)] w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMapPin className="text-[var(--primary-blue)] w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p>123 Business Street<br />Suite 100<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiClock className="text-[var(--primary-blue)] w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiGlobe className="text-[var(--primary-blue)] w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Global Presence</h3>
                    <p>Serving clients worldwide with offices in major business hubs</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 