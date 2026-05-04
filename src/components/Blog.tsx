import SectionWrapper from './SectionWrapper';
import { ArrowUpRight, Clock, ChevronLeft, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const posts = [
  {
    id: 1,
    date: 'April 20, 2024',
    title: 'Future of Frontend Development',
    category: 'Tech',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
    content: "The landscape of frontend development is shifting faster than ever. With the rise of AI-driven tools, the role of a developer is evolving from writing boilerplate to architecting complex systems. We're seeing a convergence of design and development, where tools like dManifestor-style portfolio frameworks bridge the gap between creative vision and functional reality.\n\nKey trends to watch include:\n- Native CSS Container Queries\n- AI Component Generation\n- Edge-side rendering for ultra-fast performance\n\nStaying relevant means embracing these tools rather than fearing them.",
  },
  {
    id: 2,
    date: 'April 12, 2024',
    title: 'Design Systems in 2024',
    category: 'Design',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?auto=format&fit=crop&q=80&w=600',
    content: "Design systems are no longer just for big tech companies. In 2024, modular components and standardized tokens are essential for scaling any digital product. The focus has shifted from 'just a UI kit' to a 'living documentation' that connects the entire product lifecycle.\n\nA great design system is not just about libraries; it's about the developer experience (DX) and the speed of delivery without compromising quality.",
  },
  {
    id: 3,
    date: 'March 28, 2024',
    title: 'Minimalism in UI/UX',
    category: 'Creativity',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1454165833767-130d24f0f622?auto=format&fit=crop&q=80&w=600',
    content: "Simplicity is the ultimate sophistication. In an era of notification fatigue, users crave interfaces that get out of the way. Minimalism isn't just about white space; it's about purposeful subtraction. Every pixel must earn its right to exist.",
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

  return (
    <SectionWrapper title="Latest Blog">
      <AnimatePresence mode="wait">
        {!selectedPost ? (
          <motion.div 
            key="list"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12"
          >
            {posts.map((post, i) => (
              <motion.div 
                key={post.id} 
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedPost(post)}
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
                
                <div className="flex items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest font-bold mb-3">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-xl font-display font-bold text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                    {post.title}
                  </h4>
                  <div className="text-primary mt-1 shrink-0 transition-all duration-500 group-hover:scale-125 group-hover:rotate-45">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="detail"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="pb-12"
          >
            <button 
              onClick={() => setSelectedPost(null)}
              className="group/back flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-widest mb-8 hover:text-white transition-colors"
            >
              <ChevronLeft size={16} className="group-hover/back:-translate-x-1 transition-transform" /> Back to list
            </button>

            <div className="h-64 md:h-80 rounded-3xl overflow-hidden mb-8 shadow-2xl border border-border">
              <img src={selectedPost.image} className="w-full h-full object-cover" alt={selectedPost.title} />
            </div>

            <div className="flex items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest font-bold mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{selectedPost.category}</span>
              <span>{selectedPost.date}</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 leading-tight">
              {selectedPost.title}
            </h3>

            <div className="prose prose-invert max-w-none">
              <p className="text-white/70 leading-loose whitespace-pre-line text-lg font-light">
                {selectedPost.content}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
