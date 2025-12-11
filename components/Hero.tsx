import React from 'react';
import { Github, Linkedin, Mail, FileText, Globe, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-highlight/20 rounded-full blur-[100px] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-700/50 backdrop-blur-md shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-slate-300 text-xs font-semibold tracking-wide uppercase">Open to Work</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <br />
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-400 font-light">
                DevOps Engineer <span className="text-highlight">&</span> Cloud Architect
              </h2>
            </div>
            
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accentHover text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] flex items-center justify-center gap-2 group"
              >
                Let's Talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={personalInfo.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-medium rounded-xl transition-all border border-slate-700 hover:border-slate-500 backdrop-blur-md flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Resume
              </a>
            </div>
            
            <div className="pt-4 flex items-center gap-4">
                <SocialLink href={`https://linkedin.com/in/${personalInfo.linkedin}/`} icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                <SocialLink href={`https://github.com/${personalInfo.github}`} icon={<Github className="w-5 h-5" />} label="GitHub" />
                <SocialLink href={`https://gitlab.com/${personalInfo.gitlab}`} icon={<Globe className="w-5 h-5" />} label="GitLab" />
                <SocialLink href={`mailto:${personalInfo.email}`} icon={<Mail className="w-5 h-5" />} label="Email" />
            </div>
          </div>

          {/* Right Column: Photo Area */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
             <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] animate-float">
                {/* Glow Effect Behind */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-highlight rounded-[2rem] blur-3xl opacity-20 transform rotate-6 scale-105"></div>
                
                {/* Border Accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] transform -rotate-3 border border-slate-700/50"></div>

                {/* Image Container */}
                <div className="absolute inset-2 bg-slate-900 rounded-[1.7rem] overflow-hidden border border-slate-700/50 shadow-2xl z-10 group">
                   {/* 
                       PLACEHOLDER IMAGE 
                   */}
                   <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" 
                      alt={personalInfo.name} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                   />
                   
                   {/* Overlay Gradient at bottom for text readability if needed */}
                   <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent opacity-80"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700 shadow-xl flex items-center justify-center z-20 animate-bounce">
                  <Globe className="w-10 h-10 text-highlight" />
                </div>
                
                <div className="absolute -bottom-8 -left-4 bg-slate-800/90 backdrop-blur-md px-6 py-3 rounded-xl border border-slate-700 shadow-xl z-20 flex items-center gap-3">
                   <div className="flex -space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse delay-75"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse delay-150"></div>
                   </div>
                   <span className="text-slate-300 font-mono text-sm font-bold">Deploying...</span>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-3 bg-slate-800/80 text-slate-400 hover:text-white hover:bg-accent hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 rounded-lg border border-slate-700 hover:border-accent hover:-translate-y-1"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;