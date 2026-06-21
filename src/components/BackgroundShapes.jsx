import { motion } from 'framer-motion';

export default function BackgroundShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Upper Left Quartz Crystal Glow */}
      <motion.div 
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/[0.02] blur-3xl"
      />
      
      {/* Lower Right Mineral Bed Highlight */}
      <motion.div 
        animate={{ x: [0, -30, 0], y: [0, 60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-white/[0.01] blur-3xl"
      />
    </div>
  );
}