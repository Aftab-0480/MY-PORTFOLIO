import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent text-stone-200 transition-colors relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-serif font-normal text-center text-white tracking-tight">
          Skills Ecosystem
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 bg-[#1a1d20]/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2.5 bg-[#121416] text-white rounded-lg border border-white/5">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-tight">{cat.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill.name} 
                      className="px-3 py-1.5 text-sm font-medium rounded-xl bg-[#121416]/90 text-stone-300 border border-white/5 shadow-inner tracking-wide"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}