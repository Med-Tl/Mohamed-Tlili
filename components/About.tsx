import React from 'react';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data';
import { GraduationCap, Award, Server, Network } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-10">
      <SectionHeading title="About Me" subtitle="Who I Am" />
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <Server className="w-32 h-32 text-accent" />
             </div>
             
             <p className="text-slate-300 leading-relaxed mb-6 text-lg">
               {personalInfo.aboutLong}
             </p>

             <div className="grid grid-cols-2 gap-4 mt-8">
                <InfoCard 
                  icon={<Server className="w-5 h-5 text-accent" />} 
                  title="DevOps" 
                  desc="CI/CD & Automation" 
                />
                <InfoCard 
                  icon={<Network className="w-5 h-5 text-accent" />} 
                  title="Network" 
                  desc="Enterprise Design" 
                />
             </div>
          </div>
        </div>

        <div className="space-y-8">
           <h4 className="text-2xl font-bold text-white flex items-center gap-3">
             <GraduationCap className="w-8 h-8 text-accent" />
             Education
           </h4>
           
           <div className="glass-card p-6 rounded-xl border-l-4 border-l-accent hover:bg-slate-800/80 transition-colors">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h5 className="text-xl font-bold text-white">Bachelor of IT in Computer System Networks</h5>
                <span className="text-sm text-slate-400 bg-slate-800 px-3 py-1 rounded-full mt-2 sm:mt-0 inline-block">2021 – 2025</span>
              </div>
              <p className="text-accent mb-2">ISET Kairouan - Higher Institute of Technological Studies</p>
              <div className="flex items-center gap-2 mb-4">
                 <span className="text-sm text-slate-400">Kairouan, Tunisia</span>
              </div>
              
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span>Graduated with Honor: <strong>18/20 Average</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                  <span>Specialization: Network Engineering & DevOps</span>
                </li>
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
    <div className="mb-2">{icon}</div>
    <h4 className="font-bold text-white">{title}</h4>
    <p className="text-xs text-slate-400">{desc}</p>
  </div>
);

export default About;