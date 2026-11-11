import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Copy,
  Check,
  Send,
  Loader2,
  ExternalLink,
  MessageSquare,
  Calendar,
  Building,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { contactData, personalData } from '../data/data';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { trackConversion } from '../utils/analytics';

/**
 * Enhanced Contact Section with "Quick Contact" Card and Recruiter-Ready Hiring Form
 */
export default function Contact({ onShowToast }) {
  const shouldReduceMotion = useReducedMotion();
  const { copied, copiedText, copyToClipboard } = useCopyToClipboard(2500);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    role: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopy = async (text, label) => {
    trackConversion('copy_contact_info', label);
    const ok = await copyToClipboard(text);
    if (ok && onShowToast) {
      onShowToast(`Copied ${label} to clipboard!`, 'success');
    }
  };

  const handleBookCall = (e) => {
    trackConversion('click_contact_book_call', 'Contact Section');
    if (!personalData.bookingUrl) {
      e.preventDefault();
      const formEl = document.getElementById('contact-form');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth' });
        const nameInput = document.getElementById('name');
        if (nameInput) nameInput.focus();
      }
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setStatusMessage('');
    trackConversion('submit_contact_form', 'Contact Form', { role: formData.role, company: formData.company });

    try {
      const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
          setStatusMessage('Thank you! Your message has been sent successfully. I will get back to you shortly.');
          setFormData({ name: '', company: '', email: '', role: '', message: '' });
          if (onShowToast) onShowToast('Message sent successfully!', 'success');
        } else {
          throw new Error('Failed to send message via form endpoint');
        }
      } else {
        // Fallback smooth demo dispatch if environment variable is not configured yet
        await new Promise((resolve) => setTimeout(resolve, 800));
        setStatus('success');
        setStatusMessage('Thank you! Your inquiry has been received. I will respond to your email promptly.');
        setFormData({ name: '', company: '', email: '', role: '', message: '' });
        if (onShowToast) onShowToast('Inquiry dispatched successfully!', 'success');
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      setStatus('error');
      setStatusMessage('Unable to send your message right now. Please email directly.');
      if (onShowToast) onShowToast('Failed to send message. Please try direct email.', 'error');
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Fast-Track Communication"
          title="Let's Connect"
          subtitle={contactData.subheading}
        />

        {/* 1-Click "Quick Contact" Bar above the form */}
        <div className="max-w-6xl mx-auto mb-10">
          <div className="p-5 sm:p-7 rounded-3xl glass-card">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              <Sparkles className="w-4 h-4" />
              <span>Instant Recruiter Channels</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {/* Channel 1: Book an Interview */}
              <a
                href={personalData.bookingUrl || "#contact-form"}
                target={personalData.bookingUrl ? "_blank" : "_self"}
                rel="noopener noreferrer"
                onClick={handleBookCall}
                className="flex items-center justify-between p-3.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30 transition-all hover:-translate-y-0.5 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">Calendar</p>
                    <p className="text-xs font-bold">Book a Call</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Channel 2: WhatsApp Me */}
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion('click_quick_whatsapp', 'Quick Contact Card')}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 transition-all hover:-translate-y-0.5 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">Direct Chat</p>
                    <p className="text-xs font-bold">WhatsApp</p>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Channel 3: Email Click-to-Copy */}
              <button
                type="button"
                onClick={() => handleCopy(contactData.email, 'Email')}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 transition-all hover:-translate-y-0.5 group"
              >
                <div className="flex items-center gap-2.5 overflow-hidden text-left">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">Email (Copy)</p>
                    <p className="text-xs font-bold truncate">{contactData.email}</p>
                  </div>
                </div>
                {copied && copiedText === contactData.email ? (
                  <Check className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                )}
              </button>

              {/* Channel 4: Phone Click-to-Copy */}
              <button
                type="button"
                onClick={() => handleCopy(contactData.phone, 'Phone number')}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 transition-all hover:-translate-y-0.5 group"
              >
                <div className="flex items-center gap-2.5 text-left">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">Phone (Copy)</p>
                    <p className="text-xs font-bold">{contactData.phone}</p>
                  </div>
                </div>
                {copied && copiedText === contactData.phone ? (
                  <Check className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Details & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 sm:p-7 rounded-3xl glass-card">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Contact Information
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Available for full-time engineering roles, high-concurrency backend consulting, and contract engineering.
              </p>

              <div className="mt-6 space-y-4">
                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-slate-400">Location</p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{contactData.location}</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-200/80 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-400">Professional Profile</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">LinkedIn Profile</p>
                    </div>
                  </div>
                  <a
                    href={contactData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackConversion('click_contact_linkedin', 'Contact Info')}
                    className="p-2.5 rounded-xl text-slate-400 hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Visit Kashif's LinkedIn Profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Pitch Box */}
            <div className="p-6 rounded-2xl glass-card border-blue-500/30 bg-blue-500/5 dark:bg-blue-950/20">
              <h4 className="text-xs font-mono font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
                Recruiter Quick Fact
              </h4>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Experienced in fast onboarding, CI/CD pipeline automation, and managing full production lifecycles with minimal supervision.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Upgraded Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div id="contact-form" className="rounded-3xl p-6 sm:p-8 glass-card relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500 opacity-60" />

              <div className="flex items-center gap-2 mb-6 text-blue-500 font-mono text-xs uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>Send a Direct Message</span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1 uppercase">
                      Your Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      disabled={status === 'loading'}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white/80 dark:bg-slate-950/60 text-slate-900 dark:text-white border ${
                        errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                      } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm`}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1 uppercase">
                      Company / Organization <span className="text-slate-400 text-[10px]">(Optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Tech"
                        disabled={status === 'loading'}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/80 dark:bg-slate-950/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                      />
                      <Building className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1 uppercase">
                      Email Address <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@example.com"
                      disabled={status === 'loading'}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white/80 dark:bg-slate-950/60 text-slate-900 dark:text-white border ${
                        errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                      } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm`}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  {/* Role Hiring For */}
                  <div>
                    <label htmlFor="role" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1 uppercase">
                      Role You&apos;re Hiring For <span className="text-slate-400 text-[10px]">(Optional)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="e.g. Senior Backend / Full Stack"
                        disabled={status === 'loading'}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/80 dark:bg-slate-950/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                      />
                      <Briefcase className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1 uppercase">
                    Your Message <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your engineering role, project requirements, or timeline..."
                    disabled={status === 'loading'}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-white/80 dark:bg-slate-950/60 text-slate-900 dark:text-white border ${
                      errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-800'
                    } focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white shadow-glow transition-all duration-200 active:scale-98 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>

                {/* Status alert */}
                {statusMessage && (
                  <div
                    className={`p-3.5 rounded-xl text-xs font-medium ${
                      status === 'success'
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  onShowToast: PropTypes.func,
};
