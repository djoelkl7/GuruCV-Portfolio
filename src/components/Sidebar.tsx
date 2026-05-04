import { motion } from 'motion/react';
import { User, FileText, Briefcase, Mail, Cpu, Layout } from 'lucide-react';
import { SectionId } from '../types';

const navItems = [
  { id: 'about', icon: User, label: 'ABOUT' },
  { id: 'resume', icon: FileText, label: 'RESUME' },
  { id: 'works', icon: Layout, label: 'WORKS' },
  { id: 'blog', icon: Cpu, label: 'BLOG' },
  { id: 'contact', icon: Mail, label: 'CONTACT' },
];

interface SidebarProps {
  activeSection: string;
  onSectionChange: (id: SectionId) => void;
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 lg:right-auto lg:left-[calc(50%+460px)] xl:left-[calc(50%+540px)]">
      <div className="flex flex-col gap-2 bg-surface/80 backdrop-blur-md p-2 rounded-2xl border border-border shadow-2xl">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onSectionChange(item.id as SectionId)}
              className={`
                group relative p-3.5 rounded-xl transition-all duration-500 flex items-center justify-center
                ${isActive ? 'bg-primary text-dark shadow-[0_0_20px_rgba(255,140,0,0.4)]' : 'text-white/40 hover:text-primary hover:bg-white/5'}
              `}
            >
              <Icon size={20} className={isActive ? 'animate-pulse' : ''} />
              
              {/* Tooltip Content */}
              <motion.div 
                initial={{ opacity: 0, x: 20, visibility: 'hidden' }}
                whileHover={{ opacity: 1, x: 0, visibility: 'visible' }}
                transition={{ duration: 0.3, ease: 'backOut' }}
                className="absolute right-full mr-5 px-4 py-2 bg-white text-dark text-[11px] font-black uppercase tracking-[2px] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] whitespace-nowrap pointer-events-none flex items-center gap-2 border-b-4 border-primary/20"
              >
                {item.label}
                {/* Arrow */}
                <div className="absolute left-[calc(100%-4px)] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45" />
              </motion.div>

              {/* Indicator Dot for Active */}
              {isActive && (
                <motion.div 
                  layoutId="sidebarActiveDot"
                  className="absolute -right-1 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(255,140,0,0.8)]"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
