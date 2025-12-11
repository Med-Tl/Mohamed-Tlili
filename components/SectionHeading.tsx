import React from 'react';

interface Props {
  title: string;
  subtitle: string;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-2">
        {subtitle}
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent rounded-full"></span>
      </h3>
    </div>
  );
};

export default SectionHeading;