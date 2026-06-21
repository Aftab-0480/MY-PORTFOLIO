import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  // Sort featured architectures to appear first
  const sortedProjects = [...projectsData].sort((a, b) => b.featured - a.featured);

  if (sortedProjects.length === 0) {
    return (
      /* FIX: Swapped to bg-transparent to preserve the seamless volcanic dark stone flow */
      <section id="projects" className="py-24 bg-transparent text-stone-200 transition-colors relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-4xl font-serif font-normal text-white tracking-tight">Selected Works</h2>
            <p className="mt-2 text-stone-400 text-sm">A collection of production-ready architectures and builds.</p>
          </div>
          {/* Empty state box styled as a dark mineral block with crystalline dashed outlines */}
          <div className="mt-16 text-center py-12 bg-[#1a1d20]/90 rounded-2xl border border-dashed border-white/10 backdrop-blur-md shadow-xl">
            <p className="text-stone-400 font-normal max-w-md mx-auto px-4 text-sm">
              Projects coming soon. Currently building exciting applications and learning new technologies.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    /* FIX: Swapped to bg-transparent to preserve the seamless volcanic dark stone flow */
    <section id="projects" className="py-24 bg-transparent text-stone-200 transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Simple Elegant Header matching About header typography rules */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-normal text-white tracking-tight">
            Selected Works
          </h2>
          <p className="mt-3 text-stone-400 text-sm leading-relaxed font-normal">
            Architecting high-performance systems and intuitive user interfaces.
          </p>
        </div>

        {/* Grid Container Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {sortedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 18, delay: index * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex w-full h-full"
            >
              {/* Card structural masonry block featuring the signature white/10 low opacity fissure borders */}
              <div className="w-full flex flex-col bg-[#1a1d20]/90 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md hover:border-white/20 transition-all overflow-hidden">
                <ProjectCard project={project} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}