import SectionWrapper from './SectionWrapper';
import { Briefcase, GraduationCap } from 'lucide-react';

const experience = [
  {
    period: '2021 - Present',
    title: 'Senior Web Developer',
    company: 'Pixel Forge Studio',
    description: 'Leading the development of complex React-based enterprise applications.',
  },
  {
    period: '2019 - 2021',
    title: 'Middle Front-end Developer',
    company: 'Creative Agency',
    description: 'Developed interactive user interfaces using modern CSS and JavaScript frameworks.',
  },
];

const education = [
  {
    period: '2015 - 2018',
    title: 'Computer Science',
    company: 'University of Minnesota',
    description: 'Focused on algorithms, data structures, and software engineering principles.',
  },
  {
    period: '2013 - 2015',
    title: 'Graphic Design Course',
    company: 'Design Institute',
    description: 'Studied visual communication, typography, and UI/UX design fundamentals.',
  },
];

export default function Resume() {
  return (
    <SectionWrapper title="Resume">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <Briefcase size={20} />
            </div>
            <h3 className="text-xl font-display font-medium">Experience</h3>
          </div>
          <div className="space-y-8 relative before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border">
            {experience.map((item, i) => (
              <div key={i} className="pl-6 relative">
                <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-surface shadow-[0_0_10px_rgba(120,204,109,0.5)]" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary mb-2 block border border-primary/30 w-fit px-2 py-0.5 rounded">
                  {item.period}
                </span>
                <h4 className="text-base font-semibold text-white/90">{item.title}</h4>
                <p className="text-[11px] text-white/40 mb-2">{item.company}</p>
                <p className="text-xs text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 text-primary rounded-lg">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-xl font-display font-medium">Education</h3>
          </div>
          <div className="space-y-8 relative before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-border">
            {education.map((item, i) => (
              <div key={i} className="pl-6 relative">
                <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-surface shadow-[0_0_10px_rgba(120,204,109,0.5)]" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary mb-2 block border border-primary/30 w-fit px-2 py-0.5 rounded">
                  {item.period}
                </span>
                <h4 className="text-base font-semibold text-white/90">{item.title}</h4>
                <p className="text-[11px] text-white/40 mb-2">{item.company}</p>
                <p className="text-xs text-white/60 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-px bg-border w-full mb-12" />

      {/* Skills */}
      <h3 className="text-xl font-display font-medium mb-8">Technical Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {[
          { name: 'JavaScript / TypeScript', level: 95 },
          { name: 'React / Next.js', level: 90 },
          { name: 'Node.js / Express', level: 85 },
          { name: 'Tailwind CSS', level: 98 },
          { name: 'SQL / NoSQL', level: 80 },
          { name: 'Framer Motion', level: 88 },
        ].map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-2">
              <span className="text-xs font-semibold text-white/80">{skill.name}</span>
              <span className="text-[10px] text-white/40">{skill.level}%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-1000 ease-out" 
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
