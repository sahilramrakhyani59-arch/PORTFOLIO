import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { experience } from '@/data/portfolioData';

export function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-[80px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Experience & Education"
          description="My journey through internships and academic learning."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/50 via-violet-400/30 to-transparent sm:-translate-x-px" />

          <div className="space-y-8">
            {experience.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;

              return (
                <Reveal key={i} delay={i * 100}>
                  <div className={`relative flex items-start gap-6 sm:gap-0 ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 z-10">
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 text-white glow-sm">
                        <Icon className="w-5 h-5" />
                      </span>
                    </div>

                    {/* Card */}
                    <div className={`w-full pl-16 sm:w-1/2 sm:pl-0 ${isLeft ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                      <div className="glass rounded-xl p-6 glass-hover">
                        <span className="inline-block text-xs font-medium text-blue-300 mb-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20">
                          {item.period}
                        </span>
                        <h3 className="font-display font-semibold text-white text-lg mb-1">
                          {item.role}
                        </h3>
                        <p className="text-slate-400 text-sm mb-3">{item.organization}</p>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <ul className={`space-y-2 ${isLeft ? 'sm:text-left' : ''}`}>
                          {item.highlights.map((highlight, j) => (
                            <li key={j} className={`flex items-start gap-2 text-sm text-slate-400 ${isLeft ? 'sm:flex-row-reverse sm:text-right' : ''}`}>
                              <span className="text-blue-400 mt-1 shrink-0">▹</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Spacer for the other half */}
                    <div className="hidden sm:block w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
