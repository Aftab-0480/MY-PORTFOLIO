import { motion } from 'framer-motion';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    /* FIX: Changed bg-[#121416] to bg-transparent so the global dark stone 
       fracture texture flows seamlessly down from the About section without any breaks.
    */
    <section id="education" className="py-24 bg-transparent text-stone-200 transition-colors relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title: Premium high-contrast serif typography matching the brand header framework */}
        <h2 className="text-4xl font-serif font-normal text-center text-white tracking-tight">
          Education History
        </h2>

        {/* Timeline Line: Re-crafted as a subtle quartz structural track via white/10 color rules */}
        <div className="mt-16 relative border-l-2 border-white/10 ml-4 sm:ml-32">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="mb-12 last:mb-0 pl-8 relative"
            >
              {/* Timeline Bullet Node: Pure white mineral ring popping off the dark canvas track */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white ring-4 ring-[#121416]" />
              
              {/* Year Stamp (Desktop Left Position): Wrapped inside crisp crystalline blocks */}
              <div className="absolute left-[-140px] top-1 hidden sm:block text-right w-28">
                <span className="text-sm font-semibold tracking-wide text-white bg-[#1a1d20] border border-white/10 px-2.5 py-1 rounded-md shadow-md">
                  {item.year}
                </span>
              </div>

              {/* Main Content Cards: Dense stone masonry blocks featuring low opacity white borders */}
              <div className="p-6 bg-[#1a1d20]/90 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
                
                {/* Year Stamp (Mobile Adaptive Position) */}
                <span className="inline-block sm:hidden mb-2 text-xs font-semibold text-white bg-[#121416] border border-white/10 px-2.5 py-0.5 rounded-md">
                  {item.year}
                </span>
                
                <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-sm font-semibold text-stone-300 mt-1">{item.institution}</p>
                <p className="text-sm text-stone-400 mt-0.5 font-normal">{item.subtitle}</p>
                
                {/* Details / Grade Tags: Styled as flat secondary chips that blend into the deep stone */}
                {item.details && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.details.map((detail) => (
                      <span 
                        key={detail} 
                        className="text-xs bg-[#121416]/90 border border-white/5 text-stone-300 px-2.5 py-1 rounded-md tracking-wide"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}