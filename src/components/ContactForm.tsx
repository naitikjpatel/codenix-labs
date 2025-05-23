import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import emailjs from 'emailjs-com';
const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    try {
       await emailjs.send('service_s3nrghq', 'template_cignmvg', formState, 'bQ7rWbUPT5hPo0z33');
      setSubmitSuccess(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitError('An error occurred while submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="glass p-8 rounded-xl"
    >
      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-8"
        >
          <div className="bg-success/20 text-success p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Send size={24} />
          </div>
          <h3 className="text-2xl font-orbitron font-bold mb-2">Message Sent!</h3>
          <p className="text-neutral-300 mb-6">
            Thank you for contacting us. We'll get back to you as soon as possible.
          </p>
          <button
            type="button"
            onClick={() => setSubmitSuccess(false)}
            className="btn btn-outline"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <>
          <h3 className="text-2xl font-orbitron font-bold mb-6">Get In Touch</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {/* Name */}
            <div className="form-group">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-800 border border-neutral-700 focus:border-primary rounded-lg px-4 py-3 text-white transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="John Doe"
                />
              </motion.div>
            </div>
            
            {/* Email */}
            <div className="form-group">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-neutral-800 border border-neutral-700 focus:border-primary rounded-lg px-4 py-3 text-white transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </motion.div>
            </div>
          </div>
          
          {/* Subject */}
          <div className="form-group mb-5">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="w-full bg-neutral-800 border border-neutral-700 focus:border-primary rounded-lg px-4 py-3 text-white transition-colors focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="" disabled>Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Project Proposal">Project Proposal</option>
                <option value="Support Request">Support Request</option>
                <option value="Partnership">Partnership</option>
                <option value="Other">Other</option>
              </select>
            </motion.div>
          </div>
          
          {/* Message */}
          <div className="form-group mb-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-neutral-800 border border-neutral-700 focus:border-primary rounded-lg px-4 py-3 text-white transition-colors focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </motion.div>
          </div>
          
          {/* Error Message */}
          {submitError && (
            <div className="mb-5 text-error text-sm">{submitError}</div>
          )}
          
          {/* Submit Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full flex items-center justify-center hover-effect"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </motion.div>
        </>
      )}
    </motion.form>
  );
};

export default ContactForm;