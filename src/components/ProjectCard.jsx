import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group relative flex flex-col h-full bg-transparent overflow-hidden transition-all ${
        project.featured ? 'shadow-2xl ring-1 ring-white/20' : 'shadow-md'
      }`}
    >
      {/* Image Block Canvas Area */}
      <div className="relative overflow-hidden aspect-video w-full bg-[#121416]/50">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        {project.featured && (
          /* Featured Badge: Clean crisp white block with dark code-style text layout */
          <span className="absolute top-3 left-3 bg-white text-black text-[10px] font-mono font-bold px-2.5 py-1 rounded shadow-md tracking-wider uppercase">
            Featured Asset
          </span>
        )}
      </div>

      {/* Meta Content Area */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-stone-300 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-stone-400 leading-relaxed flex-grow font-normal">
          {project.description}
        </p>

        {/* Tech Stack Badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs bg-[#121416]/80 text-stone-300 px-2.5 py-1 rounded-md border border-white/5 font-mono tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom Action Pathway Links */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center space-x-5">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-stone-400 hover:text-white transition-colors"
            >
              <FaGithub size={15} /> <span>Code base</span>
            </a>
          )}
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-stone-400 hover:text-white transition-colors"
            >
              <FaExternalLinkAlt size={13} /> <span>Live Site</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}