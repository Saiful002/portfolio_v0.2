import Background3D from '@/components/Background3D/Background3D';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Services from '@/components/Services/Services';
import Portfolio from '@/components/Portfolio/Portfolio';
import Experience from '@/components/Experience/Experience';
import Education from '@/components/Education/Education';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import ScrollProgressButton from '@/components/ScrollProgress/ScrollProgressButton';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#08090b] text-zinc-100">
      <Background3D />
      <ScrollProgressButton />
      <div className="relative z-10 max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: STICKY POSITIONING */}
          <div className="lg:col-span-4 lg:sticky lg:top-8 self-start z-30">
            <Sidebar />
          </div>

          {/* Right Column: SCROLLABLE SECTIONS */}
          <div className="lg:col-span-8 flex flex-col gap-8 sm:gap-10">
            <Header />
            <About />
            <Skills />
            <Services />
            <Portfolio />
            <Experience />
            <Education />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
