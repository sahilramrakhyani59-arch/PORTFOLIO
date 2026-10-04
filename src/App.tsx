import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Certificates } from '@/components/sections/Certificates';
import { Services } from '@/components/sections/Services';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#060a18] text-slate-200 antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
