import { motion } from 'framer-motion';
import { socialLinks } from '../data/portfolioData';

export default function About() {
  return (
    /* Section Canvas: Swapped to a deep volcanic slate (#121416) base.
      Incorporates an absolute dark stone noise filter matrix overlay 
      matching the exact tactile mineral atmosphere of your reference image.
    */
    <section id="about" className="relative py-24 bg-[#121416] overflow-hidden transition-colors duration-500">
      
      {/* Crystalline Vein Texture Simulator Layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='stoneFracture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.015' numOctaves='5' result='noise'/%3E%3CfeComponentTransfer%3E%3CfeFuncR type='linear' slope='3'/%3E%3CfeFuncG type='linear' slope='3'/%3E%3CfeFuncB type='linear' slope='3'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23stoneFracture)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Heading: High-contrast pure white text matching the sharp, brilliant mineral cracks */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-4xl font-serif font-normal text-white tracking-tight drop-shadow-sm"
        >
          About Me
        </motion.h2>
        
        {/* Body Text: Soft silver-grey to maintain editorial readability against the deep dark backdrop */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: 0.1 }} 
          className="mt-6 text-lg text-stone-300 leading-relaxed text-justify sm:text-center font-normal"
        >
          I am Aftab Alam, a Computer Science Engineering student pursuing B.Tech from Indian Institute of Information Technology (IIIT) Bhagalpur. I enjoy building full-stack applications, learning backend technologies, solving Data Structures & Algorithms problems, and continuously improving my software development skills.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ delay: 0.2 }} 
          className="mt-4 text-lg text-stone-300 leading-relaxed text-justify sm:text-center font-normal"
        >
          I am particularly interested in backend development, scalable systems, databases, APIs, and modern web technologies. My goal is to become a skilled software engineer capable of building reliable and impactful products.
        </motion.p>

        {/* Social Link Grid System */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            const isEmail = item.name === 'Email';

            return (
              <motion.a
                key={item.name}
                href={item.url}
                target={isEmail ? '_self' : '_blank'}
                rel={isEmail ? undefined : 'noreferrer'}
                whileHover={{ scale: 1.04, backgroundColor: 'rgba(255, 255, 255, 0.07)' }}
                /* Cards: Restyled to replicate the deep mineral blocks.
                  Uses an ultra-low opacity white border (border-white/10) to mimic the crystalline fissures.
                */
                className="flex flex-col items-center p-4 rounded-xl bg-[#1a1d20]/90 border border-white/10 backdrop-blur-md transition-all text-stone-300 hover:text-white shadow-xl"
              >
                {/* Icons inherit a bright silver base that shifts on hover */}
                <Icon size={24} className="transition-colors duration-300" />
                <span className="mt-2 text-xs font-semibold tracking-wide text-stone-400">{item.name}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}