import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-slate-800 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 text-sm mb-2">
          &copy; {currentYear} Tlili Mohamed. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs">
          DevOps Engineer | Cloud Infrastructure | Network Specialist
        </p>
      </div>
    </footer>
  );
};

export default Footer;