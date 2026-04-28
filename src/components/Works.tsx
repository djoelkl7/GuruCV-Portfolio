import SectionWrapper from './SectionWrapper';
import { ExternalLink, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const categories = ['All', 'Web Design', 'Development', 'Branding'];

const works = [
  {
    title: 'Modern Dashboard',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5fbd1?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Eco Branding',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde3?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Interior Design Site',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600',
  },
  {
    title: 'Financial App',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
  },
];

export default function Works() {
  const [filter, setFilter] = useState('All');

  const filteredWorks = filter === 'All' 
    ? works 
    : works.filter(w => w.category === filter);

  return (
    <SectionWrapper title="My Works">
      <div className="flex flex-wrap gap-2 mb-10 bg-white/5 p-1 rounded-xl w-fit">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`
              relative px-4 py-2 text-[10px] font-bold tracking-[2px] uppercase transition-all duration-300 rounded-lg
              ${filter === cat ? 'text-dark' : 'text-white/40 hover:text-white/70'}
            `}
          >
            {filter === cat && (
              <motion.div 
                layoutId="activeFilter"
                className="absolute inset-0 bg-primary rounded-lg shadow-[0_0_15px_rgba(120,204,109,0.3)]"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work, i) => (
            <motion.div
              layout
              key={work.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: 'circOut' }}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-border"
            >
              <motion.img 
                src={work.image} 
                alt={work.title}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full h-full object-cover"
              />
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent flex flex-col items-center justify-center gap-4"
              >
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="flex gap-2"
                >
                  <button className="p-3 bg-primary text-dark rounded-full hover:bg-white hover:scale-110 transition-all">
                    <Search size={18} />
                  </button>
                  <button className="p-3 bg-primary text-dark rounded-full hover:bg-white hover:scale-110 transition-all">
                    <ExternalLink size={18} />
                  </button>
                </motion.div>

                <motion.div 
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="text-center px-4"
                >
                  <h4 className="text-white font-display font-bold text-lg tracking-tight">{work.title}</h4>
                  <p className="text-primary text-[10px] uppercase tracking-[2px] font-bold mt-1 opacity-80">{work.category}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
