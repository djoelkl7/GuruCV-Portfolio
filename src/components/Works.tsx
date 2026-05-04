import SectionWrapper from './SectionWrapper';
import { ExternalLink, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const categories = ['All', 'Web Design', 'Development', 'Branding'];
const tags = ['React', 'Next.js', 'Figma', 'Tailwind', 'AI'];

const works = [
  {
    title: 'Modern Dashboard',
    category: 'Development',
    tags: ['React', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5fbd1?auto=format&fit=crop&q=80&w=600',
    link: 'https://example.com/dashboard',
  },
  {
    title: 'Eco Branding',
    category: 'Branding',
    tags: ['Figma'],
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde3?auto=format&fit=crop&q=80&w=600',
    link: 'https://example.com/branding',
  },
  {
    title: 'Interior Design Site',
    category: 'Web Design',
    tags: ['Figma', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600',
    link: 'https://example.com/interior',
  },
  {
    title: 'Financial App',
    category: 'Development',
    tags: ['Next.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    link: 'https://example.com/finance',
  },
];

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTag, setActiveTag] = useState('All');

  const filteredWorks = works.filter(work => {
    const categoryMatch = activeCategory === 'All' || work.category === activeCategory;
    const tagMatch = activeTag === 'All' || work.tags.includes(activeTag);
    return categoryMatch && tagMatch;
  });

  return (
    <SectionWrapper title="My Works">
      <div className="space-y-6 mb-10">
        <div>
          <span className="text-[9px] font-bold text-white/30 uppercase tracking-[2px] mb-3 block">Categories</span>
          <div className="flex flex-wrap gap-2 bg-white/5 p-1 rounded-xl w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  relative px-4 py-2 text-[10px] font-bold tracking-[2px] uppercase transition-all duration-300 rounded-lg
                  ${activeCategory === cat ? 'text-dark' : 'text-white/40 hover:text-white/70'}
                `}
              >
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-primary rounded-lg shadow-[0_0_15px_rgba(255,140,0,0.3)]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[9px] font-bold text-white/30 uppercase tracking-[2px] mb-3 block">Technologies</span>
          <div className="flex flex-wrap gap-2">
            {['All', ...tags].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`
                  px-3 py-1 text-[9px] font-bold tracking-[1px] uppercase transition-all duration-300 rounded-full border
                  ${activeTag === tag 
                    ? 'bg-secondary/20 border-secondary text-secondary shadow-[0_0_10px_rgba(59,130,246,0.2)]' 
                    : 'bg-white/5 border-white/10 text-white/40 hover:text-white/70 hover:border-white/20'}
                `}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work, i) => (
            <motion.div
              layout
              key={work.title}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: 'circOut' }}
              className="group relative h-72 rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-primary/50 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-colors duration-500 z-10 pointer-events-none" />
              
              <motion.img 
                src={work.image} 
                alt={work.title}
                whileHover={{ scale: 1.15, rotate: -1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-20" />

              <div className="absolute inset-0 z-30 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-4">
                  <div className="flex gap-2 mb-2">
                    {work.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-bold px-2 py-0.5 bg-white/10 rounded-full border border-white/10 uppercase tracking-wider text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
                    {work.category}
                  </p>
                </div>

                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <a 
                    href={work.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-dark py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-[2px] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
                  >
                    View Project <ExternalLink size={14} />
                  </a>
                  <button className="w-11 h-11 flex items-center justify-center bg-white/10 text-white rounded-xl hover:bg-white hover:text-dark transition-all border border-white/10">
                    <Search size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredWorks.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full py-20 text-center text-white/20 italic"
          >
            No projects found matching these criteria.
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
