import SectionWrapper from './SectionWrapper';
import { Code, Palette, Search, Megaphone } from 'lucide-react';

const services = [
  {
    title: 'Web Design',
    description: 'Modern and mobile-ready website that will help you reach all of your marketing.',
    icon: Palette,
  },
  {
    title: 'Web Development',
    description: 'Custom web development with a focus on performance and accessibility.',
    icon: Code,
  },
  {
    title: 'SEO Marketing',
    description: 'Search engine optimization that will help you grow your audience.',
    icon: Search,
  },
  {
    title: 'Advertising',
    description: 'Digital advertising campaigns that focused on conversion and growth.',
    icon: Megaphone,
  },
];

export default function About() {
  return (
    <SectionWrapper 
      title="About Me"
      subtitle="I am a developer from Minneapolis, MN, looking to create functional and modern web experiences."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4 text-white/70 text-sm leading-relaxed">
          <p>
            Hello! I'm DDmGurU. I'm a passionate Full Stack Developer with 5+ years of experience 
            creating web applications that are both beautiful and efficient.
          </p>
          <p>
            My journey into web development started when I was in college, where I fell in love with 
            the intersection of code and design. Since then, I've worked with startups and established 
            companies to bring their visions to life.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 border border-border p-4 rounded-xl">
            <span className="text-primary font-bold text-lg block">5+</span>
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Years Exp.</span>
          </div>
          <div className="bg-white/5 border border-border p-4 rounded-xl">
            <span className="text-primary font-bold text-lg block">80+</span>
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Projects</span>
          </div>
          <div className="bg-white/5 border border-border p-4 rounded-xl">
            <span className="text-primary font-bold text-lg block">15+</span>
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Clients</span>
          </div>
          <div className="bg-white/5 border border-border p-4 rounded-xl">
            <span className="text-primary font-bold text-lg block">12</span>
            <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Awards</span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-display font-medium mb-8">My Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div key={i} className="group relative bg-white/5 border border-border p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon size={24} />
              </div>
              <h4 className="text-lg font-medium mb-2">{service.title}</h4>
              <p className="text-white/40 text-xs leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
