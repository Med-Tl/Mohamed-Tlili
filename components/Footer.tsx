import React from 'react';
import { Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-slate-800 bg-primary relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full bg-accent/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center mb-12 border-b border-slate-800 pb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#" className="flex items-center gap-2 font-bold text-xl text-white group justify-center md:justify-start">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-accent/50 transition-all">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <span className="tracking-tight text-lg">TM.<span className="text-accent">DevOps</span></span>
            </a>
            <p className="text-slate-500 mt-4 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Building scalable cloud infrastructure and automating the future, one pipeline at a time.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
            {['About', 'Certifications', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors hover:underline decoration-accent decoration-2 underline-offset-4"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social / Connect */}
          <div className="text-center md:text-right">
             <p className="text-slate-400 text-sm mb-4">DevOps Engineer | Cloud Infrastructure | Network Specialist</p>
             <a href="#contact" className="inline-block px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-full transition-colors border border-slate-700">
               Get In Touch
             </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Tlili Mohamed. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Built with</span>
            <span className="text-cyan-400 font-semibold" title="React">React</span>
            <span>and</span>
            <span className="text-sky-400 font-semibold" title="Tailwind CSS">Tailwind</span>
            <span>powered by</span>
            <span className="text-white font-bold">Tlili Mohamed</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;