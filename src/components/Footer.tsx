import { Terminal, Heart, ArrowUp } from 'lucide-react';
import { navLinks, socialLinks } from '@/data/portfolioData';

export function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/5 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 text-white glow-sm">
                <Terminal className="w-5 h-5" />
              </span>
              <span className="font-display font-bold text-white text-lg">
                Sahil<span className="gradient-text">.dev</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Computer Science Engineering Student & Aspiring Software Engineer,
              building practical digital solutions with modern tools.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-slate-400 hover:text-blue-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm mb-4 uppercase tracking-wide">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-10 h-10 rounded-lg glass text-slate-400 hover:text-white hover:border-blue-400/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-slate-500 text-sm">
              © 2026 Sahil Ramrakhyani
            </p>
            <p className="text-slate-600 text-xs mt-1 flex items-center gap-1.5 justify-center sm:justify-start">
              Built with code, creativity & AI.
              <Heart className="w-3 h-3 text-violet-500/60" />
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
          >
            Back to top
            <span className="flex items-center justify-center w-8 h-8 rounded-lg glass group-hover:border-blue-400/30 transition-all">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
