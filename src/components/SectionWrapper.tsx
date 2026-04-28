import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function SectionWrapper({ title, subtitle, children }: SectionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="h-full scrollbar-thin overflow-y-auto px-6 lg:px-12 py-12"
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
    </motion.div>
  );
}
