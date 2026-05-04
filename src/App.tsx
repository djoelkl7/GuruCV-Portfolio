import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import ProfileCard from './components/ProfileCard';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Resume from './components/Resume';
import Works from './components/Works';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { SectionId } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about': return <About />;
      case 'resume': return <Resume />;
      case 'works': return <Works />;
      case 'blog': return <Blog />;
      case 'contact': return <Contact />;
      default: return <About />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 lg:p-0 overflow-x-hidden">
      {/* Background blobs for depth */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-secondary/5 blur-[150px] rounded-full animate-pulse [animation-delay:4s]" />
      </div>

      <main className="w-full max-w-[1100px] h-full lg:h-[600px] flex flex-col lg:flex-row relative z-10 gap-2">
        {/* Navigation Sidebar */}
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={(id) => setActiveSection(id)} 
        />

        {/* Global Wrapper (Desktop Viewport Style) */}
        <div className="flex flex-col lg:flex-row w-full h-full gap-2 lg:gap-1">
          {/* Static Profile Section */}
          <ProfileCard onHireMe={() => setActiveSection('contact')} />

          {/* Dynamic Content Section */}
          <div className="flex-1 bg-surface rounded-3xl border border-border shadow-2xl relative overflow-hidden h-[600px] lg:h-full">
            <AnimatePresence mode="wait">
              <div key={activeSection} className="h-full">
                {renderSection()}
              </div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Credit Footer */}
      <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-white/20 uppercase tracking-[2px] pointer-events-none">
        © All Rights Reserved DDmGurU
      </footer>
    </div>
  );
}
