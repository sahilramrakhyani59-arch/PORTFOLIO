import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { services } from '@/data/portfolioData';

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I Can Build"
          description="From business websites to AI-assisted digital solutions — here's what I bring to the table."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="glass rounded-2xl p-6 glass-hover group relative overflow-hidden h-full">
                {/* Hover gradient glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-blue-500/0 to-violet-500/0 group-hover:from-blue-500/10 group-hover:to-violet-500/10 rounded-full blur-2xl transition-all duration-500" />

                <div className="relative">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-300 mb-4 group-hover:scale-110 group-hover:text-violet-300 transition-all duration-300">
                    <service.icon className="w-6 h-6" />
                  </span>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
