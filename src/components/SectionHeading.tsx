import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, children }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-14">
      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />
        {eyebrow}
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400" />
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
