import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import BackgroundShapes from './components/BackgroundShapes';
import Loader from './components/Loader';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && <Loader />}
      
      {/* - Kept bg-transparent so the global dark texture flows through.
        - Changed base text color to high-contrast white/silver (text-stone-200) to stand out against the dark stone background.
        - Adjusted selection highlighting to match the sharp monochrome vibe.
      */}
      <div className="bg-transparent text-stone-200 min-h-screen relative font-sans antialiased selection:bg-white selection:text-black">
        <BackgroundShapes />
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}