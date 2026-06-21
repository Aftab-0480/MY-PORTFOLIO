import { socialLinks } from '../data/portfolioData';

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    /* FIX: Swapped out solid slate colors for bg-transparent.
       Uses a subtle white/10 top border line to separate the content naturally, 
       just like a razor-sharp crystalline fissure line.
    */
    <footer className="bg-transparent border-t border-white/10 transition-colors py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          {/* Typography updated to follow our standard premium font styles */}
          <span className="text-xl font-serif font-normal text-white tracking-tight">Aftab Alam</span>
          <p className="text-xs text-stone-400 mt-1">Designed and Developed by Aftab Alam</p>
        </div>

        {/* Navigation Links: Set to a readable light stone tone with bright white hover states */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-stone-400">
          {['home', 'about', 'education', 'skills', 'projects', 'contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item)} 
              className="capitalize hover:text-white transition-colors duration-200"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Social Icons: Shift cleanly to bright white highlights on hover */}
        <div className="flex space-x-4">
          {socialLinks.slice(0, 5).map((social) => {
            const Icon = social.icon;
            return (
              <a 
                key={social.name} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-stone-400 hover:text-white transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
      <p className="text-center text-[10px] text-stone-500 mt-8 tracking-wider">
        Copyright © 2026. All operations integrated.
      </p>
    </footer>
  );
}