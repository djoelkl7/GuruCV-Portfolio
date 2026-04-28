import SectionWrapper from './SectionWrapper';
import { Mail, MapPin, Phone, Send, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'hello@johndoe.dev';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
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
              <p className="text-xs text-white/40">Minneapolis, Minnesota, USA</p>
            </div>
          </div>
          
          <div className="flex gap-4 relative group">
            <div className="w-12 h-12 bg-white/5 border border-border rounded-xl flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary/10">
              <Mail size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-1 text-white/90">Email</h4>
              <div className="flex items-center gap-3">
                <p className="text-xs text-white/40">{email}</p>
                <button 
                  onClick={handleCopy}
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
                  
                  {copied && (
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -20 }}
                      exit={{ opacity: 0 }}
                      className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-bold text-primary"
                    >
                      COPIED!
                    </motion.span>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white/5 border border-border rounded-xl flex items-center justify-center text-primary shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Phone</h4>
              <p className="text-xs text-white/40">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="h-px bg-border w-full" />
          
          <div className="bg-white/5 border border-border p-6 rounded-2xl">
            <p className="text-xs text-white/60 font-medium mb-2 italic">"I'm always open to discussing new projects, creative ideas or original visions."</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-4">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-white/5 border border-border rounded-xl py-4 px-6 text-sm placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors hover:bg-white/10"
              />
            </div>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-border rounded-xl py-4 px-6 text-sm placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors hover:bg-white/10"
              />
            </div>
            <div className="relative group">
              <textarea 
                rows={4}
                placeholder="Your Message" 
                className="w-full bg-white/5 border border-border rounded-xl py-4 px-6 text-sm placeholder:text-white/20 focus:outline-none focus:border-primary transition-colors hover:bg-white/10"
              />
            </div>
          </div>
          <button className="w-full py-4 bg-primary text-dark font-bold text-[11px] uppercase tracking-[3px] rounded-xl overflow-hidden relative group transition-transform active:scale-95">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Send Message <Send size={14} />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
