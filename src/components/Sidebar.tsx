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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSectionChange(item.id as SectionId)}
              className={`
                group relative p-3 rounded-xl transition-all duration-300 flex items-center justify-center
                ${isActive ? 'bg-primary text-dark shadow-[0_0_15px_rgba(120,204,109,0.3)]' : 'text-white/60 hover:text-primary hover:bg-white/5'}
              `}
            >
              <Icon size={20} />
              
              {/* Tooltip Content */}
              <motion.div 
                initial={{ opacity: 0, x: 10, visibility: 'hidden' }}
                whileHover={{ opacity: 1, x: 0, visibility: 'visible' }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute right-full mr-4 px-3 py-1.5 bg-white text-dark text-[10px] font-bold rounded-lg shadow-xl whitespace-nowrap pointer-events-none flex items-center gap-2"
              >
                {item.label}
                {/* Carrot/Arrow */}
                <div className="absolute left-[calc(100%-2px)] top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45" />
              </motion.div>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
