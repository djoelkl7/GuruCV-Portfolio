import { motion, AnimatePresence } from 'motion/react';
import { ReactNode, useState, useRef, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface SectionWrapperProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function SectionWrapper({ title, subtitle, children }: SectionWrapperProps) {
  const [showScroll, setShowScroll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      setShowScroll(containerRef.current.scrollTop > 300);
    }
  };

  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      ref={containerRef}
      onScroll={handleScroll}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="h-full scrollbar-thin overflow-y-auto px-6 lg:px-12 py-12 relative"
    >
      <div className="mb-12 relative">
        <h2 className="text-3xl font-display font-bold">
          {title.split(' ')[0]} <span className="text-primary font-normal">{title.split(' ').slice(1).join(' ')}</span>
        </h2>
        <div className="h-1 w-12 bg-primary mt-4 rounded-full" />
        {subtitle && (
          <p className="mt-4 text-white/40 text-sm leading-relaxed max-w-lg">
            {subtitle}
          </p>
        )}
      </div>
      {children}

      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="sticky bottom-0 left-full -translate-x-full mb-4 mr-0 p-3 bg-primary text-dark rounded-xl shadow-2xl hover:scale-110 active:scale-95 transition-transform z-50 pointer-events-auto"
            title="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
