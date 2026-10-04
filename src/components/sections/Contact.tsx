import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { socialLinks } from '@/data/portfolioData';

type Status = 'idle' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus('error');
      return;
    }
    // Simulate successful submission — wire to a real backend later.
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-200 text-sm placeholder-slate-500 focus:outline-none focus:border-blue-400/40 focus:ring-1 focus:ring-blue-400/20 transition-all';

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/3 w-72 h-72 bg-violet-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          description="Have a project, opportunity or just want to say hi? I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: contact info */}
          <Reveal className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 h-full flex flex-col">
              <h3 className="font-display font-semibold text-white text-xl mb-2">
                Get in Touch
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Whether it's an internship opportunity, a collaboration or a
                question, feel free to reach out. I respond as quickly as I can.
              </p>

              {/* Social links */}
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3.5 rounded-xl glass glass-hover group"
                    >
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-300 group-hover:scale-110 group-hover:text-violet-300 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-auto pt-8">
                <div className="glass rounded-xl p-4 text-center">
                  <p className="text-xs text-slate-500">
                    Currently available for internships & project collaborations
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                    <span className="text-xs text-green-400 font-medium">Open to opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={100} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-2 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me more..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle2 className="w-4 h-4" />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  Please fill in all fields before sending.
                </div>
              )}

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white font-medium text-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:scale-[1.01] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060a18]"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
