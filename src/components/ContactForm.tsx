import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const EMAILJS_CONFIG = {
    serviceId: import.meta.env.EMAIL_JS_SERVICE_ID, 
    templateId: import.meta.env.EMAIL_JS_TEMPLATE_ID, 
    publicKey: import.meta.env.EMAIL_JS_PUBLIC_KEY, 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, subject, message } = formState;

    if (!name.trim()) {
      setSubmitError('Please enter your name');
      return false;
    }

    if (!email.trim()) {
      setSubmitError('Please enter your email');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitError('Please enter a valid email address');
      return false;
    }

    if (!subject) {
      setSubmitError('Please select a subject');
      return false;
    }

    if (!message.trim()) {
      setSubmitError('Please enter your message');
      return false;
    }

    if (message.trim().length < 10) {
      setSubmitError('Message should be at least 10 characters long');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        to_name: 'Codenix Labs',
        subject: formState.subject,
        message: formState.message,
        reply_to: formState.email,
        sent_date: new Date().toLocaleDateString(),
        sent_time: new Date().toLocaleTimeString(),
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      console.log('Email sent successfully:', response);

      setSubmitSuccess(true);

      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error : any | unknown) {
      console.error('Email sending error:', error);

      if (error.status === 400) {
        setSubmitError('Invalid request. Please check your information and try again.');
      } else if (error.status === 401) {
        setSubmitError('Authentication failed. Please contact support.');
      } else if (error.status === 402) {
        setSubmitError('Service quota exceeded. Please try again later.');
      } else if (error.status === 404) {
        setSubmitError('Service not found. Please contact support.');
      } else {
        setSubmitError('Failed to send message. Please check your internet connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setSubmitSuccess(false);
    setSubmitError('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass p-8 rounded-xl max-w-2xl mx-auto"
    >
      {submitSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <div className="bg-green-500/20 text-green-400 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={32} />
          </div>
          <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">
            Message Sent Successfully!
          </h3>
          <p className="text-neutral-300 mb-2">
            Thank you for contacting us, <strong>{formState.name || 'there'}</strong>!
          </p>
          <p className="text-neutral-400 text-sm mb-6">
            We've received your message and will get back to you within 24 hours.
            A confirmation email has been sent to your inbox.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              type="button"
              onClick={resetForm}
              className="btn btn-outline px-6 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-orbitron font-bold mb-2 text-white">
              Get In Touch
            </h3>
            <p className="text-neutral-400">
              Ready to start your project? Let's discuss your ideas!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="form-group"
            >
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-200">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full bg-neutral-800/50 border border-neutral-700 focus:border-primary rounded-lg px-4 py-3 text-white placeholder-neutral-500 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-sm"
                placeholder="Enter your full name"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="form-group"
            >
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-200">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full bg-neutral-800/50 border border-neutral-700 focus:border-primary rounded-lg px-4 py-3 text-white placeholder-neutral-500 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-sm"
                placeholder="Enter your email address"
              />
            </motion.div>
          </div>

          {/* Subject Field */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="form-group"
          >
            <label htmlFor="subject" className="block text-sm font-medium mb-2 text-neutral-200">
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              required
              className="w-full bg-neutral-800/50 border border-neutral-700 focus:border-primary rounded-lg px-4 py-3 text-white transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary backdrop-blur-sm"
            >
              <option value="" disabled className="text-neutral-500">
                Choose a subject
              </option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Project Proposal">Project Proposal</option>
              <option value="Partnership">Partnership Opportunity</option>
              <option value="Support Request">Technical Support</option>
              <option value="Other">Other</option>
            </select>
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="form-group"
          >
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-200">
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full bg-neutral-800/50 border border-neutral-700 focus:border-primary rounded-lg px-4 py-3 text-white placeholder-neutral-500 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-primary resize-none backdrop-blur-sm"
              placeholder="Tell us about your project, requirements, timeline, budget, or any questions you have..."
            />
            <div className="text-xs text-neutral-500 mt-1">
              {formState.message.length}/500 characters (minimum 10 required)
            </div>
          </motion.div>

          {/* Error Message */}
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm"
            >
              {submitError}
            </motion.div>
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
              className={`w-full flex items-center justify-center px-6 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] ${isSubmitting
                  ? 'bg-neutral-700 text-neutral-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25'
                }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="mr-2 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send size={20} className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </motion.div>

          {/* Additional Info */}
          <div className="text-center text-xs text-neutral-500 mt-4">
            We typically respond within 24 hours. Your information is secure and will not be shared.
          </div>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;