import { GraduationCap, MapPin, Calendar, Code2, Lightbulb, Target } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

const stats = [
  { label: 'Year of Study', value: '3rd Year' },
  { label: 'Graduation', value: '2027' },
  { label: 'Focus Areas', value: 'Web + AI' },
  { label: 'Projects Built', value: '3+' },
];

const focusAreas = [
  { icon: Code2, title: 'Programming', desc: 'Building strong fundamentals in Java, JavaScript and C.' },
  { icon: Lightbulb, title: 'Problem-Solving', desc: 'Approaching challenges with structured, logical thinking.' },
  { icon: Target, title: 'Software Development', desc: 'Turning ideas into functional, real-world applications.' },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Who I Am"
          description="Get to know the person behind the code."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: bio text */}
          <Reveal>
            <div className="glass rounded-2xl p-8 glass-hover">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                I am a passionate Computer Science Engineering student currently
                pursuing my <span className="text-blue-300 font-medium">B.Tech in Computer Science Engineering</span>.
                I am focused on improving my programming, software development and
                problem-solving skills to become a well-rounded software engineer.
              </p>
              <p className="text-slate-400 text-base leading-relaxed mb-8">
                I enjoy turning ideas into functional projects using modern coding
                and AI tools. From web development to IoT-based systems, I love
                building practical technology solutions that solve real problems.
              </p>

              {/* Education card */}
              <div className="glass rounded-xl p-6 border-l-2 border-blue-400/50">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-300 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-white text-lg">
                      B.Tech — Computer Science Engineering
                    </h3>
                    <p className="text-slate-400 text-sm mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      Priyadarshini Bhagwati College of Engineering
                    </p>
                    <p className="text-slate-500 text-sm mt-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      Expected Graduation: 2027
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: stats + focus areas */}
          <div className="space-y-6">
            {/* Stats grid */}
            <Reveal delay={100}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-5 text-center glass-hover">
                    <p className="font-display text-2xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-slate-500 text-xs mt-1 tracking-wide uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Focus areas */}
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={200 + i * 100}>
                <div className="glass rounded-xl p-5 flex items-start gap-4 glass-hover">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-300 shrink-0">
                    <area.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-medium text-white text-base">{area.title}</h3>
                    <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
