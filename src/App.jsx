import React from 'react';
import Hero from './components/Hero';
import Narrative from './components/Narrative';
import Projects from './components/Projects';
import Vision from './components/Vision';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen text-[#ededed] font-sans selection:bg-[#333] selection:text-white relative bg-black">
      
      {/* Top Notch Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Black Base */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Animated Aurora Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#2563eb]/20 rounded-full blur-[130px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#7c3aed]/20 rounded-full blur-[130px] mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-[#4f46e5]/20 rounded-full blur-[140px] mix-blend-screen animate-blob animation-delay-4000"></div>
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-grid-pattern z-0 opacity-100"></div>
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-[#333]/50 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 12 12 17 22 12"></polyline>
              <polyline points="2 17 12 22 22 17"></polyline>
            </svg>
            <span className="font-bold text-lg tracking-tight text-white drop-shadow-md">devlyStacked</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#a1a1aa]">
            <a href="#" className="hover:text-white transition-colors">Overview</a>
            <a href="#projects" className="hover:text-white transition-colors">Products</a>
            <a href="#vision" className="hover:text-white transition-colors">Vision</a>
            <a href="#contact" className="hover:text-white transition-colors">Connect</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 relative z-10 w-full overflow-hidden">
        <Hero />
        <Narrative />
        <Projects />
        <Vision />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-[#555] border-t border-[#333]/50 relative z-10 bg-black/40 backdrop-blur-md">
        <p>© {new Date().getFullYear()} devlyStacked. Engineered for the Enterprise.</p>
      </footer>
    </div>
  );
}

export default App;
