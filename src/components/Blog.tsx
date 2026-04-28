import SectionWrapper from './SectionWrapper';

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
          <div key={i} className="group cursor-pointer">
            <div className="h-48 rounded-2xl overflow-hidden mb-4 relative">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary text-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {post.category}
              </div>
            </div>
            <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-2 block">{post.date}</span>
            <h4 className="text-lg font-display font-medium group-hover:text-primary transition-colors leading-tight">
              {post.title}
            </h4>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
