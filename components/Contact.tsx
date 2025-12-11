import React from 'react';
import SectionHeading from './SectionHeading';
import { Mail, MapPin, Send, Linkedin, Link, Github, Globe } from 'lucide-react';
import { personalInfo } from '../data';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! This is a demo form.");
  };

  return (
    <section id="contact" className="py-10">
      <SectionHeading title="Get In Touch" subtitle="Let's Connect" />
      
      <div className="grid lg:grid-cols-5 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <p className="text-slate-400 text-lg leading-relaxed">
            Ready to collaborate on your next DevOps project? Let's discuss how we can build something amazing together.
          </p>
          
          <div className="space-y-6">
            <ContactItem 
              icon={<Mail className="w-5 h-5" />} 
              label="Email" 
              value={personalInfo.email} 
              href={`mailto:${personalInfo.email}`}
            />
            <ContactItem 
              icon={<Linkedin className="w-5 h-5" />} 
              label="LinkedIn" 
              value={personalInfo.linkedin} 
              href={`https://linkedin.com/in/${personalInfo.linkedin}/`}
            />
             <ContactItem 
              icon={<Github className="w-5 h-5" />} 
              label="GitHub" 
              value={personalInfo.github} 
              href={`https://github.com/${personalInfo.github}`}
            />
            <ContactItem 
              icon={<Globe className="w-5 h-5" />} 
              label="GitLab" 
              value={personalInfo.gitlab} 
              href={`https://gitlab.com/${personalInfo.gitlab}`}
            />
            <ContactItem 
              icon={<Link className="w-5 h-5" />} 
              label="Linktree" 
              value="All Links" 
              href={personalInfo.linktree}
            />
            <ContactItem 
              icon={<MapPin className="w-5 h-5" />} 
              label="Location" 
              value={personalInfo.location} 
            />
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-primary border border-slate-700">
            <h4 className="text-white font-bold mb-2">Open for work</h4>
            <p className="text-slate-400 text-sm">
              I am currently available for freelance projects and full-time positions.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
              <input 
                type="text" 
                id="subject" 
                required
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                required
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-accent hover:bg-accentHover text-primary font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode; label: string; value: string; href?: string }> = ({ icon, label, value, href }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 bg-slate-800 rounded-lg text-accent">
      {icon}
    </div>
    <div>
      <p className="text-xs text-slate-500 font-medium uppercase">{label}</p>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors font-medium">
          {value}
        </a>
      ) : (
        <p className="text-white font-medium">{value}</p>
      )}
    </div>
  </div>
);

export default Contact;