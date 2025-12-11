import React from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '../data';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-highlight/5 blur-[120px] rounded-full -z-10"></div>
      
      <SectionHeading title="Featured Projects" subtitle="What I've Built" />
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {projectsData.map((project, index) => (
          <div key={index} className="group relative">
            {/* Card Background glow on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-highlight rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500"></div>
            
            <div className="relative h-full glass-card rounded-2xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1 bg-slate-900/40">
              {/* Top Accent Line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-slate-800 to-slate-700 group-hover:from-accent group-hover:to-highlight transition-all duration-500"></div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-800/80 rounded-xl text-highlight border border-slate-700/50 shadow-inner group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
                    <Layers className="w-6 h-6" />
                  </div>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-white p-2 hover:bg-slate-800 rounded-full transition-all"
                      title="View Project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight"></span>
                  {project.company}
                </div>
                
                <p className="text-slate-400 mb-8 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800/50 text-slate-300 border border-slate-700 group-hover:border-slate-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.link && (
                    <div className="pt-6 border-t border-slate-800/50">
                       <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex text-sm font-bold text-highlight hover:text-white items-center gap-2 transition-colors group-hover:gap-3">
                         View Case Study <ArrowUpRight className="w-4 h-4" />
                       </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;