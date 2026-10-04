import { Github, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/data/portfolioData';

export function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="A selection of projects I've built — from compliance software to IoT systems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 100}>
              <article className="glass rounded-2xl overflow-hidden glass-hover group flex flex-col h-full">
                {/* Visual header */}
                <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-white/30 group-hover:text-white/50 group-hover:scale-110 transition-all duration-500" />
                  </div>
                  {/* Glowing accent */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-colors duration-500" />
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-white text-lg mb-2 group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass text-slate-300 text-xs font-medium hover:text-white hover:border-blue-400/30 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/80 to-violet-500/80 text-white text-xs font-medium hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
