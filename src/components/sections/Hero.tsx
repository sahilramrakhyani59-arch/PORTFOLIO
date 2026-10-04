import { FolderGit2, Mail, Download, ArrowRight } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';

function CodeVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      {/* Glow orbs */}
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-violet-500/15 to-cyan-500/10 rounded-3xl blur-2xl animate-pulse-glow" />

      {/* Code window */}
      <div className="relative glass rounded-2xl overflow-hidden shadow-2xl glow-blue animate-float">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-400/80" />
          <span className="ml-2 text-xs text-slate-500 font-mono">sahil.tsx</span>
        </div>

        {/* Code body */}
        <div className="p-5 font-mono text-[13px] leading-relaxed">
          <div className="flex gap-3">
            <span className="text-slate-600 select-none text-right shrink-0">1 2 3 4 5 6 7 8 9 10 11 12</span>
            <div className="space-y-0.5 overflow-hidden">
              <div><span className="text-violet-400">const</span> <span className="text-cyan-300">sahil</span> <span className="text-slate-500">=</span> <span className="text-slate-300">{'{'}</span></div>
              <div className="pl-4"><span className="text-blue-300">name</span><span className="text-slate-500">:</span> <span className="text-emerald-300">'Sahil Ramrakhyani'</span><span className="text-slate-500">,</span></div>
              <div className="pl-4"><span className="text-blue-300">role</span><span className="text-slate-500">:</span> <span className="text-emerald-300">'CSE Student'</span><span className="text-slate-500">,</span></div>
              <div className="pl-4"><span className="text-blue-300">year</span><span className="text-slate-500">:</span> <span className="text-orange-300">3</span><span className="text-slate-500">,</span></div>
              <div className="pl-4"><span className="text-blue-300">focus</span><span className="text-slate-500">: [</span></div>
              <div className="pl-8"><span className="text-emerald-300">'web-dev'</span><span className="text-slate-500">,</span> <span className="text-emerald-300">'AI'</span><span className="text-slate-500">,</span></div>
              <div className="pl-8"><span className="text-emerald-300">'software'</span><span className="text-slate-500">],</span></div>
              <div className="pl-4"><span className="text-blue-300">stack</span><span className="text-slate-500">:</span> <span className="text-emerald-300">'Java React JS'</span><span className="text-slate-500">,</span></div>
              <div className="pl-4"><span className="text-violet-400">open</span><span className="text-slate-500">:</span> <span className="text-orange-300">true</span><span className="text-slate-500">,</span></div>
              <div><span className="text-slate-300">{'}'}</span><span className="animate-blink text-blue-400">|</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -left-6 top-1/3 glass rounded-xl px-4 py-2.5 text-xs text-slate-300 font-mono animate-float-slow glow-sm">
        <span className="text-blue-400">●</span> building…
      </div>
      <div className="absolute -right-4 bottom-8 glass rounded-xl px-4 py-2.5 text-xs text-slate-300 font-mono animate-float glow-sm" style={{ animationDelay: '1.5s' }}>
        <span className="text-violet-400">◆</span> AI-assisted
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-violet-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium text-slate-300 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Available for internships & opportunities
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6">
              Hi, I'm{' '}
              <span className="gradient-text text-shadow-glow">Sahil</span>{' '}
              <span className="gradient-text text-shadow-glow">Ramrakhyani</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-medium mb-4">
              Computer Science Engineering Student{' '}
              <span className="text-slate-500">&</span>{' '}
              <span className="gradient-text-cyan">Aspiring Software Engineer</span>
            </p>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              I build websites, software projects and practical digital solutions
              using modern coding and AI-assisted development.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <ButtonLink href="#projects" icon={FolderGit2} variant="primary">
                View My Projects
              </ButtonLink>
              <ButtonLink href="#contact" icon={Mail} variant="secondary">
                Contact Me
              </ButtonLink>
              <ButtonLink
                href="/resume.pdf"
                icon={Download}
                variant="secondary"
                external
              >
                Download Resume
              </ButtonLink>
            </div>
          </div>

          {/* Right: visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <CodeVisual />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="hidden lg:flex flex-col items-center mt-16">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowRight className="w-4 h-4 rotate-90 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
