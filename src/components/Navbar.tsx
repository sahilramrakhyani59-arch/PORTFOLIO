import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { navLinks } from '@/data/portfolioData';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-white/[0.06] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#home');
            }}
            className="flex items-center gap-2 group"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 text-white glow-sm group-hover:scale-110 transition-transform">
              <Terminal className="w-5 h-5" />
            </span>
            <span className="font-display font-bold text-white text-lg tracking-tight">
              Sahil<span className="gradient-text">.dev</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#contact');
            }}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/90 to-violet-500/90 text-white text-sm font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-[1.02]"
          >
            Let's Talk
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg glass text-white"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 transition-[width] duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-[#060a18]/80 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 h-full w-72 glass border-l border-white/10 p-6 pt-24 transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500/15 to-violet-500/15 text-white border border-blue-400/20'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
