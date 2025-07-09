import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Asset/codenix.svg"
import { 
  Code2, 
  Mail, 
  MapPin, 
  Phone, 
  Instagram, 
  Twitter, 
  Linkedin, 
  ArrowRight
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 bg-neutral-900">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link to="/" className="items-center inline-block mb-4 space-x-2 hover-effect">
              <span className="text-xl font-bold font-orbitron">
                CODENIX<span className="text-primary ms-0.5">LABS</span>
              </span>
            </Link>
            <p className="mb-6 text-neutral-300">
              Transforming ideas into exceptional digital experiences through innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/codenixlabs/" className="transition-colors text-neutral-300 hover:text-primary hover-effect">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/codenixlabs" className="transition-colors text-neutral-300 hover:text-primary hover-effect">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/codenixlabs/" className="transition-colors text-neutral-300 hover:text-primary hover-effect">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white font-orbitron">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services','About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="flex items-center transition-colors text-neutral-300 hover:text-primary hover-effect group"
                  >
                    <ArrowRight size={16} className="mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white font-orbitron">Services</h3>
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
                    className="flex items-center transition-colors text-neutral-300 hover:text-primary hover-effect group"
                  >
                    <ArrowRight size={16} className="mr-2 transition-opacity opacity-0 group-hover:opacity-100" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white font-orbitron">Contact Us</h3>
            <ul className="space-y-4">
              
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary shrink-0" />
                <a href="tel:+91 7405950263" className="transition-colors text-neutral-300 hover:text-primary hover-effect">
                  +91 7405950263
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-primary shrink-0" />
                <a href="mailto:codenixlabs@gmail.com" className="transition-colors text-neutral-300 hover:text-primary hover-effect">
                  codenixlabs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px my-8 bg-neutral-800"></div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="mb-4 text-sm text-neutral-400 md:mb-0">
            &copy; {new Date().getFullYear()} CODENIX LABS. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm transition-colors text-neutral-400 hover:text-primary hover-effect">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm transition-colors text-neutral-400 hover:text-primary hover-effect">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-sm transition-colors text-neutral-400 hover:text-primary hover-effect">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;