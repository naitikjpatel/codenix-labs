import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  Mail, 
  MapPin, 
  Phone, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Github,
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4 hover-effect inline-block">
              <Code2 size={32} className="text-primary" />
              <span className="font-orbitron text-xl font-bold">
                NEXUS<span className="text-primary">TECH</span>
              </span>
            </Link>
            <p className="text-neutral-300 mb-6">
              Transforming ideas into exceptional digital experiences through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors hover-effect">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors hover-effect">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors hover-effect">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-300 hover:text-primary transition-colors hover-effect">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-orbitron text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-neutral-300 hover:text-primary transition-colors flex items-center hover-effect group"
                  >
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-orbitron text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                'Web Development', 
                'Mobile App Development', 
                'UI/UX Design', 
                'Cloud Solutions', 
                'AI Integration'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-neutral-300 hover:text-primary transition-colors flex items-center hover-effect group"
                  >
                    <ArrowRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-orbitron text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary shrink-0 mt-1 mr-3" />
                <span className="text-neutral-300">
                  123 Innovation Drive, Tech Valley, CA 94103
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary shrink-0 mr-3" />
                <a href="tel:+11234567890" className="text-neutral-300 hover:text-primary transition-colors hover-effect">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary shrink-0 mr-3" />
                <a href="mailto:hello@nexustech.com" className="text-neutral-300 hover:text-primary transition-colors hover-effect">
                  hello@nexustech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-800 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NEXUSTECH. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-neutral-400 text-sm hover:text-primary transition-colors hover-effect">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 text-sm hover:text-primary transition-colors hover-effect">
              Terms of Service
            </a>
            <a href="#" className="text-neutral-400 text-sm hover:text-primary transition-colors hover-effect">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;