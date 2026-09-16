import Background3D from '@/components/Background3D/Background3D';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Services from '@/components/Services/Services';
import Portfolio from '@/components/Portfolio/Portfolio';
import Experience from '@/components/Experience/Experience';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#08090b] text-zinc-100 overflow-x-hidden">
      <Background3D />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Sticky Sidebar Column */}
          <div className="lg:col-span-4">
            <Sidebar />
          </div>

          {/* Right Scrollable Content Column */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <Header />
            <About />
            <Skills />
            <Services />
            <Portfolio />
            <Experience />
            <Testimonials />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
