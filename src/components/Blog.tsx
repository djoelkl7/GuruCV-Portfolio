import SectionWrapper from './SectionWrapper';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

const posts = [
  {
    date: 'April 20, 2024',
    title: 'Future of Frontend Development',
    category: 'Tech',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
  },
  {
    date: 'April 12, 2024',
    title: 'Design Systems in 2024',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?auto=format&fit=crop&q=80&w=600',
  },
];

export default function Blog() {
  return (
    <SectionWrapper title="Latest Blog">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group cursor-pointer bg-white/5 border border-border p-4 rounded-3xl hover:bg-white/[0.08] transition-colors"
          >
            <div className="h-48 rounded-2xl overflow-hidden mb-5 relative shadow-lg">
              <motion.img 
                src={post.image} 
                alt={post.title}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                {post.category}
              </div>
            </div>
            <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-2 block">{post.date}</span>
            <div className="flex items-start justify-between gap-4">
              <h4 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                {post.title}
              </h4>
              <motion.div 
                className="text-primary mt-1 shrink-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <ArrowUpRight size={20} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
