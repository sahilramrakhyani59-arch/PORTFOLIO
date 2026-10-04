import { Award, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { certificates } from '@/data/portfolioData';

export function Certificates() {
  return (
    <section id="certificates" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certificates"
          title="Certifications"
          description="A growing collection of certifications. Replace placeholders with your own as you earn them."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <Reveal key={i} delay={i * 100}>
              <article className="glass rounded-2xl p-6 glass-hover group flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/15 text-amber-300 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6" />
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{cert.date}</span>
                </div>

                <h3 className="font-display font-semibold text-white text-base mb-1 group-hover:text-amber-200 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-sm mb-5">{cert.organization}</p>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-blue-300 hover:text-blue-200 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
