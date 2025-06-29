import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Globe, Palette, LineChart, ArrowRight, Users, DivideIcon as LucideIcon, CheckCircle, Calendar, Clock, User, BrainCircuit } from 'lucide-react';

import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import StatsCounter from '../components/StatsCounter';
import BlogCard from '../components/BlogCard';
import { BlogService } from '../services/blogService';
import { BlogPost } from '../types/blog';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

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
    title: "AI Integration",
    description: "Harness the power of artificial intelligence and machine learning to automate processes, enhance customer experiences, and gain competitive advantage.",
    icon: <BrainCircuit size={24} />
  }
];

const Home: React.FC = () => {
  const [featuredPosts, setFeaturedPosts] = React.useState<BlogPost[]>([]);

  useEffect(() => {
    // Load featured blog posts
    const loadFeaturedPosts = async () => {
      try {
        const posts = await BlogService.getFeaturedPosts(3);
        setFeaturedPosts(posts);
      } catch (error) {
        console.error('Error loading featured posts:', error);
      }
    };

    loadFeaturedPosts();

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
      
      {/* Featured Blog Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-neutral-900 relative">
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
                Latest Insights
              </motion.h2>
              <motion.p 
                className="section-subtitle"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Stay updated with the latest trends and insights from our experts
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredPosts.map((post, index) => (
                <BlogCard key={post._id} post={post} index={index} featured />
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/blog" className="btn btn-outline neon-border hover-effect">
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-20 relative">
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