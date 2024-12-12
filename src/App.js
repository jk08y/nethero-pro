import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronRight } from 'lucide-react';

// Custom Button Component
const Button = ({ children, variant = 'primary', className = '', size = 'md', ...props }) => {
  const baseStyles = "font-medium transition-all duration-300 flex items-center justify-center";
  const variants = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-200/50",
    outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50",
    ghost: "hover:bg-gray-100"
  };
  const sizes = {
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    icon: "p-2"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Custom Card Component
const Card = ({ children, className = '' }) => (
  <div className={`bg-white/70 backdrop-blur-sm rounded-xl shadow-xl p-6 ${className}`}>
    {children}
  </div>
);

// Navigation Link Component
const NavLink = ({ href, children, isActive }) => (
  <a
    href={href}
    className={`
      ${isActive ? 'text-emerald-600 font-medium' : 'text-gray-600'}
      hover:text-emerald-600 transition-colors duration-300 capitalize
    `}
  >
    {children}
  </a>
);

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description }) => (
  <Card className="group hover:scale-105 transition-all duration-300">
    <div className="mb-4 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-gray-600">{description}</p>
  </Card>
);

// Contact Info Component
const ContactInfo = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-3 text-gray-600 hover:text-emerald-600 transition-colors duration-300">
    <span className="text-emerald-600">
      <Icon size={20} />
    </span>
    <span>{text}</span>
  </div>
);

//add more components
const Input = ({ className = '', ...props }) => (
  <input
    className={`w-full px-4 py-2 rounded-lg border border-emerald-100 focus:border-emerald-300 
    focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-white/70 ${className}`}
    {...props}
  />
);

// Textarea Component
const Textarea = ({ className = '', ...props }) => (
  <textarea
    className={`w-full px-4 py-2 rounded-lg border border-emerald-100 focus:border-emerald-300 
    focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-white/70 min-h-[120px] ${className}`}
    {...props}
  />
);

const NetHeroPro = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'services', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= window.innerHeight / 3;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: ({ size }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
        </svg>
      ),
      title: "Networking Solutions",
      description: "Enterprise-grade network infrastructure design and implementation for optimal performance."
    },
    {
      icon: ({ size }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/>
        </svg>
      ),
      title: "WiFi Systems",
      description: "High-speed wireless solutions for seamless connectivity across your premises."
    },
    {
      icon: ({ size }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Security Systems",
      description: "Comprehensive surveillance and security solutions for your peace of mind."
    },
    {
      icon: ({ size }) => (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: "Smart Home",
      description: "Cutting-edge home automation solutions for modern living."
    }

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              NetHero Pro
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'services', 'about', 'contact'].map((item) => (
                <NavLink key={item} href={`#${item}`} isActive={activeSection === item}>
                  {item}
                </NavLink>
              ))}
              <Button>Get Quote</Button>
            </div>

            <Button 
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {['home', 'services', 'about', 'contact'].map((item) => (
                <div key={item} className="block">
                  <NavLink href={`#${item}`} isActive={activeSection === item}>
                    {item}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

{/* Hero Section */}
<section id="home" className="relative min-h-[85vh] md:min-h-[80vh] flex items-center">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.1),transparent_50%)]" />
  <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 text-center relative">
    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
      Your Expert Partner in
      <span className="block bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
        IT Solutions
      </span>
    </h1>
    <p className="text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
      Elevating businesses through cutting-edge technology solutions and unparalleled expertise
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <Button size="lg">
        Get Started
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
      <Button size="lg" variant="outline">
        Learn More
      </Button>
    </div>
  </div>
</section>

<section id="about" className="py-20 bg-gradient-to-b from-white via-emerald-50 to-emerald-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        [Company Name] is a leader in IT solutions, dedicated to delivering innovative networking and technology services for businesses and homes worldwide.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card className="flex flex-col items-center text-center">
        <div className="mb-4 text-emerald-600">
          {/* Icon: Customized Cabling */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M12 3v18" />
            <path d="M8 8h8v8H8z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Tailored Networking</h3>
        <p className="text-gray-600">
          [Custom text for structured cabling solutions tailored to fit your needs.]
        </p>
      </Card>
      <Card className="flex flex-col items-center text-center">
        <div className="mb-4 text-emerald-600">
          {/* Icon: Advanced Connectivity */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20M2 12h20" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Advanced Connectivity</h3>
        <p className="text-gray-600">
          [Custom text about providing reliable and fast internet solutions.]
        </p>
      </Card>
      <Card className="flex flex-col items-center text-center">
        <div className="mb-4 text-emerald-600">
          {/* Icon: Intelligent Security */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 2h8v4H10z" />
            <path d="M6 6h20v16H6z" />
            <path d="M12 18h8" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Intelligent Security</h3>
        <p className="text-gray-600">
          [Custom text about delivering innovative security solutions.]
        </p>
      </Card>
    </div>
    <div className="text-center mt-12">
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        [Custom mission statement about empowering clients with top-notch IT infrastructure and security services.]
      </p>
      <div className="flex justify-center mt-12">
        <Button 
          size="lg"
          onClick={() => window.open('#', '_blank')}
        >
          Learn More About Us
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to elevate your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your technology infrastructure? Let's talk.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <form className="space-y-6">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" />
                <Button className="w-full">Send Message</Button>
              </form>
            </Card>

            <Card>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <ContactInfo icon={Phone} text="+1 201-555-0123" />
                <ContactInfo icon={Mail} text="info@example.com" />
                <ContactInfo icon={MapPin} text="123 Main Street, Anytown, USA 12345" />
                
                <div className="flex space-x-4 pt-4">
                  {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Icon size={20} />
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
      NetHero Pro
    </div>
    <p className="text-gray-400 mb-8">Excellence in Every Connection</p>
    <div className="text-sm text-gray-400">
      Designed with ❤️ by{' '}
      <a 
        href="https://jsapp.pro" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-emerald-400 hover:underline"
      >
        JsApp Pro
      </a> © {new Date().getFullYear()} JsApp Pro. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  );
};

export default NetHeroPro;
