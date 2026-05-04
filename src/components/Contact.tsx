import SectionWrapper from './SectionWrapper';
import { Mail, MapPin, Phone, Send, Copy, Check } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emails = ['ddmguru@gmail.com', 'ddmguru@aol.com'];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ email: '' });

    if (!validateEmail(formData.email)) {
      setErrors({ email: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

  return (
    <SectionWrapper title="Get in Touch">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white/5 border border-border rounded-xl flex items-center justify-center text-primary shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-1 text-white/90">Address</h4>
              <p className="text-xs text-white/40">Ologuneru Ibadan, NIGERIA</p>
            </div>
          </div>
          
          <div className="flex gap-4 relative group">
            <div className="w-12 h-12 bg-white/5 border border-border rounded-xl flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary/10">
              <Mail size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-1 text-white/90">Email</h4>
              <div className="space-y-3">
                {emails.map((email) => (
                  <div key={email} className="flex items-center gap-3">
                    <p className="text-xs text-white/40">{email}</p>
                    <button 
                      onClick={() => handleCopy(email)}
                      className="p-1.5 rounded-md hover:bg-white/5 transition-colors text-white/20 hover:text-primary relative"
                      title="Copy to clipboard"
                    >
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                          >
                            <Check size={14} className="text-primary" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                          >
                            <Copy size={14} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white/5 border border-border rounded-xl flex items-center justify-center text-primary shrink-0 transition-all group-hover:scale-110">
              <Phone size={20} />
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-1 text-white/90 underline decoration-primary/30 underline-offset-4">Whatsapp</h4>
                <p className="text-xs text-white/40 tracking-wider">+234 706 281 8494</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-1 text-white/90 underline decoration-secondary/30 underline-offset-4">Mobile</h4>
                <p className="text-xs text-white/40 tracking-wider">+234 704 563 4693</p>
              </div>
            </div>
          </div>

          <div className="h-px bg-border w-full" />
          
          <div className="bg-white/5 border border-border p-6 rounded-2xl">
            <p className="text-xs text-white/60 font-medium mb-2 italic">"I'm always open to discussing new projects, creative ideas or original visions."</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <div className="relative group">
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full Name" 
                className="w-full bg-white/5 border border-border rounded-xl py-4 px-6 text-sm placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors hover:bg-white/10"
              />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ email: '' });
                }}
                placeholder="Email Address" 
                className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-border'} rounded-xl py-4 px-6 text-sm placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors hover:bg-white/10`}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-[10px] text-red-400 mt-2 ml-2 font-medium uppercase tracking-wider"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="relative group">
              <textarea 
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your Message" 
                className="w-full bg-white/5 border border-border rounded-xl py-4 px-6 text-sm placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors hover:bg-white/10 resize-none"
              />
            </div>
          </div>
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 ${submitStatus === 'success' ? 'bg-secondary' : 'bg-primary'} text-dark font-bold text-[11px] uppercase tracking-[3px] rounded-xl overflow-hidden relative group transition-all active:scale-95 disabled:opacity-50`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-dark border-t-transparent rounded-full"
                />
              ) : submitStatus === 'success' ? (
                <>Message Sent <Check size={14} /></>
              ) : (
                <>Send Message <Send size={14} /></>
              )}
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
