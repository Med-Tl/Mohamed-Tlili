import React from 'react';
import SectionHeading from './SectionHeading';
import { certificationsData } from '../data';
import { ShieldCheck, Clock } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-10">
      <SectionHeading title="Certifications" subtitle="Continuous Learning" />
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert, index) => (
          <div 
            key={index} 
            className={`glass-card p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
              cert.status === 'In Progress' 
                ? 'border-yellow-500/30 bg-yellow-500/5' 
                : 'border-slate-800 hover:border-accent/50'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg ${cert.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-accent/10 text-accent'}`}>
                {cert.status === 'In Progress' ? <Clock className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${cert.status === 'In Progress' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-slate-800 text-slate-400'}`}>
                {cert.status}
              </span>
            </div>
            
            <h4 className="text-lg font-bold text-white mb-2 line-clamp-2 min-h-[3.5rem]">
              {cert.name}
            </h4>
            
            <p className="text-sm text-accent mb-4 font-medium">
              {cert.issuer}
            </p>
            
            <div className="text-xs text-slate-500 mb-4 pb-4 border-b border-slate-800/50">
              {cert.date}
            </div>
            
            <p className="text-sm text-slate-400 line-clamp-3">
              {cert.description}
            </p>

            {cert.credentialUrl && (
              <a 
                href={cert.credentialUrl} 
                className="inline-block mt-4 text-xs font-bold text-white hover:text-accent border-b border-transparent hover:border-accent transition-colors"
              >
                Verify Credential
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;