import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Instagram, Download, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProfileCardProps {
  onHireMe?: () => void;
}

export default function ProfileCard({ onHireMe }: ProfileCardProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ["Web Designer", "Blogger", "Freelancer", "Photographer"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadCV = () => {
    // Creating a dummy content for demonstration
    const cvContent = "DDmGurU - Full Stack Developer\nPortfolio: " + window.location.href;
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'DDmGurU_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative w-full lg:w-[480px] h-full bg-surface rounded-3xl overflow-hidden border border-border shadow-2xl flex flex-col group">
      {/* Background Image Area */}
      <div className="h-[38%] relative overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent z-10" />
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000" 
          alt="Profile Header"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        
        {/* Animated Avatar Container */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 z-20">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            {/* Glow effect */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-accent blur-3xl rounded-full"
            />
            
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 0 }}
              animate={{ 
                y: [0, -8, 0],
                rotate: [2, -2, 2]
              }}
              transition={{ 
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-44 h-44 rounded-3xl border-4 border-surface overflow-hidden shadow-2xl relative z-10 bg-zinc-800"
            >
              <img 
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400" 
                alt="Avatar"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-28 px-8 pb-8 flex-1 flex flex-col text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h1 className="text-3xl font-display font-bold text-white mb-1 tracking-tight">
            DDmGurU
          </h1>
          <div className="text-primary text-[10px] font-bold tracking-[4px] uppercase mb-8 opacity-80 overflow-hidden relative inline-block h-4">
            <motion.span
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {roles[currentRoleIndex]}
            </motion.span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
              className="inline-block ml-1 border-l-2 border-primary h-3 translate-y-[1px]"
            />
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary via-secondary to-accent"
            />
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-5 mb-10"
        >
          {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ y: -4, scale: 1.2 }}
              className="text-white/40 hover:text-primary transition-all p-1"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        <div className="h-px bg-white/5 w-full mb-10" />

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-auto grid grid-cols-2 gap-4"
        >
          <button 
            onClick={handleDownloadCV}
            className="relative group overflow-hidden bg-white/5 hover:bg-primary py-4 px-2 rounded-xl text-[10px] font-bold tracking-[2px] text-white hover:text-dark transition-all duration-300 uppercase border border-white/5 shadow-lg active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Download Resume <Download size={14} />
            </span>
          </button>
          <button 
            onClick={onHireMe}
            className="relative group overflow-hidden bg-primary py-4 px-2 rounded-xl text-[10px] font-bold tracking-[2px] text-dark transition-all duration-300 uppercase shadow-[0_0_20px_rgba(255,140,0,0.2)] hover:shadow-[0_0_30px_rgba(255,140,0,0.4)] active:scale-95"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Hire Me <ChevronRight size={14} />
            </span>
            <motion.div 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-white"
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
