import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#1a1d20]/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <span onClick={() => scrollTo('home')} className="text-2xl font-serif font-bold text-white cursor-pointer hover:text-emerald-400 transition-colors">Aftab Alam</span>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="capitalize text-sm font-semibold text-stone-400 hover:text-emerald-400 transition-colors">
              {item}
            </button>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden bg-[#1a1d20] border-b border-white/5 overflow-hidden">
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <button key={item} onClick={() => scrollTo(item)} className="capitalize text-lg font-semibold text-stone-300 hover:text-emerald-400 block w-full text-left">
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}