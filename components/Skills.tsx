import React from 'react';
import SectionHeading from './SectionHeading';
import { skillsData } from '../data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-10">
      <SectionHeading title="Technical Arsenal" subtitle="My Skills" />
      
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {skillsData.map((category, index) => (
          <div key={index} className="glass-card rounded-xl p-8 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-10 h-1 bg-gradient-to-r from-accent to-highlight rounded-full"></span>
              {category.title}
            </h3>
            
            <div className="space-y-6">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      {skill.logo ? (
                        <div className="w-8 h-8 p-1 bg-slate-800/80 rounded-lg flex items-center justify-center border border-slate-700 group-hover:border-accent/50 transition-colors">
                            <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-slate-800 rounded-lg"></div>
                      )}
                      <span className="text-slate-200 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-highlight text-sm font-bold bg-slate-900/50 px-2 py-1 rounded">{skill.percentage}%</span>
                  </div>
                  
                  <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                    <div 
                      className="bg-gradient-to-r from-accent to-highlight h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(99,102,241,0.4)]" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;