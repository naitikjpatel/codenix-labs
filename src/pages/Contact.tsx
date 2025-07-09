import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  // MapPin, 
  Phone, 
  Mail, 
  Clock,
  Instagram, 
  Twitter, 
  Linkedin, 
  MessageCircle
  // Github
} from 'lucide-react';

import ContactForm from '../components/ContactForm';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Office locations data
// const officeLocations = [
//   {
//     city: "San Francisco",
//     address: "123 Innovation Drive, Tech Valley, CA 94103",
//     phone: "+1 (415) 555-1234",
//     email: "sf@nexustech.com"
//   },
//   {
//     city: "New York",
//     address: "456 Digital Avenue, Suite 800, NY 10001",
//     phone: "+1 (212) 555-5678",
//     email: "nyc@nexustech.com"
//   },
//   {
//     city: "London",
//     address: "78 Tech Square, Shoreditch, London EC2A 4RQ",
//     phone: "+44 20 7123 4567",
//     email: "london@nexustech.com"
//   }
// ];

const Contact: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  const handleWhatsAppClick = () => {
    const phoneNumber = '+918488080162';
    const message = 'Hello! I would like to know more about your services.';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  useEffect(() => {
    // Animate contact info items
    gsap.fromTo(
      '.contact-info-item',
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-info-section',
          start: 'top 70%',
          once: true
        }
      }
    );
    
    // Load Google Maps (placeholder for actual implementation)
    if (mapRef.current) {
      // This would typically be replaced with actual Google Maps API code
      // For now, we'll just style the placeholder
      mapRef.current.style.backgroundImage = "url('https://images.pexels.com/photos/3227986/pexels-photo-3227986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')";
      mapRef.current.style.backgroundSize = "cover";
      mapRef.current.style.backgroundPosition = "center";
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative grid-bg">
        <div className="absolute inset-0 bg-glow opacity-40"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Contact <span className="text-primary">Us</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-neutral-300 mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get in touch with our team to discuss your project or inquiries.
              We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="contact-info-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass p-8 rounded-xl mb-6"
              >
                <h3 className="text-2xl font-orbitron font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-5">
                  {/* <div className="contact-info-item flex items-start opacity-0">
                    <div className="bg-primary/20 p-3 rounded-lg mr-4 text-primary shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Our Main Office</h4>
                      <p className="text-neutral-300">
                        123 Innovation Drive, Tech Valley, CA 94103, United States
                      </p>
                    </div>
                  </div> */}
                  
                  <div className="contact-info-item flex items-start opacity-0">
                    <div className="bg-primary/20 p-3 rounded-lg mr-4 text-primary shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <a href="tel:+91 8488080162" className="text-neutral-300 hover:text-primary transition-colors">
                        +91 8488080162
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-info-item flex items-start opacity-0">
                    <div className="bg-primary/20 p-3 rounded-lg mr-4 text-primary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <a href="mailto:hello@nexustech.com" className="text-neutral-300 hover:text-primary transition-colors">
                        codenixlabs@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-info-item flex items-start opacity-0">
                    <div className="bg-primary/20 p-3 rounded-lg mr-4 text-primary shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Working Hours</h4>
                      <p className="text-neutral-300">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8">
                  <h4 className="font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/codenixlabs/" className="bg-neutral-800 w-10 h-10 rounded-full flex items-center justify-center text-neutral-300 hover:bg-primary hover:text-white transition-colors hover-effect">
                      <Instagram size={18} />
                    </a>
                    <a href="https://x.com/codenixlabs" className="bg-neutral-800 w-10 h-10 rounded-full flex items-center justify-center text-neutral-300 hover:bg-primary hover:text-white transition-colors hover-effect">
                      <Twitter size={18} />
                    </a>
                    <a href="https://www.linkedin.com/company/codenixlabs/" className="bg-neutral-800 w-10 h-10 rounded-full flex items-center justify-center text-neutral-300 hover:bg-primary hover:text-white transition-colors hover-effect">
                      <Linkedin size={18} />
                    </a>
                    <button 
                      onClick={handleWhatsAppClick}
                      className="bg-neutral-800 w-10 h-10 rounded-full flex items-center justify-center text-neutral-300 hover:bg-green-600 hover:text-white transition-colors hover-effect"
                    >
                      <MessageCircle size={18} />
                    </button>
                    {/* <a href="#" className="bg-neutral-800 w-10 h-10 rounded-full flex items-center justify-center text-neutral-300 hover:bg-primary hover:text-white transition-colors hover-effect">
                      <Github size={18} />
                    </a> */}
                  </div>
                </div>
              </motion.div>
              
              {/* Map */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div 
                  ref={mapRef}
                  className="h-72 rounded-xl overflow-hidden glass"
                ></div>
                <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-neutral-200 mb-4">Map preview is disabled in this demo</p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline hover-effect">
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Offices */}
      {/* <section className="py-20 bg-neutral-900 relative">
        <div className="absolute inset-0 bg-glow opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title neon-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Our Global Offices
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Find us in these locations around the world
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-xl hover-effect"
              >
                <h3 className="text-xl font-orbitron font-bold mb-4">
                  {office.city}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex">
                    <MapPin size={18} className="text-primary shrink-0 mt-0.5 mr-3" />
                    <span className="text-neutral-300">{office.address}</span>
                  </div>
                  
                  <div className="flex">
                    <Phone size={18} className="text-primary shrink-0 mt-0.5 mr-3" />
                    <a href={`tel:${office.phone}`} className="text-neutral-300 hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex">
                    <Mail size={18} className="text-primary shrink-0 mt-0.5 mr-3" />
                    <a href={`mailto:${office.email}`} className="text-neutral-300 hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       */}
      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title neon-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Find answers to common questions about our services and process
            </motion.p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What is your typical project process?",
                answer: "Our process typically includes discovery, planning, design, development, testing, and launch phases. We collaborate closely with clients throughout each stage to ensure the final product meets all requirements and expectations."
              },
              {
                question: "How long does it take to complete a project?",
                answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during the planning phase."
              },
              {
                question: "Do you offer maintenance and support after launch?",
                answer: "Yes, we offer various maintenance and support packages to ensure your digital product continues to perform optimally after launch. Our team provides ongoing updates, security patches, and technical support."
              },
              {
                question: "What information do you need to provide a quote?",
                answer: "To provide an accurate quote, we typically need to understand your project goals, desired features and functionality, timeline expectations, and any specific technical requirements. The more detail you can provide, the more precise our estimate will be."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-xl mb-4 last:mb-0"
              >
                <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                <p className="text-neutral-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;