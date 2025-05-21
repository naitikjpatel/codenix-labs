import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Palette, 
  LineChart,
  ArrowRight,
  Users,
  LucideIcon,
  CheckCircle
} from 'lucide-react';

import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import StatsCounter from '../components/StatsCounter';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Interface for featured projects
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

// Interface for services
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "We build responsive, high-performance websites using the latest technologies to deliver exceptional user experiences.",
    icon: <Globe size={24} />
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that provide seamless experiences across all devices.",
    icon: <Smartphone size={24} />
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that combine aesthetics with functionality to create intuitive interfaces.",
    icon: <Palette size={24} />
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies to increase your online presence and drive measurable business growth.",
    icon: <LineChart size={24} />
  }
];

// Featured projects
const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Fintech Dashboard",
    category: "Web Application",
    image: "https://images.pexels.com/photos/7433823/pexels-photo-7433823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Web & Mobile",
    image: "https://images.pexels.com/photos/8386365/pexels-photo-8386365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Health & Fitness App",
    category: "Mobile Application",
    image: "https://images.pexels.com/photos/7948063/pexels-photo-7948063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Home: React.FC = () => {
  useEffect(() => {
    // Parallax effect on scroll for featured projects
    gsap.utils.toArray('.project-card').forEach((element, i) => {
      gsap.fromTo(
        element,
        { y: i % 2 === 0 ? 100 : 0 },
        {
          y: i % 2 === 0 ? 0 : 100,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        }
      );
    });
    
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
      <HeroSection />
      
      {/* Services Section */}
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
              Our Services
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We deliver cutting-edge solutions tailored to your business needs
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Counter */}
      <StatsCounter />
      
      {/* Featured Projects */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="section-title neon-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Work
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our latest projects that showcase our expertise
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Link key={project.id} to="/portfolio" className="block group">
                <motion.div 
                  className="project-card relative rounded-xl overflow-hidden h-80 hover-effect"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm group-hover:bg-neutral-900/40 transition-all duration-300 z-10"></div>
                  
                  {/* Project Image */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                    <span className="text-primary text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-orbitron font-bold mb-4 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center text-white font-medium">
                        View Project <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn btn-outline neon-border hover-effect">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 relative">
        <div className="absolute inset-0 bg-glow opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="glass p-8 md:p-12 rounded-xl relative overflow-hidden">
              {/* Background decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/20 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-secondary/20 blur-3xl"></div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-4">
                    Ready to bring your ideas to life?
                  </h2>
                  <p className="text-neutral-300 mb-0 md:max-w-xl">
                    Let's collaborate to create a digital solution that exceeds your expectations 
                    and helps your business thrive in the digital landscape.
                  </p>
                </div>
                
                <Link 
                  to="/contact" 
                  className="btn btn-primary neon-border whitespace-nowrap hover-effect"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;