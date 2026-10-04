import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { skills } from '@/data/portfolioData';

export function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          description="Technologies and tools I work with to bring ideas to life."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 60}>
              <div className="glass rounded-xl p-6 glass-hover group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-300 group-hover:scale-110 group-hover:text-violet-300 transition-all duration-300">
                      <skill.icon className="w-5 h-5" />
                    </span>
                    <span className="font-medium text-white text-base">{skill.name}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 tabular-nums">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-violet-400 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 animate-shimmer rounded-full" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
